import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Pause, ChevronLeft, ChevronRight, Users, Brain, Code, Briefcase, Target, TrendingUp, DollarSign, Shield, Globe, Rocket, ArrowRight, CheckCircle, Star, Zap, Building2, Award, Heart, Lightbulb, Search, BarChart3, PieChart, LineChart, Activity, Cpu, Database, Network, Lock, Eye, MessageSquare, UserCheck, GitBranch, Settings, Layers, Sparkles, Crown, Trophy, Medal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { UIPreview } from '../components/UIPreview';
import { JobCard } from '../components/JobCard';
import { StreamingText } from '../components/StreamingText';

const slides = [
  {
    id: 'title',
    title: 'MILO',
    subtitle: 'Conversational AI for Authentic Career Discovery',
    content: 'Building Technology That Helps Humans Find Work That Makes Them Irreplaceable'
  },
  {
    id: 'crisis',
    title: 'The Generational Crisis',
    subtitle: 'Career Discovery is Fundamentally Broken',
    content: 'The data reveals a systematic failure in how young people discover meaningful work'
  },
  {
    id: 'storm',
    title: 'The Perfect Storm',
    subtitle: 'Three Converging Forces Creating Unprecedented Challenge',
    content: 'Multiple crises converging to create the greatest career discovery challenge in history'
  },
  {
    id: 'breakthrough',
    title: 'The Milo Breakthrough',
    subtitle: 'Revolutionary Dual-Mode AI Architecture',
    content: 'Human-AI Symbiosis for Career Discovery'
  },
  {
    id: 'architecture',
    title: 'Deep Technical Architecture',
    subtitle: 'Proprietary AI Systems & Algorithms',
    content: 'Enterprise-grade technology stack powering authentic career discovery'
  },
  {
    id: 'validation',
    title: 'Scientific Validation & Research',
    subtitle: 'Evidence-Based Approach to Career-Wellbeing Connection',
    content: 'Multi-university research validating our approach'
  },
  {
    id: 'data',
    title: 'Proprietary Datasets & AI Training',
    subtitle: 'Competitive Moats Through Data Advantages',
    content: 'Exclusive data assets creating sustainable competitive advantages'
  },
  {
    id: 'business',
    title: 'Scalable Business Architecture',
    subtitle: 'Multi-Layered Revenue Model with Network Effects',
    content: 'Four-tier revenue strategy with proven unit economics'
  },
  {
    id: 'competition',
    title: 'Competitive Differentiation Matrix',
    subtitle: 'Why Existing Solutions Fail & How We Win',
    content: 'Clear competitive advantages in a fragmented market'
  },
  {
    id: 'watson',
    title: 'IBM Watson Integration Strategy',
    subtitle: 'Technical Partnership for Enterprise-Grade Scaling',
    content: 'Strategic technology partnership for global expansion'
  },
  {
    id: 'market',
    title: 'Go-to-Market Strategy & Execution',
    subtitle: 'Systematic Scaling from Universities to Enterprise',
    content: 'Three-phase approach to market domination'
  },
  {
    id: 'financials',
    title: 'Financial Projections & Unit Economics',
    subtitle: 'Conservative Growth Model with Multiple Validation Points',
    content: 'Detailed financial modeling with proven assumptions'
  },
  {
    id: 'team',
    title: 'The Complete Founding Team',
    subtitle: 'Six Co-Founders United by Seven Years of Friendship & Complementary Expertise',
    content: 'Unique combination of technical depth, institutional knowledge, and authentic mission alignment'
  },
  {
    id: 'risks',
    title: 'Risk Analysis & Mitigation Strategies',
    subtitle: 'Comprehensive Approach to Potential Challenges',
    content: 'Proactive risk management with detailed mitigation plans'
  },
  {
    id: 'vision',
    title: 'Long-term Vision & Societal Impact',
    subtitle: 'Building the Future of Human-AI Collaboration',
    content: 'Transforming how humanity discovers meaningful work'
  },
  {
    id: 'partnership',
    title: 'Partnership Invitation & Next Steps',
    subtitle: 'Building the Future Together with IBM',
    content: 'Strategic partnership opportunity for mutual value creation'
  }
];

export function Pitch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          setShowControls(!showControls);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, showControls]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 8000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderSlideContent = () => {
    const slide = slides[currentSlide];

    switch (slide.id) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src="/logo_clean.png"
                alt="Milo"
                className="w-32 h-32 object-contain mx-auto mb-6"
              />
            </motion.div>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-8xl font-bold text-gray-900 mb-4 tracking-wider"
            >
              MILO
            </motion.h1>
            
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl font-semibold text-blue-600 mb-8"
            >
              Conversational AI for Authentic Career Discovery
            </motion.h2>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-600 mb-12 max-w-4xl"
            >
              Building Technology That Helps Humans Find Work That Makes Them Irreplaceable
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="space-y-4 text-lg text-gray-700"
            >
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="font-semibold">George McCain</div>
                  <div className="text-sm text-gray-500">CEO & Co-Founder</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">Midhun Sadanand</div>
                  <div className="text-sm text-gray-500">CTO & Co-Founder</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">Andrew Boanoh</div>
                  <div className="text-sm text-gray-500">COO & Co-Founder</div>
                </div>
              </div>
              <div className="text-center text-blue-600 font-medium">
                Yale University | Founded 2024
              </div>
            </motion.div>
          </div>
        );

      case 'crisis':
        return (
          <div className="h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">The Data Speaks</h2>
                <div className="space-y-6">
                  {[
                    { stat: '81.8%', desc: 'of university students rate finding passionate work as 4/10 or lower' },
                    { stat: '42.1%', desc: 'biggest challenge: "I don\'t fully know what\'s out there"' },
                    { stat: '52.6%', desc: 'agree: "Universities steer toward finance/consulting regardless of interests"' },
                    { stat: '26.3%', desc: 'avoid career services entirely due to lack of trust' },
                    { stat: '0.06%', desc: 'LinkedIn\'s actual success rate (7 hires per 11,000 applications/minute)' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className="flex items-center gap-4"
                    >
                      <div className="text-4xl font-bold text-red-500 min-w-[120px]">
                        {item.stat}
                      </div>
                      <div className="text-gray-700">
                        {item.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 text-sm text-gray-500">
                  Source: Original research across Wake Forest, UVM, Pitzer College, UW-Madison
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">The Human Cost</h2>
                <div className="space-y-6">
                  {[
                    { stat: '71%', desc: 'feel "stuck" within 2 years of graduation', source: 'Li et al., 2021' },
                    { stat: '$1.3T', desc: 'annual economic cost of career misalignment', source: 'McKinsey, 2023' },
                    { stat: 'Rising', desc: 'mental health crisis linked to work-related stress and purposelessness', source: 'Multiple studies' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                      className="p-6 bg-red-50 rounded-lg border border-red-200"
                    >
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        {item.stat}
                      </div>
                      <div className="text-gray-700 mb-2">
                        {item.desc}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.source}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'storm':
        return (
          <div className="h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'The Authenticity Crisis',
                  subtitle: 'Structural Problem',
                  description: 'Career discovery systems designed for institutional efficiency, not human fulfillment',
                  points: [
                    'Students navigate 17+ disconnected platforms',
                    'Traditional career services optimize for placement rates, not satisfaction',
                    '"Prestige over purpose" pipeline funnels brilliant minds into soul-crushing work'
                  ],
                  color: 'red',
                  icon: Heart
                },
                {
                  title: 'The AI Displacement Tsunami',
                  subtitle: 'Existential Threat',
                  description: '40% of jobs face automation risk (IMF, 2024), creating career decision paralysis',
                  points: [
                    'Students afraid to pursue creative/human-centered careers',
                    'No guidance on which paths become MORE valuable as AI advances',
                    'Mental health impact of choosing between passion and perceived security'
                  ],
                  color: 'orange',
                  icon: Cpu
                },
                {
                  title: 'The Search Revolution Gap',
                  subtitle: 'Technological Shift',
                  description: 'Post-ChatGPT, users expect conversational intelligence, not keyword matching',
                  points: [
                    'Career discovery stuck in Web 2.0 while everything else evolved',
                    'Students want AI dialogue, not database queries',
                    'Opportunity for complete paradigm shift in how humans discover meaningful work'
                  ],
                  color: 'blue',
                  icon: Search
                }
              ].map((crisis, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                  className={`p-6 rounded-xl border-2 ${
                    crisis.color === 'red' ? 'border-red-200 bg-red-50' :
                    crisis.color === 'orange' ? 'border-orange-200 bg-orange-50' :
                    'border-blue-200 bg-blue-50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <crisis.icon size={24} className={`${
                      crisis.color === 'red' ? 'text-red-600' :
                      crisis.color === 'orange' ? 'text-orange-600' :
                      'text-blue-600'
                    }`} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{crisis.title}</h3>
                      <div className={`text-sm font-medium ${
                        crisis.color === 'red' ? 'text-red-600' :
                        crisis.color === 'orange' ? 'text-orange-600' :
                        'text-blue-600'
                      }`}>
                        {crisis.subtitle}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{crisis.description}</p>
                  
                  <ul className="space-y-2">
                    {crisis.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          crisis.color === 'red' ? 'bg-red-500' :
                          crisis.color === 'orange' ? 'bg-orange-500' :
                          'bg-blue-500'
                        }`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'breakthrough':
        return (
          <div className="h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Core Innovation: Human-AI Symbiosis</h2>
                
                <div className="space-y-8">
                  <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Brain size={24} className="text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Autonomous Intelligence Layer</h3>
                    </div>
                    <div className="text-sm font-medium text-blue-600 mb-3">Always-On Discovery Engine</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Distributed web crawling across 100+ platforms</li>
                      <li>• Semantic opportunity classification</li>
                      <li>• Real-time market intelligence</li>
                      <li>• Predictive pathway modeling</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <MessageSquare size={24} className="text-green-600" />
                      <h3 className="text-xl font-bold text-gray-900">Conversational Intelligence Layer</h3>
                    </div>
                    <div className="text-sm font-medium text-green-600 mb-3">Human-Centered Dialogue System</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Values archaeology through natural conversation</li>
                      <li>• Authentic interest discovery</li>
                      <li>• Dynamic personality modeling</li>
                      <li>• Explainable AI recommendations</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap size={24} className="text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-900">Integration Breakthrough</h3>
                    </div>
                    <p className="text-sm text-gray-700">
                      Seamless synthesis where autonomous discoveries inform conversational insights, 
                      creating personalized career intelligence that works 24/7 while maintaining human agency.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <UIPreview onGetStarted={() => {}} />
              </div>
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="h-full flex flex-col justify-center py-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Six Co-Founders United by Seven Years of Friendship</h2>
                <p className="text-xl text-gray-600">Complementary Expertise & Authentic Mission Alignment</p>
              </div>

              {/* Leadership Triad */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center text-blue-600 mb-8">Leadership Triad</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: 'George McCain',
                      title: 'CEO & Co-Founder',
                      background: 'Lifelong programmer, Yale sophomore studying Computer Science',
                      experience: 'Built platform tracking senators\' stock trading (transparency/accountability focus)',
                      icon: Crown,
                      color: 'blue',
                      qualifications: [
                        'Vision & Strategy: Witnessed friends abandon authentic interests, inspiring mission to build AI that helps people discover work they love',
                        'Technical Foundation: Full-stack development with focus on user-centered design',
                        'Fundraising & Partnerships: Leading grant applications and corporate partnership development',
                        'Team Leadership: Coordinating six co-founders with complementary skills toward unified vision'
                      ]
                    },
                    {
                      name: 'Midhun Sadanand',
                      title: 'CTO & Co-Founder',
                      background: 'Computer Science & Economics double major, Yale',
                      experience: 'Designed proprietary hybrid vector search system',
                      icon: Cpu,
                      color: 'purple',
                      qualifications: [
                        'AI Architecture: Designed proprietary hybrid vector search system enabling real-time semantic matching across 200K+ records',
                        'Product Strategy: Experience in design, UX, programming, and venture capital analysis',
                        'System Scalability: Built infrastructure processing massive datasets with sub-second response times',
                        'Business Integration: Combines deep technical implementation with strategic business model innovation'
                      ]
                    },
                    {
                      name: 'Andrew Boanoh',
                      title: 'COO & Co-Founder',
                      background: 'Newly elected Yale Student Body President',
                      experience: 'Campaign focused specifically on reimagining career pipelines',
                      icon: Users,
                      color: 'green',
                      qualifications: [
                        'Institutional Strategy: Deep understanding of university operations, student needs, and administrative decision-making',
                        'Policy & Advocacy: Campaign platform focused specifically on reimagining career pipelines and student success',
                        'Stakeholder Management: Proven ability to build consensus among diverse constituencies and drive institutional change',
                        'Market Development: Direct access to student populations for product feedback, iteration, and scaling validation'
                      ]
                    }
                  ].map((leader, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                      className={`p-6 rounded-xl border-2 ${
                        leader.color === 'blue' ? 'border-blue-200 bg-blue-50' :
                        leader.color === 'purple' ? 'border-purple-200 bg-purple-50' :
                        'border-green-200 bg-green-50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <leader.icon size={24} className={`${
                          leader.color === 'blue' ? 'text-blue-600' :
                          leader.color === 'purple' ? 'text-purple-600' :
                          'text-green-600'
                        }`} />
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{leader.name}</h4>
                          <div className={`text-sm font-medium ${
                            leader.color === 'blue' ? 'text-blue-600' :
                            leader.color === 'purple' ? 'text-purple-600' :
                            'text-green-600'
                          }`}>
                            {leader.title}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="text-sm font-medium text-gray-700 mb-1">Background:</div>
                        <div className="text-sm text-gray-600">{leader.background}</div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-1">Previous Experience:</div>
                        <div className="text-sm text-gray-600">{leader.experience}</div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Key Qualifications:</div>
                        <ul className="space-y-1">
                          {leader.qualifications.map((qual, i) => (
                            <li key={i} className="text-xs text-gray-600 leading-relaxed">
                              • {qual}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technical Core Team */}
              <div>
                <h3 className="text-2xl font-bold text-center text-orange-600 mb-8">Technical Core Team</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: 'Aniketh Malyala',
                      title: 'Head ML Engineer & Co-Founder',
                      background: 'Former Palantir engineer with enterprise-scale AI experience',
                      icon: Brain,
                      color: 'orange',
                      specializations: [
                        'Large-Scale AI Systems: Built and deployed machine learning infrastructure serving millions of users',
                        'Real-Time Intelligence: Expertise in processing live data streams for predictive modeling',
                        'Automation-Resistance Modeling: Developed core algorithms identifying careers that strengthen as AI advances',
                        'Enterprise Integration: Understanding of enterprise AI requirements and deployment challenges'
                      ]
                    },
                    {
                      name: 'Asher Arell',
                      title: 'AI Engineer & Co-Founder',
                      background: 'Specialized in conversational AI and knowledge synthesis systems',
                      icon: MessageSquare,
                      color: 'teal',
                      specializations: [
                        'RAG Architecture: Designed Retrieval-Augmented Generation system enabling AI synthesis across multiple data sources',
                        'Conversational Intelligence: Built natural language processing systems understanding nuanced human career interests',
                        'Explainable AI: Created transparency features showing users exactly why career recommendations align with their values',
                        'Knowledge Integration: Architected systems combining alumni stories, company data, and live web intelligence'
                      ]
                    },
                    {
                      name: 'Raymond Hou',
                      title: 'Lead Developer & Co-Founder',
                      background: 'Full-stack architect with focus on human-centered design',
                      icon: Code,
                      color: 'indigo',
                      specializations: [
                        'User Experience: Frontend development ensuring seamless interaction between complex AI systems and intuitive user interfaces',
                        'Platform Integration: Built systems enabling smooth data flow between autonomous discovery and conversational interfaces',
                        'Onboarding & Engagement: Designed user journey optimizing for authentic self-discovery and sustained platform engagement',
                        'Quality Assurance: Maintains high technical standards ensuring reliable performance across diverse user scenarios'
                      ]
                    }
                  ].map((engineer, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.6, duration: 0.8 }}
                      className={`p-6 rounded-xl border-2 ${
                        engineer.color === 'orange' ? 'border-orange-200 bg-orange-50' :
                        engineer.color === 'teal' ? 'border-teal-200 bg-teal-50' :
                        'border-indigo-200 bg-indigo-50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <engineer.icon size={24} className={`${
                          engineer.color === 'orange' ? 'text-orange-600' :
                          engineer.color === 'teal' ? 'text-teal-600' :
                          'text-indigo-600'
                        }`} />
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{engineer.name}</h4>
                          <div className={`text-sm font-medium ${
                            engineer.color === 'orange' ? 'text-orange-600' :
                            engineer.color === 'teal' ? 'text-teal-600' :
                            'text-indigo-600'
                          }`}>
                            {engineer.title}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-1">Background:</div>
                        <div className="text-sm text-gray-600">{engineer.background}</div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Technical Specialization:</div>
                        <ul className="space-y-1">
                          {engineer.specializations.map((spec, i) => (
                            <li key={i} className="text-xs text-gray-600 leading-relaxed">
                              • {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Competitive Advantages */}
              <div className="mt-16 p-8 bg-gray-50 rounded-xl">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Competitive Team Advantages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Seven Years of Friendship',
                      description: 'Deep trust enabling rapid decision-making and conflict resolution',
                      icon: Heart,
                      color: 'red'
                    },
                    {
                      title: 'Authentic Problem Understanding',
                      description: 'Team members ARE the target users they\'re serving',
                      icon: Target,
                      color: 'blue'
                    },
                    {
                      title: 'Technical Excellence',
                      description: 'Proven ability to build and deploy complex AI systems at scale',
                      icon: Award,
                      color: 'purple'
                    },
                    {
                      title: 'Institutional Access',
                      description: 'Direct relationships with university stakeholders and decision-makers',
                      icon: Building2,
                      color: 'green'
                    },
                    {
                      title: 'Mission Alignment',
                      description: 'Personal commitment to human-empowering technology vs. pure economic optimization',
                      icon: Lightbulb,
                      color: 'yellow'
                    },
                    {
                      title: 'Execution Capability',
                      description: 'Complementary skills enabling rapid iteration and scaling',
                      icon: Rocket,
                      color: 'orange'
                    }
                  ].map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 1.2, duration: 0.6 }}
                      className="p-4 bg-white rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <advantage.icon size={20} className={`${
                          advantage.color === 'red' ? 'text-red-500' :
                          advantage.color === 'blue' ? 'text-blue-500' :
                          advantage.color === 'purple' ? 'text-purple-500' :
                          advantage.color === 'green' ? 'text-green-500' :
                          advantage.color === 'yellow' ? 'text-yellow-500' :
                          'text-orange-500'
                        }`} />
                        <h4 className="font-semibold text-gray-900">{advantage.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{advantage.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'financials':
        return (
          <div className="h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Conservative Growth Model</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      year: 'Year 1',
                      revenue: '$95K',
                      description: 'Foundation Building',
                      breakdown: [
                        'Student Subscriptions: $60K',
                        'University Pilots: $15K',
                        'Research Partnerships: $20K'
                      ],
                      color: 'blue'
                    },
                    {
                      year: 'Year 2',
                      revenue: '$925K',
                      description: 'Proven Scaling',
                      breakdown: [
                        'Student Subscriptions: $600K',
                        'University Partnerships: $200K',
                        'Corporate Pilots: $75K',
                        'Data Licensing: $50K'
                      ],
                      color: 'green'
                    },
                    {
                      year: 'Year 3',
                      revenue: '$12M',
                      description: 'Market Leadership',
                      breakdown: [
                        'Student Subscriptions: $6M',
                        'University Enterprise: $3M',
                        'Corporate Solutions: $2.5M',
                        'Data & Analytics: $500K'
                      ],
                      color: 'purple'
                    }
                  ].map((year, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                      className={`p-6 rounded-xl border-2 ${
                        year.color === 'blue' ? 'border-blue-200 bg-blue-50' :
                        year.color === 'green' ? 'border-green-200 bg-green-50' :
                        'border-purple-200 bg-purple-50'
                      }`}
                    >
                      <div className="text-center mb-4">
                        <div className="text-sm font-medium text-gray-600">{year.year}</div>
                        <div className={`text-3xl font-bold ${
                          year.color === 'blue' ? 'text-blue-600' :
                          year.color === 'green' ? 'text-green-600' :
                          'text-purple-600'
                        }`}>
                          {year.revenue}
                        </div>
                        <div className="text-sm text-gray-600">{year.description}</div>
                      </div>
                      
                      <ul className="space-y-1">
                        {year.breakdown.map((item, i) => (
                          <li key={i} className="text-xs text-gray-600">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Unit Economics</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium text-gray-700">Customer Acquisition Cost (CAC)</div>
                        <div className="text-xs text-gray-600">
                          Students: $25 | Universities: $2,500 | Corporations: $10,000
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700">Lifetime Value (LTV)</div>
                        <div className="text-xs text-gray-600">
                          Students: $240 | Universities: $45,000 | Corporations: $200,000
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700">LTV/CAC Ratios</div>
                        <div className="text-xs text-green-600 font-medium">
                          9.6x (students) | 18x (universities) | 20x (corporations)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Gross Margins</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Software subscriptions</span>
                        <span className="text-sm font-medium text-green-600">85%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Services & consulting</span>
                        <span className="text-sm font-medium text-green-600">65%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Data licensing</span>
                        <span className="text-sm font-medium text-green-600">90%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Streams</h3>
                <div className="space-y-4">
                  {[
                    { name: 'B2C Subscriptions', percentage: 50, color: 'blue' },
                    { name: 'University Licensing', percentage: 25, color: 'green' },
                    { name: 'Enterprise Solutions', percentage: 20, color: 'purple' },
                    { name: 'Data & Insights', percentage: 5, color: 'orange' }
                  ].map((stream, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700">{stream.name}</span>
                        <span className="font-medium">{stream.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stream.percentage}%` }}
                          transition={{ delay: index * 0.1 + 0.8, duration: 0.8 }}
                          className={`h-2 rounded-full ${
                            stream.color === 'blue' ? 'bg-blue-500' :
                            stream.color === 'green' ? 'bg-green-500' :
                            stream.color === 'purple' ? 'bg-purple-500' :
                            'bg-orange-500'
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">Key Metrics</h4>
                  <div className="space-y-1 text-sm text-green-700">
                    <div>• 50K+ users by Year 3</div>
                    <div>• 200+ university partners</div>
                    <div>• 50+ enterprise customers</div>
                    <div>• $12M ARR target</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'partnership':
        return (
          <div className="h-full flex flex-col justify-center">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Building the Future Together</h2>
              <p className="text-xl text-gray-600">Strategic Partnership Opportunity for Mutual Value Creation</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-6">What We're Seeking from IBM</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Strategic Technology Partnership',
                      items: [
                        'Watson platform integration for enterprise-grade conversational AI',
                        'IBM Cloud infrastructure supporting global scaling requirements',
                        'Research collaboration on human-AI interaction methodologies',
                        'Joint IP development in values-based AI recommendation systems'
                      ],
                      icon: Cpu
                    },
                    {
                      title: 'Go-to-Market Acceleration',
                      items: [
                        'Enterprise customer introductions for Fortune 500 career development needs',
                        'University partner network leveraging IBM\'s educational relationships',
                        'International expansion support through IBM\'s global presence',
                        'Sales team collaboration for enterprise solution development'
                      ],
                      icon: Rocket
                    },
                    {
                      title: 'Technical Expertise Access',
                      items: [
                        'Watson technical team consultation on integration architecture',
                        'AI ethics guidance ensuring responsible development practices',
                        'Security and compliance support for enterprise deployment',
                        'Performance optimization for large-scale conversational AI workloads'
                      ],
                      icon: Shield
                    }
                  ].map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                      className="p-6 bg-blue-50 rounded-xl border border-blue-200"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <section.icon size={24} className="text-blue-600" />
                        <h4 className="text-lg font-bold text-gray-900">{section.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-6">Mutual Value Creation</h3>
                
                <div className="grid grid-cols-1 gap-6 mb-8">
                  <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">IBM Gains</h4>
                    <ul className="space-y-2">
                      {[
                        'Innovation showcase demonstrating Watson\'s human-empowerment potential',
                        'New market entry into the $15B career services industry',
                        'Competitive differentiation in human-AI collaboration space',
                        'Research insights on conversational AI for complex decision-making'
                      ].map((gain, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                          {gain}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Milo Gains</h4>
                    <ul className="space-y-2">
                      {[
                        'Enterprise credibility accelerating university and corporate adoption',
                        'Technical infrastructure enabling global scaling without massive capital investment',
                        'Market access through IBM\'s existing customer relationships',
                        'Brand association with responsible AI development leadership'
                      ].map((gain, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <Star size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                          {gain}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-gray-900 text-white rounded-xl">
                  <h4 className="text-lg font-bold mb-4">Next Steps</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                        30
                      </div>
                      <div>
                        <div className="font-medium">Technical architecture review</div>
                        <div className="text-sm text-gray-300">Watson integration team consultation</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                        90
                      </div>
                      <div>
                        <div className="font-medium">Proof of concept deployment</div>
                        <div className="text-sm text-gray-300">Watson-enhanced conversational career discovery</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                        6M
                      </div>
                      <div>
                        <div className="font-medium">Commercial pilot launch</div>
                        <div className="text-sm text-gray-300">Measurable outcomes and enterprise development</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="text-lg font-bold text-gray-900 mb-2">Contact Information</div>
                  <div className="text-sm text-gray-600">
                    <div>George McCain, CEO & Co-Founder</div>
                    <div>georgemccain88@gmail.com | (917) 803-4541</div>
                    <div className="mt-2">
                      <span className="font-medium">Live Demo:</span> milojobs.netlify.app
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">The Invitation</h3>
                <p className="text-lg mb-4">
                  Join us in proving that AI can enhance rather than replace human potential
                </p>
                <p className="text-sm opacity-90">
                  Together, we can build technology that helps people become more authentically themselves.
                </p>
              </motion.div>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{slide.title}</h2>
              <p className="text-xl text-gray-600 mb-8">{slide.subtitle}</p>
              <p className="text-gray-700">{slide.content}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center gap-2 px-2 py-1 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <img 
                src="/logo_clean.png"
                alt="Milo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-bold tracking-wide">MILO PITCH</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="h-full p-8"
          >
            <div className="max-w-7xl mx-auto h-full">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl text-blue-600 font-medium">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
              
              <div className="h-[calc(100%-8rem)]">
                {renderSlideContent()}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                disabled={currentSlide === 0}
              >
                <ChevronLeft size={20} className={currentSlide === 0 ? 'text-gray-300' : 'text-gray-600'} />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {isPlaying ? <Pause size={20} className="text-gray-600" /> : <Play size={20} className="text-gray-600" />}
              </button>

              <div className="flex gap-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                disabled={currentSlide === slides.length - 1}
              >
                <ChevronRight size={20} className={currentSlide === slides.length - 1 ? 'text-gray-300' : 'text-gray-600'} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-500 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
        <div>← → Navigate | Space Play/Pause | Esc Toggle Controls</div>
      </div>
    </div>
  );
}