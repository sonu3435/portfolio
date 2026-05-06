import { useState } from 'react'
import { Send, Mail, Github, Linkedin, MapPin, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || '/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (status === 'error') setStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setError('')
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        const msg = data.errors?.[0]?.msg || data.message || 'Something went wrong.'
        setError(msg)
        setStatus('error')
      }
    } catch {
      setError('Network error. Please try again or email me directly.')
      setStatus('error')
    }
  }

  const inputClass = (name) =>
    `w-full bg-night-700 border ${
      status === 'error' && !form[name] && ['name','email','message'].includes(name)
        ? 'border-accent-orange/50'
        : 'border-night-600'
    } rounded-lg px-4 py-3 font-mono text-sm text-gray-200 placeholder-gray-600
     focus:outline-none focus:border-cyber-400/60 focus:bg-night-700/80
     transition-all duration-200`

  return (
    <section id="contact" className="py-24 bg-night-900/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="section-heading">06. contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-400 max-w-xl">
            I'm actively looking for full-time opportunities. Whether you have a role in mind,
            a project to discuss, or just want to connect — my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-glow p-6 animated-border">
              <h3 className="font-mono font-semibold text-gray-200 mb-4 text-sm">Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'sonusinghmca2024@bhu.ac.in', href: 'mailto:sonusinghmca2024@bhu.ac.in', color: 'text-cyber-400' },
                  { icon: Phone, label: 'Phone', value: '+91 9568157590', href: 'tel:+919568157590', color: 'text-neon-green' },
                  { icon: MapPin, label: 'Location', value: 'Varanasi, India', href: null, color: 'text-accent-purple' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className={`${item.color} mt-0.5`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-gray-600 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className={`font-mono text-sm ${item.color} hover:opacity-80 transition-opacity break-all`}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-mono text-sm text-gray-300">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glow p-6 animated-border">
              <h3 className="font-mono font-semibold text-gray-200 mb-4 text-sm">Social Links</h3>
              <div className="space-y-3">
                {[
                  { icon: Github, label: 'GitHub', sub: 'github.com/sonu3435', href: 'https://github.com/sonu3435', color: 'text-gray-300' },
                  { icon: Linkedin, label: 'LinkedIn', sub: 'sonusingh-470023241', href: 'https://linkedin.com/in/sonusingh-470023241', color: 'text-cyber-400' },
                ].map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 p-3 rounded-lg bg-night-700 hover:bg-night-600 transition-colors group">
                    <social.icon className={`w-5 h-5 ${social.color}`} />
                    <div>
                      <p className="font-mono text-sm text-gray-200 group-hover:text-cyber-400 transition-colors">{social.label}</p>
                      <p className="font-mono text-xs text-gray-500">{social.sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-glow p-5 border border-neon-green/20 animated-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="font-mono text-xs text-neon-green">Available for work</span>
              </div>
              <p className="font-mono text-xs text-gray-500">
                Open to full-time roles as Software Engineer or Full Stack Developer.
                Responding within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="terminal-window">
              <div className="terminal-bar">
                <div className="dot bg-red-500/80" />
                <div className="dot bg-yellow-500/80" />
                <div className="dot bg-neon-green/80" />
                <span className="font-mono text-xs text-gray-500 ml-2">contact_form.js</span>
              </div>
              <div className="p-6">
                {status === 'success' ? (
                  <div className="text-center py-16">
                    <CheckCircle className="w-16 h-16 text-neon-green mx-auto mb-4" />
                    <h3 className="font-mono text-xl font-bold text-gray-100 mb-2">Message Sent!</h3>
                    <p className="font-mono text-sm text-gray-400 mb-6">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button onClick={() => setStatus(null)} className="btn-outline">
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-xs text-gray-500 block mb-1.5">
                          name <span className="text-accent-orange">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={inputClass('name')}
                          required
                        />
                      </div>
                      <div>
                        <label className="font-mono text-xs text-gray-500 block mb-1.5">
                          email <span className="text-accent-orange">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClass('email')}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-xs text-gray-500 block mb-1.5">subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Job opportunity / Project / Hello"
                        className={inputClass('subject')}
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs text-gray-500 block mb-1.5">
                        message <span className="text-accent-orange">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell me about the opportunity, project, or just say hi..."
                        className={`${inputClass('message')} resize-none`}
                        required
                      />
                      <p className="font-mono text-xs text-gray-600 mt-1 text-right">
                        {form.message.length}/2000
                      </p>
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-accent-orange bg-accent-orange/10 border border-accent-orange/20 rounded-lg px-4 py-3">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span className="font-mono text-xs">{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full flex items-center justify-center gap-2 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
