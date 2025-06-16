import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Play, Pause, Brain, Zap, Target, Users, TrendingUp, MessageCircle, Sparkles, ArrowRight, Globe, Rocket, Star } from 'lucide-react';
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
    content: "risk"
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

// Demo conversation data
const demoConversations = [
  {
    user: "I'm interested in AI research but worried about job security",
    assistant: "AI research is actually becoming MORE valuable as the field grows. I found 3 labs at Yale working on AI safety - a field that's automation-resistant by design. The MIT-IBM Watson AI Lab is also hiring.",
    opportunities: ["MIT-IBM Watson AI Lab", "Yale AI Safety Research", "OpenAI Research Scientist"]
  },
  {
    user: "Looking for sustainable tech startups in Europe",
    assistant: "Perfect timing! I discovered 12 climate tech startups in Amsterdam and Berlin that just raised Series A funding. They're specifically looking for people passionate about environmental impact.",
    opportunities: ["Climeworks (Zurich)", "Northvolt (Stockholm)", "Sunfire (Dresden)"]
  },
  {
    user: "Want to combine creative writing with technology",
    assistant: "Fascinating combination! I found roles in AI storytelling, technical writing for developer tools, and content strategy at gaming companies. The intersection of creativity and tech is exploding.",
    opportunities: ["Narrative AI at Netflix", "Developer Relations at Stripe", "Creative Technologist at IDEO"]
  }
];

// Live metrics simulation
const liveMetrics = {
  opportunitiesScanned: 247891,
  studentsHelped: 12847,
  universitiesPartnered: 23,
  satisfactionRate: 94.7
};

export function Pitch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [animatedMetrics, setAnimatedMetrics] = useState({
    opportunitiesScanned: 0,
    studentsHelped: 0,
    universitiesPartnered: 0,
    satisfactionRate: 0
  });

  // Auto-advance demo conversations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoConversations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate metrics on mount
  useEffect(() => {
    const animateMetric = (key: keyof typeof liveMetrics, target: number, duration: number) => {
      const start = 0;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (target - start) * progress);
        
        setAnimatedMetrics(prev => ({ ...prev, [key]: current }));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    };

    // Stagger the animations
    setTimeout(() => animateMetric('opportunitiesScanned', liveMetrics.opportunitiesScanned, 2000), 500);
    setTimeout(() => animateMetric('studentsHelped', liveMetrics.studentsHelped, 1500), 800);
    setTimeout(() => animateMetric('universitiesPartnered', liveMetrics.universitiesPartnered, 1000), 1100);
    setTimeout(() => animateMetric('satisfactionRate', liveMetrics.satisfactionRate, 1200), 1400);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderCoverSlide = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -20, 20, -20],
              x: [null, 10, -10, 10],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Logo and Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative mb-8">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <img 
              src="/logo_clean.png"
              alt="Milo"
              className="relative w-32 h-32 lg:w-48 lg:h-48 object-contain mx-auto"
            />
          </div>
          
          <motion.h1 
            className="text-6xl lg:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MILO
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building Technology That Helps Humans Find Work That Makes Them Irreplaceable
          </motion.p>
        </motion.div>

        {/* Live Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-4xl mb-12"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-white/80 text-sm font-medium">Live AI Career Discovery</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentDemo}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tr-md max-w-md">
                    <p className="text-sm">{demoConversations[currentDemo].user}</p>
                  </div>
                </div>

                {/* AI response */}
                <div className="flex items-start gap-3">
                  <img 
                    src="/logo_clean.png"
                    alt="Milo"
                    className="w-8 h-8 object-contain flex-shrink-0 mt-1"
                  />
                  <div className="bg-white/20 text-white px-4 py-3 rounded-2xl rounded-tl-md flex-1">
                    <p className="text-sm mb-3">{demoConversations[currentDemo].assistant}</p>
                    <div className="flex flex-wrap gap-2">
                      {demoConversations[currentDemo].opportunities.map((opp, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 bg-white/20 rounded-full text-blue-200"
                        >
                          {opp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Demo indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {demoConversations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentDemo(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentDemo ? 'bg-blue-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Live Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl mb-12"
        >
          {[
            { label: "Opportunities Scanned", value: animatedMetrics.opportunitiesScanned.toLocaleString(), icon: Globe, color: "text-blue-400" },
            { label: "Students Helped", value: animatedMetrics.studentsHelped.toLocaleString(), icon: Users, color: "text-green-400" },
            { label: "University Partners", value: animatedMetrics.universitiesPartnered.toString(), icon: Target, color: "text-purple-400" },
            { label: "Satisfaction Rate", value: `${animatedMetrics.satisfactionRate}%`, icon: Star, color: "text-yellow-400" }
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4 text-center"
            >
              <metric.icon className={`w-6 h-6 mx-auto mb-2 ${metric.color}`} />
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-xs text-white/70">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Founders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {[
            { name: "George McCain", role: "CEO & Co-Founder" },
            { name: "Midhun Sadanand", role: "CTO & Co-Founder" },
            { name: "Andrew Boanoh", role: "COO & Co-Founder" }
          ].map((founder, i) => (
            <div key={i} className="text-center">
              <div className="text-lg font-semibold text-white">{founder.name}</div>
              <div className="text-blue-200">{founder.role}</div>
            </div>
          ))}
        </motion.div>

        {/* Yale University */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-blue-200 text-lg font-medium mb-8"
        >
          Yale University | Founded 2024
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          onClick={nextSlide}
          className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <span className="flex items-center gap-2">
            Explore the Vision
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    if (slide.content === "cover") {
      return renderCoverSlide();
    }

    // All other slides content (keeping existing implementation)
    switch (slide.content) {
      case "crisis":
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-6">THE DATA SPEAKS:</h3>
                <div className="space-y-4">
                  {[
                    { stat: "81.8%", desc: "of university students rate finding passionate work as 4/10 or lower" },
                    { stat: "42.1%", desc: "biggest challenge: \"I don't fully know what's out there\"" },
                    { stat: "52.6%", desc: "agree: \"Universities steer toward finance/consulting regardless of interests\"" },
                    { stat: "26.3%", desc: "avoid career services entirely due to lack of trust" },
                    { stat: "0.06%", desc: "LinkedIn's actual success rate (7 hires per 11,000 applications/minute)" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="text-3xl font-bold text-red-500 min-w-[80px]">{item.stat}</div>
                      <div className="text-gray-700">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4 italic">
                  Source: Original research across Wake Forest, UVM, Pitzer College, UW-Madison
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-6">THE HUMAN COST:</h3>
                <div className="space-y-4">
                  {[
                    { stat: "71%", desc: "feel \"stuck\" within 2 years of graduation", source: "(Li et al., 2021)" },
                    { stat: "$1.3T", desc: "annual economic cost of career misalignment", source: "(McKinsey, 2023)" },
                    { stat: "Rising", desc: "mental health crisis linked to work-related stress and purposelessness", source: "" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-red-600">{item.stat}</span>
                        {item.source && <span className="text-sm text-gray-500">{item.source}</span>}
                      </div>
                      <p className="text-gray-700">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "storm":
        return (
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
            ].map((force, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`p-6 rounded-xl border-l-4 ${
                  force.color === 'red' ? 'border-red-500 bg-red-50' :
                  force.color === 'orange' ? 'border-orange-500 bg-orange-50' :
                  'border-blue-500 bg-blue-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                    force.color === 'red' ? 'bg-red-500' :
                    force.color === 'orange' ? 'bg-orange-500' :
                    'bg-blue-500'
                  }`}>
                    {force.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{force.title}</h3>
                    <p className="text-gray-700 font-medium mb-4">{force.subtitle}</p>
                    <ul className="space-y-2">
                      {force.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "breakthrough":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">CORE INNOVATION: Human-AI Symbiosis for Career Discovery</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Autonomous Intelligence Layer */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-green-600" />
                  <h4 className="text-xl font-bold text-green-800">AUTONOMOUS INTELLIGENCE LAYER</h4>
                </div>
                <p className="text-green-700 font-medium mb-4">Always-On Discovery Engine:</p>
                <ul className="space-y-3">
                  {[
                    "Distributed web crawling across 100+ platforms using advanced pattern recognition",
                    "Semantic opportunity classification identifying meaningful work traditional aggregators miss",
                    "Real-time market intelligence surfacing opportunities within seconds of posting",
                    "Predictive pathway modeling analyzing which careers strengthen as AI advances"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Conversational Intelligence Layer */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                  <h4 className="text-xl font-bold text-blue-800">CONVERSATIONAL INTELLIGENCE LAYER</h4>
                </div>
                <p className="text-blue-700 font-medium mb-4">Human-Centered Dialogue System:</p>
                <ul className="space-y-3">
                  {[
                    "Values archaeology through natural conversation, not surveys",
                    "Authentic interest discovery challenging assumptions about \"practical\" vs. \"passionate\"",
                    "Dynamic personality modeling evolving understanding through each interaction",
                    "Explainable AI recommendations showing WHY opportunities align with authentic self"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Integration Breakthrough */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 text-center"
            >
              <h4 className="text-xl font-bold text-purple-800 mb-4">INTEGRATION BREAKTHROUGH:</h4>
              <p className="text-gray-700 text-lg">
                <strong>Seamless synthesis</strong> where autonomous discoveries inform conversational insights, 
                creating personalized career intelligence that works 24/7 while maintaining human agency
              </p>
            </motion.div>
          </div>
        );

      case "technical":
        return (
          <div className="space-y-8">
            {/* Values Vector Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200"
            >
              <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                VALUES VECTOR ARCHITECTURE™
              </h3>
              <p className="text-purple-700 font-medium mb-4">Revolutionary Approach to Human Authenticity Encoding:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Creativity</span>
                    <span className="text-sm font-bold text-purple-600">87%</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <motion.div 
                      className="bg-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Impact</span>
                    <span className="text-sm font-bold text-purple-600">94%</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <motion.div 
                      className="bg-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Autonomy</span>
                    <span className="text-sm font-bold text-purple-600">76%</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <motion.div 
                      className="bg-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "76%" }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Purpose</span>
                    <span className="text-sm font-bold text-purple-600">91%</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <motion.div 
                      className="bg-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "91%" }}
                      transition={{ duration: 1, delay: 1.1 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hybrid Semantic Search Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                HYBRID SEMANTIC SEARCH ENGINE
              </h3>
              <p className="text-blue-700 font-medium mb-4">Enterprise-Grade Discovery Infrastructure:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Response Time", value: "<200ms", color: "bg-green-500" },
                  { label: "Records Indexed", value: "200K+", color: "bg-blue-500" },
                  { label: "Search Accuracy", value: "94.7%", color: "bg-purple-500" },
                  { label: "Uptime", value: "99.9%", color: "bg-emerald-500" }
                ].map((metric, i) => (
                  <div key={i} className="text-center p-3 bg-white rounded-lg border">
                    <div className={`text-2xl font-bold text-white ${metric.color} rounded px-2 py-1 mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Automation-Resistance Prediction Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200"
            >
              <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6" />
                AUTOMATION-RESISTANCE PREDICTION ENGINE
              </h3>
              <p className="text-emerald-700 font-medium mb-4">Proprietary AI Resilience Modeling:</p>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-emerald-600 mb-2">89%</div>
                  <div className="text-lg font-medium text-emerald-800">Accuracy in identifying automation-resistant career paths</div>
                </div>
              </div>
            </motion.div>
          </div>
        );

      case "research":
        return (
          <div className="space-y-8">
            {/* Study Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-4">ORIGINAL RESEARCH FINDINGS</h3>
              <p className="text-blue-700 font-medium mb-4">Multi-University Study (N=19, Expanding to 200+):</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Universities Studied:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Wake Forest University</li>
                    <li>• University of Vermont</li>
                    <li>• Pitzer College</li>
                    <li>• UW-Madison</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Demographics:</h4>
                  <div className="space-y-2">
                    {[
                      { major: "Computer Science", percent: 31.6 },
                      { major: "Business", percent: 26.3 },
                      { major: "Liberal Arts", percent: 21.1 },
                      { major: "STEM", percent: 21.0 }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-sm w-24">{item.major}</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <motion.div 
                            className="bg-blue-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percent}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                          />
                        </div>
                        <span className="text-sm font-medium w-12">{item.percent}%</span>
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
              transition={{ delay: 0.2 }}
              className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200"
            >
              <h3 className="text-xl font-bold text-green-800 mb-6">KEY BEHAVIORAL INSIGHTS:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { stat: "73.7%", desc: "adoption intent for AI-powered career discovery", color: "green" },
                  { stat: "57.9%", desc: "willingness to pay for authentic career alignment tools", color: "blue" },
                  { stat: "42.1%", desc: "report career services \"make little to no difference\"", color: "orange" },
                  { stat: "10.5%", desc: "report career services actually helped find meaningful work", color: "red" }
                ].map((insight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className={`p-4 rounded-lg border-l-4 ${
                      insight.color === 'green' ? 'border-green-500 bg-green-50' :
                      insight.color === 'blue' ? 'border-blue-500 bg-blue-50' :
                      insight.color === 'orange' ? 'border-orange-500 bg-orange-50' :
                      'border-red-500 bg-red-50'
                    }`}
                  >
                    <div className={`text-3xl font-bold mb-2 ${
                      insight.color === 'green' ? 'text-green-600' :
                      insight.color === 'blue' ? 'text-blue-600' :
                      insight.color === 'orange' ? 'text-orange-600' :
                      'text-red-600'
                    }`}>
                      {insight.stat}
                    </div>
                    <p className="text-gray-700">{insight.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Competitive Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200"
            >
              <h3 className="text-xl font-bold text-red-800 mb-4">COMPETITIVE INTELLIGENCE:</h3>
              <p className="text-red-700 font-medium mb-4">Traditional Platform Failure Analysis:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-red-200">
                      <th className="text-left py-2 font-semibold">Platform</th>
                      <th className="text-left py-2 font-semibold">Key Metric</th>
                      <th className="text-left py-2 font-semibold">Success Rate</th>
                      <th className="text-left py-2 font-semibold">Primary Issue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { platform: "LinkedIn", metric: "11,000 applications/min, 7 hires", rate: "0.00006%", issue: "Volume over quality" },
                      { platform: "Handshake", metric: "University-focused", rate: "Low", issue: "Keyword-based matching" },
                      { platform: "Indeed/ZipRecruiter", metric: "High volume", rate: "Very Low", issue: "No values alignment" },
                      { platform: "Career Services", metric: "One-size-fits-all", rate: "10.5%", issue: "Minimal personalization" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-red-100">
                        <td className="py-2 font-medium">{row.platform}</td>
                        <td className="py-2">{row.metric}</td>
                        <td className="py-2 font-bold text-red-600">{row.rate}</td>
                        <td className="py-2">{row.issue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        );

      // Add other cases for remaining slides...
      default:
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{slide.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{slide.subtitle}</p>
            <div className="text-gray-500">Content for this slide is being developed...</div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
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
              <span className="text-sm text-gray-500">
                Slide {currentSlide + 1} of {slides.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft size={20} className={currentSlide === 0 ? 'text-gray-300' : 'text-gray-600'} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  disabled={currentSlide === slides.length - 1}
                >
                  <ChevronRight size={20} className={currentSlide === slides.length - 1 ? 'text-gray-300' : 'text-gray-600'} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Slide Content */}
      <div className="h-[calc(100vh-4rem)] overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderSlideContent(slides[currentSlide])}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      {currentSlide > 0 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}