import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Activity, GraduationCap, Cpu, Globe, Rocket, Code, Award, CheckCircle2, User } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      title: 'RAN Optimization Manager',
      company: 'Leading Telecom Operator',
      period: '2020 - Present',
      description: 'Overseeing network performance across multiple regions, implementing 5G NR clusters, and leading a team of optimization specialists.'
    },
    {
      title: 'RF Planning Lead',
      company: 'International Infrastructure Ltd',
      period: '2016 - 2020',
      description: 'Designed and optimized nationwide LTE rollouts, managing cell site selection and interference mitigation strategies.'
    }
  ];

  const skills = [
    { category: 'Telecom', items: ['GSM/LTE/5G NR', 'RAN Optimization', 'Handover Management', 'SON Implementation', 'KPI Analysis'] },
    { category: 'Tech & AI', items: ['Python for Data Analysis', 'Power BI Dashboards', 'Machine Learning in RAN', 'Big Data Engineering'] },
    { category: 'Soft Skills', items: ['Technical Leadership', 'Strategic Planning', 'Educational Content Creation', 'Public Speaking'] }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Me</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          I bridge the gap between complex telecommunications infrastructure and modern artificial intelligence to build smarter, more efficient mobile networks.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-slate-600 dark:text-slate-400">
          <p>
            Hello! I'm Fitsum Mergia, a telecommunications professional with over 8 years of experience in Radio Access Network (RAN) optimization. My journey began with a curiosity about how millions of devices connect seamlessly across the globe.
          </p>
          <p>
            Today, my focus is on the next frontier: <strong>AI-driven network operations</strong>. As networks become more virtualized (O-RAN) and complex (5G NR), I believe that the traditional manual approach to network management must evolve into autonomous, self-healing systems.
          </p>
          <p>
            Beyond my corporate role, I am deeply committed to technology education. Through my platform, <strong>EthioTechVibes</strong>, I empower engineers across Africa and beyond with technical skills in telecom, productivity, and automation.
          </p>
        </div>
        
        <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group shadow-xl flex items-center justify-center">
          <img 
            src="/fitsum_photo.png" 
            alt="Fitsum Mergia" 
            className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <User size={120} className="text-slate-300 dark:text-slate-800" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 text-white z-10">
            <p className="font-display font-bold text-xl">Fitsum Mergia</p>
            <p className="text-xs opacity-80 uppercase tracking-widest font-bold">RF Expert & Content Creator</p>
          </div>
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

      {/* Philosophy */}
      <section className="p-8 md:p-12 rounded-3xl bg-slate-900 text-white overflow-hidden relative">
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <Globe className="mx-auto mb-6 text-brand-cyan" size={40} />
          <h2 className="text-2xl md:text-3xl font-display font-medium italic mb-8">
            "My mission is to decouple technical excellence from accessibility. The world's connectivity depends on shared knowledge."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-12 h-0.5 bg-brand-blue mb-4" />
            <p className="text-sm uppercase tracking-widest font-bold">Personal Vision</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <Code size={200} />
        </div>
      </section>
    </div>
  );
}
