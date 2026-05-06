import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react'

const roles = [
  'Full Stack Developer',
  'React Developer',
  'Node.js Engineer',
  'PostgreSQL Developer',
  'API Architect',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden grid-bg">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Terminal prompt line */}
            <div className="font-mono text-sm text-gray-500 mb-6 fade-in fade-in-delay-1 flex items-center gap-2">
              <span className="text-neon-green">~</span>
              <span className="text-cyber-400">$</span>
              <span className="text-gray-400">whoami</span>
            </div>

            <h1 className="fade-in fade-in-delay-2">
              <span className="font-mono text-lg text-gray-500 block mb-1">Hello, World! I'm</span>
              <span className="font-mono font-bold text-5xl md:text-6xl text-gray-100 block">
                Sonu<span className="text-cyber-400">.</span>Singh
              </span>
            </h1>

            <div className="mt-4 mb-6 fade-in fade-in-delay-3 h-10">
              <span className="font-mono text-xl md:text-2xl gradient-text font-semibold">
                {displayed}
                <span className="cursor" />
              </span>
            </div>

            <p className="text-gray-400 text-base leading-relaxed max-w-lg fade-in fade-in-delay-3 mb-2">
              Full-Stack Developer with production experience building scalable platforms.
              Currently pursuing <span className="text-cyber-300 font-mono text-sm">MCA @ BHU</span>.
              Passionate about clean APIs, responsive UIs, and solving 100+ algorithmic problems.
            </p>

            <div className="flex items-center gap-2 text-gray-500 text-sm font-mono mb-8 fade-in fade-in-delay-3">
              <MapPin className="w-4 h-4 text-neon-green" />
              <span>Varanasi, India</span>
              <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse ml-1" />
              <span className="text-neon-green text-xs">Open to opportunities</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 fade-in fade-in-delay-4">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
              <a href="https://github.com/sonu3435" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-cyber-400 transition-colors ml-1">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 fade-in fade-in-delay-5">
              {[
                { value: '8+', label: 'Months Experience' },
                { value: '10+', label: 'APIs Built' },
                { value: '100+', label: 'LeetCode / HackerRank' },
              ].map((stat) => (
                <div key={stat.label} className="text-center border border-night-600 rounded-lg p-3 bg-night-800/50">
                  <div className="font-mono text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="font-mono text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal code block */}
          <div className="hidden lg:block fade-in fade-in-delay-3">
            <div className="terminal-window shadow-2xl shadow-black/50 animate-float">
              <div className="terminal-bar">
                <div className="dot bg-red-500/80" />
                <div className="dot bg-yellow-500/80" />
                <div className="dot bg-neon-green/80" />
                <span className="font-mono text-xs text-gray-500 ml-2">sonu@portfolio:~$</span>
              </div>
              <div className="p-5 font-mono text-sm leading-loose">
                <div>
                  <span className="text-gray-600">// </span>
                  <span className="text-gray-500">sonu_singh.json</span>
                </div>
                <div className="mt-2">
                  <span className="text-cyber-400">const</span>
                  <span className="text-gray-300"> developer </span>
                  <span className="text-accent-orange">=</span>
                  <span className="text-gray-300"> {'{'}</span>
                </div>
                <div className="ml-4">
                  <span className="text-neon-green">name</span>
                  <span className="text-gray-300">: </span>
                  <span className="text-accent-yellow">"Sonu Singh"</span><span className="text-gray-500">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-neon-green">role</span>
                  <span className="text-gray-300">: </span>
                  <span className="text-accent-yellow">"Full Stack Developer"</span><span className="text-gray-500">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-neon-green">edu</span>
                  <span className="text-gray-300">: </span>
                  <span className="text-accent-yellow">"MCA @ BHU"</span><span className="text-gray-500">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-neon-green">stack</span>
                  <span className="text-gray-300">: [</span>
                </div>
                {['React', 'Node.js', 'PostgreSQL', 'Express'].map((s, i) => (
                  <div key={s} className="ml-8">
                    <span className="text-accent-yellow">"{s}"</span>
                    {i < 3 && <span className="text-gray-500">,</span>}
                  </div>
                ))}
                <div className="ml-4"><span className="text-gray-300">]</span><span className="text-gray-500">,</span></div>
                <div className="ml-4">
                  <span className="text-neon-green">available</span>
                  <span className="text-gray-300">: </span>
                  <span className="text-cyber-400">true</span>
                </div>
                <div><span className="text-gray-300">{'}'}</span></div>
                <div className="mt-3 flex items-center">
                  <span className="text-gray-500">~ $ </span>
                  <span className="text-neon-green ml-2 cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down */}
        <div className="flex justify-center mt-16 fade-in fade-in-delay-5">
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-600 hover:text-cyber-400 transition-colors group">
            <span className="font-mono text-xs">scroll down</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
