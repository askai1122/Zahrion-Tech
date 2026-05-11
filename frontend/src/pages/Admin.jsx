import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Lock, Mail, Trash2, Eye, RefreshCw, LogOut, MessageSquare, CheckCircle2, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import toast from 'react-hot-toast'
import PageWrapper from '../components/PageWrapper'

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem('zt_admin'))
  const [creds, setCreds] = useState({ username: '', password: '' })
  const [messages, setMessages] = useState([])
  const [visitors, setVisitors] = useState([])
  const [visitorPage, setVisitorPage] = useState(1)
  const [visitorMeta, setVisitorMeta] = useState({ total: 0, totalPages: 1, limit: 10 })
  const [loading, setLoading] = useState(false)
  const [visitorsLoading, setVisitorsLoading] = useState(false)
  const [selected, setSelected] = useState(null)

  useEffect(() => { if (token) fetchMessages() }, [token])
  useEffect(() => { if (token) fetchVisitors(visitorPage) }, [token, visitorPage])

  const login = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creds),
      })
      const data = await res.json()
      if (data.success) {
        localStorage.setItem('zt_admin', data.token)
        setToken(data.token)
        toast.success('Welcome back!')
      } else {
        toast.error('Invalid credentials.')
      }
    } catch { toast.error('Network error.') }
    finally { setLoading(false) }
  }

  const fetchMessages = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/messages', { headers: { Authorization: token } })
      const data = await res.json()
      setMessages(Array.isArray(data) ? data : [])
    } catch { toast.error('Failed to load messages.') }
    finally { setLoading(false) }
  }

  const fetchVisitors = async (page = visitorPage) => {
    setVisitorsLoading(true)
    try {
      const res = await fetch(`/api/admin/visitors?page=${page}&limit=10`, { headers: { Authorization: token } })
      const data = await res.json()
      setVisitors(Array.isArray(data.visitors) ? data.visitors : [])
      setVisitorMeta({
        total: data.total || 0,
        totalPages: data.totalPages || 1,
        limit: data.limit || 10,
      })
    } catch { toast.error('Failed to load visitors.') }
    finally { setVisitorsLoading(false) }
  }

  const markRead = async id => {
    await fetch(`/api/admin/messages/${id}/read`, { method: 'POST', headers: { Authorization: token } })
    setMessages(ms => ms.map(m => m.id === id ? { ...m, read: 1 } : m))
  }

  const deleteMsg = async id => {
    if (!confirm('Delete this message?')) return
    await fetch(`/api/admin/messages/${id}`, { method: 'DELETE', headers: { Authorization: token } })
    setMessages(ms => ms.filter(m => m.id !== id))
    if (selected?.id === id) setSelected(null)
    toast.success('Deleted.')
  }

  const refreshAdmin = () => {
    fetchMessages()
    fetchVisitors(visitorPage)
  }

  const logout = () => { localStorage.removeItem('zt_admin'); setToken(null); setMessages([]); setVisitors([]) }

  const unread = messages.filter(m => !m.read).length

  if (!token) return (
    <PageWrapper>
      <Helmet><title>Admin – ZahrionTech</title></Helmet>
      <div className="min-h-screen flex items-center justify-center pt-16 grid-pattern">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-2xl p-8 w-full max-w-sm">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center mb-6 mx-auto">
            <Lock size={20} className="text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl dark:text-white text-slate-900 text-center mb-6">Admin Login</h1>
          <form onSubmit={login} className="flex flex-col gap-4">
            <input
              placeholder="Username"
              value={creds.username}
              onChange={e => setCreds(p => ({ ...p, username: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-slate-100 dark:text-white text-slate-900 dark:border-white/10 border-slate-200 border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
            />
            <input
              type="password" placeholder="Password"
              value={creds.password}
              onChange={e => setCreds(p => ({ ...p, password: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-slate-100 dark:text-white text-slate-900 dark:border-white/10 border-slate-200 border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
            />
            <button type="submit" disabled={loading} className="py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-60">
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <p className="text-center dark:text-slate-500 text-slate-500 text-xs mt-4">Default: admin / zahriontech2024</p>
        </motion.div>
      </div>
    </PageWrapper>
  )

  return (
    <PageWrapper>
      <Helmet><title>Admin Dashboard – ZahrionTech</title></Helmet>
      <div className="pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display font-bold text-3xl dark:text-white text-slate-900">Admin Dashboard</h1>
              <p className="dark:text-slate-400 text-slate-600 text-sm mt-1">
                {messages.length} total messages · <span className="text-brand-400">{unread} unread</span> · {visitorMeta.total} visitors
              </p>
            </div>
            <div className="flex gap-2">
              <button onClick={refreshAdmin} className="w-9 h-9 rounded-lg dark:bg-white/5 bg-slate-100 flex items-center justify-center dark:text-slate-400 text-slate-600 hover:opacity-80 transition-opacity">
                <RefreshCw size={15} className={loading || visitorsLoading ? 'animate-spin' : ''} />
              </button>
              <button onClick={logout} className="flex items-center gap-2 px-4 py-2 rounded-lg dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 text-sm hover:opacity-80 transition-opacity">
                <LogOut size={14} /> Logout
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Messages list */}
            <div className="flex flex-col gap-3">
              {messages.length === 0 ? (
                <div className="glass rounded-2xl p-12 text-center">
                  <MessageSquare size={32} className="dark:text-slate-600 text-slate-400 mx-auto mb-3" />
                  <p className="dark:text-slate-500 text-slate-500 text-sm">No messages yet.</p>
                </div>
              ) : messages.map(m => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => { setSelected(m); markRead(m.id) }}
                  className={`glass rounded-xl p-4 cursor-pointer transition-all ${selected?.id === m.id ? 'ring-2 ring-brand-500/50' : 'hover:dark:border-white/15 hover:border-slate-300'} ${!m.read ? 'border-l-2 border-l-brand-400' : ''}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium dark:text-white text-slate-900 text-sm">{m.name}</span>
                        {!m.read && <span className="w-2 h-2 rounded-full bg-brand-400 flex-shrink-0" />}
                      </div>
                      <p className="dark:text-slate-500 text-slate-500 text-xs mb-1">{m.email}</p>
                      {m.service && <span className="px-2 py-0.5 rounded-md text-xs dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-500">{m.service}</span>}
                      <p className="dark:text-slate-400 text-slate-600 text-xs mt-2 line-clamp-2">{m.message}</p>
                    </div>
                    <button onClick={e => { e.stopPropagation(); deleteMsg(m.id) }} className="flex-shrink-0 w-7 h-7 rounded-lg dark:bg-red-500/10 bg-red-50 text-red-400 flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Trash2 size={12} />
                    </button>
                  </div>
                  <p className="dark:text-slate-600 text-slate-400 text-xs mt-2">{new Date(m.created_at).toLocaleString()}</p>
                </motion.div>
              ))}
            </div>

            {/* Message detail */}
            <div className="glass rounded-2xl p-6">
              {selected ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display font-semibold dark:text-white text-slate-900">Message Detail</h2>
                    <CheckCircle2 size={16} className="text-emerald-400" />
                  </div>
                  <div className="flex flex-col gap-4">
                    {[['Name', selected.name], ['Email', selected.email], ['Service', selected.service || 'Not specified'], ['Date', new Date(selected.created_at).toLocaleString()]].map(([k, v]) => (
                      <div key={k}>
                        <div className="dark:text-slate-500 text-slate-500 text-xs mb-1">{k}</div>
                        <div className="dark:text-white text-slate-900 text-sm font-medium">{v}</div>
                      </div>
                    ))}
                    <div>
                      <div className="dark:text-slate-500 text-slate-500 text-xs mb-2">Message</div>
                      <div className="dark:bg-white/5 bg-slate-50 rounded-xl p-4 dark:text-slate-300 text-slate-700 text-sm leading-relaxed">
                        {selected.message}
                      </div>
                    </div>
                    <a href={`mailto:${selected.email}`} className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white text-sm font-medium hover:opacity-90 transition-opacity mt-2">
                      <Mail size={14} /> Reply via Email
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <Eye size={32} className="dark:text-slate-600 text-slate-400 mb-3" />
                  <p className="dark:text-slate-500 text-slate-500 text-sm">Select a message to view details</p>
                </div>
              )}
            </div>
          </div>

          {/* Visitors */}
          <div className="glass rounded-2xl p-6 mt-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-brand-400" />
                  <h2 className="font-display font-semibold dark:text-white text-slate-900">Visitors</h2>
                </div>
                <p className="dark:text-slate-500 text-slate-500 text-xs mt-1">
                  IP address, country name, and visit time.
                </p>
              </div>
              <div className="dark:text-slate-500 text-slate-500 text-xs">
                Page {visitorPage} of {visitorMeta.totalPages}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b dark:border-white/10 border-slate-200">
                    <th className="py-3 pr-4 dark:text-slate-400 text-slate-500 text-xs font-medium uppercase tracking-wider">IP</th>
                    <th className="py-3 px-4 dark:text-slate-400 text-slate-500 text-xs font-medium uppercase tracking-wider">Country</th>
                    <th className="py-3 pl-4 dark:text-slate-400 text-slate-500 text-xs font-medium uppercase tracking-wider">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {visitors.length === 0 ? (
                    <tr>
                      <td colSpan="3" className="py-10 text-center dark:text-slate-500 text-slate-500 text-sm">
                        {visitorsLoading ? 'Loading visitors...' : 'No visitors yet.'}
                      </td>
                    </tr>
                  ) : visitors.map(v => (
                    <tr key={v.id} className="border-b last:border-b-0 dark:border-white/5 border-slate-100">
                      <td className="py-3 pr-4 dark:text-slate-300 text-slate-700 text-sm font-mono">{v.ip || 'Unknown'}</td>
                      <td className="py-3 px-4 dark:text-white text-slate-900 text-sm">{v.country_name || 'Unknown'}</td>
                      <td className="py-3 pl-4 dark:text-slate-400 text-slate-600 text-sm">{new Date(v.created_at).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between gap-3 mt-5">
              <p className="dark:text-slate-500 text-slate-500 text-xs">
                {visitorMeta.total} total visitors
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setVisitorPage(p => Math.max(p - 1, 1))}
                  disabled={visitorPage <= 1 || visitorsLoading}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 text-sm disabled:opacity-40 hover:opacity-80 transition-opacity"
                >
                  <ChevronLeft size={14} /> Previous
                </button>
                <button
                  onClick={() => setVisitorPage(p => Math.min(p + 1, visitorMeta.totalPages))}
                  disabled={visitorPage >= visitorMeta.totalPages || visitorsLoading}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 text-sm disabled:opacity-40 hover:opacity-80 transition-opacity"
                >
                  Next <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
