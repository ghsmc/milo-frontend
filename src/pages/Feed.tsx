import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Send, Star, ArrowUpRight, Search,
  Home, Bell, UserCircle2, X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchFilters } from '../components/SearchFilters';

interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: string;
  description: string;
  postedDate: string;
  skills: string[];
  type: string;
  experience: string;
  metrics: {
    trajectory: number;
    valuation?: string;
    funding?: string;
    lastRaised?: string;
    age?: string;
    employees: string;
    openJobs: number;
  };
  badges: {
    unicorn?: boolean;
    trueUpRemote200?: boolean;
  };
}

const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Machine Learning Engineer',
    company: 'OpenAI',
    companyLogo: 'https://img.logo.dev/openai.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
    location: 'San Francisco, CA',
    salary: '$200K - $350K',
    description: 'Join our team to work on cutting-edge language models and AI systems. Focus on model architecture, training infrastructure, and scalability.',
    postedDate: '2d ago',
    skills: ['Python', 'PyTorch', 'Distributed Systems', 'ML Infrastructure'],
    type: 'Full-time',
    experience: 'Senior',
    metrics: {
      trajectory: 95,
      valuation: '$80B',
      funding: '$11.3B',
      lastRaised: '1.5y ago',
      age: '8 yrs',
      employees: '2,000',
      openJobs: 156
    },
    badges: {
      unicorn: true,
      trueUpRemote200: false
    }
  },
  {
    id: '2',
    title: 'Software Engineer, Frontend',
    company: 'Stripe',
    companyLogo: 'https://img.logo.dev/stripe.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
    location: 'Remote',
    salary: '$150K - $220K',
    description: 'Build the future of financial infrastructure for the internet. Work on complex UI components and design systems.',
    postedDate: '3d ago',
    skills: ['React', 'TypeScript', 'GraphQL', 'Design Systems'],
    type: 'Full-time',
    experience: 'Mid-Senior',
    metrics: {
      trajectory: 92,
      valuation: '$95B',
      funding: 'Private',
      age: '12 yrs',
      employees: '8,000',
      openJobs: 245
    },
    badges: {
      unicorn: true
    }
  },
  {
    id: '3',
    title: 'Data Engineer',
    company: 'Snowflake',
    companyLogo: 'https://img.logo.dev/snowflake.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
    location: 'San Mateo, CA',
    salary: '$160K - $240K',
    description: 'Design and implement data pipelines, optimize query performance, and work with large-scale distributed systems.',
    postedDate: '1w ago',
    skills: ['SQL', 'Python', 'ETL', 'Data Warehousing'],
    type: 'Full-time',
    experience: 'Mid-Level',
    metrics: {
      trajectory: 88,
      valuation: '$85B',
      funding: 'Public',
      age: '10 yrs',
      employees: '5,000',
      openJobs: 178
    },
    badges: {
      unicorn: true
    }
  },
  {
    id: '4',
    title: 'ML Research Scientist',
    company: 'Anthropic',
    companyLogo: 'https://img.logo.dev/anthropic.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
    location: 'San Francisco, CA',
    salary: '$180K - $280K',
    description: 'Research and develop advanced AI systems with a focus on safety and ethics. Work on cutting-edge language models and reinforcement learning.',
    postedDate: '5d ago',
    skills: ['Deep Learning', 'PyTorch', 'Research', 'NLP'],
    type: 'Full-time',
    experience: 'Senior',
    metrics: {
      trajectory: 94,
      valuation: '$4.1B',
      funding: '$1.3B',
      lastRaised: '6m ago',
      age: '3 yrs',
      employees: '150',
      openJobs: 45
    },
    badges: {
      unicorn: true,
      trueUpRemote200: true
    }
  },
  {
    id: '5',
    title: 'Software Engineer, Backend',
    company: 'Figma',
    companyLogo: 'https://img.logo.dev/figma.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ',
    location: 'New York, NY',
    salary: '$170K - $250K',
    description: 'Build scalable backend systems for real-time collaboration features. Work on distributed systems and high-performance computing.',
    postedDate: '1w ago',
    skills: ['Go', 'Kubernetes', 'gRPC', 'Distributed Systems'],
    type: 'Full-time',
    experience: 'Mid-Senior',
    metrics: {
      trajectory: 91,
      valuation: '$20B',
      funding: 'Acquired',
      lastRaised: '1y ago',
      age: '7 yrs',
      employees: '1,200',
      openJobs: 89
    },
    badges: {
      unicorn: true
    }
  }
];

export function Feed() {
  const [searchQuery, setSearchQuery] = useState('');
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set());
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    experience: new Set<string>(),
    jobType: new Set<string>(),
    salary: new Set<string>(),
    location: new Set<string>()
  });
  const [showScrollShadow, setShowScrollShadow] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const listingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (listingsRef.current) {
        setShowScrollShadow(listingsRef.current.scrollTop > 0);
      }
    };

    const listingsContainer = listingsRef.current;
    if (listingsContainer) {
      listingsContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (listingsContainer) {
        listingsContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const toggleFilter = (category: keyof typeof filters, value: string) => {
    setFilters(prev => {
      const next = { ...prev };
      const set = new Set(prev[category]);
      if (set.has(value)) {
        set.delete(value);
      } else {
        set.add(value);
      }
      next[category] = set;
      return next;
    });
  };

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs(prev => {
      const next = new Set(prev);
      if (next.has(jobId)) {
        next.delete(jobId);
      } else {
        next.add(jobId);
      }
      return next;
    });
  };

  const filteredJobs = jobs.filter(job => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      job.title.toLowerCase().includes(searchLower) ||
      job.company.toLowerCase().includes(searchLower) ||
      job.location.toLowerCase().includes(searchLower) ||
      job.description.toLowerCase().includes(searchLower) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchLower));

    const matchesExperience = filters.experience.size === 0 || filters.experience.has(job.experience);
    const matchesJobType = filters.jobType.size === 0 || filters.jobType.has(job.type);
    const matchesLocation = filters.location.size === 0 || 
      Array.from(filters.location).some(loc => job.location.includes(loc));

    return matchesSearch && matchesExperience && matchesJobType && matchesLocation;
  });

  const categories = [
    { id: 'companies', image: '/working.png', label: 'Companies' },
    { id: 'jobs', image: '/analytics.png', label: 'Jobs' },
    { id: 'research', image: '/classes.png', label: 'Research' },
    { id: 'clubs', image: '/crowd.png', label: 'Clubs & Courses' }
  ];

  const trendingSearches = [
    "Software Engineering Internship",
    "Remote AI Research",
    "Startup Jobs in NYC",
    "Summer Research Programs"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 w-80 z-50 md:hidden"
            >
              <SearchFilters isDark={false} />
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <SearchFilters isDark={false} />
      </div>

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
                >
                  <Search size={20} />
                </button>
                <Link
                  to="/"
                  className="flex items-center gap-2 px-2 py-1 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Back</span>
                </Link>
              </div>

              <div className="flex items-center">
                <span className="text-lg font-bold tracking-wide">MILO</span>
              </div>

              <div className="flex items-center">
                <img 
                  src="https://gmccain.com/milo.png"
                  alt="Milo"
                  className="h-8 w-8 rounded-lg"
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Category Grid */}
        <div className="grid grid-cols-4 gap-2 p-2 bg-white border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex flex-col items-center justify-center p-2 rounded-lg
                transition-all duration-200
                ${activeCategory === category.id 
                  ? 'bg-gray-100 scale-95'
                  : 'hover:bg-gray-50'
                }
              `}
            >
              <div className="w-8 h-8 mb-1">
                <img 
                  src={category.image}
                  alt={category.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[10px] font-medium text-gray-700">
                {category.label}
              </span>
            </button>
          ))}
        </div>

        {/* Enhanced Search Bar */}
        <div className="flex-shrink-0 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="relative">
              <div className="relative rounded-xl border border-gray-200 bg-gray-50 hover:bg-white transition-colors duration-200">
                <div className="flex items-center px-4 py-3">
                  <img 
                    src="https://gmccain.com/milo.png"
                    alt="Milo"
                    className="w-6 h-6 rounded-lg mr-3"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Chat with Milo about opportunities..."
                    className="flex-1 bg-transparent text-[14px] outline-none placeholder:text-gray-500"
                  />
                  <button 
                    className={`
                      p-1.5 rounded-lg transition-colors
                      ${searchQuery.trim() 
                        ? 'text-blue-600 hover:bg-blue-50' 
                        : 'text-gray-400'
                      }
                    `}
                  >
                    <Send size={18} className="rotate-90" />
                  </button>
                </div>
              </div>

              {/* Trending Searches */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {trendingSearches.map((search, i) => (
                  <button
                    key={i}
                    onClick={() => setSearchQuery(search)}
                    className="text-[11px] px-2 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div 
          ref={listingsRef}
          className="flex-1 overflow-y-auto hide-scrollbar relative scroll-smooth pb-20"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Job Listings
              </h1>
              <p className="mt-1 text-gray-500">
                {filteredJobs.length} opportunities available
              </p>
            </div>

            <div className="space-y-2">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={job.companyLogo}
                      alt={job.company}
                      className="w-8 h-8 rounded bg-white flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="text-[13px] font-medium text-gray-900 truncate">
                              {job.title}
                            </h3>
                            <ArrowUpRight size={13} className="text-gray-400 flex-shrink-0" />
                          </div>
                          <div className="text-[12px] text-gray-600 line-clamp-2 mt-0.5">
                            {job.description}
                          </div>
                          {job.salary && (
                            <div className="mt-1 text-[13px] font-medium text-emerald-600">
                              {job.salary}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-end flex-shrink-0">
                          <div className="text-[11px] uppercase tracking-wide font-medium text-gray-500">
                            {job.location}
                          </div>
                          <div className="text-[11px] text-gray-500 mt-0.5">
                            {job.postedDate}
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-1">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-gray-100 text-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className="px-1.5 py-0.5 rounded font-mono text-white text-xs bg-emerald-500">
                              {job.metrics.trajectory}
                            </div>
                            <span className="text-[11px] text-gray-500">
                              Match
                            </span>
                          </div>
                          {job.metrics.valuation && (
                            <div className="flex items-center gap-1">
                              <span className="text-[11px] text-gray-500">
                                {job.metrics.valuation}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleSaveJob(job.id)}
                            className={`
                              p-1.5 rounded-lg transition-colors
                              ${savedJobs.has(job.id)
                                ? 'text-yellow-500 hover:bg-yellow-50'
                                : 'text-gray-400 hover:bg-gray-100'
                              }
                            `}
                          >
                            <Star size={16} fill={savedJobs.has(job.id) ? 'currentColor' : 'none'} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around px-6 pb-safe">
          <button className="p-2 text-gray-900">
            <Home size={24} />
          </button>
          <button className="p-2 text-gray-500">
            <Search size={24} />
          </button>
          <button className="p-2 text-gray-500">
            <Bell size={24} />
          </button>
          <button className="p-2 text-gray-500">
            <UserCircle2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feed;