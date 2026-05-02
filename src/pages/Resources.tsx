import React from 'react';
import { Layers, Bookmark, ExternalLink, Download, ArrowRight, Settings, Info, FileText, Code, BookOpen, Users, Award, Star, Github, FileSpreadsheet } from 'lucide-react';

export default function Resources() {
  const sections = [
    {
      title: 'Productivity and Telecom Tools',
      description: 'Scripts, templates, and open-source tools to boost your telecom engineering productivity.',
      icon: <Code className="text-green-600" size={24} />,
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      borderColor: 'border-green-200 dark:border-green-800',
      accentColor: 'text-green-600',
      items: [
        {
          name: 'RAN Optimization Toolkit',
          type: 'GitHub Repository',
          overview: 'Comprehensive Python toolkit for RAN performance analysis, KPI monitoring, and automated optimization scripts.',
          source: 'GitHub',
          author: 'Fitsum Mergia',
          link: 'https://github.com/fitsum-mergia/ran-optimization-toolkit',
          featured: false
        },
        {
          name: 'Power BI Telecom Dashboard',
          type: 'Dashboard Template',
          overview: 'Pre-built Power BI template for telecom KPI visualization with automated data refresh and custom calculations.',
          source: 'Microsoft Power BI',
          author: 'Fitsum Mergia',
          link: '#',
          featured: false
        },
        {
          name: 'LTE Network Planning Calculator',
          type: 'Excel Tool',
          overview: 'Advanced Excel-based calculator for LTE network dimensioning, capacity planning, and coverage analysis.',
          source: 'GitHub',
          author: 'RAN Engineering Community',
          link: 'https://github.com/example/lte-planning-calculator',
          featured: false
        },
        {
          name: 'Telecom KPI Dashboard Templates',
          type: 'Power BI Templates',
          overview: 'Ready-to-use Power BI templates for telecom network monitoring with automated data connectors and custom visualizations.',
          source: 'GitHub',
          author: 'Fitsum Mergia',
          link: 'https://github.com/fitsum-mergia/telecom-kpi-dashboards',
          featured: false
        },
        {
          name: 'RAN Configuration Parser',
          type: 'Python Library',
          overview: 'Python library for parsing and analyzing RAN configuration files from major vendors (Ericsson, Huawei, Nokia).',
          source: 'GitHub',
          author: 'Open Source Community',
          link: 'https://github.com/example/ran-config-parser',
          featured: false
        },
        {
          name: 'Python RAN Parser',
          type: 'Code Library',
          overview: 'Python scripts for parsing RAN configuration files, log analysis, and automated report generation.',
          source: 'Open Source',
          author: 'RAN Engineering Community',
          link: '#',
          featured: false
        },
        {
          name: 'Network Planning Sheet',
          type: 'Excel Template',
          overview: 'Advanced Excel workbook for network capacity planning, coverage analysis, and frequency planning.',
          source: 'RF Engineering Tools',
          author: 'Telecom Planning Experts',
          link: '#',
          featured: false
        },
      ]
    },
    {
      title: 'Study Notes (Cheatsheet)',
      description: 'Quick-reference guides and interactive study materials for telecom concepts.',
      icon: <FileSpreadsheet className="text-orange-600" size={24} />,
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      borderColor: 'border-orange-200 dark:border-orange-800',
      accentColor: 'text-orange-600',
      items: [
        {
          name: '5G Frame Structure Cheatsheet',
          type: 'Interactive Cheatsheet',
          overview: 'Visual guide to 5G NR frame structures, slot formats, and timing relationships with interactive examples.',
          source: 'ShareTechnote',
          author: 'ShareTechnote Team',
          link: 'https://www.sharetechnote.com/html/5G/5G_FrameStructure.html',
          featured: false
        },
        {
          name: '5G Numerology Reference Guide',
          type: 'Cheatsheet',
          overview: 'Complete reference for 5G NR numerology, subcarrier spacing, and frame timing calculations.',
          source: 'ShareTechnote',
          author: 'ShareTechnote Team',
          link: 'https://www.sharetechnote.com/html/5G/5G_Numerology.html',
          featured: false
        },
        {
          name: 'LTE Frame Structure Basics',
          type: 'HTML Cheatsheet',
          overview: 'Fundamental LTE frame structure concepts with timing diagrams and frequency domain explanations.',
          source: 'Local Study Notes',
          author: 'Fitsum Mergia',
          link: '/study-notes/lte-frame-structure.html',
          featured: false
        },
        {
          name: 'RAN KPI Reference Guide',
          type: 'HTML Cheatsheet',
          overview: 'Comprehensive reference for key RAN performance indicators, calculation formulas, and optimization targets.',
          source: 'Local Study Notes',
          author: 'Fitsum Mergia',
          link: '/study-notes/ran-kpi-reference.html',
          featured: false
        },
      ]
    },
    {
      title: 'Recommended Reading',
      description: 'Books that shaped my understanding of the industry.',
      icon: <BookOpen className="text-purple-600" size={24} />,
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      accentColor: 'text-purple-600',
      items: [
        {
          name: '5G NR: The Next Generation Wireless Access Technology',
          type: 'Technical Book',
          overview: 'Comprehensive coverage of 5G NR physical layer, protocols, and network architecture fundamentals.',
          source: 'Academic Press',
          author: 'Erik Dahlman, Stefan Parkvall, Johan Sköld',
          link: '#',
          featured: false
        },
        {
          name: 'AI for Wireless Networks',
          type: 'Research Publication',
          overview: 'Exploration of artificial intelligence applications in wireless communication systems and network optimization.',
          source: 'IEEE Publications',
          author: 'Wireless AI Research Group',
          link: '#',
          featured: false
        },
        {
          name: 'Clean Code in Python',
          type: 'Programming Guide',
          overview: 'Best practices for writing maintainable, efficient Python code with telecom automation examples.',
          source: 'Packt Publishing',
          author: 'Mariano Anaya',
          link: '#',
          featured: false
        },
      ]
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-display font-bold mb-4">Resources</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          A curated collection of guides, templates, and tools to help you master the telecom landscape and boost your productivity.
        </p>
      </header>

      <div className="space-y-12">
        {sections.map((section, i) => (
          <div key={i} className={`p-8 rounded-3xl ${section.bgColor} border ${section.borderColor}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm`}>
                {section.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
                <p className="text-slate-600 dark:text-slate-400">{section.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {section.items.map((item, j) => (
                <div
                  key={j}
                  className={`relative p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all group ${
                    item.featured ? 'ring-2 ring-yellow-400 dark:ring-yellow-500' : ''
                  }`}
                >
                  {item.featured && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star size={12} className="text-yellow-900 fill-current" />
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight mb-2 group-hover:text-brand-blue transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${section.bgColor} ${section.accentColor} border ${section.borderColor}`}>
                          {item.type}
                        </span>
                        {item.featured && (
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    <a
                      href={item.link}
                      className={`w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all group-hover:scale-110 ${
                        item.link === '#' ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      onClick={(e) => item.link === '#' && e.preventDefault()}
                    >
                      <Download size={16} />
                    </a>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {item.overview}
                  </p>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                      <Info size={12} />
                      <span>{item.source}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                      <Users size={12} />
                      <span>{item.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
