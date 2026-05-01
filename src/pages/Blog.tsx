import React from 'react';
import { Link } from 'react-router-dom';
import { Hash, ChevronRight, Search, Filter } from 'lucide-react';
import { posts } from '@/lib/data';
import { formatDate } from '@/lib/utils';

export default function Blog() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories: string[] = ['All', ...Array.from(new Set(posts.map(p => p.category)))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-display font-bold mb-4">Blog</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Technical articles about mobile networks, 5G optimization, AI in telecom, and professional productivity tools.
        </p>
      </header>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center py-6 border-y border-slate-100 dark:border-slate-800">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search articles..." 
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
          />
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          <Filter size={16} className="text-slate-400 hidden md:block" />
          {categories.map((cat: string) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat 
                ? 'bg-brand-blue text-white' 
                : 'bg-slate-50 dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog List */}
      <div className="space-y-16">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article key={post.id} className="group flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider">
                  <span className="text-brand-blue px-2 py-1 rounded bg-brand-blue/10">{post.category}</span>
                  <span className="text-slate-400">{formatDate(post.date)}</span>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1 text-[10px] bg-slate-50 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-800 text-slate-500">
                      <Hash size={10} /> {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                   <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white hover:text-brand-blue dark:hover:text-brand-blue"
                  >
                    Read More <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="py-20 text-center text-slate-500">
            <p className="text-lg">No posts found matching your criteria.</p>
            <button 
              onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
              className="mt-4 text-brand-blue hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
