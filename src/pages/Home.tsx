import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ArrowRight, 
  Play, 
  BookOpen, 
  Smartphone, 
  Activity, 
  Layers,
  Youtube,
  Cpu,
  User,
  Mail 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '@/content/blog';
import { homeContent } from '@/content/pages';
import { formatDate } from '@/lib/utils';

export default function Home() {
  const latestPosts = posts.slice(0, 5);
  const featuredResources = [
    { title: 'RAN Optimization Guide', date: 'March 27', path: '/resources' },
    { title: '5G KPI Dictionary', date: 'December 1', path: '/resources' },
    { title: 'Telecom Automation with Python', date: 'January 20', path: '/resources' },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Hero Section */}
      <section className="relative mb-20 py-4">
        {/* Full-width heading that spans across */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white max-w-4xl mx-auto text-center md:text-left">
            {homeContent.heroTitle}
          </h1>
        </div>

        {/* Content below heading */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-[2] order-2 md:order-1">
            {homeContent.heroParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg md:text-xl text-slate-700 dark:text-slate-400 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="px-6 py-2.5 rounded-md border border-slate-300 dark:border-slate-800 font-bold text-sm bg-white dark:bg-slate-900 hover:bg-slate-50 shadow-sm transition-colors flex items-center gap-2 !border-b !no-underline">
                <User size={16} /> {homeContent.ctaAbout}
              </Link>
              <Link to="/contact" className="px-6 py-2.5 rounded-md border border-slate-300 dark:border-slate-800 font-bold text-sm bg-white dark:bg-slate-900 hover:bg-slate-50 shadow-sm transition-colors flex items-center gap-2 !border-b !no-underline">
                <Mail size={16} /> {homeContent.ctaContact}
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 w-full md:w-[320px] shrink-0">
            <div className="relative aspect-square">
               {/* Circular background decoration like in the reference */}
               <div className="absolute inset-4 bg-brand-blue/80 rounded-full -rotate-6 transform scale-105" />
               <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-brand-blue/10 flex items-center justify-center">
                  <img 
                    src="/My_photo.jpg" 
                    alt="Fitsum Mergia" 
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.classList.add('flex');
                    }}
                  />
                  <User size={120} className="text-brand-blue/20 absolute" />
               </div>
               {/* Small floating tech icon */}
               <div className="absolute -bottom-2 -right-2 p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-white/10">
                  <Cpu size={28} className="text-brand-blue" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📓</span>
          <h2 className="!mt-0 !mb-0 text-3xl font-bold">Blog</h2>
        </div>
        <p className="text-slate-500 mb-8 border-b border-slate-100 dark:border-white/5 pb-4">Guides, references, and tutorials.</p>
        
        <div className="space-y-1">
          {latestPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.slug}`}
              className="flex flex-col md:flex-row md:items-center py-4 group hover:bg-brand-blue/5 px-4 -mx-4 rounded-lg transition-colors border-b border-slate-50 dark:border-white/5 last:border-b-0 !border-b-0 !no-underline"
            >
              <span className="text-sm text-slate-400 w-32 shrink-0 font-mono">{formatDate(post.date)}</span>
              <span className="text-lg font-medium text-brand-blue group-hover:text-blue-700 transition-colors">{post.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🛠️</span>
          <h2 className="!mt-0 !mb-0 text-3xl font-bold">Resources</h2>
        </div>
        <p className="text-slate-500 mb-8 border-b border-slate-100 dark:border-white/5 pb-4">Templates, analysis tools, and everything else.</p>
        
        <div className="space-y-1">
          {featuredResources.map((res, i) => (
            <Link 
              key={i}
              to={res.path}
              className="flex flex-col md:flex-row md:items-center py-4 group hover:bg-brand-blue/5 px-4 -mx-4 rounded-lg transition-colors border-b border-slate-50 dark:border-white/5 last:border-b-0 !border-b-0 !no-underline"
            >
              <span className="text-sm text-slate-400 w-32 shrink-0 font-mono">{res.date}</span>
              <span className="text-lg font-medium text-brand-blue group-hover:text-blue-700 transition-colors">{res.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
