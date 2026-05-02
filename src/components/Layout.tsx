import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Home, 
  User, 
  BookOpen, 
  Video, 
  Smartphone, 
  Mail, 
  Github, 
  Linkedin, 
  Youtube,
  Sun,
  Moon,
  Rss,
  Layers,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { layoutContent } from '@/content/pages';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navItems = [
    { name: 'Blog', path: '/blog', icon: <span className="text-base">📓</span> },
    { name: 'Media Hub', path: '/media', icon: <span className="text-base">📹</span> },
    { name: 'Resources', path: '/resources', icon: <span className="text-base">🛠️</span> },
    { name: 'About Me', path: '/about', icon: <span className="text-base">👤</span> },
    { name: 'Contact', path: '/contact', icon: <span className="text-base">📧</span> },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#fdf6e3] dark:bg-slate-950 transition-colors duration-300">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 px-8 py-10 bg-[#f8f3e3] dark:bg-slate-900/40 border-r border-[#e9e2cb] dark:border-white/5">
        <div className="mb-10">
          <Link to="/" className="flex items-center gap-2 group !border-b-0">
            <div className="w-10 h-10 rounded overflow-hidden bg-slate-900 dark:bg-white flex items-center justify-center">
              <img
                src="/My_photo.jpg"
                alt="Fitsum logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <span className="font-brand font-bold text-[19px] leading-tight group-hover:text-brand-blue transition-colors">{layoutContent.brandName}</span>
            <div className="w-2.5 h-2.5 rounded-full bg-brand-blue ml-1 shadow-sm" />
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-auto text-slate-400 hover:text-amber-500 transition-colors"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </Link>
        </div>

        <div className="mb-10 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 !mt-0 !mb-2">About Me</h3>
          <p className="text-sm text-slate-700 dark:text-slate-400 leading-normal mb-0">
            {layoutContent.sidebarAbout}
          </p>
        </div>

        <nav className="flex-1 space-y-1 mb-10">
          <Link to="/" className="sidebar-link mb-2 !border-b-0">
            <span className="text-base">🏠</span> Home
          </Link>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                cn("sidebar-link", isActive && "active")
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="space-y-4 border-t border-slate-200 dark:border-white/5 pt-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Stay Connected</h3>
          <div className="space-y-2">
            <Link to="/contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-blue flex items-center gap-2">
              <Mail size={14} /> {layoutContent.mobileContact}
            </Link>
            <a href="https://linkedin.com/in/fitsum-mergia-6588176a" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-blue flex items-center gap-2">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="https://www.youtube.com/@EthioTechVibes" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-red-500 flex items-center gap-2">
              <Youtube size={14} /> YouTube
            </a>
            <Link to="/rss" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-blue flex items-center gap-2">
              <Rss size={14} /> RSS Feed
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Nav */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-brand-blue flex items-center justify-center">
            <img
              src="/My_photo.jpg"
              alt="Fitsum logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          <span className="font-display font-bold">{layoutContent.brandName}</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 dark:text-slate-300"
        >
          <div className={cn("w-6 h-0.5 bg-current transition-all mb-1.5", isMobileMenuOpen && "rotate-45 translate-y-2")} />
          <div className={cn("w-6 h-0.5 bg-current transition-all mb-1.5", isMobileMenuOpen && "opacity-0")} />
          <div className={cn("w-6 h-0.5 bg-current transition-all", isMobileMenuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white dark:bg-slate-950 flex flex-col p-8 pt-24 animate-in fade-in slide-in-from-top duration-300">
          <nav className="space-y-4 text-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-2xl font-display font-semibold hover:text-brand-blue"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex justify-center gap-8 py-8 border-t border-slate-100 dark:border-slate-800">
             <button onClick={() => setIsDarkMode(!isDarkMode)}>
               {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
             </button>
             <a href="#"><Github size={24} /></a>
             <a href="#"><Linkedin size={24} /></a>
             <a href="#"><Youtube size={24} /></a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container-custom min-h-screen">
          {children}
          
          <footer className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-4">
            <div>
              © {new Date().getFullYear()} Fitsum Mergia. Built with React & Tailwind.
            </div>
            <div className="flex gap-6 items-center">
              <a href="tel:+251912345678" className="hover:text-brand-blue flex items-center gap-1">📞 +251 912 345 678</a>
              <a href="mailto:fitsummergia@gmail.com" className="hover:text-brand-blue flex items-center gap-1">✉️ fitsummergia@gmail.com</a>
              <Link to="/rss" className="flex items-center gap-1 hover:text-brand-blue"><Rss size={14} /> RSS</Link>
              <a href="https://github.com/FitsumMergia" className="hover:text-brand-blue">GitHub</a>
              <a href="https://www.youtube.com/@EthioTechVibes" className="hover:text-brand-blue">YouTube</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
