import { Mail, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/30 dark:bg-blue-950/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Let's Connect
          </h2>
          <p className="text-blue-700 dark:text-blue-300 text-lg">
            I'd love to hear from you about projects, collaborations, or just to chat
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-blue-800 dark:text-blue-200 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-blue-300 dark:border-blue-600 bg-white dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Captain of the ship..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-800 dark:text-blue-200 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-blue-300 dark:border-blue-600 bg-white dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-blue-800 dark:text-blue-200 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-blue-300 dark:border-blue-600 bg-white dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'sent' ? (
                  'Message Sent!'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Cast the Bottle
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-2xl p-8 border border-cyan-200 dark:border-cyan-800">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
                  Email
                </h3>
              </div>
              <p className="text-blue-700 dark:text-blue-300 mb-4 text-sm">
                Reach out directly or let me know your message below:
              </p>
              <a
                href="mailto:mevishf@gmail.com"
                className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium text-lg"
              >
                mevishf@gmail.com
              </a>
              <p className="text-blue-700 dark:text-blue-300 mt-4 text-sm">
                Phone: +91 9326496248
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-950/50 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-6">
                Connect on Social
              </h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/Mevishf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-700 dark:text-blue-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>Mevishf</span>
                </a>
                <a
                  href="https://linkedin.com/in/Mevishf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-700 dark:text-blue-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Mevishf</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
