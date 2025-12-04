import { Briefcase, Trophy, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/30 dark:bg-blue-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-blue-900/40 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-4 mb-6">
              <Briefcase className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  Internships
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">2025</p>
              </div>
            </div>
            <ul className="space-y-3 text-blue-700 dark:text-blue-300">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Crowdfunding Internship</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Virtual Internship in UI/UX – System Tron</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Data Science Training – Internshala Trainings</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-blue-900/40 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-4 mb-6">
              <Trophy className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  Achievements
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">2025</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                  1st Prize in "Project and Research Expo 2025"
                </p>
                <p className="text-blue-700 dark:text-blue-300 text-sm">For the project titled "DeepFake Detection in Aerial Images Using Explainable AI"</p>
              </div>
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                  Google Cloud Facilitator Arcade Program
                </p>
                <p className="text-blue-700 dark:text-blue-300 text-sm">Completed cloud computing challenges and earned recognition</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-2xl p-8 border border-cyan-200 dark:border-cyan-800">
          <div className="flex items-start gap-4 mb-6">
            <Award className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mt-1 flex-shrink-0" />
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
              Publications
            </h3>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            <div className="bg-white dark:bg-blue-900/40 rounded-xl p-4">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Chatbot Integration In Ticketing Systems: Transforming Museum Ticket Management Through NLP
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">
                <a href="https://ijrar.org/viewfull.php?pid=IJRAR24D2485" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">
                  International Journal of Research and Analytical Reviews (IJRAR)
                </a>
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-xs">
                Authors: K N Navya, Mevish Fatima, Lubna A
              </p>
            </div>
            <div className="bg-white dark:bg-blue-900/40 rounded-xl p-4">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                A Systematic Survey on DeepFake Detection using Advanced AI Models
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">
                Springer International Conference on Digital Technology and Engineering (ICDTE 2025)
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-xs">
                Authors: Mevish Fatima, K N Navya, Ravish Kumar, Lubna A
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-blue-900/40 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6">
            Leadership & Activities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Official Student Photographer (2024)
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Captured key moments of college events for promotions and archives.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Poster Making (Nov 2024)
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Designed the official posters for the university’s main event.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Event Coordinator (Dec 2024)
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Served as a Event Coordinator for college events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
