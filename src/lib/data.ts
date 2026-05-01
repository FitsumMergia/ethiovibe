export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  readingTime: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of AI in RAN Optimization',
    slug: 'future-of-ai-in-ran-optimization',
    date: '2024-04-15',
    excerpt: 'Exploring how Artificial Intelligence is transforming Radio Access Network optimization from manual tuning to autonomous operations.',
    content: `
# The Future of AI in RAN Optimization

Radio Access Network (RAN) optimization has traditionally been a labor-intensive process involving drive testing, manual KPI analysis, and iterative parameter tuning. However, as networks evolve towards 5G Beyond and 6G, the complexity is exceeding human capabilities.

## Why AI?

The sheer number of parameters in a modern 5G NR cell combined with the dynamic nature of user traffic makes manual optimization inefficient. AI models can:

- **Predict Traffic Patterns:** Proactively adjust resources before congestion occurs.
- **Automate Root Cause Analysis:** Identify why a handover failed in milliseconds.
- **Energy Saving:** Dynamically power down network elements without impacting user experience.

## Real-World Applications

In my experience managing RAN optimization, I've seen that ML algorithms applied to SON (Self-Organizing Networks) can reduce drop call rates by up to 15% through automated neighbor relation (ANR) optimization...

Stay tuned for more technical deep dives into specific AI architectures for 5G!
    `,
    category: 'AI in Telecom',
    tags: ['5G', 'AI', 'RAN', 'Optimization'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000',
    readingTime: '5 min read'
  },
  {
    id: '2',
    title: '5G KPI Analysis: A Deep Dive for Engineers',
    slug: '5g-kpi-analysis-deep-dive',
    date: '2024-03-22',
    excerpt: 'A comprehensive guide to understanding and optimizing the most critical 5G performance indicators for modern network operations.',
    content: '# 5G KPI Analysis...',
    category: 'RAN Optimization',
    tags: ['5G', 'KPI', 'Engineering'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000',
    readingTime: '8 min read'
  },
  {
    id: '3',
    title: 'Automating Telecom Dashboards with Power BI',
    slug: 'automating-telecom-dashboards-power-bi',
    date: '2024-02-10',
    excerpt: 'Learn how to transform raw network data into actionable insights using Power BI and custom DAX queries.',
    content: '# Power BI in Telecom...',
    category: 'Automation',
    tags: ['Power BI', 'Data Science', 'Telecom'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
    readingTime: '6 min read'
  },
  {
    id: '4',
    title: 'Python for Telecom: Scripting Your Way to Efficiency',
    slug: 'python-for-telecom-scripting',
    date: '2024-01-05',
    excerpt: 'Why Python is becoming the essential skill for modern RF engineers and how to start automating your daily tasks.',
    content: '# Python for Telecom...',
    category: 'Automation',
    tags: ['Python', 'Automation', 'Coding'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000',
    readingTime: '4 min read'
  },
  {
    id: '5',
    title: 'Open RAN (O-RAN) Basics and Evolution',
    slug: 'open-ran-basics-evolution',
    date: '2023-11-20',
    excerpt: 'An introduction to the O-RAN alliance architecture and how it aims to disaggregate the traditional RAN market.',
    content: '# O-RAN Basics...',
    category: 'Telecom Evolution',
    tags: ['O-RAN', '5G', 'Architecture'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000',
    readingTime: '7 min read'
  },
  {
    id: '6',
    title: 'LTE to 5G: Handover Optimization Strategies',
    slug: 'lte-to-5g-handover-optimization',
    date: '2023-10-15',
    excerpt: 'Technical strategies for ensuring seamless mobility between 4G and 5G network layers.',
    content: '# Handover Optimization...',
    category: 'RAN Optimization',
    tags: ['LTE', '5G', 'Mobility'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000',
    readingTime: '5 min read'
  }
];

export const videoResources = [
  {
    id: 'v1',
    title: 'Introduction to 5G RAN Architecture',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    category: '5G Education'
  },
  {
    id: 'v2',
    title: 'Mastering Power BI for Network Analysts',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    category: 'Tutorial'
  }
];
