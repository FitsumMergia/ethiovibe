import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '@/content/blog';
import { formatDate } from '@/lib/utils';
import { ChevronLeft, Calendar, Clock, Tag, Share2, Youtube, Linkedin, Twitter } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const shareUrl = window.location.href;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-brand-blue mb-8">
        <ChevronLeft size={16} /> Back to blog
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 font-medium">
            <span className="flex items-center gap-1.5"><Calendar size={16} /> {formatDate(post.date)}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="flex items-center gap-1.5"><Clock size={16} /> {post.readingTime}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="text-brand-blue">{post.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
            {post.title}
          </h1>
          <div className="aspect-video w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </header>

        <div className="markdown-body prose prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-a:text-brand-blue">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <footer className="mt-16 pt-10 border-t border-slate-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium border border-slate-100 dark:border-slate-800">
                    <Tag size={12} /> {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="md:text-right">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Share this post</h4>
              <div className="flex justify-start md:justify-end gap-4">
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 hover:scale-110 transition-transform"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-50 text-sky-500 dark:bg-sky-900/30 hover:scale-110 transition-transform"
                >
                  <Twitter size={20} />
                </a>
                <button 
                  onClick={() => navigator.clipboard.writeText(shareUrl)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 dark:bg-slate-800 hover:scale-110 transition-transform"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-6">Leave a Comment</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Comment *
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors resize-vertical"
                  placeholder="Share your thoughts about this article..."
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-brand-blue/90 transition-colors focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </footer>
      </article>
    </div>
  );
}

function UserPlaceholder() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
