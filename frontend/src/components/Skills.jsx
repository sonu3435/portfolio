const skillCategories = [
  {
    label: 'Languages',
    color: 'cyber',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Java', level: 70 },
      { name: 'Python', level: 65 },
      { name: 'C / C++', level: 60 },
      { name: 'HTML5 / CSS3', level: 92 },
    ],
  },
  {
    label: 'Frontend',
    color: 'neon',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Responsive Design', level: 88 },
    ],
  },
  {
    label: 'Backend',
    color: 'purple',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'RESTful APIs', level: 88 },
      { name: 'Input Validation', level: 82 },
    ],
  },
  {
    label: 'Databases',
    color: 'orange',
    skills: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'SQL', level: 80 },
      { name: 'Sequelize ORM', level: 78 },
      { name: 'DB Transactions', level: 75 },
    ],
  },
  {
    label: 'Tools & Testing',
    color: 'yellow',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Postman', level: 85 },
      { name: 'Manual QA', level: 82 },
      { name: 'Cross-browser Testing', level: 80 },
      { name: 'Vercel / CI/CD', level: 75 },
    ],
  },
  {
    label: 'Concepts',
    color: 'teal',
    skills: [
      { name: 'MVC Architecture', level: 85 },
      { name: 'Controller-Service-Repo', level: 82 },
      { name: 'Agile / Scrum', level: 80 },
      { name: 'Debugging', level: 88 },
    ],
  },
]

const colorMap = {
  cyber: { bar: 'bg-cyber-400', text: 'text-cyber-400', badge: 'bg-cyber-400/10 text-cyber-300 border-cyber-400/20' },
  neon: { bar: 'bg-neon-green', text: 'text-neon-green', badge: 'bg-neon-green/10 text-neon-lime border-neon-green/20' },
  purple: { bar: 'bg-accent-purple', text: 'text-accent-purple', badge: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20' },
  orange: { bar: 'bg-accent-orange', text: 'text-accent-orange', badge: 'bg-accent-orange/10 text-accent-orange border-accent-orange/20' },
  yellow: { bar: 'bg-accent-yellow', text: 'text-accent-yellow', badge: 'bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20' },
  teal: { bar: 'bg-teal-400', text: 'text-teal-400', badge: 'bg-teal-400/10 text-teal-300 border-teal-400/20' },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-night-900/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="section-heading">02. skills</p>
          <h2 className="section-title">Tech Stack</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const c = colorMap[cat.color]
            return (
              <div key={cat.label} className="card-glow p-5 animated-border">
                <div className="flex items-center gap-2 mb-5">
                  <div className={`font-mono text-xs font-semibold px-2 py-1 rounded border ${c.badge}`}>
                    {cat.label}
                  </div>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="font-mono text-xs text-gray-300">{skill.name}</span>
                        <span className={`font-mono text-xs ${c.text}`}>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-night-600 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${c.bar} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech logos row */}
        <div className="mt-12 pt-10 border-t border-night-600">
          <p className="font-mono text-xs text-gray-600 text-center mb-6 tracking-widest uppercase">core technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
              'Express', 'PostgreSQL', 'Sequelize', 'Tailwind CSS',
              'Git', 'Postman', 'Vercel', 'Python', 'Java',
            ].map((tech) => (
              <span key={tech} className="code-badge hover:border-cyber-400/40 hover:text-cyber-400 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
