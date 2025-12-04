import { Code2, Heart, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Code2 className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Creative Developer & Designer
                </h3>
                <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                  I'm a Computer Science student at Sri Venkateshwara College of Engineering with a passion for building intelligent systems and beautiful user experiences. My journey spans from natural language processing to blockchain development, always seeking to create technology that makes a real-world impact.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Heart className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  What Drives Me
                </h3>
                <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                  I'm driven by the intersection of innovation and user-centricity. Whether it's automating complex processes with AI, designing intuitive interfaces, or exploring emerging technologies like blockchain, I believe in building solutions that are both technically sound and genuinely helpful.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Lifelong Learner
                </h3>
                <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                  From Google Cloud certifications to hackathon victories, I continuously expand my skill set. Currently exploring machine learning, sustainable technology, and modern web development practices.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 rounded-2xl p-8 border border-cyan-200 dark:border-cyan-800">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6">Education</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">Sri Venkateshwara College of Engineering</p>
                  <p className="text-blue-700 dark:text-blue-300">BE in Computer Science and Engineering</p>
                  <p className="text-sm text-blue-500 dark:text-blue-400">CGPA: 8.7 (6 semesters) • Bengaluru</p>
                </div>

                <div>
                  <p className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">Atomic Energy Central School, Kaiga</p>
                  <p className="text-blue-700 dark:text-blue-300">Intermediate Education</p>
                  <p className="text-sm text-blue-500 dark:text-blue-400">Percentage: 82.2</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-900 dark:to-cyan-900 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
