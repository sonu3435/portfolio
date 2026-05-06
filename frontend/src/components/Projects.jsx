import { ExternalLink, Github, Shield, ShoppingCart, BarChart3, FileVideo, Layers } from 'lucide-react'

const projects = [
  {
    title: 'Mini Grocery Order System',
    subtitle: 'Full-Stack E-Commerce Application',
    icon: ShoppingCart,
    color: 'cyber',
    period: 'Jan 2026',
    description: 'A full-stack e-commerce ordering application featuring product listing, cart management, and order placement APIs — architected and built end-to-end in 3 weeks.',
    highlights: [
      'Implemented atomic stock updates using PostgreSQL database transactions, preventing race conditions under concurrent orders.',
      'Structured backend using Controller–Service–Repository pattern, reducing code coupling and making codebase modular and testable.',
      'Built full product listing, cart management, and order placement APIs with complete business logic.',
    ],
    stack: ['React', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL'],
    type: 'Full-Stack',
    featured: true,
  },
  {
    title: 'Website QA Audit',
    subtitle: 'movementrelocation.com',
    icon: Shield,
    color: 'orange',
    period: 'May 2026',
    description: 'Comprehensive manual QA audit of a production website, identifying 11 issues: 5 Critical, 5 High, 1 Medium across functional, UI/UX, performance, security, and architecture dimensions.',
    highlights: [
      'Uncovered a 5.8-second page load caused by a 2.4 MB unoptimised image and JS asset returning 302 redirect — documented fix using WebP conversion and lazy loading.',
      'Identified critical security gaps: form accepted invalid data with no validation — documented fix using onSubmit/onBlur triggers and input sanitisation.',
      'Delivered structured QA report with consolidated issue summary table, severity ratings, and developer-ready fix recommendations.',
    ],
    stack: ['Manual QA', 'DevTools', 'Performance Analysis', 'Security Testing'],
    type: 'QA / Audit',
    featured: true,
  },
  {
    title: 'Inventory Management System',
    subtitle: 'Full-Stack Platform',
    icon: BarChart3,
    color: 'purple',
    period: '2025',
    description: 'Full-stack inventory and order management platform with REST API order placement, CORS-secured endpoints, and input validation at the service layer.',
    highlights: [
      'Designed responsive frontend using React and Tailwind CSS for seamless order processing across desktop and mobile.',
      'Built REST API order placement with CORS-secured endpoints and input validation at service layer.',
    ],
    stack: ['React', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'Tailwind CSS'],
    type: 'Full-Stack',
  },
  {
    title: 'Razorpay & Paytm UI Clones',
    subtitle: 'Pixel-accurate UI Clones',
    icon: Layers,
    color: 'yellow',
    period: '2025',
    description: 'Pixel-accurate, fully responsive clones of two production payment gateway UIs using Tailwind CSS component composition patterns for reusable, maintainable UI elements.',
    highlights: [
      'Developed pixel-accurate, fully responsive clones of two production payment gateway UIs.',
      'Used Tailwind CSS component composition patterns for reusable and maintainable UI elements.',
    ],
    stack: ['React.js', 'Tailwind CSS', 'JavaScript'],
    type: 'Frontend',
  },
  {
    title: 'Text-to-Video Converter',
    subtitle: 'Python Automation Pipeline',
    icon: FileVideo,
    color: 'neon',
    period: '2024',
    description: 'Python pipeline that converts text input into narrated video files, automating multimedia content creation and reducing manual production time to near zero.',
    highlights: [
      'Built end-to-end Python pipeline that converts text input into narrated video files.',
      'Integrated gTTS, MoviePy, and FFmpeg for audio synthesis, video creation, and encoding.',
    ],
    stack: ['Python', 'gTTS', 'MoviePy', 'FFmpeg'],
    type: 'Automation',
  },
]

const colorMap = {
  cyber: { icon: 'text-cyber-400', bg: 'bg-cyber-400/10', border: 'border-cyber-400/20', badge: 'bg-cyber-400/10 text-cyber-300 border-cyber-400/20', dot: 'bg-cyber-400' },
  orange: { icon: 'text-accent-orange', bg: 'bg-accent-orange/10', border: 'border-accent-orange/20', badge: 'bg-accent-orange/10 text-accent-orange border-accent-orange/20', dot: 'bg-accent-orange' },
  purple: { icon: 'text-accent-purple', bg: 'bg-accent-purple/10', border: 'border-accent-purple/20', badge: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20', dot: 'bg-accent-purple' },
  yellow: { icon: 'text-accent-yellow', bg: 'bg-accent-yellow/10', border: 'border-accent-yellow/20', badge: 'bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20', dot: 'bg-accent-yellow' },
  neon: { icon: 'text-neon-green', bg: 'bg-neon-green/10', border: 'border-neon-green/20', badge: 'bg-neon-green/10 text-neon-lime border-neon-green/20', dot: 'bg-neon-green' },
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 bg-night-900/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="section-heading">04. projects</p>
          <h2 className="section-title">Things I've Built</h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-12">
          {featured.map((project) => {
            const c = colorMap[project.color]
            return (
              <div key={project.title} className={`card-glow p-6 md:p-8 border ${c.border} animated-border`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`${c.bg} ${c.icon} p-3 rounded-xl`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-mono font-bold text-xl text-gray-100">{project.title}</h3>
                        <span className={`font-mono text-xs px-2 py-0.5 rounded border ${c.badge}`}>{project.type}</span>
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20">⭐ Featured</span>
                      </div>
                      <p className="font-mono text-sm text-gray-500 mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gray-600">{project.period}</span>
                    <a href="https://github.com/sonu3435" target="_blank" rel="noopener noreferrer"
                       className={`${c.icon} hover:opacity-80 transition-opacity`}>
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

                <ul className="space-y-2 mb-5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                      <span className={`${c.dot} w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0`} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-night-600">
                  {project.stack.map((tech) => (
                    <span key={tech} className="code-badge">{tech}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Other Projects Grid */}
        <h3 className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-6">Other Noteable Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project) => {
            const c = colorMap[project.color]
            return (
              <div key={project.title} className="card-glow p-5 animated-border flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className={`${c.bg} ${c.icon} p-2.5 rounded-lg`}>
                    <project.icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-xs px-2 py-0.5 rounded border ${c.badge}`}>{project.type}</span>
                    <a href="https://github.com/sonu3435" target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-cyber-400 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="font-mono font-semibold text-gray-200 mb-1">{project.title}</h3>
                <p className="font-mono text-xs text-gray-500 mb-3">{project.subtitle}</p>
                <p className="text-gray-400 text-xs leading-relaxed flex-1 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-night-600">
                  {project.stack.map((tech) => (
                    <span key={tech} className="code-badge text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <a href="https://github.com/sonu3435" target="_blank" rel="noopener noreferrer"
             className="btn-outline inline-flex items-center gap-2">
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
