import { GraduationCap, Code2, Zap, Target } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="section-heading">01. about me</p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text content */}
          <div className="lg:col-span-3 space-y-5 text-gray-400 leading-relaxed">
            <p>
              I'm a <span className="text-gray-200">Full-Stack Developer</span> with hands-on production experience
              building a web-based mental health platform at{' '}
              <span className="text-cyber-400 font-mono">PsyConnect</span> — designing RESTful APIs,
              building responsive frontends, and shipping features in Agile sprints.
            </p>
            <p>
              I'm currently completing my{' '}
              <span className="text-gray-200">Master of Computer Applications (MCA)</span> at
              Banaras Hindu University (BHU), expected June 2026. My approach blends solid
              software architecture — like the <span className="font-mono text-accent-purple">Controller–Service–Repository</span> pattern —
              with practical problem-solving skills (100+ LeetCode problems solved).
            </p>
            <p>
              Outside work, I love QA auditing production websites, exploring system design,
              and building side projects that solve real problems. I'm actively seeking an
              <span className="text-neon-green"> entry-level Software Engineer</span> or{' '}
              <span className="text-neon-green">Full Stack Developer</span> role.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                'Node.js & Express',
                'React & Next.js',
                'PostgreSQL & Sequelize',
                'REST API Design',
                'Tailwind CSS',
                'Git & GitHub',
                'Agile / Scrum',
                'QA & Testing',
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm font-mono">
                  <span className="text-neon-green text-xs">▸</span>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Code2,
                title: 'Production Experience',
                desc: '8 months at PsyConnect building real-world features for active users',
                color: 'text-cyber-400',
                bg: 'bg-cyber-400/10',
              },
              {
                icon: GraduationCap,
                title: 'MCA @ BHU',
                desc: 'Banaras Hindu University — one of India\'s top universities',
                color: 'text-neon-green',
                bg: 'bg-neon-green/10',
              },
              {
                icon: Target,
                title: '100+ Problems Solved',
                desc: 'LeetCode & HackerRank: Arrays, DP, Recursion, Strings',
                color: 'text-accent-purple',
                bg: 'bg-accent-purple/10',
              },
              {
                icon: Zap,
                title: 'Passionate Learner Award',
                desc: 'Awarded at GNIOT Founder\'s Day for academic & personal growth',
                color: 'text-accent-yellow',
                bg: 'bg-accent-yellow/10',
              },
            ].map((item) => (
              <div key={item.title} className="card-glow p-4 flex items-start gap-4 animated-border">
                <div className={`${item.bg} ${item.color} p-2.5 rounded-lg flex-shrink-0`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-gray-200 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
