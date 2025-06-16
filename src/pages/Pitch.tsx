import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Play, Users, Target, TrendingUp, Zap, Globe, Award, Crown, Cpu, Settings, Code, Brain, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "MILO",
    subtitle: "Building Technology That Helps Humans Find Work That Makes Them Irreplaceable",
    content: (
      <div className="text-center space-y-8">
        <div className="flex justify-center mb-8">
          <img 
            src="/logo_clean.png"
            alt="Milo"
            className="w-32 h-32 object-contain"
          />
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">George McCain</h3>
              <p className="text-gray-600 font-medium">CEO & Co-Founder</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Midhun Sadanand</h3>
              <p className="text-gray-600 font-medium">CTO & Co-Founder</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Andrew Boanoh</h3>
              <p className="text-gray-600 font-medium">COO & Co-Founder</p>
            </div>
          </div>
          
          <div className="text-lg text-gray-700 font-medium">
            Yale University | Founded 2024
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "THE GENERATIONAL CRISIS",
    subtitle: "Career Discovery is Fundamentally Broken",
    content: (
      <div className="space-y-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-red-900 mb-4">THE DATA SPEAKS:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-red-600">81.8%</span>
                <span className="text-gray-700">of university students rate finding passionate work as 4/10 or lower</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-red-600">42.1%</span>
                <span className="text-gray-700">biggest challenge: "I don't fully know what's out there"</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-red-600">52.6%</span>
                <span className="text-gray-700">agree: "Universities steer toward finance/consulting regardless of interests"</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-red-600">26.3%</span>
                <span className="text-gray-700">avoid career services entirely due to lack of trust</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-red-600">0.06%</span>
                <span className="text-gray-700">LinkedIn's actual success rate (7 hires per 11,000 applications/minute)</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4 italic">Source: Original research across Wake Forest, UVM, Pitzer College, UW-Madison</p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">THE HUMAN COST:</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-700">71%</span>
              <span className="text-gray-700">feel "stuck" within 2 years of graduation (Li et al., 2021)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-700">$1.3T</span>
              <span className="text-gray-700">annual economic cost of career misalignment (McKinsey, 2023)</span>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="text-red-500" size={24} />
              <span className="text-gray-700">Rising mental health crisis linked to work-related stress and purposelessness</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "THE PERFECT STORM",
    subtitle: "Three Converging Forces Creating Unprecedented Challenge",
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
            <Target size={20} />
            1. THE AUTHENTICITY CRISIS
          </h3>
          <p className="text-blue-800 font-medium mb-2">Structural Problem: Career discovery systems designed for institutional efficiency, not human fulfillment</p>
          <ul className="text-sm text-blue-700 space-y-1 ml-4">
            <li>• Students navigate 17+ disconnected platforms (University of Minnesota, 2023)</li>
            <li>• Traditional career services optimize for placement rates, not satisfaction</li>
            <li>• "Prestige over purpose" pipeline funnels brilliant minds into soul-crushing work</li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
            <Zap size={20} />
            2. THE AI DISPLACEMENT TSUNAMI
          </h3>
          <p className="text-red-800 font-medium mb-2">Existential Threat: 40% of jobs face automation risk (IMF, 2024), creating career decision paralysis</p>
          <ul className="text-sm text-red-700 space-y-1 ml-4">
            <li>• Students afraid to pursue creative/human-centered careers</li>
            <li>• No guidance on which paths become MORE valuable as AI advances</li>
            <li>• Mental health impact of choosing between passion and perceived security</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
            <Globe size={20} />
            3. THE SEARCH REVOLUTION GAP
          </h3>
          <p className="text-green-800 font-medium mb-2">Technological Shift: Post-ChatGPT, users expect conversational intelligence, not keyword matching</p>
          <ul className="text-sm text-green-700 space-y-1 ml-4">
            <li>• Career discovery stuck in Web 2.0 while everything else evolved</li>
            <li>• Students want AI dialogue, not database queries</li>
            <li>• Opportunity for complete paradigm shift in how humans discover meaningful work</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "THE MILO BREAKTHROUGH",
    subtitle: "Revolutionary Dual-Mode AI Architecture",
    content: (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">CORE INNOVATION: Human-AI Symbiosis for Career Discovery</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
              <Brain size={20} />
              AUTONOMOUS INTELLIGENCE LAYER
            </h3>
            <p className="text-purple-800 font-medium mb-3">Always-On Discovery Engine:</p>
            <ul className="text-sm text-purple-700 space-y-2">
              <li>• <strong>Distributed web crawling</strong> across 100+ platforms using advanced pattern recognition</li>
              <li>• <strong>Semantic opportunity classification</strong> identifying meaningful work traditional aggregators miss</li>
              <li>• <strong>Real-time market intelligence</strong> surfacing opportunities within seconds of posting</li>
              <li>• <strong>Predictive pathway modeling</strong> analyzing which careers strengthen as AI advances</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Users size={20} />
              CONVERSATIONAL INTELLIGENCE LAYER
            </h3>
            <p className="text-blue-800 font-medium mb-3">Human-Centered Dialogue System:</p>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>• <strong>Values archaeology</strong> through natural conversation, not surveys</li>
              <li>• <strong>Authentic interest discovery</strong> challenging assumptions about "practical" vs. "passionate"</li>
              <li>• <strong>Dynamic personality modeling</strong> evolving understanding through each interaction</li>
              <li>• <strong>Explainable AI recommendations</strong> showing WHY opportunities align with authentic self</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-green-900 mb-3">INTEGRATION BREAKTHROUGH:</h3>
          <p className="text-green-800">
            <strong>Seamless synthesis</strong> where autonomous discoveries inform conversational insights, creating personalized career intelligence that works 24/7 while maintaining human agency
          </p>
        </div>
      </div>
    )
  },
  {
    id: 13,
    title: "THE COMPLETE FOUNDING TEAM",
    subtitle: "Six Co-Founders United by Seven Years of Friendship & Complementary Expertise",
    content: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">LEADERSHIP TRIAD</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Crown className="text-blue-600" size={24} />
              <div>
                <h4 className="text-lg font-bold text-blue-900">GEORGE MCCAIN</h4>
                <p className="text-blue-700 font-medium">CEO & Co-Founder</p>
              </div>
            </div>
            <p className="text-sm text-blue-800 mb-3">
              <strong>Background:</strong> Lifelong programmer, Yale sophomore studying Computer Science
            </p>
            <div className="text-sm text-blue-700 space-y-2">
              <p><strong>Leadership Qualifications:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Vision & Strategy: Witnessed friends abandon authentic interests, inspiring mission to build AI that helps people discover work they love</li>
                <li>• Technical Foundation: Full-stack development with focus on user-centered design</li>
                <li>• Fundraising & Partnerships: Leading grant applications and corporate partnership development</li>
                <li>• Team Leadership: Coordinating six co-founders with complementary skills toward unified vision</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-purple-50 border border-purple-200 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-purple-600" size={24} />
              <div>
                <h4 className="text-lg font-bold text-purple-900">MIDHUN SADANAND</h4>
                <p className="text-purple-700 font-medium">CTO & Co-Founder</p>
              </div>
            </div>
            <p className="text-sm text-purple-800 mb-3">
              <strong>Background:</strong> Computer Science & Economics double major, Yale
            </p>
            <div className="text-sm text-purple-700 space-y-2">
              <p><strong>Technical Leadership:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• AI Architecture: Designed proprietary hybrid vector search system enabling real-time semantic matching across 200K+ records</li>
                <li>• Product Strategy: Experience in design, UX, programming, and venture capital analysis</li>
                <li>• System Scalability: Built infrastructure processing massive datasets with sub-second response times</li>
                <li>• Business Integration: Combines deep technical implementation with strategic business model innovation</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-green-50 border border-green-200 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Settings className="text-green-600" size={24} />
              <div>
                <h4 className="text-lg font-bold text-green-900">ANDREW BOANOH</h4>
                <p className="text-green-700 font-medium">COO & Co-Founder</p>
              </div>
            </div>
            <p className="text-sm text-green-800 mb-3">
              <strong>Background:</strong> Newly elected Yale Student Body President
            </p>
            <div className="text-sm text-green-700 space-y-2">
              <p><strong>Operational Excellence:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Institutional Strategy: Deep understanding of university operations, student needs, and administrative decision-making</li>
                <li>• Policy & Advocacy: Campaign platform focused specifically on reimagining career pipelines and student success</li>
                <li>• Stakeholder Management: Proven ability to build consensus among diverse constituencies and drive institutional change</li>
                <li>• Market Development: Direct access to student populations for product feedback, iteration, and scaling validation</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">TECHNICAL CORE TEAM</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-red-50 border border-red-200 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-red-600" size={24} />
              <div>
                <h4 className="text-lg font-bold text-red-900">ANIKETH MALYALA</h4>
                <p className="text-red-700 font-medium">Head ML Engineer & Co-Founder</p>
              </div>
            </div>
            <p className="text-sm text-red-800 mb-3">
              <strong>Background:</strong> Former Palantir engineer with enterprise-scale AI experience
            </p>
            <div className="text-sm text-red-700 space-y-2">
              <p><strong>Technical Specialization:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Large-Scale AI Systems: Built and deployed machine learning infrastructure serving millions of users</li>
                <li>• Real-Time Intelligence: Expertise in processing live data streams for predictive modeling</li>
                <li>• Automation-Resistance Modeling: Developed core algorithms identifying careers that strengthen as AI advances</li>
                <li>• Enterprise Integration: Understanding of enterprise AI requirements and deployment challenges</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-yellow-50 border border-yellow-200 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-yellow-600" size={24} />
              <div>
                <h4 className="text-lg font-bold text-yellow-900">ASHER ARELL</h4>
                <p className="text-yellow-700 font-medium">AI Engineer & Co-Founder</p>
              </div>
            </div>
            <p className="text-sm text-yellow-800 mb-3">
              <strong>Background:</strong> Specialized in conversational AI and knowledge synthesis systems
            </p>
            <div className="text-sm text-yellow-700 space-y-2">
              <p><strong>Innovation Contributions:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• RAG Architecture: Designed Retrieval-Augmented Generation system enabling AI synthesis across multiple data sources</li>
                <li>• Conversational Intelligence: Built natural language processing systems understanding nuanced human career interests</li>
                <li>• Explainable AI: Created transparency features showing users exactly why career recommendations align with their values</li>
                <li>• Knowledge Integration: Architected systems combining alumni stories, company data, and live web intelligence</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-indigo-50 border border-indigo-200 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="text-indigo-600" size={24} />
              <div>
                <h4 className="text-lg font-bold text-indigo-900">RAYMOND HOU</h4>
                <p className="text-indigo-700 font-medium">Lead Developer & Co-Founder</p>
              </div>
            </div>
            <p className="text-sm text-indigo-800 mb-3">
              <strong>Background:</strong> Full-stack architect with focus on human-centered design
            </p>
            <div className="text-sm text-indigo-700 space-y-2">
              <p><strong>Development Leadership:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• User Experience: Frontend development ensuring seamless interaction between complex AI systems and intuitive user interfaces</li>
                <li>• Platform Integration: Built systems enabling smooth data flow between autonomous discovery and conversational interfaces</li>
                <li>• Onboarding & Engagement: Designed user journey optimizing for authentic self-discovery and sustained platform engagement</li>
                <li>• Quality Assurance: Maintains high technical standards ensuring reliable performance across diverse user scenarios</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">COMPETITIVE TEAM ADVANTAGES:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Award className="text-blue-500" size={16} />
                <span className="text-sm font-medium">Lived Experience: Team members ARE the users they're serving</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-green-500" size={16} />
                <span className="text-sm font-medium">Technical Excellence: Proven ability to build and deploy complex AI systems at scale</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-purple-500" size={16} />
                <span className="text-sm font-medium">Institutional Access: Direct relationships with university stakeholders and decision-makers</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Award className="text-red-500" size={16} />
                <span className="text-sm font-medium">Mission Alignment: Personal commitment to human-empowering technology vs. pure economic optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-yellow-500" size={16} />
                <span className="text-sm font-medium">Execution Capability: Complementary skills enabling rapid iteration and scaling</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-indigo-500" size={16} />
                <span className="text-sm font-medium">Long-term Stability: Deep personal relationships reducing typical startup team fragmentation risk</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-blue-900 mb-2">SEVEN YEARS OF FRIENDSHIP:</h3>
          <p className="text-blue-800">
            Deep trust enabling rapid decision-making, complementary strengths with natural division of responsibilities, 
            shared values united in building technology that enhances human potential, and authentic mission alignment 
            where every team member personally experienced the career discovery crisis they're solving.
          </p>
        </div>
      </div>
    )
  }
];

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

  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto">
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
            <div className="flex items-center">
              <img 
                src="/logo_clean.png"
                alt="Milo"
                className="h-8 w-8 object-contain"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Slide Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={20} />
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Next
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 min-h-[600px]"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg text-blue-600 font-medium">
                {slides[currentSlide].subtitle}
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {slides[currentSlide].content}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Counter */}
        <div className="text-center mt-6 text-gray-500">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  );
}

export default Pitch;