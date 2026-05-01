import React from 'react';
import { Layers, Bookmark, ExternalLink, Download, ArrowRight, Settings, Info } from 'lucide-react';

export default function Resources() {
  const sections = [
    {
      title: 'Telecom Learning',
      description: 'Foundational content for RF and RAN engineers.',
      items: [
        { name: '5G NR Optimization Guide', type: 'PDF', link: '#' },
        { name: 'LTE Handover Workbook', type: 'Templates', link: '#' },
        { name: 'O-RAN Alliance Docs', type: 'External', link: '#' },
      ]
    },
    {
      title: 'Productivity & Tools',
      description: 'Scripts and templates to speed up your analysis.',
      items: [
        { name: 'Power BI Telecom Dashboard', type: 'Template', link: '#' },
        { name: 'Python RAN Parser', type: 'Code', link: '#' },
        { name: 'Network Planning Sheet', type: 'Excel', link: '#' },
      ]
    },
    {
      title: 'Recommended Reading',
      description: 'Books that shaped my understanding of the industry.',
      items: [
        { name: '5G NR: The Next Generation', type: 'Book', link: '#' },
        { name: 'AI for Wireless Networks', type: 'Book', link: '#' },
        { name: 'Clean Code in Python', type: 'Book', link: '#' },
      ]
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-display font-bold mb-4">Resources</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          A curated collection of guides, templates, and tools to help you master the telecom landscape and boost your productivity.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, i) => (
          <div key={i} className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                  <Bookmark size={20} />
               </div>
               <h2 className="text-xl font-bold">{section.title}</h2>
            </div>
            <p className="text-sm text-slate-500">{section.description}</p>
            <div className="space-y-3">
              {section.items.map((item, j) => (
                <a 
                  key={j} 
                  href={item.link}
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-brand-blue/30 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all group"
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-sm group-hover:text-brand-blue transition-colors">{item.name}</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">{item.type}</span>
                  </div>
                  <Download size={14} className="text-slate-300 group-hover:text-brand-blue transition-all" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-8">
        <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-brand-blue shadow-sm shrink-0">
          <Settings size={40} className="animate-spin-slow" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">Build Your Own Tools</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            I'm currently developing a Python-based RAN KPI automation suite. Members of my newsletter get early beta access.
          </p>
        </div>
        <button className="px-6 py-3 bg-brand-blue text-white rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shrink-0">
          Get Early Access <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
