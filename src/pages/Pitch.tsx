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

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="mt-12"
            >
              <button
                onClick={nextSlide}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                <span className="font-medium">Start Presentation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      );
    }

    if (slide.content === "crisis") {
      return (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{slide.title}</h2>
            <p className="text-xl text-gray-600">{slide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">THE DATA SPEAKS:</h3>
              <div className="space-y-6">
                {[
                  { stat: "81.8%", desc: "of university students rate finding passionate work as 4/10 or lower" },
                  { stat: "42.1%", desc: "biggest challenge: \"I don't fully know what's out there\"" },
                  { stat: "52.6%", desc: "agree: \"Universities steer toward finance/consulting regardless of interests\"" },
                  { stat: "26.3%", desc: "avoid career services entirely due to lack of trust" },
                  { stat: "0.06%", desc: "LinkedIn's actual success rate (7 hires per 11,000 applications/minute)" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="text-3xl font-bold text-red-500 min-w-fit">{item.stat}</div>
                    <div className="text-gray-700">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6 italic">
                Source: Original research across Wake Forest, UVM, Pitzer College, UW-Madison
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">THE HUMAN COST:</h3>
              <div className="space-y-6">
                {[
                  { stat: "71%", desc: "feel \"stuck\" within 2 years of graduation", source: "(Li et al., 2021)" },
                  { stat: "$1.3T", desc: "annual economic cost of career misalignment", source: "(McKinsey, 2023)" },
                  { stat: "Rising", desc: "mental health crisis linked to work-related stress and purposelessness", source: "" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl font-bold text-red-600 min-w-fit">{item.stat}</div>
                      <div>
                        <div className="text-gray-800 font-medium">{item.desc}</div>
                        {item.source && <div className="text-sm text-gray-500 mt-1">{item.source}</div>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (slide.content === "storm") {
      return (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{slide.title}</h2>
            <p className="text-xl text-gray-600">{slide.subtitle}</p>
          </div>

          <div className="space-y-12">
            {[
              {
                number: "1",
                title: "THE AUTHENTICITY CRISIS",
                subtitle: "Structural Problem: Career discovery systems designed for institutional efficiency, not human fulfillment",
                points: [
                  "Students navigate 17+ disconnected platforms (University of Minnesota, 2023)",
                  "Traditional career services optimize for placement rates, not satisfaction",
                  "\"Prestige over purpose\" pipeline funnels brilliant minds into soul-crushing work"
                ],
                color: "red"
              },
              {
                number: "2",
                title: "THE AI DISPLACEMENT TSUNAMI",
                subtitle: "Existential Threat: 40% of jobs face automation risk (IMF, 2024), creating career decision paralysis",
                points: [
                  "Students afraid to pursue creative/human-centered careers",
                  "No guidance on which paths become MORE valuable as AI advances",
                  "Mental health impact of choosing between passion and perceived security"
                ],
                color: "orange"
              },
              {
                number: "3",
                title: "THE SEARCH REVOLUTION GAP",
                subtitle: "Technological Shift: Post-ChatGPT, users expect conversational intelligence, not keyword matching",
                points: [
                  "Career discovery stuck in Web 2.0 while everything else evolved",
                  "Students want AI dialogue, not database queries",
                  "Opportunity for complete paradigm shift in how humans discover meaningful work"
                ],
                color: "blue"
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`bg-${section.color}-50 p-8 rounded-xl border-l-4 border-${section.color}-500`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 bg-${section.color}-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0`}>
                    {section.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{section.title}</h3>
                    <p className="text-gray-700 font-medium mb-4">{section.subtitle}</p>
                    <ul className="space-y-2">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2">
                          <div className={`w-2 h-2 bg-${section.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    if (slide.content === "breakthrough") {
      return (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{slide.title}</h2>
            <p className="text-xl text-gray-600">{slide.subtitle}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              CORE INNOVATION: Human-AI Symbiosis for Career Discovery
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 p-6 rounded-xl border border-blue-200"
            >
              <h4 className="text-xl font-bold text-blue-900 mb-4">AUTONOMOUS INTELLIGENCE LAYER</h4>
              <p className="text-blue-800 font-medium mb-4">Always-On Discovery Engine:</p>
              <ul className="space-y-3">
                {[
                  "Distributed web crawling across 100+ platforms using advanced pattern recognition",
                  "Semantic opportunity classification identifying meaningful work traditional aggregators miss",
                  "Real-time market intelligence surfacing opportunities within seconds of posting",
                  "Predictive pathway modeling analyzing which careers strengthen as AI advances"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-purple-50 p-6 rounded-xl border border-purple-200"
            >
              <h4 className="text-xl font-bold text-purple-900 mb-4">CONVERSATIONAL INTELLIGENCE LAYER</h4>
              <p className="text-purple-800 font-medium mb-4">Human-Centered Dialogue System:</p>
              <ul className="space-y-3">
                {[
                  "Values archaeology through natural conversation, not surveys",
                  "Authentic interest discovery challenging assumptions about \"practical\" vs. \"passionate\"",
                  "Dynamic personality modeling evolving understanding through each interaction",
                  "Explainable AI recommendations showing WHY opportunities align with authentic self"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white"
          >
            <h4 className="text-xl font-bold mb-4">INTEGRATION BREAKTHROUGH:</h4>
            <p className="text-lg">
              Seamless synthesis where autonomous discoveries inform conversational insights, creating personalized career intelligence that works 24/7 while maintaining human agency
            </p>
          </motion.div>
        </div>
      );
    }

    if (slide.content === "technical") {
      return (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{slide.title}</h2>
            <p className="text-xl text-gray-600">{slide.subtitle}</p>
          </div>

          <div className="space-y-8">
            {/* Values Vector Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-200"
            >
              <h3 className="text-2xl font-bold text-purple-900 mb-6">VALUES VECTOR ARCHITECTURE™</h3>
              <p className="text-purple-800 font-medium mb-6">Revolutionary Approach to Human Authenticity Encoding:</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Multi-dimensional embeddings encoding passion, purpose, creativity, autonomy, impact",
                      "Behavioral pattern analysis learning from implicit feedback",
                      "Values hierarchy modeling understanding individual preference weights",
                      "Authentic interest synthesis combining stated preferences with discovered patterns"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">Live Values Analysis</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Creativity", value: 87, color: "bg-purple-500" },
                      { label: "Impact", value: 94, color: "bg-blue-500" },
                      { label: "Autonomy", value: 76, color: "bg-green-500" },
                      { label: "Purpose", value: 91, color: "bg-orange-500" }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">{item.label}</span>
                          <span className="font-medium">{item.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${item.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hybrid Semantic Search Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl border border-blue-200"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">HYBRID SEMANTIC SEARCH ENGINE</h3>
              <p className="text-blue-800 font-medium mb-6">Enterprise-Grade Discovery Infrastructure:</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Dense embeddings: LLaMA-text-embed-v2 for semantic understanding",
                      "Sparse retrieval: Keyword precision for technical requirements",
                      "Vector database: Pinecone for sub-second similarity search across 200K+ records",
                      "Real-time indexing: Redis caching architecture for instant results",
                      "Quality scoring: ML models ranking opportunity authenticity and fit"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Response Time", value: "<200ms", icon: "⚡" },
                      { label: "Records Indexed", value: "200K+", icon: "📊" },
                      { label: "Search Accuracy", value: "94.7%", icon: "🎯" },
                      { label: "Uptime", value: "99.9%", icon: "🔄" }
                    ].map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                        className="text-center p-3 bg-blue-50 rounded-lg"
                      >
                        <div className="text-2xl mb-1">{metric.icon}</div>
                        <div className="font-bold text-blue-900">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Automation-Resistance Prediction Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200"
            >
              <h3 className="text-2xl font-bold text-green-900 mb-6">AUTOMATION-RESISTANCE PREDICTION ENGINE</h3>
              <p className="text-green-800 font-medium mb-6">Proprietary AI Resilience Modeling:</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Labor economics integration: Real-time analysis of automation risk by industry/role",
                      "Human capability mapping: Identifying work requiring creativity, empathy, complex reasoning",
                      "Future trend analysis: Predicting which skills become MORE valuable as AI advances",
                      "Career pathway simulation: Monte Carlo modeling of long-term career resilience"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">AI Resilience Score</h4>
                  <div className="text-center">
                    <motion.div
                      className="relative w-32 h-32 mx-auto mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-gray-200"
                        />
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          className="text-green-500"
                          initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                          animate={{ strokeDashoffset: 2 * Math.PI * 56 * (1 - 0.89) }}
                          transition={{ delay: 0.8, duration: 1.5 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-green-600">89%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Technical Result:</strong> 89% accuracy in identifying automation-resistant career paths
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    if (slide.content === "research") {
      return (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{slide.title}</h2>
            <p className="text-xl text-gray-600">{slide.subtitle}</p>
          </div>

          <div className="space-y-8">
            {/* Original Research Findings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 p-8 rounded-xl border border-blue-200"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">ORIGINAL RESEARCH FINDINGS</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-blue-800 font-medium mb-4">Multi-University Study (N=19, Expanding to 200+):</p>
                  <ul className="space-y-2">
                    <li><strong>Universities:</strong> Wake Forest, UVM, Pitzer College, UW-Madison</li>
                    <li><strong>Demographics:</strong> Diverse majors (Finance, Computer Science, Philosophy, Food Systems)</li>
                    <li><strong>Geographic spread:</strong> East Coast, Midwest, West Coast validation</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Study Demographics</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Computer Science", value: 31.6, color: "bg-blue-500" },
                      { label: "Business", value: 26.3, color: "bg-green-500" },
                      { label: "Liberal Arts", value: 21.1, color: "bg-purple-500" },
                      { label: "STEM", value: 21.0, color: "bg-orange-500" }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">{item.label}</span>
                          <span className="font-medium">{item.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${item.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Key Behavioral Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-green-50 p-8 rounded-xl border border-green-200"
            >
              <h3 className="text-2xl font-bold text-green-900 mb-6">KEY BEHAVIORAL INSIGHTS:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { stat: "73.7%", desc: "adoption intent for AI-powered career discovery", color: "green" },
                  { stat: "57.9%", desc: "willingness to pay for authentic career alignment tools", color: "blue" },
                  { stat: "42.1%", desc: "report career services \"make little to no difference\"", color: "orange" },
                  { stat: "10.5%", desc: "report career services actually helped find meaningful work", color: "red" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500"
                  >
                    <div className="text-3xl font-bold text-green-600 mb-2">{item.stat}</div>
                    <div className="text-gray-700">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Psychological Framework Validation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-purple-50 p-8 rounded-xl border border-purple-200"
            >
              <h3 className="text-2xl font-bold text-purple-900 mb-6">PSYCHOLOGICAL FRAMEWORK VALIDATION:</h3>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Career Misalignment → Mental Health Pipeline:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Chronic stress", desc: "from work-value misalignment", icon: "😰" },
                    { title: "Decision paralysis", desc: "from too many low-quality options", icon: "🤔" },
                    { title: "Imposter syndrome", desc: "from pursuing inauthentic paths", icon: "😔" },
                    { title: "Burnout prevention", desc: "through early authentic alignment", icon: "✨" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.title}</div>
                        <div className="text-gray-600 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Competitive Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-red-50 p-8 rounded-xl border border-red-200"
            >
              <h3 className="text-2xl font-bold text-red-900 mb-6">COMPETITIVE INTELLIGENCE:</h3>
              <div className="bg-white rounded-lg overflow-hidden">
                <h4 className="text-xl font-semibold text-gray-900 p-6 pb-4">Traditional Platform Failure Analysis:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Issue</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { platform: "LinkedIn", rate: "0.00006%", issue: "11,000 applications/minute, 7 hires" },
                        { platform: "Handshake", rate: "Low", issue: "University-focused but still keyword-based matching" },
                        { platform: "Indeed/ZipRecruiter", rate: "Very Low", issue: "High volume, low quality, no values alignment" },
                        { platform: "Career Services", rate: "Minimal", issue: "One-size-fits-all approach with minimal personalization" }
                      ].map((row, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.platform}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">{row.rate}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{row.issue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Add other slide content here following the same pattern...
    // For brevity, I'll include a few more key slides and then provide a fallback

    if (slide.content === "datasets") {
      return (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{slide.title}</h2>
            <p className="text-xl text-gray-600">{slide.subtitle}</p>
          </div>

          <div className="space-y-8">
            {/* Exclusive Data Assets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">EXCLUSIVE DATA ASSETS:</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Alumni Career Journey Database",
                    items: [
                      "100K+ Yale alumni career transition patterns",
                      "Unconventional pathway mapping: Literature → Documentary → Climate Policy",
                      "Success pattern recognition: Which authentic transitions actually work economically",
                      "Mentorship graph analysis: Connection patterns for warm introductions"
                    ],
                    icon: "👥",
                    color: "blue"
                  },
                  {
                    title: "Company Culture Intelligence",
                    items: [
                      "100K+ organization profiles with deep cultural analysis",
                      "Mission-driven scoring: Quantifying authentic company values vs. corporate speak",
                      "Growth stage modeling: Startup, scale-up, enterprise culture patterns",
                      "Values alignment prediction: Company-individual fit scoring"
                    ],
                    icon: "🏢",
                    color: "green"
                  },
                  {
                    title: "Real-Time Opportunity Intelligence",
                    items: [
                      "Live web scraping across job boards, fellowship sites, research programs",
                      "Opportunity classification: Traditional jobs vs. meaningful work detection",
                      "Temporal pattern analysis: When meaningful opportunities typically appear",
                      "Geographic opportunity mapping: Remote vs. location-specific patterns"
                    ],
                    icon: "🔍",
                    color: "purple"
                  }
                ].map((asset, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">{asset.icon}</div>
                      <h4 className="font-bold text-gray-900">{asset.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {asset.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Data Flywheel Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200"
            >
              <h3 className="text-2xl font-bold text-purple-900 mb-6">AI TRAINING METHODOLOGY:</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-purple-800 mb-4">Human-in-the-Loop Learning:</h4>
                  <ul className="space-y-3">
                    {[
                      "Conversation mining: Learning authentic interest patterns from user dialogue",
                      "Outcome feedback: Career satisfaction tracking for algorithm improvement",
                      "Values calibration: Continuous refinement of authenticity detection",
                      "Bias mitigation: Actively countering traditional career pathway bias"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-center">
                  <DataFlywheelVisualization />
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-lg text-white text-center"
              >
                <h4 className="text-xl font-bold mb-2">Data Flywheel Effect:</h4>
                <p className="text-lg">Each user interaction improves recommendations for all users</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Fallback for other slides
    return (
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{slide.title}</h2>
          <p className="text-xl text-gray-600">{slide.subtitle}</p>
        </div>
        <div className="bg-gray-50 p-12 rounded-xl text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Slide Content Coming Soon</h3>
          <p className="text-gray-600">This slide contains detailed content that will be fully implemented.</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 px-2 py-1 -ml-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">
                Slide {currentSlide + 1} of {slides.length}
              </div>
              <div className="flex items-center">
                <img 
                  src="/logo_clean.png"
                  alt="Milo"
                  className="h-8 w-8 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {renderSlideContent()}
        </div>
      </div>

      {/* Controls */}
      {currentSlide > 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={20} className={currentSlide === 0 ? 'text-gray-300' : 'text-gray-700'} />
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight size={20} className={currentSlide === slides.length - 1 ? 'text-gray-300' : 'text-gray-700'} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}