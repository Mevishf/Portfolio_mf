import { Code2, Palette, Brain, Network, TrendingUp } from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    icon: Code2,
    items: ['Python', 'C', 'Java', 'MySQL'],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    category: 'Web Technologies',
    icon: Network,
    items: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-blue-500 to-sky-500',
  },
  {
    category: 'Technologies',
    icon: Brain,
    items: ['Google Cloud', 'Blockchain'],
    color: 'from-purple-500 to-violet-500',
  },
  {
    category: 'Developer Tools',
    icon: Palette,
    items: ['VS Code', 'Figma', 'Canva', 'Adobe XD'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    category: 'DevOps Tools',
    icon: TrendingUp,
    items: ['Maven', 'Gradle', 'Jenkins'],
    color: 'from-orange-500 to-red-500',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Technical Skills
          </h2>
          <p className="text-blue-700 dark:text-blue-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                <div className="relative bg-white dark:bg-blue-900/40 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all duration-300">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                    {skill.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
