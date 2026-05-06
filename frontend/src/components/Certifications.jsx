import { Award, BookOpen, Trophy } from 'lucide-react'

const certifications = [
  {
    title: 'Introduction to Git and GitHub',
    issuer: 'Coursera',
    year: '2024',
    icon: BookOpen,
    color: 'cyber',
  },
  {
    title: 'Using Python to Interact with the Operating System',
    issuer: 'Coursera',
    year: '2024',
    icon: BookOpen,
    color: 'neon',
  },
  {
    title: 'Troubleshooting and Debugging Techniques',
    issuer: 'Coursera',
    year: '2024',
    icon: BookOpen,
    color: 'purple',
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Coursera',
    year: '2023',
    icon: BookOpen,
    color: 'orange',
  },
]

const achievements = [
  {
    title: '100+ Problems Solved',
    desc: 'LeetCode & HackerRank — Arrays, Strings, Recursion, Dynamic Programming',
    icon: Trophy,
    color: 'yellow',
  },
  {
    title: 'Passionate Learner Award',
    desc: 'Awarded at GNIOT Founder\'s Day for consistent academic and personal growth',
    icon: Award,
    color: 'neon',
  },
]

const colorMap = {
  cyber: 'text-cyber-400 bg-cyber-400/10',
  neon: 'text-neon-green bg-neon-green/10',
  purple: 'text-accent-purple bg-accent-purple/10',
  orange: 'text-accent-orange bg-accent-orange/10',
  yellow: 'text-accent-yellow bg-accent-yellow/10',
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="section-heading">05. certifications & achievements</p>
          <h2 className="section-title">Recognition</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyber-400" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="card-glow p-4 flex items-start gap-4 animated-border">
                  <div className={`p-2 rounded-lg flex-shrink-0 ${colorMap[cert.color]}`}>
                    <cert.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-gray-200 font-medium leading-snug">{cert.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-xs text-gray-500">{cert.issuer}</span>
                      <span className="text-gray-700">·</span>
                      <span className="font-mono text-xs text-gray-600">{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="font-mono text-sm text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-accent-yellow" />
              Achievements
            </h3>
            <div className="space-y-5">
              {achievements.map((ach) => (
                <div key={ach.title} className="card-glow p-5 flex items-start gap-4 animated-border">
                  <div className={`p-3 rounded-xl flex-shrink-0 ${colorMap[ach.color]}`}>
                    <ach.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-gray-100 mb-1">{ach.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{ach.desc}</p>
                  </div>
                </div>
              ))}

              {/* LeetCode stats card */}
              <div className="card-glow p-5 border border-cyber-400/20 animated-border">
                <p className="font-mono text-xs text-gray-500 mb-3 uppercase tracking-widest">Problem Solving Stats</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Problems', value: '100+', color: 'text-cyber-400' },
                    { label: 'Platforms', value: '2', color: 'text-neon-green' },
                    { label: 'Topics', value: '8+', color: 'text-accent-purple' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center bg-night-700 rounded-lg p-3">
                      <div className={`font-mono font-bold text-xl ${stat.color}`}>{stat.value}</div>
                      <div className="font-mono text-xs text-gray-600 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-night-600">
                  {['Arrays', 'Strings', 'Recursion', 'Dynamic Programming', 'Trees', 'Sorting'].map((topic) => (
                    <span key={topic} className="code-badge text-xs">{topic}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
