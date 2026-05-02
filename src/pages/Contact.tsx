import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
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
            <a 
              href={`mailto:${contactContent.directEmail}`}
              className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all no-underline text-center"
            >
              Contact via Email <Mail size={18} />
            </a>
          </form>
        </section>
      </div>
    </div>
  );
}
