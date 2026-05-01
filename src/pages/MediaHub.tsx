import React from 'react';
import { Youtube, Search, Play, ExternalLink, Calendar, Filter } from 'lucide-react';
import { videoResources } from '@/lib/data';

export default function MediaHub() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const categories = ['All', '5G Education', 'Tutorial', 'Productivity', 'Industry Insights'];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <header className="max-w-3xl flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold mb-4">Media Hub</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Educational video content from EthioTechVibes. Mastering telecom concepts through visual storytelling.
          </p>
        </div>
        <a 
          href="https://www.youtube.com/@EthioTechVibes" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-red-700 transition-all shrink-0"
        >
          <Youtube size={20} /> Subscribe on YouTube
        </a>
      </header>

      {/* Featured Video */}
      <section className="relative aspect-video rounded-3xl overflow-hidden group border border-slate-200 dark:border-slate-800 shadow-2xl">
        <img 
          src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
          alt="Featured Video"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600 transition-all cursor-pointer">
            <Play size={32} fill="currentColor" strokeWidth={0} />
          </div>
          <span className="uppercase tracking-widest text-xs font-bold mb-2 text-red-400">Featured Presentation</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold max-w-2xl mb-4">
            AI in RAN: The Next Decade of Mobile Networks
          </h2>
          <p className="max-w-lg opacity-80 hidden md:block">
            A comprehensive look at how 5G and 6G will integrate AI agents for autonomous cell management and beamforming optimization.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoResources.map((video) => (
          <div key={video.id} className="group flex flex-col">
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-slate-100 dark:border-slate-800 shadow-sm">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                   <Play size={20} fill="currentColor" />
                 </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase text-red-500 bg-red-50 dark:bg-red-900/30 px-2 py-0.5 rounded">
                  {video.category}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                {video.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1"><Calendar size={14} /> 2 days ago</span>
                <a href={`https://youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-red-600 font-bold">
                  WATCH <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
