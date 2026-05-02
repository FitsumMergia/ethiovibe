import React from 'react';
import { Mail, Linkedin, Youtube, Github, Send, MessageSquare, MapPin, ExternalLink, Phone } from 'lucide-react';
import { contactContent } from '@/content/pages';

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/fitsum-mergia-6588176a', color: 'text-blue-600', description: 'Professional networking and career history.' },
    { name: 'YouTube', icon: <Youtube size={24} />, url: 'https://www.youtube.com/@EthioTechVibes', color: 'text-red-500', description: 'Technical tutorials and deep-dives.' },
    { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/FitsumMergia', color: 'text-slate-800 dark:text-white', description: 'Code snippets and automation scripts.' },
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-display font-bold mb-4">{contactContent.pageTitle}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {contactContent.description}
        </p>
      </header>

      <div className="flex flex-col items-center gap-10">
        <div className="w-full max-w-4xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-8">
          <div className="flex flex-col items-center text-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
              <MapPin size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{contactContent.connectTitle}</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">{contactContent.directEmailDescription}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-slate-100 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-950 text-center">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Email</p>
              <a href={`mailto:${contactContent.directEmail}`} className="font-semibold text-slate-900 dark:text-white hover:text-brand-blue">
                {contactContent.directEmail}
              </a>
            </div>
            <div className="rounded-3xl border border-slate-100 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-950 text-center">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Phone</p>
              <a href={`tel:${contactContent.directPhone}`} className="font-semibold text-slate-900 dark:text-white hover:text-brand-blue">
                {contactContent.directPhone}
              </a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-8">
          <div className="flex flex-col items-center text-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <MessageSquare size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{contactContent.messageTitle}</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Send a short message and I will get back to you soon.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">Email</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">Message</label>
              <textarea 
                required
                rows={5}
                placeholder="Tell me how we can collaborate..." 
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all resize-none"
              ></textarea>
            </div>
            <button 
              disabled={formStatus !== 'idle'}
              className="w-full py-4 bg-brand-blue text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all"
            >
              {formStatus === 'idle' && (
                <>Send Message <Send size={18} /></>
              )}
              {formStatus === 'sending' && (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              )}
              {formStatus === 'sent' && (
                <>
                  Message Sent! <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="w-full max-w-4xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900/80 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl bg-white dark:bg-slate-900 ${link.color}`}>
                    {link.icon}
                  </div>
                <div>
                  <div className="font-semibold">{link.name}</div>
                  <p className="text-sm text-slate-500">{link.description}</p>
                </div>
                </div>
                <span className="inline-flex items-center rounded-full bg-brand-blue px-3 py-2 text-xs font-semibold text-white">
                  Open
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="w-full max-w-4xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-3xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <Mail size={26} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Let us connect</p>
              <h3 className="text-2xl font-bold">Continue the conversation on RAN strategy, AI-driven optimization, and telecom transformation.</h3>
              <p className="mt-3 text-slate-500 max-w-2xl">Use the form above, email directly, or click a link to share your idea and explore collaboration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
