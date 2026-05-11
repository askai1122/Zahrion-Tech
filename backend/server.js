require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 5000;
app.set('trust proxy', true);

// ── Security ──────────────────────────────────────────────
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE'],
}));
app.use(express.json());

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
const contactLimiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 5, message: { error: 'Too many requests, please try again later.' } });
app.use(limiter);

const countryNames = typeof Intl.DisplayNames === 'function'
  ? new Intl.DisplayNames(['en'], { type: 'region' })
  : null;

const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  const forwardedIp = Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(',')[0];
  const ip = (
    req.headers['cf-connecting-ip'] ||
    req.headers['x-real-ip'] ||
    forwardedIp ||
    req.ip ||
    req.socket.remoteAddress ||
    ''
  ).trim();

  if (ip === '::1' || ip === '::ffff:127.0.0.1') return '127.0.0.1';
  return ip.replace('::ffff:', '');
};

const isLocalIp = (ip) => ip === '127.0.0.1' || ip === 'localhost' || ip.startsWith('10.') || ip.startsWith('192.168.') || /^172\.(1[6-9]|2\d|3[0-1])\./.test(ip);

const getCountryNameFromHeaders = (req) => {
  const explicit = req.headers['x-country-name'] || req.headers['x-vercel-ip-country-region'];
  if (explicit) return String(explicit);

  const code = req.headers['cf-ipcountry'] || req.headers['x-vercel-ip-country'] || req.headers['x-country-code'];
  if (!code || code === 'XX') return 'Unknown';

  try {
    return countryNames?.of(String(code).toUpperCase()) || String(code).toUpperCase();
  } catch {
    return String(code).toUpperCase();
  }
};

const lookupCountryName = (ip) => new Promise((resolve) => {
  if (!ip || isLocalIp(ip)) return resolve('Localhost');

  const req = http.get(`http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,country`, (res) => {
    let body = '';
    res.on('data', chunk => { body += chunk; });
    res.on('end', () => {
      try {
        const data = JSON.parse(body);
        resolve(data.status === 'success' && data.country ? data.country : 'Unknown');
      } catch {
        resolve('Unknown');
      }
    });
  });

  req.on('error', () => resolve('Unknown'));
  req.setTimeout(1500, () => {
    req.destroy();
    resolve('Unknown');
  });
});

// ── Database ──────────────────────────────────────────────
const db = new sqlite3.Database(path.join(__dirname, 'zahriontech.db'));

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    service TEXT,
    message TEXT NOT NULL,
    ip TEXT,
    read INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS visitors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT,
    country_name TEXT DEFAULT 'Unknown',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
  // seed default admin
  db.run(`INSERT OR IGNORE INTO admin_users (username, password) VALUES ('admin', 'zahriontech2024')`);
});

// ── Email transporter ─────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ── Routes ────────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date() }));

// Track website visitor
app.post('/api/visitors/track', async (req, res) => {
  const ip = getClientIp(req);
  const headerCountry = getCountryNameFromHeaders(req);
  const countryName = headerCountry === 'Unknown' ? await lookupCountryName(ip) : headerCountry;

  db.run(
    `INSERT INTO visitors (ip, country_name) VALUES (?, ?)`,
    [ip, countryName],
    function (err) {
      if (err) return res.status(500).json({ error: 'Database error.' });
      res.json({ success: true, id: this.lastID });
    }
  );
});

// Submit contact form
app.post('/api/contact', contactLimiter, (req, res) => {
  const { name, email, service, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'Name, email and message are required.' });

  const ip = getClientIp(req);

  db.run(
    `INSERT INTO messages (name, email, service, message, ip) VALUES (?, ?, ?, ?, ?)`,
    [name, email, service || '', message, ip],
    function (err) {
      if (err) return res.status(500).json({ error: 'Database error.' });

      // Send email notification (non-blocking)
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
          subject: `New Contact from ${name} – ZahrionTech`,
          html: `<h2>New message from ${name}</h2><p><b>Email:</b> ${email}</p><p><b>Service:</b> ${service}</p><p><b>Message:</b><br>${message}</p>`,
        }).catch(console.error);
      }

      res.json({ success: true, id: this.lastID });
    }
  );
});

// Admin login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  db.get(`SELECT id FROM admin_users WHERE username = ? AND password = ?`, [username, password], (err, row) => {
    if (err || !row) return res.status(401).json({ error: 'Invalid credentials.' });
    res.json({ success: true, token: Buffer.from(`${username}:${Date.now()}`).toString('base64') });
  });
});

// Admin – get messages
app.get('/api/admin/messages', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Unauthorized.' });
  db.all(`SELECT * FROM messages ORDER BY created_at DESC`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Database error.' });
    res.json(rows);
  });
});

// Admin â€“ get visitors
app.get('/api/admin/visitors', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Unauthorized.' });

  const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
  const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 10, 1), 50);
  const offset = (page - 1) * limit;

  db.get(`SELECT COUNT(*) as total FROM visitors`, [], (countErr, countRow) => {
    if (countErr) return res.status(500).json({ error: 'Database error.' });

    db.all(
      `SELECT id, ip, country_name, created_at FROM visitors ORDER BY created_at DESC LIMIT ? OFFSET ?`,
      [limit, offset],
      (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error.' });
        res.json({
          visitors: rows,
          total: countRow.total,
          page,
          limit,
          totalPages: Math.ceil(countRow.total / limit) || 1,
        });
      }
    );
  });
});

// Admin – mark read
app.post('/api/admin/messages/:id/read', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Unauthorized.' });
  db.run(`UPDATE messages SET read = 1 WHERE id = ?`, [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Database error.' });
    res.json({ success: true });
  });
});

// Admin – delete message
app.delete('/api/admin/messages/:id', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Unauthorized.' });
  db.run(`DELETE FROM messages WHERE id = ?`, [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Database error.' });
    res.json({ success: true });
  });
});

// Sitemap
app.get('/sitemap.xml', (req, res) => {
  const base = process.env.FRONTEND_URL || 'https://zahriontech.com';
  res.type('application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${base}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>${base}/about</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>${base}/services</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>${base}/portfolio</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>${base}/contact</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
</urlset>`);
});

// robots.txt
app.get('/robots.txt', (req, res) => {
  const base = process.env.FRONTEND_URL || 'https://zahriontech.com';
  res.type('text/plain');
  res.send(`User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml`);
});

// Serve frontend build from the same backend server
const frontendDist = path.join(__dirname, '..', 'frontend', 'dist');
app.get("/", (req, res) => {
  res.send("ZahrionTech API running 🚀");
});
// app.use(express.static(frontendDist));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(frontendDist, 'index.html'));
// });
app.listen(PORT, () => console.log(`✅ ZahrionTech backend running on port ${PORT}`));
