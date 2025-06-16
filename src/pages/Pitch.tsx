import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp, Play, Pause,
  Users, TrendingUp, Brain, Target, Globe, Zap, Shield, Award,
  BarChart3, MessageCircle, Search, Sparkles, Heart, Building2,
  GraduationCap, Briefcase, Code, Database, Cloud, Lock
} from 'lucide-react';
import { UIPreview } from '../components/UIPreview';
import { StreamingText } from '../components/StreamingText';
import { JobCard } from '../components/JobCard';

interface Slide {
  id: string;
  title: string;
  component: React.ComponentType<any>;
}

const slides: Slide[] = [
  { id: 'title', title: 'Title', component: TitleSlide },
  { id: 'crisis', title: 'The Crisis', component: CrisisSlide },
  { id: 'storm', title: 'Perfect Storm', component: StormSlide },
  { id: 'breakthrough', title: 'Breakthrough', component: BreakthroughSlide },
  { id: 'architecture', title: 'Architecture', component: ArchitectureSlide },
  { id: 'validation', title: 'Validation', component: ValidationSlide },
  { id: 'datasets', title: 'Data Assets', component: DatasetsSlide },
  { id: 'business', title: 'Business Model', component: BusinessSlide },
  { id: 'competitive', title: 'Competition', component: CompetitiveSlide },
  { id: 'watson', title: 'IBM Watson', component: WatsonSlide },
  { id: 'market', title: 'Go-to-Market', component: MarketSlide },
  { id: 'financials', title: 'Financials', component: FinancialsSlide },
  { id: 'team', title: 'Team', component: TeamSlide },
  { id: 'risks', title: 'Risk Analysis', component: RisksSlide },
  { id: 'vision', title: 'Vision', component: VisionSlide },
  { id: 'partnership', title: 'Partnership', component: PartnershipSlide }
];

function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="flex items-center justify-center gap-6 mb-8">
          <img 
            src="/logo_clean.png"
            alt="Milo"
            className="w-24 h-24 object-contain"
          />
          <h1 className="text-6xl font-bold text-gray-900">MILO</h1>
        </div>
        
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Conversational AI for Authentic Career Discovery
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Building Technology That Helps Humans Find Work That Makes Them Irreplaceable
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="font-semibold text-gray-900">George McCain</h3>
            <p className="text-gray-600">CEO & Co-Founder</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900">Midhun Sadanand</h3>
            <p className="text-gray-600">CTO & Co-Founder</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900">Andrew Boanoh</h3>
            <p className="text-gray-600">COO & Co-Founder</p>
          </div>
        </div>

        <div className="text-lg text-gray-500">
          Yale University | Founded 2024
        </div>
      </motion.div>
    </div>
  );
}

function CrisisSlide() {
  const stats = [
    { value: '81.8%', label: 'Rate finding passionate work as 4/10 or lower', icon: TrendingUp },
    { value: '42.1%', label: 'Biggest challenge: "I don\'t fully know what\'s out there"', icon: Search },
    { value: '52.6%', label: 'Universities steer toward finance/consulting regardless of interests', icon: Building2 },
    { value: '26.3%', label: 'Avoid career services entirely due to lack of trust', icon: Shield },
    { value: '0.06%', label: 'LinkedIn\'s actual success rate (7 hires per 11,000 applications/minute)', icon: BarChart3 }
  ];

  const costs = [
    { value: '71%', label: 'Feel "stuck" within 2 years of graduation' },
    { value: '$1.3T', label: 'Annual economic cost of career misalignment' },
    { value: 'Rising', label: 'Mental health crisis linked to work-related stress' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Career Discovery is Fundamentally Broken
          </h1>
          <p className="text-xl text-gray-600">
            A generational crisis hiding in plain sight
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="text-red-500" />
              The Data Speaks
            </h2>
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-sm border border-red-200"
                >
                  <div className="flex items-start gap-3">
                    <stat.icon className="text-red-500 mt-1" size={20} />
                    <div>
                      <div className="text-2xl font-bold text-red-600">{stat.value}</div>
                      <div className="text-gray-700">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              Source: Original research across Wake Forest, UVM, Pitzer College, UW-Madison
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Heart className="text-red-500" />
              The Human Cost
            </h2>
            <div className="space-y-6">
              {costs.map((cost, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm border border-red-200"
                >
                  <div className="text-3xl font-bold text-red-600 mb-2">{cost.value}</div>
                  <div className="text-gray-700">{cost.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-white"
            >
              <h3 className="text-xl font-bold mb-2">The Reality</h3>
              <p className="text-red-100">
                Brilliant people get passed over. They give up on what excites them and default to what feels "safe." 
                Burnout, disengagement, and misalignment follow—not from lack of talent, but lack of discovery.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function StormSlide() {
  const forces = [
    {
      title: 'The Authenticity Crisis',
      subtitle: 'Structural Problem',
      description: 'Career discovery systems designed for institutional efficiency, not human fulfillment',
      points: [
        'Students navigate 17+ disconnected platforms',
        'Traditional career services optimize for placement rates, not satisfaction',
        '"Prestige over purpose" pipeline funnels brilliant minds into soul-crushing work'
      ],
      color: 'from-purple-500 to-pink-500',
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
      color: 'from-red-500 to-orange-500',
      icon: Brain
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
      color: 'from-blue-500 to-cyan-500',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">The Perfect Storm</h1>
          <p className="text-xl text-gray-300">
            Three converging forces creating unprecedented challenge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {forces.map((force, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${force.color} rounded-xl opacity-10`} />
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${force.color}`}>
                    <force.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{force.title}</h3>
                    <p className="text-sm text-gray-400">{force.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{force.description}</p>
                
                <ul className="space-y-2">
                  {force.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">The Convergence</h3>
            <p className="text-yellow-100 text-lg">
              These three forces create a unique moment in history where the old systems are failing, 
              new technology is possible, and an entire generation needs a fundamentally different approach 
              to discovering meaningful work.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function BreakthroughSlide() {
  const [activeDemo, setActiveDemo] = useState<'autonomous' | 'conversational' | 'integration'>('autonomous');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">The Milo Breakthrough</h1>
          <p className="text-xl text-gray-600">Revolutionary Dual-Mode AI Architecture</p>
          <div className="mt-6 inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full">
            <Sparkles className="text-emerald-600" size={20} />
            <span className="text-emerald-800 font-medium">Human-AI Symbiosis for Career Discovery</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                activeDemo === 'autonomous' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
              onClick={() => setActiveDemo('autonomous')}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Database className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Autonomous Intelligence Layer</h3>
              </div>
              <p className="text-gray-600 mb-4">Always-On Discovery Engine</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Distributed web crawling across 100+ platforms</li>
                <li>• Semantic opportunity classification</li>
                <li>• Real-time market intelligence</li>
                <li>• Predictive pathway modeling</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                activeDemo === 'conversational' 
                  ? 'border-emerald-500 bg-emerald-50' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
              onClick={() => setActiveDemo('conversational')}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500 rounded-lg">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Conversational Intelligence Layer</h3>
              </div>
              <p className="text-gray-600 mb-4">Human-Centered Dialogue System</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Values archaeology through natural conversation</li>
                <li>• Authentic interest discovery</li>
                <li>• Dynamic personality modeling</li>
                <li>• Explainable AI recommendations</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                activeDemo === 'integration' 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
              onClick={() => setActiveDemo('integration')}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <Zap className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Integration Breakthrough</h3>
              </div>
              <p className="text-gray-600 mb-4">Seamless Synthesis</p>
              <p className="text-sm text-gray-700">
                Autonomous discoveries inform conversational insights, creating personalized career intelligence 
                that works 24/7 while maintaining human agency.
              </p>
            </motion.div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              {activeDemo === 'autonomous' && (
                <motion.div
                  key="autonomous"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-6"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Live Discovery Engine</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span className="text-sm">Scanning 127 job boards...</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-sm">Found 23 new research opportunities</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                      <span className="text-sm">Analyzing company culture data...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeDemo === 'conversational' && (
                <motion.div
                  key="conversational"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-6"
                >
                  <UIPreview />
                </motion.div>
              )}
              
              {activeDemo === 'integration' && (
                <motion.div
                  key="integration"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-6"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Unified Intelligence</h4>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-100 to-emerald-100 p-4 rounded-lg">
                      <div className="text-sm font-medium text-gray-800 mb-2">Real-time Synthesis</div>
                      <div className="text-xs text-gray-600">
                        Autonomous agent discovers new AI safety research position → 
                        Conversational AI analyzes fit with user's ethics interests → 
                        Personalized recommendation with explanation
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-blue-600">24/7</div>
                        <div className="text-xs text-gray-600">Discovery</div>
                      </div>
                      <div className="bg-emerald-50 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-emerald-600">Human</div>
                        <div className="text-xs text-gray-600">Agency</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Deep Technical Architecture</h1>
          <p className="text-xl text-gray-600">Proprietary AI Systems & Algorithms</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-blue-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Values Vector Architecture™</h3>
            </div>
            <p className="text-gray-600 mb-4">Revolutionary Approach to Human Authenticity Encoding</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Multi-dimensional embeddings encoding passion, purpose, creativity</li>
              <li>• Behavioral pattern analysis from implicit feedback</li>
              <li>• Values hierarchy modeling</li>
              <li>• Authentic interest synthesis</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-emerald-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg">
                <Search className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Hybrid Semantic Search</h3>
            </div>
            <p className="text-gray-600 mb-4">Enterprise-Grade Discovery Infrastructure</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Dense embeddings: LLaMA-text-embed-v2</li>
              <li>• Sparse retrieval: Keyword precision</li>
              <li>• Vector database: Pinecone for sub-second search</li>
              <li>• Real-time indexing: Redis caching</li>
              <li>• Quality scoring: ML ranking models</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-orange-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Automation-Resistance Engine</h3>
            </div>
            <p className="text-gray-600 mb-4">Proprietary AI Resilience Modeling</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Labor economics integration</li>
              <li>• Human capability mapping</li>
              <li>• Future trend analysis</li>
              <li>• Career pathway simulation</li>
            </ul>
            <div className="mt-4 p-3 bg-orange-50 rounded-lg">
              <div className="text-sm font-medium text-orange-800">Technical Result:</div>
              <div className="text-sm text-orange-700">89% accuracy in identifying automation-resistant career paths</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">System Architecture Flow</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users size={24} />
              </div>
              <div className="text-sm">User Input</div>
            </div>
            <div className="text-center">
              <ArrowRight className="mx-auto text-gray-400" size={20} />
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Brain size={24} />
              </div>
              <div className="text-sm">Values Analysis</div>
            </div>
            <div className="text-center">
              <ArrowRight className="mx-auto text-gray-400" size={20} />
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target size={24} />
              </div>
              <div className="text-sm">Personalized Results</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ValidationSlide() {
  const stats = [
    { value: '73.7%', label: 'Adoption intent for AI-powered career discovery', color: 'emerald' },
    { value: '57.9%', label: 'Willingness to pay for authentic career alignment tools', color: 'blue' },
    { value: '42.1%', label: 'Report career services "make little to no difference"', color: 'red' },
    { value: '10.5%', label: 'Report career services actually helped find meaningful work', color: 'orange' }
  ];

  const universities = ['Wake Forest', 'UVM', 'Pitzer College', 'UW-Madison'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Scientific Validation & Research</h1>
          <p className="text-xl text-gray-600">Evidence-Based Approach to Career-Wellbeing Connection</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Original Research Findings</h2>
            
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Multi-University Study</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-2xl font-bold text-emerald-600">N=19</div>
                  <div className="text-sm text-gray-600">Expanding to 200+</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">4</div>
                  <div className="text-sm text-gray-600">Universities</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {universities.map((uni, index) => (
                  <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                    {uni}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-emerald-500"
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</div>
                    <div className="text-gray-700">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Psychological Framework</h2>
            
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Career Misalignment → Mental Health Pipeline</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-gray-700">Chronic stress from work-value misalignment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <span className="text-gray-700">Decision paralysis from too many low-quality options</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="text-gray-700">Imposter syndrome from pursuing inauthentic paths</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  <span className="text-gray-700">Burnout prevention through early authentic alignment</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Competitive Intelligence</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold">LinkedIn:</span> 11,000 applications/minute, 7 hires = 0.00006% success rate
                </div>
                <div>
                  <span className="font-semibold">Handshake:</span> University-focused but still keyword-based matching
                </div>
                <div>
                  <span className="font-semibold">Indeed/ZipRecruiter:</span> High volume, low quality, no values alignment
                </div>
                <div>
                  <span className="font-semibold">Career services:</span> One-size-fits-all approach with minimal personalization
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function DatasetsSlide() {
  const datasets = [
    {
      title: 'Alumni Career Journey Database',
      description: '100K+ Yale alumni career transition patterns',
      points: [
        'Unconventional pathway mapping: Literature → Documentary → Climate Policy',
        'Success pattern recognition: Which authentic transitions actually work economically',
        'Mentorship graph analysis: Connection patterns for warm introductions'
      ],
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Company Culture Intelligence',
      description: '100K+ organization profiles with deep cultural analysis',
      points: [
        'Mission-driven scoring: Quantifying authentic company values vs. corporate speak',
        'Growth stage modeling: Startup, scale-up, enterprise culture patterns',
        'Values alignment prediction: Company-individual fit scoring'
      ],
      icon: Building2,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Real-Time Opportunity Intelligence',
      description: 'Live web scraping across job boards, fellowship sites, research programs',
      points: [
        'Opportunity classification: Traditional jobs vs. meaningful work detection',
        'Temporal pattern analysis: When meaningful opportunities typically appear',
        'Geographic opportunity mapping: Remote vs. location-specific patterns'
      ],
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Proprietary Datasets & AI Training</h1>
          <p className="text-xl text-gray-600">Competitive Moats Through Data Advantages</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {datasets.map((dataset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-br ${dataset.color} rounded-lg`}>
                  <dataset.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{dataset.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{dataset.description}</p>
              
              <ul className="space-y-2">
                {dataset.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Brain className="text-purple-500" />
              AI Training Methodology
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Human-in-the-Loop Learning:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Conversation mining: Learning authentic interest patterns</li>
                  <li>• Outcome feedback: Career satisfaction tracking</li>
                  <li>• Values calibration: Continuous authenticity refinement</li>
                  <li>• Bias mitigation: Countering traditional pathway bias</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="text-white" />
              Data Flywheel Effect
            </h3>
            <p className="text-purple-100 mb-4">
              Each user interaction improves recommendations for all users, creating a self-reinforcing cycle of intelligence.
            </p>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold">Network Effects</div>
                <div className="text-sm text-purple-200">More users = Better AI = More value for everyone</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function BusinessSlide() {
  const tiers = [
    {
      title: 'Direct-to-Student (B2C)',
      subtitle: 'Premium Subscription Model',
      plans: [
        { name: 'Basic', price: 'Free', features: ['Career discovery', 'Limited features'] },
        { name: 'Premium', price: '$10/month', features: ['Unlimited searches', 'Advanced AI', 'Mentor connections'] },
        { name: 'Pro', price: '$25/month', features: ['One-click apply', 'AI applications', 'Priority support'] }
      ],
      market: '20M college students in US',
      potential: '$24M ARR potential',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Institutional Partnerships (B2B)',
      subtitle: 'University Licensing Model',
      plans: [
        { name: 'Small colleges', price: '$2K-5K', features: ['<5K students', 'Basic integration'] },
        { name: 'Mid-size universities', price: '$5K-15K', features: ['5K-20K students', 'Advanced features'] },
        { name: 'Large universities', price: '$15K-50K', features: ['20K+ students', 'Full integration'] }
      ],
      market: 'Improved graduate outcomes',
      potential: 'Competitive advantage in recruitment',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Enterprise Solutions (B2B2C)',
      subtitle: 'Corporate Talent Acquisition',
      plans: [
        { name: 'Mission-driven partnerships', price: 'Revenue share', features: ['Authentic candidates', 'Cultural fit'] },
        { name: 'Employer branding', price: 'Subscription', features: ['Company values', 'Culture highlighting'] },
        { name: 'Predictive hiring', price: '$1K-5K per hire', features: ['Pre-matched candidates', 'Retention focus'] }
      ],
      market: 'Fortune 500 companies',
      potential: 'Reduced turnover costs',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Scalable Business Architecture</h1>
          <p className="text-xl text-gray-600">Multi-Layered Revenue Model with Network Effects</p>
        </motion.div>

        <div className="space-y-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-br ${tier.color} rounded-lg`}>
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{tier.title}</h3>
                  <p className="text-gray-600">{tier.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {tier.plans.map((plan, planIndex) => (
                  <div key={planIndex} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{plan.name}</h4>
                    <div className="text-lg font-bold text-gray-900 mb-3">{plan.price}</div>
                    <ul className="space-y-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-4 bg-gradient-to-r ${tier.color} rounded-lg text-white`}>
                  <div className="font-semibold mb-1">Market Opportunity</div>
                  <div className="text-sm opacity-90">{tier.market}</div>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-1">Value Proposition</div>
                  <div className="text-sm text-gray-600">{tier.potential}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Data & Insights (B2B)</h3>
          <p className="text-yellow-100 mb-6">Career Intelligence as a Service</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="font-semibold">Industry Reports</div>
              <div className="text-sm opacity-80">Career services, HR</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="font-semibold">Workforce Insights</div>
              <div className="text-sm opacity-80">Government agencies</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="font-semibold">Research Partnerships</div>
              <div className="text-sm opacity-80">Academic institutions</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="font-semibold">Policy Recommendations</div>
              <div className="text-sm opacity-80">Educational policy</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function CompetitiveSlide() {
  const traditional = [
    { platform: 'LinkedIn', approach: 'Professional networking', failure: 'Optimizes for recruiters, not seekers', advantage: 'Optimizes for authentic human fulfillment' },
    { platform: 'Handshake', approach: 'University job board', failure: 'Static listings, keyword matching', advantage: 'Dynamic AI conversation + autonomous discovery' },
    { platform: 'Indeed/ZipRecruiter', approach: 'Volume-based matching', failure: 'Quantity over quality, no values alignment', advantage: 'Quality matching prioritizing passion over pay' },
    { platform: 'Career Services', approach: 'Human counseling', failure: 'Resource-constrained, traditional path bias', advantage: 'Scalable AI with unconventional path discovery' }
  ];

  const nextGen = [
    { competitor: 'AI career chatbots', innovation: 'Conversational interface', limitation: 'No autonomous discovery, limited data', breakthrough: 'Dual-mode: conversation + 24/7 autonomous agents' },
    { competitor: 'Values-based platforms', innovation: 'Cultural fit matching', limitation: 'Static company data, no real-time intelligence', breakthrough: 'Live web intelligence + predictive modeling' },
    { competitor: 'Mentorship platforms', innovation: 'Human connections', limitation: 'Manual matching, limited scalability', breakthrough: 'AI-powered pathway pattern recognition' }
  ];

  const advantages = [
    'Proprietary dataset of authentic career transitions (100K+ alumni patterns)',
    'Values-first algorithm designed for human flourishing vs. economic optimization',
    'Real-time market intelligence discovering opportunities others miss',
    'Network effects where each user improves system for all users',
    'Mission authenticity - team solving problem they experience daily'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Competitive Differentiation Matrix</h1>
          <p className="text-xl text-gray-600">Why Existing Solutions Fail & How We Win</p>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Traditional Career Platforms</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 font-semibold text-sm text-gray-700">
                <div>Platform</div>
                <div>Approach</div>
                <div>Why It Fails</div>
                <div>Our Advantage</div>
              </div>
              {traditional.map((item, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-4 border-t border-gray-100 text-sm">
                  <div className="font-semibold text-gray-900">{item.platform}</div>
                  <div className="text-gray-600">{item.approach}</div>
                  <div className="text-red-600">{item.failure}</div>
                  <div className="text-emerald-600">{item.advantage}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Next-Generation Attempts</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 font-semibold text-sm text-gray-700">
                <div>Competitor</div>
                <div>Innovation</div>
                <div>Limitation</div>
                <div>Our Breakthrough</div>
              </div>
              {nextGen.map((item, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-4 border-t border-gray-100 text-sm">
                  <div className="font-semibold text-gray-900">{item.competitor}</div>
                  <div className="text-blue-600">{item.innovation}</div>
                  <div className="text-orange-600">{item.limitation}</div>
                  <div className="text-purple-600">{item.breakthrough}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl p-8 text-white"
          >
            <h2 className="text-2xl font-bold mb-6">Sustainable Competitive Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="text-emerald-100">{advantage}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function WatsonSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">IBM Watson Integration Strategy</h1>
          <p className="text-xl text-blue-200">Technical Partnership for Enterprise-Grade Scaling</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500 rounded-lg">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold">Watson Assistant Enhancement</h3>
            </div>
            <p className="text-blue-200 mb-4">Conversational AI Amplification</p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>• Advanced NLP for nuanced career dialogue</li>
              <li>• Multi-turn conversation management</li>
              <li>• Emotional intelligence detection</li>
              <li>• Multi-language support for global expansion</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-500 rounded-lg">
                <Database className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold">Watson Discovery Integration</h3>
            </div>
            <p className="text-blue-200 mb-4">Enterprise Knowledge Management</p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>• Document intelligence for job descriptions</li>
              <li>• Insight extraction from career outcome data</li>
              <li>• Content classification for meaningful work</li>
              <li>• Real-time data ingestion from multiple sources</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500 rounded-lg">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold">Watson Studio Collaboration</h3>
            </div>
            <p className="text-blue-200 mb-4">Advanced ML Model Development</p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>• AutoAI capabilities for career prediction</li>
              <li>• Model monitoring ensuring bias-free recommendations</li>
              <li>• A/B testing framework for optimization</li>
              <li>• Enterprise deployment with IBM Cloud</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 rounded-xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Architecture Integration</h3>
          <div className="bg-gray-900/50 rounded-lg p-6 font-mono text-sm">
            <div className="text-emerald-400">[User Conversation]</div>
            <div className="text-gray-400 ml-4">↓</div>
            <div className="text-blue-400">[Watson Assistant + Milo Values Engine]</div>
            <div className="text-gray-400 ml-4">↓</div>
            <div className="text-purple-400">[Career Discovery Request]</div>
            <div className="text-gray-400 ml-4">↓</div>
            <div className="text-yellow-400">[Watson Discovery + Milo Web Intelligence]</div>
            <div className="text-gray-400 ml-4">↓</div>
            <div className="text-pink-400">[Opportunity Analysis]</div>
            <div className="text-gray-400 ml-4">↓</div>
            <div className="text-cyan-400">[Watson Studio + Milo Matching Algorithm]</div>
            <div className="text-gray-400 ml-4">↓</div>
            <div className="text-emerald-400">[Personalized Recommendations]</div>
            <div className="text-gray-400 ml-4">↓</div>
            <div className="text-white">[User Action & Feedback Loop]</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Enterprise Value Proposition</h3>
            <div className="space-y-3 text-sm">
              <div><span className="font-semibold">IBM gains:</span> Innovation showcase in human-AI collaboration</div>
              <div><span className="font-semibold">Milo gains:</span> Enterprise-grade reliability and global scalability</div>
              <div><span className="font-semibold">Joint customers gain:</span> Proven technology stack for career intelligence</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Pilot Program Proposal</h3>
            <div className="space-y-2 text-sm">
              <div><span className="font-semibold">Phase 1:</span> Watson integration for 3 university partners</div>
              <div><span className="font-semibold">Phase 2:</span> Enterprise deployment for Fortune 500</div>
              <div><span className="font-semibold">Phase 3:</span> Global scaling with IBM's international network</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function MarketSlide() {
  const phases = [
    {
      title: 'University Beachhead',
      timeline: 'Months 1-12',
      target: '10-15 pilot universities with measurable outcomes',
      criteria: [
        'Struggling career services (based on survey insights)',
        'Innovation-friendly administration',
        'Diverse student populations for algorithm training',
        'Strong alumni networks for mentorship data'
      ],
      metrics: [
        '25%+ of target population using platform monthly',
        '40%+ increase in career satisfaction scores',
        '30%+ decrease in career services staffing needs',
        '$50K+ ARR from pilot partners'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Regional Expansion',
      timeline: 'Months 12-24',
      target: '100+ universities across multiple geographic regions',
      criteria: [
        'Reference customers from Phase 1 success stories',
        'Partner channel development with education consultants',
        'Conference presence at career services events',
        'Content marketing showcasing outcomes'
      ],
      metrics: [
        'Watson integration for enterprise-grade reliability',
        'Multi-tenant architecture supporting hundreds of institutions',
        'Advanced analytics providing institutional insights',
        'Benchmarking capabilities for universities'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Enterprise Expansion',
      timeline: 'Months 18-36',
      target: 'Fortune 500 companies for internal career development',
      criteria: [
        'Internal mobility: Helping employees discover authentic paths',
        'Retention strategy: Reducing turnover through better fit',
        'Diversity & inclusion: Surfacing non-traditional pathways',
        'Leadership development: Identifying high-potential employees'
      ],
      metrics: [
        'IBM joint go-to-market leveraging Watson ecosystem',
        'HR technology integrations with major platforms',
        'Consulting partnerships for change management',
        'International expansion planning'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Go-to-Market Strategy & Execution</h1>
          <p className="text-xl text-gray-600">Systematic Scaling from Universities to Enterprise</p>
        </motion.div>

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 bg-gradient-to-br ${phase.color} rounded-xl`}>
                  <Target className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Phase {index + 1}: {phase.title}</h3>
                  <p className="text-gray-600">{phase.timeline}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Target:</h4>
                <p className="text-gray-700">{phase.target}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Strategy & Criteria:</h4>
                  <ul className="space-y-2">
                    {phase.criteria.map((criterion, criterionIndex) => (
                      <li key={criterionIndex} className="flex items-start gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Success Metrics:</h4>
                  <ul className="space-y-2">
                    {phase.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="flex items-start gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Execution Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-lg font-bold mb-2">Year 1</div>
              <div className="text-sm text-blue-200">University pilots & validation</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-lg font-bold mb-2">Year 2</div>
              <div className="text-sm text-blue-200">Regional expansion & enterprise pilots</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-lg font-bold mb-2">Year 3</div>
              <div className="text-sm text-blue-200">National scale & international expansion</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FinancialsSlide() {
  const years = [
    {
      year: 'Year 1',
      subtitle: 'Conservative Foundation',
      revenue: [
        { stream: 'Student Subscriptions', calculation: '500 users × $120/year', amount: '$60,000' },
        { stream: 'University Pilots', calculation: '3 institutions × $5,000', amount: '$15,000' },
        { stream: 'Research Partnerships', calculation: '2 academic studies × $10,000', amount: '$20,000' }
      ],
      totalRevenue: '$95,000',
      expenses: [
        { category: 'Technical Infrastructure', amount: '$25,000' },
        { category: 'Team Compensation', amount: '$40,000' },
        { category: 'Marketing & Sales', amount: '$15,000' }
      ],
      totalExpenses: '$80,000',
      net: '$15,000 positive',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      year: 'Year 2',
      subtitle: 'Proven Scaling',
      revenue: [
        { stream: 'Student Subscriptions', calculation: '5,000 users × $120/year', amount: '$600,000' },
        { stream: 'University Partnerships', calculation: '25 institutions × $8,000 avg', amount: '$200,000' },
        { stream: 'Corporate Pilots', calculation: '3 companies × $25,000', amount: '$75,000' },
        { stream: 'Data Licensing', calculation: 'Early enterprise deals', amount: '$50,000' }
      ],
      totalRevenue: '$925,000',
      expenses: [
        { category: 'Technical Team', amount: '$300,000' },
        { category: 'Sales & Marketing', amount: '$200,000' },
        { category: 'Infrastructure', amount: '$75,000' }
      ],
      totalExpenses: '$575,000',
      net: '$350,000 positive',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      year: 'Year 3',
      subtitle: 'Market Leadership',
      revenue: [
        { stream: 'Student Subscriptions', calculation: '50,000 users × $120/year', amount: '$6,000,000' },
        { stream: 'University Enterprise', calculation: '200+ institutions × $15,000 avg', amount: '$3,000,000' },
        { stream: 'Corporate Solutions', calculation: '50 companies × $50,000 avg', amount: '$2,500,000' },
        { stream: 'Data & Analytics', calculation: 'Industry insights platform', amount: '$500,000' }
      ],
      totalRevenue: '$12,000,000',
      expenses: [],
      totalExpenses: '',
      net: 'Projected growth',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const unitEconomics = [
    { segment: 'Students', cac: '$25', ltv: '$240', ratio: '9.6x', description: 'Viral/word-of-mouth driven' },
    { segment: 'Universities', cac: '$2,500', ltv: '$45,000', ratio: '18x', description: 'Relationship + demo driven' },
    { segment: 'Corporations', cac: '$10,000', ltv: '$200,000', ratio: '20x', description: 'Enterprise sales cycle' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Financial Projections & Unit Economics</h1>
          <p className="text-xl text-gray-600">Conservative Growth Model with Multiple Validation Points</p>
        </motion.div>

        <div className="space-y-8 mb-12">
          {years.map((year, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-br ${year.color} rounded-lg`}>
                  <BarChart3 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{year.year}</h3>
                  <p className="text-gray-600">{year.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Revenue Streams</h4>
                  <div className="space-y-3">
                    {year.revenue.map((stream, streamIndex) => (
                      <div key={streamIndex} className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{stream.stream}</div>
                          <div className="text-sm text-gray-600">{stream.calculation}</div>
                        </div>
                        <div className="font-bold text-emerald-600">{stream.amount}</div>
                      </div>
                    ))}
                    <div className="flex justify-between items-center p-3 bg-emerald-100 rounded-lg border-2 border-emerald-200">
                      <div className="font-bold text-gray-900">Total Revenue</div>
                      <div className="font-bold text-emerald-700 text-lg">{year.totalRevenue}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Expenses</h4>
                  <div className="space-y-3">
                    {year.expenses.map((expense, expenseIndex) => (
                      <div key={expenseIndex} className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <div className="font-medium text-gray-900">{expense.category}</div>
                        <div className="font-bold text-red-600">{expense.amount}</div>
                      </div>
                    ))}
                    {year.totalExpenses && (
                      <div className="flex justify-between items-center p-3 bg-red-100 rounded-lg border-2 border-red-200">
                        <div className="font-bold text-gray-900">Total Expenses</div>
                        <div className="font-bold text-red-700 text-lg">{year.totalExpenses}</div>
                      </div>
                    )}
                    <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg border-2 border-blue-200">
                      <div className="font-bold text-gray-900">Net Result</div>
                      <div className="font-bold text-blue-700 text-lg">{year.net}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Unit Economics Analysis</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Customer Segment</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">CAC</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">LTV</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">LTV/CAC</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody>
                {unitEconomics.map((segment, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">{segment.segment}</td>
                    <td className="py-3 px-4 text-center text-red-600 font-bold">{segment.cac}</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">{segment.ltv}</td>
                    <td className="py-3 px-4 text-center text-blue-600 font-bold">{segment.ratio}</td>
                    <td className="py-3 px-4 text-gray-600">{segment.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-emerald-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-emerald-600">85%</div>
              <div className="text-sm text-gray-600">Software Gross Margin</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">65%</div>
              <div className="text-sm text-gray-600">Services Gross Margin</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">90%</div>
              <div className="text-sm text-gray-600">Data Licensing Margin</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TeamSlide() {
  const founders = [
    {
      name: 'George McCain',
      role: 'CEO & Co-Founder',
      background: 'Lifelong programmer, Yale sophomore studying Computer Science',
      experience: 'Built platform tracking senators\' stock trading (transparency/accountability focus)',
      qualifications: [
        'Personal mission alignment: Witnessed friends abandon authentic interests',
        'Technical foundation: Full-stack development experience',
        'Leadership experience: Led technical projects from conception to deployment',
        'Vision: Technology should amplify human authenticity, not diminish it'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Midhun Sadanand',
      role: 'CTO & Co-Founder',
      background: 'Computer Science & Economics double major, Yale',
      experience: 'Designed hybrid vector search architecture enabling real-time semantic matching',
      qualifications: [
        'AI/ML Systems: Designed hybrid vector search architecture',
        'Product Development: Experience in design, UX, programming, and VC analysis',
        'Scalable Architecture: Built systems processing 200K+ records with sub-second response',
        'Strategic Thinking: Combines technical implementation with business model innovation'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Andrew Boanoh',
      role: 'COO & Co-Founder',
      background: 'Newly elected Yale Student Body President',
      experience: 'Campaign focused specifically on reimagining career pipelines',
      qualifications: [
        'Institutional Understanding: Deep knowledge of university operations',
        'Policy Experience: Campaign focused on reimagining career pipelines',
        'Stakeholder Management: Proven ability to build consensus among diverse constituencies',
        'Market Validation: Direct access to student populations for product feedback'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const advisors = [
    {
      name: 'Aniketh Malyala',
      role: 'Head ML Engineer & Co-Founder',
      expertise: 'Former Palantir engineer with expertise in large-scale AI systems',
      contribution: 'Built core ML infrastructure enabling predictive career pathway analysis'
    },
    {
      name: 'Asher Arell',
      role: 'AI Engineer & Co-Founder',
      expertise: 'Conversational AI and RAG (Retrieval-Augmented Generation) systems',
      contribution: 'Architected AI synthesis enabling insights from alumni stories and company data'
    },
    {
      name: 'Raymond Hou',
      role: 'Lead Developer & Co-Founder',
      expertise: 'Full-stack architect focused on user experience and platform integration',
      contribution: 'User-centric design philosophy ensuring technology serves human needs'
    }
  ];

  const advantages = [
    'Authentic Problem Understanding: Team members ARE the target users',
    'Technical Depth: Proven ability to build and deploy complex AI systems',
    'Institutional Access: Direct relationships with university stakeholders',
    'Mission Alignment: Every team member personally committed to human-empowering technology',
    'Complementary Skills: Technical excellence + business strategy + institutional knowledge'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">The Founding Team & Advisory Board</h1>
          <p className="text-xl text-gray-600">Unique Combination of Technical Depth & Authentic Mission</p>
        </motion.div>

        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Core Founding Team</h2>
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 bg-gradient-to-br ${founder.color} rounded-xl flex-shrink-0`}>
                  <Users className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-lg text-gray-600 mb-3">{founder.role}</p>
                  <p className="text-gray-700 mb-4">{founder.background}</p>
                  <p className="text-gray-700 mb-4 font-medium">{founder.experience}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Unique Qualifications:</h4>
                    <ul className="space-y-1">
                      {founder.qualifications.map((qual, qualIndex) => (
                        <li key={qualIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Technical Advisory Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{advisor.name}</h3>
                <p className="text-gray-600 mb-3">{advisor.role}</p>
                <p className="text-sm text-gray-700 mb-3">{advisor.expertise}</p>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Key Contribution:</span> {advisor.contribution}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Competitive Team Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="text-indigo-100">{advantage}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function RisksSlide() {
  const risks = [
    {
      category: 'Technical Risks',
      items: [
        {
          risk: 'AI recommendation bias leading to unfair career suggestions',
          mitigation: [
            'Algorithmic fairness testing with diverse user groups',
            'Bias detection protocols monitoring recommendation patterns',
            'Human-in-the-loop validation for sensitive career transitions',
            'Transparency features showing users why recommendations were made'
          ]
        },
        {
          risk: 'Scaling challenges with real-time web scraping across 100+ platforms',
          mitigation: [
            'Distributed architecture with IBM Watson infrastructure',
            'Rate limiting and API management respecting platform terms',
            'Redundant data sources ensuring service reliability',
            'Caching strategies reducing computational load'
          ]
        }
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      category: 'Market Risks',
      items: [
        {
          risk: 'Universities slow to adopt new technology solutions',
          mitigation: [
            'Pilot program strategy proving ROI before full implementation',
            'Change management support including training and onboarding',
            'Measurable outcomes focus with clear success metrics',
            'Reference customer development accelerating institutional confidence'
          ]
        },
        {
          risk: 'Competition from established platforms (LinkedIn, Handshake)',
          mitigation: [
            'Differentiated value proposition (authenticity vs. efficiency)',
            'Patent-pending technology for values-based career matching',
            'Network effects creating switching costs as user base grows',
            'Continuous innovation maintaining technological leadership'
          ]
        }
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      category: 'Business Model Risks',
      items: [
        {
          risk: 'Student willingness to pay for career services',
          mitigation: [
            'Freemium model proving value before monetization',
            'University partnerships reducing individual payment burden',
            'Demonstrated ROI through improved career outcomes',
            'Multiple revenue streams reducing dependence on any single source'
          ]
        },
        {
          risk: 'Data privacy concerns with student career information',
          mitigation: [
            'FERPA compliance for educational data handling',
            'GDPR readiness for international expansion',
            'User consent protocols with clear data usage policies',
            'Security-first architecture protecting sensitive information'
          ]
        }
      ],
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const responses = [
    {
      scenario: 'If LinkedIn develops conversational career AI',
      strategy: [
        'Authenticity advantage: Our values-first approach vs. their networking focus',
        'University partnerships: Deep institutional relationships they lack',
        'Mission differentiation: Human empowerment vs. professional networking'
      ]
    },
    {
      scenario: 'If universities develop internal solutions',
      strategy: [
        'Technical complexity: Our specialized AI vs. their general IT capabilities',
        'Cross-institutional learning: Network effects they can\'t replicate alone',
        'Continuous innovation: Dedicated team vs. university side project'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Risk Analysis & Mitigation Strategies</h1>
          <p className="text-xl text-gray-600">Comprehensive Approach to Potential Challenges</p>
        </motion.div>

        <div className="space-y-8 mb-12">
          {risks.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-gray-200 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Risk: {item.risk}</h4>
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Mitigation:</p>
                      <ul className="space-y-1">
                        {item.mitigation.map((strategy, strategyIndex) => (
                          <li key={strategyIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                            {strategy}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Competitive Response Strategies</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {responses.map((response, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-4">{response.scenario}:</h4>
                <ul className="space-y-2">
                  {response.strategy.map((strategy, strategyIndex) => (
                    <li key={strategyIndex} className="flex items-start gap-2 text-sm text-blue-100">
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0" />
                      {strategy}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function VisionSlide() {
  const fiveYear = [
    {
      title: 'Institutional Transformation',
      description: '2,000+ Universities using Milo as primary career discovery platform',
      outcomes: [
        '40%+ improvement in graduate career satisfaction',
        '50%+ reduction in career services operational costs',
        'Democratized access to meaningful career discovery regardless of background'
      ],
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Generational Impact',
      description: '10 Million+ Students discovering authentic, automation-resistant careers',
      outcomes: [
        'Reduced career-related anxiety and depression',
        'Better career-person fit leading to higher lifetime earnings',
        'More people in mission-driven roles addressing societal challenges'
      ],
      icon: Users,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'AI Leadership Demonstration',
      description: 'Global model for human-empowering artificial intelligence',
      outcomes: [
        'Shaping discussions about AI\'s role in human development',
        'Contributing to human-computer interaction literature',
        'Establishing best practices for values-based AI systems'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const tenYear = [
    {
      title: 'Authentic Work Ecosystem Creation',
      points: [
        'Company culture prediction: AI helping organizations become more human-centered',
        'Meaningful work marketplace: Connecting purpose-driven individuals with mission-aligned opportunities',
        'Career evolution intelligence: Supporting people through multiple authentic career transitions'
      ]
    },
    {
      title: 'Global Expansion',
      points: [
        'Emerging markets: Democratizing career discovery in developing economies',
        'Cultural adaptation: AI understanding diverse cultural approaches to meaningful work',
        'Language expansion: Multilingual career discovery serving global populations'
      ]
    },
    {
      title: 'Societal Transformation',
      points: [
        'Policy advocacy: Influencing how societies measure economic success',
        'Workplace evolution: Contributing to more human-centered organizational cultures',
        'Educational reform: Reshaping how schools prepare students for authentic careers'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Long-Term Vision & Societal Impact</h1>
          <p className="text-xl text-indigo-200">Building the Future of Human-AI Collaboration</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">5-Year Vision: Transforming Career Discovery Globally</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {fiveYear.map((vision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${vision.color} rounded-lg`}>
                    <vision.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{vision.title}</h3>
                </div>
                <p className="text-indigo-200 mb-4">{vision.description}</p>
                <ul className="space-y-2">
                  {vision.outcomes.map((outcome, outcomeIndex) => (
                    <li key={outcomeIndex} className="flex items-start gap-2 text-sm text-indigo-100">
                      <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full mt-2 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">10-Year Moonshot: Reimagining Work Itself</h2>
          <div className="space-y-8">
            {tenYear.map((moonshot, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">{moonshot.title}</h3>
                <ul className="space-y-2">
                  {moonshot.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-indigo-200">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">The Ultimate Goal</h3>
            <p className="text-2xl text-yellow-100 mb-6">
              A world where AI helps every person discover work that makes them feel fully alive
            </p>
            <p className="text-lg text-yellow-200">
              This isn't just about building a successful company—it's about proving that technology can enhance 
              rather than diminish human potential, creating a template for the kind of AI-powered future we want to inhabit.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PartnershipSlide() {
  const seeking = [
    {
      title: 'Strategic Technology Partnership',
      items: [
        'Watson platform integration for enterprise-grade conversational AI',
        'IBM Cloud infrastructure supporting global scaling requirements',
        'Research collaboration on human-AI interaction methodologies',
        'Joint IP development in values-based AI recommendation systems'
      ],
      icon: Code,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Go-to-Market Acceleration',
      items: [
        'Enterprise customer introductions for Fortune 500 career development needs',
        'University partner network leveraging IBM\'s educational relationships',
        'International expansion support through IBM\'s global presence',
        'Sales team collaboration for enterprise solution development'
      ],
      icon: Globe,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Technical Expertise Access',
      items: [
        'Watson technical team consultation on integration architecture',
        'AI ethics guidance ensuring responsible development practices',
        'Security and compliance support for enterprise deployment',
        'Performance optimization for large-scale conversational AI workloads'
      ],
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const milestones = [
    {
      timeline: '30-Day Milestone',
      items: [
        'Technical architecture review with Watson integration team',
        'Pilot program design for 3 university partners using Watson infrastructure',
        'Partnership structure negotiation including equity/revenue sharing terms'
      ]
    },
    {
      timeline: '90-Day Milestone',
      items: [
        'Proof of concept deployment showing Watson-enhanced conversational career discovery',
        'Customer validation with joint IBM-Milo university presentations',
        'Press announcement of strategic partnership and shared vision'
      ]
    },
    {
      timeline: '6-Month Milestone',
      items: [
        'Commercial pilot launch with measurable outcomes and user feedback',
        'Enterprise customer development leveraging IBM\'s Fortune 500 relationships',
        'International expansion planning for Watson-powered global deployment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Partnership Invitation & Next Steps</h1>
          <p className="text-xl text-blue-200">Building the Future Together with IBM</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8">What We're Seeking from IBM Ventures</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {seeking.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${item.color} rounded-lg`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-sm text-blue-100">
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">IBM Gains</h3>
            <ul className="space-y-2 text-emerald-100">
              <li>• Innovation showcase demonstrating Watson's human-empowerment potential</li>
              <li>• New market entry into the $15B career services industry</li>
              <li>• Competitive differentiation in human-AI collaboration space</li>
              <li>• Research insights on conversational AI for complex decision-making</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Milo Gains</h3>
            <ul className="space-y-2 text-purple-100">
              <li>• Enterprise credibility accelerating university and corporate adoption</li>
              <li>• Technical infrastructure enabling global scaling without massive capital investment</li>
              <li>• Market access through IBM's existing customer relationships</li>
              <li>• Brand association with responsible AI development leadership</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Immediate Next Steps</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 text-yellow-300">{milestone.timeline}</h3>
                <ul className="space-y-2">
                  {milestone.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-blue-200">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">The Invitation</h3>
            <p className="text-xl text-yellow-100 mb-6">
              Join us in proving that AI can enhance rather than replace human potential
            </p>
            <p className="text-lg text-yellow-200 mb-8">
              This partnership isn't just about technology integration—it's about establishing IBM as the leader 
              in human-empowering AI while building a solution that could transform how an entire generation 
              discovers meaningful work.
            </p>
            
            <div className="bg-white/10 rounded-lg p-6 text-left">
              <h4 className="font-bold text-white mb-2">Contact:</h4>
              <p className="text-yellow-100">George McCain, CEO & Co-Founder</p>
              <p className="text-yellow-100">georgemccain88@gmail.com | (917) 803-4541</p>
              <p className="text-yellow-100"><span className="font-semibold">Live Demo:</span> milojobs.netlify.app</p>
              <p className="text-yellow-100"><span className="font-semibold">Technical Specs:</span> Available for immediate review</p>
            </div>
            
            <p className="text-xl text-white mt-6 italic">
              Together, we can build technology that helps people become more authentically themselves.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Pitch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 10000); // 10 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        setShowNavigation(!showNavigation);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showNavigation]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navigation Header */}
      <AnimatePresence>
        {showNavigation && (
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm text-white"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back to Milo</span>
              </Link>

              <div className="flex items-center gap-4">
                <div className="text-sm">
                  {currentSlide + 1} / {slides.length}
                </div>
                <div className="text-sm font-medium">
                  {slides[currentSlide].title}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button
                  onClick={() => setShowNavigation(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <ChevronUp size={20} />
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Slide Content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <AnimatePresence>
        {showNavigation && (
          <>
            {/* Previous/Next Buttons */}
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              onClick={prevSlide}
              className="fixed left-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <ArrowLeft size={24} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              onClick={nextSlide}
              className="fixed right-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <ArrowRight size={24} />
            </motion.button>

            {/* Slide Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Show Navigation Button (when hidden) */}
      <AnimatePresence>
        {!showNavigation && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={() => setShowNavigation(true)}
            className="fixed bottom-6 right-6 z-40 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          >
            <ChevronDown size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <AnimatePresence>
        {showNavigation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-30 text-center text-white/60 text-sm"
          >
            Use arrow keys or space to navigate • ESC to toggle controls
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Pitch;