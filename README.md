# ZahrionTech – Full Stack Software Agency Website

## 🗂️ Project Structure

```
zahriontech/
├── frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/   # Navbar, Footer, PageWrapper, SectionHeading
│   │   ├── pages/        # Home, About, Services, Portfolio, Contact, Admin
│   │   ├── context/      # ThemeContext (dark/light mode)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html        # SEO meta tags, OG, Schema.org
│   ├── vite.config.js
│   └── tailwind.config.js
└── backend/           # Node.js + Express + SQLite
    ├── server.js
    ├── .env.example
    └── package.json
```

---

## 🚀 Local Development

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your email credentials
node server.js
# Runs on http://localhost:5000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
# API calls proxied to :5000 via vite.config.js
```

---

## 🌐 Deploy Frontend to Vercel

1. Push `frontend/` folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Set **Framework Preset** to `Vite`
4. Set **Root Directory** to `frontend`
5. Add Environment Variable:
   - `VITE_API_URL` = your Render backend URL (e.g. `https://zahriontech-api.onrender.com`)
6. Click **Deploy**

> **Update API calls:** In Contact.jsx and Admin.jsx, replace `/api/...` with `${import.meta.env.VITE_API_URL}/api/...` for production.

---

## ☁️ Deploy Backend to Render

1. Push `backend/` folder to a GitHub repo (or monorepo)
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your repo, set **Root Directory** to `backend`
4. Set **Build Command**: `npm install`
5. Set **Start Command**: `node server.js`
6. Add Environment Variables:
   ```
   PORT=5000
   FRONTEND_URL=https://your-vercel-app.vercel.app
   EMAIL_SERVICE=gmail
   EMAIL_USER=your@gmail.com
   EMAIL_PASS=your_gmail_app_password
   NOTIFY_EMAIL=notify@yourdomain.com
   ```
7. Click **Create Web Service**

> **Gmail App Password:** Go to Google Account → Security → 2FA → App Passwords → generate one for "Mail"

---

## 📧 Email Setup (Nodemailer)

The backend uses Nodemailer with Gmail. You need:
1. Enable 2-Factor Authentication on your Gmail
2. Generate an **App Password** (not your regular password)
3. Use that App Password as `EMAIL_PASS` in your `.env`

---

## 🔐 Admin Dashboard

- URL: `/admin`
- Default credentials: `admin` / `zahriontech2024`
- **Change the password** in `server.js` before deploying:
  ```js
  db.run(`INSERT OR IGNORE INTO admin_users (username, password) VALUES ('admin', 'YOUR_SECURE_PASSWORD')`)
  ```

---

## 🔍 SEO Features

- ✅ Title & meta description on every page (react-helmet-async)
- ✅ Open Graph tags (og:title, og:description, og:image)
- ✅ Twitter Card meta tags
- ✅ Schema.org JSON-LD (ProfessionalService)
- ✅ Sitemap.xml at `/sitemap.xml`
- ✅ Robots.txt at `/robots.txt`
- ✅ Semantic HTML structure
- ✅ Clean URL routing (React Router)

---

## 📊 Google Analytics

Add your GA4 tracking ID to `frontend/index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18, Vite, Tailwind CSS        |
| Animations | Framer Motion                       |
| Routing    | React Router v6                     |
| SEO        | react-helmet-async                  |
| Backend    | Node.js, Express                    |
| Database   | SQLite (sqlite3)                    |
| Email      | Nodemailer                          |
| Security   | Helmet, express-rate-limit, CORS    |
| Deploy FE  | Vercel                              |
| Deploy BE  | Render                              |

---

## 📝 Customization Checklist

- [ ] Replace `zahriontech.com` in `index.html` and `server.js` with your real domain
- [ ] Add your real OG image at `/public/og-image.png`
- [ ] Update team members in `About.jsx`
- [ ] Add real portfolio projects in `Portfolio.jsx`
- [ ] Update contact email in `Contact.jsx` info cards
- [ ] Change admin password in `server.js`
- [ ] Add Google Analytics ID in `index.html`
- [ ] Add your social media links in `Footer.jsx`
