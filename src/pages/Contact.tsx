import React from 'react';
import { Mail, Linkedin, Youtube, Github, Send, MessageSquare, MapPin, ExternalLink } from 'lucide-react';
import { contactContent } from '@/content/pages';

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'sent'>('idle');
  const [selectedPhoto, setSelectedPhoto] = React.useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = React.useState<string>('');

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedPhoto(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview('');
    }
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <MessageSquare size={20} />
             </div>
             <h2 className="text-xl font-bold">{contactContent.messageTitle}</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">Subject</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all">
                <option>Collaboration Inquiry</option>
                <option>Speaking Engagement</option>
                <option>Question about RAN Optimization</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">Message</label>
              <textarea 
                required
                rows={5}
                placeholder="How can I help you?" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all resize-none"
              ></textarea>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">Upload Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="w-full text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-brand-blue file:px-4 file:py-2 file:text-white file:font-semibold file:transition-all hover:file:cursor-pointer hover:file:bg-brand-blue/90"
              />
              <p className="text-xs text-slate-500">Optional: add a photo to include with your request.</p>
              {photoPreview && (
                <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 mt-3">
                  <img src={photoPreview} alt="Selected upload preview" className="w-full h-60 object-cover" />
                </div>
              )}
            </div>
            <button 
              disabled={formStatus !== 'idle'}
              className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all"
            >
              {formStatus === 'idle' && (
                <>Send Message <Send size={18} /></>
              )}
              {formStatus === 'sending' && (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              )}
              {formStatus === 'sent' && (
                <>
                  {selectedPhoto ? 'Message Sent with Photo!' : 'Message Sent!'} <Send size={18} />
                </>
              )}
            </button>
          </form>
        </section>

        {/* Socials & Info */}
        <section className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
                <MapPin size={20} />
              </div>
              {contactContent.connectTitle}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all group"
                >
                  <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-800 ${link.color} group-hover:scale-110 transition-transform`}>
                    {link.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold">{link.name}</span>
                      <ExternalLink size={12} className="text-slate-400" />
                    </div>
                    <p className="text-sm text-slate-500">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-lg font-bold mb-2">{contactContent.directEmailTitle}</h3>
               <p className="text-slate-400 text-sm mb-4">{contactContent.directEmailDescription}</p>
               <a href={`mailto:${contactContent.directEmail}`} className="text-brand-cyan font-mono hover:underline">
                 {contactContent.directEmail}
               </a>
             </div>
             <Mail size={120} className="absolute -bottom-8 -right-8 text-white/5 rotate-12" />
          </div>
        </section>
      </div>
    </div>
  );
}
