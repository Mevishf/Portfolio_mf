import { Mail, Send, Github, Linkedin } from 'lucide-react';
import FadeIn from './FadeIn';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
      setStatus('idle');
    }
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
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-serif-display font-medium text-[#16253E] mb-4 sm:mb-6">
              Let's Connect
            </h2>
            <p className="text-[#053B2D] text-sm sm:text-xl font-sans max-w-2xl mx-auto px-4">
              I'd love to hear from you about projects, collaborations, or just to chat
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <FadeIn delay={0.2} direction="right" fullWidth>
            <div className="bg-[#FFE6EA] p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-[6px_6px_0px_rgba(22,37,62,1)] sm:shadow-[8px_8px_0px_rgba(22,37,62,1)] border-2 border-[#16253E]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-bold text-[#16253E] mb-2 font-sans uppercase tracking-wider"
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#16253E]/20 bg-white text-[#16253E] placeholder-[#807178]/50 focus:outline-none focus:ring-4 focus:ring-[#16253E]/10 transition-all font-sans text-sm sm:text-base"
                    placeholder="Captain of the ship..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-bold text-[#16253E] mb-2 font-sans uppercase tracking-wider"
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#16253E]/20 bg-white text-[#16253E] placeholder-[#807178]/50 focus:outline-none focus:ring-4 focus:ring-[#16253E]/10 transition-all font-sans text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-bold text-[#16253E] mb-2 font-sans uppercase tracking-wider"
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#16253E]/20 bg-white text-[#16253E] placeholder-[#807178]/50 focus:outline-none focus:ring-4 focus:ring-[#16253E]/10 transition-all resize-none font-sans text-sm sm:text-base"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-[#324561] text-white rounded-xl hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-300 flex items-center justify-center gap-2 font-bold disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-lg font-sans"
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : status === 'sent' ? (
                    'Message Sent!'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="left" fullWidth>
            <div className="space-y-8">
              <div className="bg-[#16253E] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-[#E8EBF5]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#FFE6EA] rounded-full text-[#16253E]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-[#FFE6EA] font-serif-display">
                    Email
                  </h3>
                </div>
                <p className="text-[#E8EBF5]/80 mb-6 text-sm sm:text-lg">
                  Reach out directly or let me know your message form side:
                </p>
                <a
                  href="mailto:mevishf@gmail.com"
                  className="text-[#FFE6EA] hover:text-[#FFE6EA]/80 underline decoration-2 underline-offset-4 font-medium text-lg sm:text-2xl break-all"
                >
                  mevishf@gmail.com
                </a>

              </div>

              <div className="bg-[#053B2D] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-[#E8EBF5]/20">
                <h3 className="text-lg sm:text-2xl font-bold text-[#FFE6EA] mb-4 sm:mb-6 font-serif-display">
                  Connect on Social
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://github.com/Mevishf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-[#E8EBF5] hover:text-[#FFE6EA] transition-colors group"
                  >
                    <div className="p-2 border border-[#E8EBF5]/30 rounded-lg group-hover:bg-[#FFE6EA] group-hover:text-[#053B2D] transition-colors">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-base sm:text-xl">Github / Mevishf</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mevish-f-54b777237/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-[#E8EBF5] hover:text-[#FFE6EA] transition-colors group"
                  >
                    <div className="p-2 border border-[#E8EBF5]/30 rounded-lg group-hover:bg-[#FFE6EA] group-hover:text-[#053B2D] transition-colors">
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-base sm:text-xl">LinkedIn / Mevishf</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
