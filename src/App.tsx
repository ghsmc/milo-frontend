import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, X, ArrowLeft, ChevronDown, Briefcase, ChevronUp, PanelRightClose, PanelRightOpen, ChevronRight, UserCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchFilters } from './components/SearchFilters';
import { JobList } from './components/JobList';
import { ChatInput } from './components/ChatInput';
import { ThemeSelector } from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';
import { StreamingText } from './components/StreamingText';
import { LoadingMilo } from './components/LoadingMilo';
import { HomePage } from './components/HomePage';
import { ProfilePage } from './components/ProfilePage';
import { Conviction } from './pages/Conviction';
import { Feed } from './pages/Feed';
import { getGPTResponse } from './services/ai';

const categories = [
  { 
    id: 'jobs', 
    label: 'Jobs & Internships', 
    icon: '/working.png',
    color: '#10a37f',
    question: "What would you like to do?",
    subheader: "Chat with Milo to discover meaningful career opportunities curated for you 🚀",
    recommendationTitle: "Recommended Jobs",
    recommendationSubtitle: "Curated opportunities based on your preferences"
  },
  { 
    id: 'research', 
    label: 'Research', 
    icon: '/analytics.png',
    color: '#6b40d8',
    question: "What research interests you?",
    subheader: "Explore cutting-edge research opportunities and connect with leading faculty mentors 🔬",
    recommendationTitle: "Recommended Labs",
    recommendationSubtitle: "Leading research labs matching your interests"
  },
  { 
    id: 'clubs', 
    label: 'Yale Clubs', 
    icon: '/crowd.png',
    color: '#1b8eff',
    question: "What activities interest you?",
    subheader: "Find your community and get involved with Yale's diverse student organizations 🤝",
    recommendationTitle: "Recommended Clubs",
    recommendationSubtitle: "Student organizations aligned with your interests"
  },
  { 
    id: 'courses', 
    label: 'Yale Courses', 
    icon: '/classes.png',
    color: '#ea580c',
    question: "What would you like to learn?",
    subheader: "Discover courses that align with your academic goals and career aspirations 📚",
    recommendationTitle: "Recommended Courses",
    recommendationSubtitle: "Classes tailored to your academic interests"
  }
];

const exampleJobs = [
  {
    id: '1',
    companyLogo: "https://img.logo.dev/apple.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ",
    companyName: "Apple",
    jobTitle: "Senior Software Engineer",
    description: "AI/ML Infrastructure",
    location: "Cupertino, CA",
    postedDate: "3 days",
    salary: "$165K - $211K",
    skills: ["Swift", "Python", "ML"],
    metrics: {
      trajectory: 92,
      valuation: "$3T",
      funding: "Public",
      lastRaised: "IPO",
      age: "48 yrs",
      employees: "164,000",
      openJobs: 259
    },
    badges: {
      unicorn: true,
      trueUpRemote200: true
    }
  },
  {
    id: '2',
    companyLogo: "https://img.logo.dev/openai.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ",
    companyName: "OpenAI",
    jobTitle: "ML Engineer",
    description: "Advanced AI research",
    location: "San Francisco",
    postedDate: "1 day",
    salary: "$180K - $250K",
    skills: ["Python", "PyTorch", "ML"],
    metrics: {
      trajectory: 95,
      valuation: "$80B",
      funding: "$11.3B",
      lastRaised: "1.5y ago",
      age: "8 yrs",
      employees: "2,000",
      openJobs: 156
    },
    badges: {
      unicorn: true,
      trueUpRemote200: false
    }
  }
];

const exampleLabs = [
  {
    id: '1',
    companyLogo: "https://img.logo.dev/yale.edu?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ",
    companyName: "Yale Quantum Institute",
    jobTitle: "Quantum Computing Research",
    description: "Quantum algorithms and error correction",
    location: "Becton Center",
    postedDate: "Active",
    salary: "Funded",
    skills: ["Quantum Computing", "Physics", "Mathematics"],
    metrics: {
      trajectory: 95,
      funding: "$25M",
      lastRaised: "1y ago",
      age: "8 yrs",
      employees: "45",
      openJobs: 12
    },
    badges: {
      unicorn: true
    },
    detailedDescription: "The Yale Quantum Institute focuses on developing quantum algorithms, error correction methods, and novel quantum computing architectures. Current research emphasizes improving quantum circuit reliability, developing new quantum algorithms for optimization and simulation, and exploring quantum-classical hybrid systems.",
    investigators: [
      {
        name: "Dr. Sarah Chen",
        title: "Director of Quantum Computing Research",
        institution: "Yale University",
        email: "sarah.chen@yale.edu"
      },
      {
        name: "Dr. Michael Rodriguez",
        title: "Principal Investigator",
        institution: "Yale University",
        email: "m.rodriguez@yale.edu"
      }
    ],
    publications: [
      {
        title: "Novel Quantum Error Correction Methods for Superconducting Qubits",
        journal: "Nature Quantum Information",
        date: "2024",
        url: "https://nature.com/articles/s41534-024-00789-9"
      },
      {
        title: "Hybrid Quantum-Classical Algorithms for Optimization",
        journal: "Physical Review Letters",
        date: "2024",
        url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.132.120501"
      }
    ],
    summerProgram: {
      name: "Yale Quantum Computing Summer Research Program",
      description: "10-week intensive research experience in quantum computing and information science",
      eligibility: [
        "Junior or Senior standing",
        "Strong background in physics or computer science",
        "Previous coursework in quantum mechanics",
        "Programming experience (Python preferred)"
      ],
      funding: "$6,000 stipend + housing",
      deadline: "February 15, 2025"
    }
  },
  {
    id: '2',
    companyLogo: "https://img.logo.dev/yale.edu?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ",
    companyName: "Yale SEAS",
    jobTitle: "AI & Robotics Lab",
    description: "Machine learning and robotics research",
    location: "17 Hillhouse",
    postedDate: "Active",
    salary: "Funded",
    skills: ["Robotics", "ML", "Computer Vision"],
    metrics: {
      trajectory: 92,
      funding: "$18M",
      lastRaised: "2y ago",
      age: "12 yrs",
      employees: "35",
      openJobs: 8
    },
    badges: {
      unicorn: true
    },
    detailedDescription: "The AI & Robotics Lab at Yale SEAS focuses on developing advanced machine learning algorithms for robotic systems, with particular emphasis on computer vision, reinforcement learning, and human-robot interaction. Current projects include adaptive robotic manipulation, multi-agent systems, and learning from demonstration.",
    investigators: [
      {
        name: "Dr. James Wilson",
        title: "Director of Robotics Research",
        institution: "Yale University",
        email: "james.wilson@yale.edu"
      },
      {
        name: "Dr. Emily Zhang",
        title: "Assistant Professor",
        institution: "Yale University",
        email: "emily.zhang@yale.edu"
      }
    ],
    publications: [
      {
        title: "Deep Reinforcement Learning for Robotic Manipulation",
        journal: "IEEE Robotics and Automation Letters",
        date: "2024",
        url: "https://ieeexplore.ieee.org/document/10094567"
      },
      {
        title: "Vision-Language Models for Robot Learning",
        journal: "Conference on Robot Learning (CoRL)",
        date: "2024",
        url: "https://proceedings.mlr.press/v205/zhang24a.html"
      }
    ],
    summerProgram: {
      name: "Yale Robotics Summer Research Program",
      description: "Hands-on research experience in robotics and artificial intelligence",
      eligibility: [
        "Sophomore or Junior standing",
        "Strong programming skills",
        "Background in ML or robotics",
        "Experience with Python and PyTorch"
      ],
      funding: "$5,500 stipend + housing",
      deadline: "March 1, 2025"
    }
  }
];

const exampleClubs = [
  {
    id: '1',
    companyLogo: "https://img.logo.dev/yale.edu?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ",
    companyName: "Yale Computer Society",
    jobTitle: "Tech Community",
    description: "Programming and tech innovation",
    location: "Bass Library",
    postedDate: "Active",
    skills: ["Hackathons", "Workshops", "Projects"],
    metrics: {
      trajectory: 90,
      age: "15 yrs",
      employees: "200+",
      openJobs: 5
    },
    badges: {
      unicorn: true
    }
  },
  {
    id: '2',
    companyLogo: "https://img.logo.dev/yale.edu?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ",
    companyName: "Code4Good",
    jobTitle: "Social Impact Coding",
    description: "Tech solutions for nonprofits",
    location: "CEID",
    postedDate: "Active",
    skills: ["Web Dev", "Mobile", "Design"],
    metrics: {
      trajectory: 88,
      age: "5 yrs",
      employees: "150+",
      openJobs: 3
    },
    badges: {
      unicorn: true
    }
  }
];

const exampleCourses = [
  {
    id: '1',
    companyLogo: "https://img.logo.dev/yale.edu?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ",
    companyName: "CPSC 223",
    jobTitle: "Data Structures and Programming",
    description: "Advanced programming techniques",
    location: "AKW",
    postedDate: "Spring 2024",
    skills: ["C++", "Algorithms", "Data Structures"],
    metrics: {
      trajectory: 95,
      age: "20+ yrs",
      employees: "300+",
      openJobs: 150
    },
    badges: {
      unicorn: true
    }
  },
  {
    id: '2',
    companyLogo: "https://img.logo.dev/yale.edu?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ",
    companyName: "CPSC 323",
    jobTitle: "Systems Programming",
    description: "Low-level systems and OS",
    location: "Watson",
    postedDate: "Fall 2024",
    skills: ["C", "Assembly", "OS"],
    metrics: {
      trajectory: 92,
      age: "15+ yrs",
      employees: "250+",
      openJobs: 120
    },
    badges: {
      unicorn: true
    }
  }
];

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface CategoryChatHistory {
  messages: ChatMessage[];
  isLoading: boolean;
  isGenerating: boolean;
  isStreaming: boolean;
}

function App() {
  const { theme, activeTheme, setActiveTheme, isDark, setIsDark } = useTheme('light');
  const [activeTab, setActiveTab] = useState('jobs');
  const [chatInput, setChatInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isJobPanelOpen, setIsJobPanelOpen] = useState(true);
  const [showFAB, setShowFAB] = useState(false);
  const [showHomePage, setShowHomePage] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const lastScrollTop = useRef(0);
  const prevJobPanelState = useRef(isJobPanelOpen);

  const [categoryChats, setCategoryChats] = useState<Record<string, CategoryChatHistory>>({
    jobs: {
      messages: [{
        role: 'assistant',
        content: "Hi! I'm Milo, your AI assistant for jobs and internships. I can help you explore career opportunities and provide personalized recommendations. What kind of role are you looking for?"
      }],
      isLoading: false,
      isGenerating: false,
      isStreaming: false
    },
    research: {
      messages: [{
        role: 'assistant',
        content: "Hi! I'm Milo, your AI assistant for research opportunities. I can help you discover research labs, projects, and faculty mentors aligned with your interests. What area of research interests you?"
      }],
      isLoading: false,
      isGenerating: false,
      isStreaming: false
    },
    clubs: {
      messages: [{
        role: 'assistant',
        content: "Hi! I'm Milo, your AI assistant for Yale clubs and organizations. I can help you find communities that match your interests and goals. What kind of activities are you interested in?"
      }],
      isLoading: false,
      isGenerating: false,
      isStreaming: false
    },
    courses: {
      messages: [{
        role: 'assistant',
        content: "Hi! I'm Milo, your AI assistant for Yale courses. I can help you discover classes that align with your academic interests and career goals. What subjects would you like to explore?"
      }],
      isLoading: false,
      isGenerating: false,
      isStreaming: false
    }
  });

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const container = e.target as HTMLElement;
      const scrollTop = container.scrollTop;
      
      if (!isJobPanelOpen && (
        scrollTop < lastScrollTop.current || 
        scrollTop + container.clientHeight > container.scrollHeight - 100
      )) {
        setShowFAB(true);
      } else {
        setShowFAB(false);
      }
      
      lastScrollTop.current = scrollTop;
    };

    const chatContainer = document.querySelector('.chat-container');
    if (chatContainer) {
      chatContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (chatContainer) {
        chatContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isJobPanelOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.getElementById('mobile-sidebar');
      if (sidebar && !sidebar.contains(e.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    prevJobPanelState.current = isJobPanelOpen;
  }, [isJobPanelOpen]);

  const getExampleSearches = (category: string) => {
    switch (category) {
      case 'jobs':
        return [
          "An internship in London in Investment Banking",
          "I want to engineer Formula One cars",
          "Startup in San Francisco or Amsterdam"
        ];
      case 'research':
        return [
          "Bio research in Amazon rainforest, Brazil",
          "Alzheimer's Research at an Ivy League",
          "AI & Robotics Lab in Europe"
        ];
      case 'clubs':
        return [
          "I like singing and performing",
          "Looking for debate and public speaking",
          "Tech and entrepreneurship clubs"
        ];
      case 'courses':
        return [
          "Machine Learning and AI courses",
          "Creative Writing workshops",
          "Environmental Science electives"
        ];
      default:
        return [];
    }
  };

  const handleExampleClick = (query: string) => {
    setCategoryChats(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        messages: [
          ...prev[activeTab].messages,
          { role: 'user', content: query }
        ]
      }
    }));

    setCategoryChats(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        messages: [
          ...prev[activeTab].messages,
          { role: 'assistant', content: '' }
        ]
      }
    }));

    getGPTResponse(query, activeTab as any, (text) => {
      setCategoryChats(prev => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          messages: [
            ...prev[activeTab].messages.slice(0, -1),
            { role: 'assistant', content: text }
          ]
        }
      }));
    });
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    setCategoryChats(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        messages: [
          ...prev[activeTab].messages,
          { role: 'user', content: chatInput }
        ],
        isLoading: true,
        isGenerating: true,
        isStreaming: true
      }
    }));

    setChatInput('');

    setCategoryChats(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        messages: [
          ...prev[activeTab].messages,
          { role: 'assistant', content: '' }
        ]
      }
    }));

    getGPTResponse(chatInput, activeTab as any, (text) => {
      setCategoryChats(prev => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          messages: [
            ...prev[activeTab].messages.slice(0, -1),
            { role: 'assistant', content: text }
          ]
        }
      }));
    }).finally(() => {
      setCategoryChats(prev => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          isLoading: false,
          isGenerating: false,
          isStreaming: false
        }
      }));
    });
  };

  const activeCategory = categories.find(cat => cat.id === activeTab) || categories[0];
  const currentChat = categoryChats[activeTab];

  const getRecommendations = () => {
    switch (activeTab) {
      case 'research':
        return exampleLabs;
      case 'clubs':
        return exampleClubs;
      case 'courses':
        return exampleCourses;
      default:
        return exampleJobs;
    }
  };

  const slideVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%' },
    exit: { x: '100%' }
  };

  const slideTransition = {
    type: 'spring',
    stiffness: 400,
    damping: 30,
    mass: 0.8
  };

  const HeaderContent = () => (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setShowHomePage(true)}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <img 
          src="https://gmccain.com/milo.png"
          alt="Milo"
          className="w-8 h-8 rounded-lg"
        />
        <div className="hidden sm:block">
          <span className="text-lg font-extrabold tracking-[0.15em] sf-pro">
            MILO
          </span>
          <span className="text-lg font-normal sf-pro ml-2">
            The Discovery Engine
          </span>
        </div>
      </button>
    </div>
  );

  const MainContent = () => {
    if (showProfile) {
      return (
        <div 
          className="h-screen flex flex-col overflow-hidden"
          style={{
            backgroundColor: theme.bgColor,
            color: theme.textColor,
            height: 'calc(var(--vh, 1vh) * 100)'
          }}
        >
          <nav 
            className="sticky top-0 flex-shrink-0 h-16 md:h-20 z-50 border-b"
            style={{
              backgroundColor: theme.bgColor,
              borderColor: `${theme.subColor}33`
            }}
          >
            <div className="h-full w-full max-w-[2000px] mx-auto px-4 flex items-center justify-between">
              <button
                onClick={() => setShowProfile(false)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>
            </div>
          </nav>
          <ProfilePage isDark={isDark} onClose={() => setShowProfile(false)} />
        </div>
      );
    }

    if (showHomePage) {
      return (
        <div 
          className="h-screen flex flex-col overflow-hidden"
          style={{
            backgroundColor: theme.bgColor,
            color: theme.textColor,
            height: 'calc(var(--vh, 1vh) * 100)'
          }}
        >
          <nav 
            className="sticky top-0 flex-shrink-0 h-16 md:h-20 z-50 border-b"
            style={{
              backgroundColor: theme.bgColor,
              borderColor: `${theme.subColor}33`
            }}
          >
            <div className="h-full w-full max-w-[2000px] mx-auto px-4 flex items-center justify-between">
              <HeaderContent />

              <div className="flex items-center gap-2">
                <ThemeSelector 
                  isDark={isDark}
                  activeTheme={activeTheme}
                  onThemeChange={setActiveTheme}
                  onDarkModeChange={setIsDark}
                />
              </div>
            </div>
          </nav>

          <HomePage 
            isDark={isDark} 
            onGetStarted={() => setShowHomePage(false)} 
          />
        </div>
      );
    }

    return (
      <div 
        className="h-screen flex flex-col overflow-hidden"
        style={{
          backgroundColor: theme.bgColor,
          color: theme.textColor,
          height: 'calc(var(--vh, 1vh) * 100)'
        }}
      >
        <nav 
          className="sticky top-0 flex-shrink-0 h-16 md:h-20 z-50 border-b"
          style={{
            backgroundColor: theme.bgColor,
            borderColor: `${theme.subColor}33`
          }}
        >
          <div className="h-full w-full max-w-[2000px] mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg md:hidden hover:bg-white/5"
                style={{ color: theme.textColor }}
              >
                <Menu size={20} />
              </button>
              <HeaderContent />
            </div>

            <div className="flex items-center gap-1 md:gap-2 overflow-x-auto hide-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`
                    relative px-2 md:px-4 py-2 rounded-lg flex items-center gap-2 shrink-0
                    transition-all duration-200 group
                  `}
                  style={{
                    backgroundColor: activeTab === category.id 
                      ? isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
                      : 'transparent',
                    color: activeTab === category.id 
                      ? isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)'
                      : isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)'
                  }}
                >
                  <div 
                    className={`
                      absolute inset-0 rounded-lg transition-opacity duration-200
                      ${activeTab === category.id ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}
                    `}
                    style={{
                      backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                    }}
                  />
                  <img 
                    src={category.icon}
                    alt={category.label}
                    className={`
                      w-5 h-5 object-contain transition-transform duration-200
                      ${activeTab === category.id ? 'scale-110' : 'group-hover:scale-105'}
                    `}
                  />
                  <span className={`
                    text-sm font-medium hidden sm:block transition-colors duration-200
                    ${activeTab === category.id ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}
                  `}>
                    {category.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeSelector 
                isDark={isDark}
                activeTheme={activeTheme}
                onThemeChange={setActiveTheme}
                onDarkModeChange={setIsDark}
              />
              <button
                onClick={() => setShowProfile(true)}
                className={`
                  p-2 rounded-lg transition-colors duration-200
                  ${isDark 
                    ? 'hover:bg-white/10 text-white/60' 
                    : 'hover:bg-gray-100 text-gray-600'
                  }
                `}
              >
                <UserCircle2 size={20} />
              </button>
            </div>
          </div>
        </nav>

        <div className="flex flex-1 overflow-hidden">
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
                  id="mobile-sidebar"
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={slideTransition}
                  className="fixed inset-y-0 left-0 w-80 z-50 md:hidden"
                  style={{ backgroundColor: theme.bgColor }}
                >
                  <SearchFilters isDark={isDark} />
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="absolute top-6 right-6 p-1.5 rounded-lg hover:bg-white/5"
                    style={{ color: theme.subColor }}
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <div className="hidden md:block w-64 flex-shrink-0">
            <SearchFilters isDark={isDark} />
          </div>

          <div className="flex flex-1 flex-col md:flex-row relative">
            <div className="w-full md:w-1/2 flex flex-col relative">
              <div 
                className="h-[72px] p-4 border-b flex items-center justify-between sticky top-0 z-10"
                style={{
                  backgroundColor: theme.bgColor,
                  borderColor: `${theme.subColor}33`
                }}
              >
                <div>
                  <h2 className="text-lg font-semibold" style={{ color: theme.textColor }}>
                    {activeCategory.question}
                  </h2>
                  <p className="text-sm" style={{ color: theme.subColor }}>
                    {activeCategory.subheader}
                  </p>
                </div>
                <button
                  onClick={() => setIsJobPanelOpen(!isJobPanelOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-white/5"
                  style={{ color: theme.subColor }}
                >
                  {isJobPanelOpen ? <PanelRightClose size={16} /> : <PanelRightOpen size={16} />}
                </button>
              </div>

              <div className="flex-1 overflow-hidden">
                <div 
                  className="chat-container h-full overflow-y-auto px-4 py-4 pb-32 hide-scrollbar"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <div className="max-w-3xl mx-auto space-y-4">
                    {currentChat.messages.map((msg,index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'items-start gap-2'}`}
                      >
                        {msg.role === 'assistant' && (
                          <div className={`
                            w-8 h-8 rounded-lg overflow-hidden flex-shrink-0
                            ${isDark ? 'ring-1 ring-white/10' : 'shadow-sm'}
                          `}>
                            <img 
                              src="https://gmccain.com/milo.png"
                              alt="Milo"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className={`
                          max-w-[85%] rounded-xl px-3 py-2.5
                          ${msg.role === 'user' 
                            ? isDark 
                              ? 'bg-white/[0.07] text-white/90' 
                              : 'bg-gray-100 text-gray-900'
                            : ''
                          }
                          ${msg.role === 'assistant' ? 'rounded-tl-sm' : 'rounded-tr-sm'}
                        `}>
                          {msg.role === 'user' ? (
                            <p className="text-[14px] leading-relaxed m-0">
                              {msg.content}
                            </p>
                          ) : (
                            <div>
                              {currentChat.isLoading && index === currentChat.messages.length - 1 ? (
                                <LoadingMilo isDark={isDark} />
                              ) : (
                                <StreamingText 
                                  text={msg.content}
                                  isDark={isDark}
                                  isComplete={index < currentChat.messages.length - 1 || !currentChat.isLoading}
                                />
                              )}
                              {index === 0 && (
                                <div className="mt-2 flex flex-wrap gap-1.5">
                                  {getExampleSearches(activeTab).map((example, i) => (
                                    <button
                                      key={i}
                                      onClick={() => handleExampleClick(example)}
                                      className={`
                                        text-[11px] px-2 py-1 rounded-md transition-colors duration-200
                                        ${isDark 
                                          ? 'bg-white/[0.03] hover:bg-white/[0.06] text-white/70' 
                                          : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                                        }
                                      `}
                                    >
                                      {example}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {isJobPanelOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/50 z-20 md:hidden"
                  onClick={() => setIsJobPanelOpen(false)}
                />
              )}
            </AnimatePresence>

            <motion.div
              className="w-[90%] md:w-1/2 fixed md:relative inset-y-0 right-0 z-30 md:z-0 overflow-hidden"
              style={{
                backgroundColor: theme.bgColor
              }}
              initial="hidden"
              animate={isJobPanelOpen ? "visible" : "hidden"}
              exit="exit"
              variants={slideVariants}
              transition={slideTransition}
            >
              <div className="h-full flex flex-col">
                <div 
                  className="h-[72px] p-4 border-b flex items-center justify-between"
                  style={{
                    backgroundColor: theme.bgColor,
                    borderColor: `${theme.subColor}33`
                  }}
                >
                  <div>
                    <h2 className="text-lg font-semibold" style={{ color: theme.textColor }}>
                      {activeCategory.recommendationTitle}
                    </h2>
                    <p className="text-sm" style={{ color: theme.subColor }}>
                      {activeCategory.recommendationSubtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsJobPanelOpen(false)}
                    className="md:hidden p-2 rounded-lg hover:bg-white/5"
                    style={{ color: theme.subColor }}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="px-2 py-2">
                    <JobList jobs={getRecommendations()} isDark={isDark} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="fixed bottom-0 left-0 right-0 z-20 md:left-64">
            <ChatInput
              isDark={isDark}
              value={chatInput}
              onChange={setChatInput}
              onSend={handleSendMessage}
              isLoading={currentChat.isLoading}
              isGenerating={currentChat.isGenerating}
              isStreaming={currentChat.isStreaming}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/conviction" element={<Conviction />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/*" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;