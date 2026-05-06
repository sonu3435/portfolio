import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    company: 'PsyConnect',
    role: 'Full Stack Developer',
    period: 'July 2025 – February 2026',
    location: 'Varanasi, India (Hybrid)',
    type: 'Full-time',
    color: 'cyber',
    achievements: [
      'Designed and developed 10+ RESTful API endpoints using Node.js and Express.js, powering core features of a web-based mental health platform serving active users.',
      'Built responsive front-end interfaces with Next.js and Tailwind CSS, improving UI consistency and reducing page-load friction across all major device sizes.',
      'Collaborated in an Agile team of 4 developers, participating in sprint planning, code reviews, and bi-weekly feature releases.',
      'Debugged and resolved 15+ production issues across frontend and backend layers, ensuring platform stability and consistent uptime.',
      'Created interactive user-facing pages using JavaScript, HTML, and CSS, contributing to improved user engagement on the platform.',
    ],
    stack: ['Node.js', 'Express.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Git'],
  },
]

const education = [
  {
    institution: 'Banaras Hindu University (BHU)',
    degree: 'Master of Computer Applications (MCA)',
    period: 'Sep 2024 – Jun 2026 (Expected)',
    location: 'Varanasi, Uttar Pradesh',
    color: 'purple',
  },
  {
    institution: 'Greater Noida Institute of Technology (GNIOT)',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: 'Graduated April 2024',
    location: 'Uttar Pradesh',
    color: 'neon',
    note: '🏆 Passionate Learner Award — Founder\'s Day',
  },
]

const colorMap = {
  cyber: { dot: 'bg-cyber-400', border: 'border-cyber-400/30', badge: 'bg-cyber-400/10 text-cyber-300', icon: 'text-cyber-400' },
  purple: { dot: 'bg-accent-purple', border: 'border-accent-purple/30', badge: 'bg-accent-purple/10 text-accent-purple', icon: 'text-accent-purple' },
  neon: { dot: 'bg-neon-green', border: 'border-neon-green/30', badge: 'bg-neon-green/10 text-neon-lime', icon: 'text-neon-green' },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="section-heading">03. experience & education</p>
          <h2 className="section-title">Journey So Far</h2>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-cyber-400" />
            Work Experience
          </h3>

          {experiences.map((exp) => {
            const c = colorMap[exp.color]
            return (
              <div key={exp.company} className={`card-glow p-6 border-l-2 ${c.border} animated-border`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="font-mono font-bold text-xl text-gray-100">{exp.role}</h3>
                    <div className={`font-mono text-base font-semibold mt-0.5 ${c.icon}`}>{exp.company}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`font-mono text-xs px-3 py-1 rounded-full ${c.badge}`}>{exp.type}</span>
                    <div className="flex items-center gap-1.5 font-mono text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-5">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${c.icon}`} />
                      {ach}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-night-600">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="code-badge">{tech}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Education */}
        <div>
          <h3 className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2">
            <span className="text-accent-purple text-lg">🎓</span>
            Education
          </h3>

          <div className="space-y-5">
            {education.map((edu) => {
              const c = colorMap[edu.color]
              return (
                <div key={edu.institution} className={`card-glow p-5 border-l-2 ${c.border} animated-border`}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-mono font-semibold text-gray-100">{edu.degree}</h3>
                      <div className={`font-mono text-sm mt-0.5 ${c.icon}`}>{edu.institution}</div>
                      {edu.note && (
                        <div className="font-mono text-xs text-accent-yellow mt-1.5">{edu.note}</div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs text-gray-500 flex items-center gap-1 justify-end">
                        <Calendar className="w-3.5 h-3.5" />{edu.period}
                      </div>
                      <div className="font-mono text-xs text-gray-600 mt-1">{edu.location}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
