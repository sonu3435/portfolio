import { Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-night-700 py-10 bg-night-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-cyber-400 rounded-lg flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-night-900" />
            </div>
            <span className="font-mono text-sm text-gray-400">
              sonu<span className="text-cyber-400">@</span>dev
            </span>
          </div>

          <p className="font-mono text-xs text-gray-600 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-accent-orange fill-accent-orange" /> using
            <span className="text-cyber-400">React</span> ·
            <span className="text-neon-green">Node.js</span> ·
            <span className="text-accent-purple">PostgreSQL</span>
          </p>

          <div className="flex items-center gap-4">
            <a href="https://github.com/sonu3435" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-cyber-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/sonusingh-470023241" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-cyber-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:sonusinghmca2024@bhu.ac.in"
               className="text-gray-600 hover:text-cyber-400 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="font-mono text-xs text-gray-700">
            © {year} Sonu Singh · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
