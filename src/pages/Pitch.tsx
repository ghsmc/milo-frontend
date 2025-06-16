import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Play, Users, TrendingUp, Zap, Brain, Target, Globe, ArrowRight, Star, Building2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "MILO",
    subtitle: "Building Technology That Helps Humans Find Work That Makes Them Irreplaceable",
    content: "cover"
  },
  {
    id: 2,
    title: "THE GENERATIONAL CRISIS",
    subtitle: "Career Discovery is Fundamentally Broken",
    content: "crisis"
  },
  {
    id: 3,
    title: "THE PERFECT STORM",
    subtitle: "Three Converging Forces Creating Unprecedented Challenge",
    content: "storm"
  },
  {
    id: 4,
    title: "THE MILO BREAKTHROUGH",
    subtitle: "Revolutionary Dual-Mode AI Architecture",
    content: "breakthrough"
  },
  {
    id: 5,
    title: "DEEP TECHNICAL ARCHITECTURE",
    subtitle: "Proprietary AI Systems & Algorithms",
    content: "technical"
  },
  {
    id: 6,
    title: "SCIENTIFIC VALIDATION & RESEARCH",
    subtitle: "Evidence-Based Approach to Career-Wellbeing Connection",
    content: "research"
  },
  {
    id: 7,
    title: "PROPRIETARY DATASETS & AI TRAINING",
    subtitle: "Competitive Moats Through Data Advantages",
    content: "datasets"
  },
  {
    id: 8,
    title: "SCALABLE BUSINESS ARCHITECTURE",
    subtitle: "Multi-Layered Revenue Model with Network Effects",
    content: "business"
  },
  {
    id: 9,
    title: "COMPETITIVE DIFFERENTIATION MATRIX",
    subtitle: "Why Existing Solutions Fail & How We Win",
    content: "competitive"
  },
  {
    id: 10,
    title: "IBM WATSONX INTEGRATION STRATEGY",
    subtitle: "Technical Partnership for Enterprise-Grade Scaling",
    content: "ibm"
  },
  {
    id: 11,
    title: "GO-TO-MARKET STRATEGY & EXECUTION",
    subtitle: "Systematic Scaling from Universities to Enterprise",
    content: "gtm"
  },
  {
    id: 12,
    title: "FINANCIAL PROJECTIONS & UNIT ECONOMICS",
    subtitle: "Conservative Growth Model with Multiple Validation Points",
    content: "financial"
  },
  {
    id: 13,
    title: "THE COMPLETE FOUNDING TEAM",
    subtitle: "Six Co-Founders United by Seven Years of Friendship & Complementary Expertise",
    content: "team"
  },
  {
    id: 14,
    title: "RISK ANALYSIS & MITIGATION STRATEGIES",
    subtitle: "Comprehensive Approach to Potential Challenges",
    content: "risks"
  },
  {
    id: 15,
    title: "LONG-TERM VISION & SOCIETAL IMPACT",
    subtitle: "Building the Future of Human-AI Collaboration",
    content: "vision"
  },
  {
    id: 16,
    title: "PARTNERSHIP INVITATION & NEXT STEPS",
    subtitle: "Building the Future Together with IBM",
    content: "partnership"
  }
];

// Company logos for the cover page
const partnerCompanies = [
  { name: "OpenAI", logo: "https://img.logo.dev/openai.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ" },
  { name: "Google", logo: "https://img.logo.dev/google.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ" },
  { name: "Microsoft", logo: "https://img.logo.dev/microsoft.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ" },
  { name: "Apple", logo: "https://img.logo.dev/apple.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ" },
  { name: "Meta", logo: "https://img.logo.dev/meta.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ" },
  { name: "Stripe", logo: "https://img.logo.dev/stripe.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ" },
  { name: "Anthropic", logo: "https://img.logo.dev/anthropic.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ" },
  { name: "IBM", logo: "https://img.logo.dev/ibm.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ" }
];

// Demo UI components for the cover page
const DemoJobCard = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 max-w-sm"
  >
    <div className="flex items-start gap-3">
      <img
        src="https://img.logo.dev/openai.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ"
        alt="OpenAI"
        className="w-10 h-10 object-contain bg-white rounded-lg p-1"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-sm">ML Research Engineer</h3>
        <p className="text-gray-600 text-xs">OpenAI • San Francisco</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
            98% Match
          </div>
          <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
            AI Research
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const DemoChat = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 max-w-md"
  >
    <div className="flex items-start gap-3">
      <img
        src="/logo_clean.png"
        alt="Milo"
        className="w-8 h-8 object-contain"
      />
      <div className="flex-1">
        <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-800">
          "I found 3 AI research positions that match your passion for ethical AI and your Python expertise. Would you like to see opportunities at mission-driven companies?"
        </div>
        <div className="flex gap-2 mt-2">
          <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-blue-200 transition-colors">
            Show me
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors">
            Tell me more
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const DataFlywheelVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { icon: Users, label: "User Interactions", color: "text-blue-500" },
    { icon: Brain, label: "AI Learning", color: "text-purple-500" },
    { icon: Target, label: "Better Matching", color: "text-emerald-500" },
    { icon: TrendingUp, label: "Improved Outcomes", color: "text-orange-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
    >
      <h3 className="text-sm font-semibold text-gray-900 mb-4 text-center">Data Flywheel Effect</h3>
      <div className="relative w-48 h-48 mx-auto">
        {/* Central hub */}
        <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <Zap className="w-8 h-8 text-white" />
        </div>
        
        {/* Orbiting elements */}
        {steps.map((step, index) => {
          const angle = (index * 90) - 90; // Start from top
          const radius = 80;
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;
          
          return (
            <motion.div
              key={index}
              className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                activeStep === index 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 scale-110 shadow-lg' 
                  : 'bg-gray-200'
              }`}
              style={{
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
              }}
              animate={{
                rotate: activeStep === index ? 360 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <step.icon 
                className={`w-6 h-6 ${
                  activeStep === index ? 'text-white' : 'text-gray-600'
                }`} 
              />
            </motion.div>
          );
        })}
        
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full">
          {steps.map((_, index) => {
            const nextIndex = (index + 1) % steps.length;
            const angle1 = (index * 90) - 90;
            const angle2 = (nextIndex * 90) - 90;
            const radius = 80;
            
            const x1 = Math.cos(angle1 * Math.PI / 180) * radius + 96;
            const y1 = Math.sin(angle1 * Math.PI / 180) * radius + 96;
            const x2 = Math.cos(angle2 * Math.PI / 180) * radius + 96;
            const y2 = Math.sin(angle2 * Math.PI / 180) * radius + 96;
            
            return (
              <motion.line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={activeStep === index ? "#3B82F6" : "#E5E7EB"}
                strokeWidth="2"
                strokeDasharray="4,4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            );
          })}
        </svg>
      </div>
      
      <div className="text-center mt-4">
        <p className={`text-sm font-medium transition-colors duration-500 ${steps[activeStep].color}`}>
          {steps[activeStep].label}
        </p>
      </div>
    </motion.div>
  );
};

export function Pitch() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderSlideContent = () => {
    const slide = slides[currentSlide];

    if (slide.content === "cover") {
      return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
            {/* Main content */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <img 
                  src="/logo_clean.png"
                  alt="Milo"
                  className="w-32 h-32 mx-auto object-contain mb-6"
                />
                <h1 className="text-8xl font-bold text-white mb-4 tracking-tight">
                  MILO
                </h1>
                <p className="text-2xl text-blue-200 font-medium mb-8">
                  Conversational AI for Authentic Career Discovery
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12"
              >
                {slide.subtitle}
              </motion.p>

              {/* Founders */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-8 mb-12"
              >
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">George McCain</div>
                  <div className="text-blue-200">CEO & Co-Founder</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">Midhun Sadanand</div>
                  <div className="text-blue-200">CTO & Co-Founder</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">Andrew Boanoh</div>
                  <div className="text-blue-200">COO & Co-Founder</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-blue-200 text-lg font-medium"
              >
                Yale University | Founded 2024
              </motion.div>
            </div>

            {/* Demo components showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="flex flex-col items-center space-y-4">
                <DemoJobCard delay={1.0} />
                <DemoJobCard delay={1.2} />
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <DataFlywheelVisualization />
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <DemoChat delay={1.4} />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 max-w-sm"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">98.7%</div>
                    <div className="text-sm text-gray-600">Career Satisfaction</div>
                    <div className="text-xs text-emerald-600 mt-1">↑ 40% improvement</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Partner companies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
              className="w-full max-w-6xl mx-auto"
            >
              <p className="text-center text-white/70 text-sm mb-6">
                Connecting students to opportunities at leading companies
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                {partnerCompanies.map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2 + index * 0.1, duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-colors"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-12 h-12 object-contain filter brightness-0 invert"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    if (slide.content === "crisis") {
      return (
        <div className="min-h-screen bg-white p-8 flex flex-col justify-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-4">{slide.title}</h1>
              <p className="text-2xl text-red-600 font-semibold">{slide.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">THE DATA SPEAKS:</h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <div className="text-4xl font-bold text-red-600 mb-2">81.8%</div>
                    <p className="text-gray-700">of university students rate finding passionate work as 4/10 or lower</p>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <div className="text-4xl font-bold text-orange-600 mb-2">42.1%</div>
                    <p className="text-gray-700">biggest challenge: "I don't fully know what's out there"</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">52.6%</div>
                    <p className="text-gray-700">agree: "Universities steer toward finance/consulting regardless of interests"</p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <div className="text-4xl font-bold text-purple-600 mb-2">26.3%</div>
                    <p className="text-gray-700">avoid career services entirely due to lack of trust</p>
                  </div>
                  
                  <div className="bg-red-100 p-6 rounded-xl border border-red-300">
                    <div className="text-4xl font-bold text-red-700 mb-2">0.06%</div>
                    <p className="text-gray-700">LinkedIn's actual success rate (7 hires per 11,000 applications/minute)</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 italic">
                  Source: Original research across Wake Forest, UVM, Pitzer College, UW-Madison
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">THE HUMAN COST:</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="text-2xl font-bold text-gray-900">71%</div>
                    </div>
                    <p className="text-gray-700">feel "stuck" within 2 years of graduation (Li et al., 2021)</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="text-2xl font-bold text-gray-900">$1.3T</div>
                    </div>
                    <p className="text-gray-700">annual economic cost of career misalignment (McKinsey, 2023)</p>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      <div className="text-xl font-bold text-red-600">Rising Crisis</div>
                    </div>
                    <p className="text-gray-700">Mental health crisis linked to work-related stress and purposelessness</p>
                  </div>
                </div>

                {/* Visual representation */}
                <div className="mt-12 p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border border-red-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Career Misalignment Pipeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="text-red-500" size={16} />
                      <span className="text-sm text-gray-700">Limited career discovery tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="text-red-500" size={16} />
                      <span className="text-sm text-gray-700">Pressure toward "safe" traditional paths</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="text-red-500" size={16} />
                      <span className="text-sm text-gray-700">Career-values misalignment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="text-red-500" size={16} />
                      <span className="text-sm text-gray-700">Burnout and disengagement</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    }

    if (slide.content === "storm") {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex flex-col justify-center">
          <div className="max-w-6xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-2xl text-orange-400 font-semibold">{slide.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h2 className="text-2xl font-bold text-red-400 mb-2">THE AUTHENTICITY CRISIS</h2>
                  <p className="text-lg text-gray-300 font-semibold">Structural Problem</p>
                </div>
                
                <p className="text-white/90 mb-4">
                  Career discovery systems designed for institutional efficiency, not human fulfillment
                </p>
                
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Students navigate 17+ disconnected platforms (University of Minnesota, 2023)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Traditional career services optimize for placement rates, not satisfaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>"Prestige over purpose" pipeline funnels brilliant minds into soul-crushing work</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h2 className="text-2xl font-bold text-orange-400 mb-2">THE AI DISPLACEMENT TSUNAMI</h2>
                  <p className="text-lg text-gray-300 font-semibold">Existential Threat</p>
                </div>
                
                <p className="text-white/90 mb-4">
                  40% of jobs face automation risk (IMF, 2024), creating career decision paralysis
                </p>
                
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Students afraid to pursue creative/human-centered careers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>No guidance on which paths become MORE valuable as AI advances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mental health impact of choosing between passion and perceived security</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-400 mb-2">THE SEARCH REVOLUTION GAP</h2>
                  <p className="text-lg text-gray-300 font-semibold">Technological Shift</p>
                </div>
                
                <p className="text-white/90 mb-4">
                  Post-ChatGPT, users expect conversational intelligence, not keyword matching
                </p>
                
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Career discovery stuck in Web 2.0 while everything else evolved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Students want AI dialogue, not database queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Opportunity for complete paradigm shift in how humans discover meaningful work</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-blue-500/20 rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">The Perfect Storm Creates Unprecedented Opportunity</h3>
                <p className="text-lg text-gray-300">
                  These three forces converging simultaneously create the ideal moment for a revolutionary approach to career discovery
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    if (slide.content === "breakthrough") {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-8 flex flex-col justify-center">
          <div className="max-w-6xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-2xl text-blue-300 font-semibold">{slide.subtitle}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">CORE INNOVATION: Human-AI Symbiosis for Career Discovery</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">AUTONOMOUS INTELLIGENCE LAYER</h3>
                  <p className="text-lg text-gray-300 font-semibold">Always-On Discovery Engine</p>
                </div>
                
                <ul className="space-y-4 text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-white">Distributed web crawling</span> across 100+ platforms using advanced pattern recognition
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-white">Semantic opportunity classification</span> identifying meaningful work traditional aggregators miss
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-white">Real-time market intelligence</span> surfacing opportunities within seconds of posting
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-white">Predictive pathway modeling</span> analyzing which careers strengthen as AI advances
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">CONVERSATIONAL INTELLIGENCE LAYER</h3>
                  <p className="text-lg text-gray-300 font-semibold">Human-Centered Dialogue System</p>
                </div>
                
                <ul className="space-y-4 text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-white">Values archaeology</span> through natural conversation, not surveys
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-white">Authentic interest discovery</span> challenging assumptions about "practical" vs. "passionate"
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-white">Dynamic personality modeling</span> evolving understanding through each interaction
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-white">Explainable AI recommendations</span> showing WHY opportunities align with authentic self
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">INTEGRATION BREAKTHROUGH:</h3>
                <p className="text-lg text-gray-300">
                  <span className="font-semibold text-white">Seamless synthesis</span> where autonomous discoveries inform conversational insights, creating personalized career intelligence that works 24/7 while maintaining human agency
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    if (slide.content === "technical") {
      return (
        <div className="min-h-screen bg-white p-8 flex flex-col justify-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-4">{slide.title}</h1>
              <p className="text-2xl text-blue-600 font-semibold">{slide.subtitle}</p>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">VALUES VECTOR ARCHITECTURE™</h2>
                    <p className="text-lg text-blue-600 font-semibold">Revolutionary Approach to Human Authenticity Encoding</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Multi-dimensional embeddings</span> encoding passion, purpose, creativity, autonomy, impact
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Behavioral pattern analysis</span> learning from implicit feedback (time spent, engagement patterns)
                      </div>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Values hierarchy modeling</span> understanding individual preference weights
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Authentic interest synthesis</span> combining stated preferences with discovered patterns
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">HYBRID SEMANTIC SEARCH ENGINE</h2>
                    <p className="text-lg text-purple-600 font-semibold">Enterprise-Grade Discovery Infrastructure</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Dense embeddings:</span> LLaMA-text-embed-v2 for semantic understanding
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Sparse retrieval:</span> Keyword precision for technical requirements
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Vector database:</span> Pinecone for sub-second similarity search across 200K+ records
                      </div>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Real-time indexing:</span> Redis caching architecture for instant results
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Quality scoring:</span> ML models ranking opportunity authenticity and fit
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">AUTOMATION-RESISTANCE PREDICTION ENGINE</h2>
                    <p className="text-lg text-green-600 font-semibold">Proprietary AI Resilience Modeling</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Labor economics integration:</span> Real-time analysis of automation risk by industry/role
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Human capability mapping:</span> Identifying work requiring creativity, empathy, complex reasoning
                      </div>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Future trend analysis:</span> Predicting which skills become MORE valuable as AI advances
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold">Career pathway simulation:</span> Monte Carlo modeling of long-term career resilience
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 bg-white rounded-lg p-4 border border-green-300">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-green-600">89%</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Technical Result:</strong> 89% accuracy in identifying automation-resistant career paths
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    }

    // Return a placeholder for other slides
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{slide.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{slide.subtitle}</p>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-gray-500">Content for this slide is being developed...</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to App</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                {currentSlide + 1} / {slides.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  disabled={currentSlide === slides.length - 1}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Slide Content */}
      <div className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderSlideContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}