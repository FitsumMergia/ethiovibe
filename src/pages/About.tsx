import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Activity, GraduationCap, Cpu, Globe, Rocket, Code, Award, CheckCircle2, User } from 'lucide-react';
import { aboutContent } from '@/content/pages';

export default function About() {
  const experiences = [
    {
      title: 'RAN Optimization Manager',
      company: 'Ethio Telecom',
      period: '2019 – Present',
      description: 'Leading end-to-end performance and strategic evolution of the access network, with a focus on KPI excellence across GSM, UMTS, LTE, and 5G NR technologies.'
    },
    {
      title: 'Wireless Optimization Supervisor',
      company: 'Ethio Telecom',
      period: '2014 – 2019',
      description: 'Supervised wireless optimization teams and supported large-scale LTE deployments, including performance tuning and cross-vendor coordination.'
    },
    {
      title: 'RAN Optimization Engineer',
      company: 'Ethio Telecom',
      period: '2010 – 2014',
      description: 'Executed radio access optimization and troubleshooting across multi-vendor networks while improving network quality and stability.'
    },
    {
      title: 'Rollout Engineer',
      company: 'ETC',
      period: '2008 – 2010',
      description: 'Supported network rollout activities, site commissioning, and RF planning for early-generation mobile infrastructure.'
    }
  ];

  const skills = [
    { category: 'Strategic Expertise', items: ['Technology Sunset Strategies', 'Spectrum Management & Refarming', 'AI & O-RAN Adoption Strategy', 'Future-Proofing Infrastructure', 'Strategic Vendor Management'] },
    { category: 'Technical Proficiency', items: ['Multi-Vendor RAN (Huawei, ZTE)', '5G NR / LTE-A / UMTS / GSM', 'QoS/QoE Ecosystems', 'Python, Power BI & Automation'] },
    { category: 'Leadership & Productivity', items: ['Group & Technical Leadership', 'Personal & Team Productivity', 'Public Speaking & Facilitation', 'Training & Mentorship'] }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{aboutContent.pageTitle}</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          {aboutContent.headerDescription}
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-slate-600 dark:text-slate-400">
          {aboutContent.introParagraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}

          {aboutContent.sections?.map((section) => (
            <div key={section.title} className="space-y-3 pt-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.title}</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center min-h-[420px]">
          <img 
            src="Fitsum_photo.png" 
            alt="Fitsum Mergia" 
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      </section>

      {/* Expertise Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Award className="text-brand-blue" size={24} /> Expertise & Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold mb-4 text-brand-blue uppercase text-xs tracking-widest">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={16} className="text-brand-cyan shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Rocket className="text-brand-blue" size={24} /> Career Journey
        </h2>
        <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-2 border-brand-blue z-10" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                <span className="text-xs font-mono text-brand-blue bg-brand-blue/5 px-2 py-0.5 rounded border border-brand-blue/20">{exp.period}</span>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-2">{exp.company}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <GraduationCap className="text-brand-blue" size={24} /> Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutContent.education?.map((row) => (
            <div key={`${row.degree}-${row.institution}`} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <p className="font-semibold text-slate-900 dark:text-white">{row.degree}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{row.institution}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
