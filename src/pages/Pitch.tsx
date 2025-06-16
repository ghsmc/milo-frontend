import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Play, Users, Target, TrendingUp, Zap, Globe, Award, Crown, Cpu, Settings, Code, Brain, Monitor, Database, Search, BarChart3, DollarSign, Building2, Rocket, Shield, CheckCircle, AlertTriangle, Lightbulb, Network, LineChart, Star, Heart, Briefcase, GraduationCap, MapPin, Clock, Eye, Layers, GitBranch, Activity, Gauge, Sparkles, Infinity, Blocks } from 'lucide-react';
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
            className="w-48 h-48 object-contain"
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
          <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="text-red-600" />
            THE DATA SPEAKS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Rate finding passionate work as 4/10 or lower</span>
                <span className="text-3xl font-bold text-red-600">81.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '81.8%' }}></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">"I don't fully know what's out there"</span>
                <span className="text-3xl font-bold text-red-600">42.1%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '42.1%' }}></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Universities steer toward finance/consulting</span>
                <span className="text-3xl font-bold text-red-600">52.6%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '52.6%' }}></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">LinkedIn's actual success rate</span>
                <span className="text-3xl font-bold text-red-600">0.06%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '0.06%' }}></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 italic">
            Source: Original research across Wake Forest, UVM, Pitzer College, UW-Madison
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Heart className="text-gray-600" />
            THE HUMAN COST
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">71%</div>
              <p className="text-gray-600">Feel "stuck" within 2 years of graduation</p>
              <p className="text-xs text-gray-500 mt-1">(Li et al., 2021)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$1.3T</div>
              <p className="text-gray-600">Annual economic cost of career misalignment</p>
              <p className="text-xs text-gray-500 mt-1">(McKinsey, 2023)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">Rising</div>
              <p className="text-gray-600">Mental health crisis linked to work stress</p>
              <p className="text-xs text-gray-500 mt-1">Multiple studies</p>
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
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-lg font-bold text-orange-900">THE AUTHENTICITY CRISIS</h3>
            </div>
            <p className="text-orange-800 font-medium mb-3">Structural Problem: Career discovery systems designed for institutional efficiency, not human fulfillment</p>
            <ul className="space-y-2 text-sm text-orange-700">
              <li>• Students navigate 17+ disconnected platforms</li>
              <li>• Traditional career services optimize for placement rates, not satisfaction</li>
              <li>• "Prestige over purpose" pipeline funnels brilliant minds into soul-crushing work</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-lg font-bold text-red-900">THE AI DISPLACEMENT TSUNAMI</h3>
            </div>
            <p className="text-red-800 font-medium mb-3">Existential Threat: 40% of jobs face automation risk (IMF, 2024), creating career decision paralysis</p>
            <ul className="space-y-2 text-sm text-red-700">
              <li>• Students afraid to pursue creative/human-centered careers</li>
              <li>• No guidance on which paths become MORE valuable as AI advances</li>
              <li>• Mental health impact of choosing between passion and perceived security</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-lg font-bold text-blue-900">THE SEARCH REVOLUTION GAP</h3>
            </div>
            <p className="text-blue-800 font-medium mb-3">Technological Shift: Post-ChatGPT, users expect conversational intelligence, not keyword matching</p>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>• Career discovery stuck in Web 2.0 while everything else evolved</li>
              <li>• Students want AI dialogue, not database queries</li>
              <li>• Opportunity for complete paradigm shift in meaningful work discovery</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "THE MILO BREAKTHROUGH",
    subtitle: "Revolutionary Dual-Mode AI Architecture",
    content: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">CORE INNOVATION: Human-AI Symbiosis for Career Discovery</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="text-purple-600" size={24} />
              <h3 className="text-xl font-bold text-purple-900">AUTONOMOUS INTELLIGENCE LAYER</h3>
            </div>
            <p className="text-purple-800 font-medium mb-4">Always-On Discovery Engine:</p>
            <ul className="space-y-3 text-sm text-purple-700">
              <li className="flex items-start gap-2">
                <Search size={16} className="mt-0.5 flex-shrink-0" />
                <span><strong>Distributed web crawling</strong> across 100+ platforms using advanced pattern recognition</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain size={16} className="mt-0.5 flex-shrink-0" />
                <span><strong>Semantic opportunity classification</strong> identifying meaningful work traditional aggregators miss</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={16} className="mt-0.5 flex-shrink-0" />
                <span><strong>Real-time market intelligence</strong> surfacing opportunities within seconds of posting</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp size={16} className="mt-0.5 flex-shrink-0" />
                <span><strong>Predictive pathway modeling</strong> analyzing which careers strengthen as AI advances</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-green-600" size={24} />
              <h3 className="text-xl font-bold text-green-900">CONVERSATIONAL INTELLIGENCE LAYER</h3>
            </div>
            <p className="text-green-800 font-medium mb-4">Human-Centered Dialogue System:</p>
            <ul className="space-y-3 text-sm text-green-700">
              <li className="flex items-start gap-2">
                <Heart size={16} className="mt-0.5 flex-shrink-0" />
                <span><strong>Values archaeology</strong> through natural conversation, not surveys</span>
              </li>
              <li className="flex items-start gap-2">
                <Eye size={16} className="mt-0.5 flex-shrink-0" />
                <span><strong>Authentic interest discovery</strong> challenging assumptions about "practical" vs. "passionate"</span>
              </li>
              <li className="flex items-start gap-2">
                <Activity size={16} className="mt-0.5 flex-shrink-0" />
                <span><strong>Dynamic personality modeling</strong> evolving understanding through each interaction</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb size={16} className="mt-0.5 flex-shrink-0" />
                <span><strong>Explainable AI recommendations</strong> showing WHY opportunities align with authentic self</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2">INTEGRATION BREAKTHROUGH</h3>
          <p className="text-blue-100">
            Seamless synthesis where autonomous discoveries inform conversational insights, creating personalized career intelligence that works 24/7 while maintaining human agency
          </p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "DEEP TECHNICAL ARCHITECTURE",
    subtitle: "Proprietary AI Systems & Algorithms",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-indigo-600" size={24} />
              <h3 className="text-lg font-bold text-indigo-900">VALUES VECTOR ARCHITECTURE™</h3>
            </div>
            <p className="text-indigo-800 font-medium mb-4">Revolutionary Approach to Human Authenticity Encoding:</p>
            
            {/* Live Demo Visualization */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="text-xs font-medium text-gray-600 mb-2">Live Values Analysis:</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-700">Creativity</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-1.5">
                      <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                    <span className="text-xs font-medium">87%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-700">Impact</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-1.5">
                      <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                    <span className="text-xs font-medium">94%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-700">Autonomy</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-1.5">
                      <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                    <span className="text-xs font-medium">76%</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-indigo-700">
              <li>• Multi-dimensional embeddings encoding passion, purpose, creativity</li>
              <li>• Behavioral pattern analysis from engagement patterns</li>
              <li>• Values hierarchy modeling</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Search className="text-blue-600" size={24} />
              <h3 className="text-lg font-bold text-blue-900">HYBRID SEMANTIC SEARCH</h3>
            </div>
            <p className="text-blue-800 font-medium mb-4">Enterprise-Grade Discovery Infrastructure:</p>
            
            {/* Performance Metrics */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="text-xs font-medium text-gray-600 mb-2">Performance Metrics:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">&lt;200ms</div>
                  <div className="text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">200K+</div>
                  <div className="text-gray-600">Indexed Opportunities</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">94.7%</div>
                  <div className="text-gray-600">Relevance Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-blue-700">
              <li>• Dense embeddings: LLaMA-text-embed-v2</li>
              <li>• Vector database: Pinecone for sub-second search</li>
              <li>• Redis caching architecture</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-emerald-600" size={24} />
              <h3 className="text-lg font-bold text-emerald-900">AUTOMATION-RESISTANCE ENGINE</h3>
            </div>
            <p className="text-emerald-800 font-medium mb-4">Proprietary AI Resilience Modeling:</p>
            
            {/* Accuracy Result */}
            <div className="bg-white rounded-lg p-4 mb-4 text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-1">89%</div>
              <div className="text-xs text-gray-600">Accuracy in identifying automation-resistant career paths</div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '89%' }}></div>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-emerald-700">
              <li>• Real-time automation risk analysis</li>
              <li>• Human capability mapping</li>
              <li>• Future trend analysis</li>
              <li>• Monte Carlo career pathway simulation</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "SCIENTIFIC VALIDATION & RESEARCH",
    subtitle: "Evidence-Based Approach to Career-Wellbeing Connection",
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <BarChart3 className="text-blue-600" />
            ORIGINAL RESEARCH FINDINGS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-blue-800 font-medium mb-3">Multi-University Study (N=19, Expanding to 200+):</p>
              <ul className="space-y-2 text-sm text-blue-700">
                <li><strong>Universities:</strong> Wake Forest, UVM, Pitzer College, UW-Madison</li>
                <li><strong>Demographics:</strong> Diverse majors (Finance, CS, Philosophy, Food Systems)</li>
                <li><strong>Geographic spread:</strong> East Coast, Midwest, West Coast validation</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-sm font-medium text-gray-600 mb-3">Study Demographics:</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs">Computer Science</span>
                  <span className="text-xs font-medium">31.6%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Business/Finance</span>
                  <span className="text-xs font-medium">26.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Liberal Arts</span>
                  <span className="text-xs font-medium">21.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Other STEM</span>
                  <span className="text-xs font-medium">21.0%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">73.7%</div>
            <p className="text-sm text-green-800">Adoption intent for AI-powered career discovery</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">57.9%</div>
            <p className="text-sm text-blue-800">Willingness to pay for authentic career alignment tools</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">42.1%</div>
            <p className="text-sm text-orange-800">Report career services "make little to no difference"</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">10.5%</div>
            <p className="text-sm text-red-800">Report career services actually helped find meaningful work</p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">COMPETITIVE INTELLIGENCE</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 font-medium">Platform</th>
                  <th className="text-left py-2 font-medium">Volume</th>
                  <th className="text-left py-2 font-medium">Success Rate</th>
                  <th className="text-left py-2 font-medium">Values Alignment</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-medium">LinkedIn</td>
                  <td className="py-2">11,000 applications/min</td>
                  <td className="py-2 text-red-600 font-medium">0.00006%</td>
                  <td className="py-2 text-red-600">None</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-medium">Handshake</td>
                  <td className="py-2">University-focused</td>
                  <td className="py-2 text-orange-600 font-medium">Low</td>
                  <td className="py-2 text-red-600">Keyword-based only</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-medium">Indeed/ZipRecruiter</td>
                  <td className="py-2">High volume</td>
                  <td className="py-2 text-red-600 font-medium">Very Low</td>
                  <td className="py-2 text-red-600">None</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Career Services</td>
                  <td className="py-2">Resource-constrained</td>
                  <td className="py-2 text-orange-600 font-medium">Limited</td>
                  <td className="py-2 text-orange-600">One-size-fits-all</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "PROPRIETARY DATASETS & AI TRAINING",
    subtitle: "Competitive Moats Through Data Advantages",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Network className="text-purple-600" size={24} />
              <h3 className="text-lg font-bold text-purple-900">ALUMNI CAREER JOURNEY DATABASE</h3>
            </div>
            <div className="bg-white rounded-lg p-4 mb-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">100K+</div>
              <div className="text-xs text-gray-600">Yale alumni career transition patterns</div>
            </div>
            <ul className="space-y-2 text-sm text-purple-700">
              <li>• Unconventional pathway mapping: Literature → Documentary → Climate Policy</li>
              <li>• Success pattern recognition for authentic transitions</li>
              <li>• Mentorship graph analysis for warm introductions</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="text-blue-600" size={24} />
              <h3 className="text-lg font-bold text-blue-900">COMPANY CULTURE INTELLIGENCE</h3>
            </div>
            <div className="bg-white rounded-lg p-4 mb-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">100K+</div>
              <div className="text-xs text-gray-600">Organization profiles with deep cultural analysis</div>
            </div>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>• Mission-driven scoring: Authentic values vs. corporate speak</li>
              <li>• Growth stage modeling: Startup, scale-up, enterprise patterns</li>
              <li>• Values alignment prediction for company-individual fit</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="text-green-600" size={24} />
              <h3 className="text-lg font-bold text-green-900">REAL-TIME OPPORTUNITY INTELLIGENCE</h3>
            </div>
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-2 text-xs text-center">
                <div>
                  <div className="text-lg font-bold text-green-600">24/7</div>
                  <div className="text-gray-600">Live Scraping</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-600">100+</div>
                  <div className="text-gray-600">Platforms</div>
                </div>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• Opportunity classification: Traditional vs. meaningful work</li>
              <li>• Temporal pattern analysis</li>
              <li>• Geographic opportunity mapping</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Brain className="text-white" size={24} />
            AI TRAINING METHODOLOGY
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Human-in-the-Loop Learning:</h4>
              <ul className="space-y-2 text-sm text-indigo-100">
                <li>• Conversation mining: Learning authentic interest patterns</li>
                <li>• Outcome feedback: Career satisfaction tracking</li>
                <li>• Values calibration: Continuous authenticity refinement</li>
                <li>• Bias mitigation: Countering traditional pathway bias</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold mb-2">Data Flywheel Effect:</h4>
              <p className="text-sm text-indigo-100">
                Each user interaction improves recommendations for all users, creating exponential value growth
              </p>
              <div className="mt-3 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "SCALABLE BUSINESS ARCHITECTURE",
    subtitle: "Multi-Layered Revenue Model with Network Effects",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-green-600" size={24} />
              <h3 className="text-lg font-bold text-green-900">TIER 1: B2C</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="text-sm font-medium text-gray-600">Premium Subscription</div>
                <div className="text-lg font-bold text-green-600">$10-25/month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$24M</div>
                <div className="text-xs text-green-700">ARR Potential</div>
              </div>
            </div>
            <ul className="space-y-1 text-xs text-green-700 mt-3">
              <li>• 20M college students in US</li>
              <li>• 1% penetration = 200K subscribers</li>
              <li>• $120 average annual value</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-blue-600" size={24} />
              <h3 className="text-lg font-bold text-blue-900">TIER 2: UNIVERSITIES</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="text-sm font-medium text-gray-600">Institutional Licensing</div>
                <div className="text-lg font-bold text-blue-600">$2K-100K</div>
              </div>
              <div className="space-y-2 text-xs text-blue-700">
                <div>Small colleges: $2K-5K</div>
                <div>Mid-size: $5K-15K</div>
                <div>Large: $15K-50K</div>
                <div>Premium: $25K-100K</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-purple-600" size={24} />
              <h3 className="text-lg font-bold text-purple-900">TIER 3: ENTERPRISE</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="text-sm font-medium text-gray-600">Corporate Solutions</div>
                <div className="text-lg font-bold text-purple-600">$1K-5K/hire</div>
              </div>
              <ul className="space-y-1 text-xs text-purple-700">
                <li>• Mission-driven partnerships</li>
                <li>• Employer branding tools</li>
                <li>• Predictive hiring</li>
                <li>• Revenue sharing model</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="text-orange-600" size={24} />
              <h3 className="text-lg font-bold text-orange-900">TIER 4: DATA</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="text-sm font-medium text-gray-600">Intelligence as a Service</div>
                <div className="text-lg font-bold text-orange-600">Enterprise</div>
              </div>
              <ul className="space-y-1 text-xs text-orange-700">
                <li>• Industry trend reports</li>
                <li>• Workforce development insights</li>
                <li>• Academic research partnerships</li>
                <li>• Policy recommendations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">VALUE PROPOSITION FOR UNIVERSITIES</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <CheckCircle className="text-green-600 mx-auto mb-2" size={24} />
              <div className="text-sm font-medium text-gray-900">Improved Graduate Outcomes</div>
              <div className="text-xs text-gray-600">Measurable employment satisfaction</div>
            </div>
            <div className="text-center">
              <DollarSign className="text-blue-600 mx-auto mb-2" size={24} />
              <div className="text-sm font-medium text-gray-900">Reduced Staffing Needs</div>
              <div className="text-xs text-gray-600">Lower career services costs</div>
            </div>
            <div className="text-center">
              <Star className="text-purple-600 mx-auto mb-2" size={24} />
              <div className="text-sm font-medium text-gray-900">Competitive Advantage</div>
              <div className="text-xs text-gray-600">Student recruitment edge</div>
            </div>
            <div className="text-center">
              <BarChart3 className="text-orange-600 mx-auto mb-2" size={24} />
              <div className="text-sm font-medium text-gray-900">Data Insights</div>
              <div className="text-xs text-gray-600">Career trends and interests</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "COMPETITIVE DIFFERENTIATION MATRIX",
    subtitle: "Why Existing Solutions Fail & How We Win",
    content: (
      <div className="space-y-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-red-900 mb-4">TRADITIONAL CAREER PLATFORMS</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-red-300">
                  <th className="text-left py-2 font-medium">Platform</th>
                  <th className="text-left py-2 font-medium">Approach</th>
                  <th className="text-left py-2 font-medium">Why It Fails</th>
                  <th className="text-left py-2 font-medium">Our Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-red-200">
                  <td className="py-3 font-medium">LinkedIn</td>
                  <td className="py-3">Professional networking</td>
                  <td className="py-3 text-red-700">Optimizes for recruiters, not seekers</td>
                  <td className="py-3 text-green-700">Optimizes for authentic human fulfillment</td>
                </tr>
                <tr className="border-b border-red-200">
                  <td className="py-3 font-medium">Handshake</td>
                  <td className="py-3">University job board</td>
                  <td className="py-3 text-red-700">Static listings, keyword matching</td>
                  <td className="py-3 text-green-700">Dynamic AI conversation + autonomous discovery</td>
                </tr>
                <tr className="border-b border-red-200">
                  <td className="py-3 font-medium">Indeed/ZipRecruiter</td>
                  <td className="py-3">Volume-based matching</td>
                  <td className="py-3 text-red-700">Quantity over quality, no values alignment</td>
                  <td className="py-3 text-green-700">Quality matching prioritizing passion over pay</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Career Services</td>
                  <td className="py-3">Human counseling</td>
                  <td className="py-3 text-red-700">Resource-constrained, traditional path bias</td>
                  <td className="py-3 text-green-700">Scalable AI with unconventional path discovery</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">NEXT-GENERATION ATTEMPTS</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blue-300">
                  <th className="text-left py-2 font-medium">Competitor</th>
                  <th className="text-left py-2 font-medium">Innovation</th>
                  <th className="text-left py-2 font-medium">Limitation</th>
                  <th className="text-left py-2 font-medium">Our Breakthrough</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-200">
                  <td className="py-3 font-medium">AI career chatbots</td>
                  <td className="py-3">Conversational interface</td>
                  <td className="py-3 text-orange-700">No autonomous discovery, limited data</td>
                  <td className="py-3 text-green-700">Dual-mode: conversation + 24/7 autonomous agents</td>
                </tr>
                <tr className="border-b border-blue-200">
                  <td className="py-3 font-medium">Values-based platforms</td>
                  <td className="py-3">Cultural fit matching</td>
                  <td className="py-3 text-orange-700">Static company data, no real-time intelligence</td>
                  <td className="py-3 text-green-700">Live web intelligence + predictive modeling</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Mentorship platforms</td>
                  <td className="py-3">Human connections</td>
                  <td className="py-3 text-orange-700">Manual matching, limited scalability</td>
                  <td className="py-3 text-green-700">AI-powered pathway pattern recognition</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">SUSTAINABLE COMPETITIVE ADVANTAGES</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <Database className="text-green-600 mx-auto mb-2" size={24} />
              <div className="text-sm font-medium text-green-900">Proprietary Dataset</div>
              <div className="text-xs text-green-700">100K+ alumni patterns</div>
            </div>
            <div className="text-center">
              <Heart className="text-green-600 mx-auto mb-2" size={24} />
              <div className="text-sm font-medium text-green-900">Values-First Algorithm</div>
              <div className="text-xs text-green-700">Human flourishing focus</div>
            </div>
            <div className="text-center">
              <Activity className="text-green-600 mx-auto mb-2" size={24} />
              <div className="text-sm font-medium text-green-900">Real-Time Intelligence</div>
              <div className="text-xs text-green-700">Opportunities others miss</div>
            </div>
            <div className="text-center">
              <Network className="text-green-600 mx-auto mb-2" size={24} />
              <div className="text-sm font-medium text-green-900">Network Effects</div>
              <div className="text-xs text-green-700">Each user improves system</div>
            </div>
            <div className="text-center">
              <Target className="text-green-600 mx-auto mb-2" size={24} />
              <div className="text-sm font-medium text-green-900">Mission Authenticity</div>
              <div className="text-xs text-green-700">Team solving own problem</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "IBM WATSONX INTEGRATION STRATEGY",
    subtitle: "Technical Partnership for Enterprise-Grade Scaling",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-blue-600" size={24} />
              <h3 className="text-lg font-bold text-blue-900">WATSON ASSISTANT</h3>
            </div>
            <p className="text-blue-800 font-medium mb-3">Conversational AI Amplification:</p>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>• Advanced NLP for nuanced career dialogue</li>
              <li>• Multi-turn conversation management</li>
              <li>• Emotional intelligence detection</li>
              <li>• Multi-language support for global expansion</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Search className="text-purple-600" size={24} />
              <h3 className="text-lg font-bold text-purple-900">WATSON DISCOVERY</h3>
            </div>
            <p className="text-purple-800 font-medium mb-3">Enterprise Knowledge Management:</p>
            <ul className="space-y-2 text-sm text-purple-700">
              <li>• Document intelligence for job descriptions</li>
              <li>• Insight extraction from career data</li>
              <li>• Content classification for meaningful work</li>
              <li>• Real-time data ingestion</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="text-green-600" size={24} />
              <h3 className="text-lg font-bold text-green-900">WATSON STUDIO</h3>
            </div>
            <p className="text-green-800 font-medium mb-3">Advanced ML Model Development:</p>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• AutoAI for career prediction optimization</li>
              <li>• Model monitoring for bias-free recommendations</li>
              <li>• A/B testing framework</li>
              <li>• Enterprise deployment with IBM Cloud</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">TECHNICAL ARCHITECTURE INTEGRATION</h3>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="font-mono text-sm space-y-2">
              <div>[User Conversation] → [Watson Assistant + Milo Values Engine]</div>
              <div className="pl-8">↓</div>
              <div>[Career Discovery Request] → [Watson Discovery + Milo Web Intelligence]</div>
              <div className="pl-16">↓</div>
              <div>[Opportunity Analysis] → [Watson Studio + Milo Matching Algorithm]</div>
              <div className="pl-24">↓</div>
              <div>[Personalized Recommendations] → [User Action & Feedback Loop]</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">IBM GAINS</h3>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>• Innovation showcase in human-AI collaboration</li>
              <li>• New market entry into $15B career services industry</li>
              <li>• Competitive differentiation in human-AI space</li>
              <li>• Research insights on conversational AI for complex decisions</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-900 mb-3">MILO GAINS</h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• Enterprise credibility accelerating adoption</li>
              <li>• Technical infrastructure for global scaling</li>
              <li>• Market access through IBM's customer relationships</li>
              <li>• Brand association with responsible AI development</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">PILOT PROGRAM PROPOSAL</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
              <div className="font-medium text-gray-900">Phase 1</div>
              <div className="text-sm text-gray-600">Watson integration for 3 university partners</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
              <div className="font-medium text-gray-900">Phase 2</div>
              <div className="text-sm text-gray-600">Enterprise deployment for Fortune 500</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
              <div className="font-medium text-gray-900">Phase 3</div>
              <div className="text-sm text-gray-600">Global scaling with IBM's network</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: "GO-TO-MARKET STRATEGY & EXECUTION",
    subtitle: "Systematic Scaling from Universities to Enterprise",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-lg font-bold text-green-900">UNIVERSITY BEACHHEAD</h3>
            </div>
            <div className="text-sm text-green-800 mb-3">Months 1-12: 10-15 pilot universities</div>
            
            <div className="bg-white rounded-lg p-3 mb-3">
              <div className="text-xs font-medium text-gray-600 mb-2">Success Metrics:</div>
              <div className="space-y-1 text-xs">
                <div>• 25%+ monthly engagement</div>
                <div>• 40%+ career satisfaction increase</div>
                <div>• 30%+ cost reduction</div>
                <div>• $50K+ ARR validation</div>
              </div>
            </div>

            <div className="text-xs text-green-700">
              <strong>Selection Criteria:</strong>
              <ul className="mt-1 space-y-1">
                <li>• Struggling career services</li>
                <li>• Innovation-friendly admin</li>
                <li>• Diverse student populations</li>
                <li>• Strong alumni networks</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-lg font-bold text-blue-900">REGIONAL EXPANSION</h3>
            </div>
            <div className="text-sm text-blue-800 mb-3">Months 12-24: 100+ universities</div>
            
            <div className="bg-white rounded-lg p-3 mb-3">
              <div className="text-xs font-medium text-gray-600 mb-2">Scaling Strategy:</div>
              <div className="space-y-1 text-xs">
                <div>• Reference customers from Phase 1</div>
                <div>• Partner channel development</div>
                <div>• Conference presence</div>
                <div>• Content marketing</div>
              </div>
            </div>

            <div className="text-xs text-blue-700">
              <strong>Technology Scaling:</strong>
              <ul className="mt-1 space-y-1">
                <li>• Watson integration</li>
                <li>• Multi-tenant architecture</li>
                <li>• Advanced analytics</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-lg font-bold text-purple-900">ENTERPRISE EXPANSION</h3>
            </div>
            <div className="text-sm text-purple-800 mb-3">Months 18-36: Fortune 500 companies</div>
            
            <div className="bg-white rounded-lg p-3 mb-3">
              <div className="text-xs font-medium text-gray-600 mb-2">Corporate Use Cases:</div>
              <div className="space-y-1 text-xs">
                <div>• Internal mobility</div>
                <div>• Retention strategy</div>
                <div>• Diversity & inclusion</div>
                <div>• Leadership development</div>
              </div>
            </div>

            <div className="text-xs text-purple-700">
              <strong>Partnership Strategy:</strong>
              <ul className="mt-1 space-y-1">
                <li>• IBM joint go-to-market</li>
                <li>• HR technology integrations</li>
                <li>• Consulting partnerships</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">PARTNERSHIP STRATEGY</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Building2 className="text-blue-600 mx-auto mb-2" size={32} />
              <div className="font-medium text-gray-900 mb-1">IBM Joint Go-to-Market</div>
              <div className="text-sm text-gray-600">Leveraging Watson ecosystem for enterprise credibility</div>
            </div>
            <div className="text-center">
              <Settings className="text-purple-600 mx-auto mb-2" size={32} />
              <div className="font-medium text-gray-900 mb-1">HR Technology Integrations</div>
              <div className="text-sm text-gray-600">Workday, SuccessFactors, Oracle partnerships</div>
            </div>
            <div className="text-center">
              <Users className="text-green-600 mx-auto mb-2" size={32} />
              <div className="font-medium text-gray-900 mb-1">Consulting Partnerships</div>
              <div className="text-sm text-gray-600">Deloitte, McKinsey for change management</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: "FINANCIAL PROJECTIONS & UNIT ECONOMICS",
    subtitle: "Conservative Growth Model with Multiple Validation Points",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4">YEAR 1: FOUNDATION</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="text-sm font-medium text-gray-600">Revenue Streams:</div>
                <div className="space-y-1 text-xs mt-2">
                  <div className="flex justify-between">
                    <span>Student Subscriptions</span>
                    <span className="font-medium">$60,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>University Pilots</span>
                    <span className="font-medium">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Research Partnerships</span>
                    <span className="font-medium">$20,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-bold">
                    <span>Total Revenue</span>
                    <span>$95,000</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="text-sm font-medium text-gray-600">Key Expenses:</div>
                <div className="space-y-1 text-xs mt-2">
                  <div className="flex justify-between">
                    <span>Technical Infrastructure</span>
                    <span>$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Compensation</span>
                    <span>$40,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marketing & Sales</span>
                    <span>$15,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-bold">
                    <span>Total Expenses</span>
                    <span>$80,000</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">+$15,000</div>
                <div className="text-xs text-green-700">Positive Cash Flow</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">YEAR 2: SCALING</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="text-sm font-medium text-gray-600">Revenue Growth:</div>
                <div className="space-y-1 text-xs mt-2">
                  <div className="flex justify-between">
                    <span>Student Subscriptions</span>
                    <span className="font-medium">$600,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>University Partnerships</span>
                    <span className="font-medium">$200,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Corporate Pilots</span>
                    <span className="font-medium">$75,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Licensing</span>
                    <span className="font-medium">$50,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-bold">
                    <span>Total Revenue</span>
                    <span>$925,000</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="text-sm font-medium text-gray-600">Scaling Investment:</div>
                <div className="space-y-1 text-xs mt-2">
                  <div className="flex justify-between">
                    <span>Technical Team</span>
                    <span>$300,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sales & Marketing</span>
                    <span>$200,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Infrastructure</span>
                    <span>$75,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-bold">
                    <span>Total Expenses</span>
                    <span>$575,000</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">+$350,000</div>
                <div className="text-xs text-blue-700">Positive Cash Flow</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4">YEAR 3: LEADERSHIP</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="text-sm font-medium text-gray-600">Revenue Acceleration:</div>
                <div className="space-y-1 text-xs mt-2">
                  <div className="flex justify-between">
                    <span>Student Subscriptions</span>
                    <span className="font-medium">$6,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>University Enterprise</span>
                    <span className="font-medium">$3,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Corporate Solutions</span>
                    <span className="font-medium">$2,500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data & Analytics</span>
                    <span className="font-medium">$500,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-bold">
                    <span>Total Revenue</span>
                    <span>$12,000,000</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">$12M</div>
                <div className="text-xs text-purple-700">Annual Revenue Run Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">UNIT ECONOMICS ANALYSIS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Customer Acquisition Cost (CAC):</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Students</span>
                  <span className="font-medium">$25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Universities</span>
                  <span className="font-medium">$2,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Corporations</span>
                  <span className="font-medium">$10,000</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Lifetime Value (LTV):</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Students</span>
                  <span className="font-medium">$240</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Universities</span>
                  <span className="font-medium">$45,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Corporations</span>
                  <span className="font-medium">$200,000</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">LTV/CAC Ratios:</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Students</span>
                  <span className="font-medium text-green-600">9.6x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Universities</span>
                  <span className="font-medium text-green-600">18x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Corporations</span>
                  <span className="font-medium text-green-600">20x</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">GROSS MARGINS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-sm text-green-800">Software Subscriptions</div>
              <div className="text-xs text-green-700">(Typical SaaS margins)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">65%</div>
              <div className="text-sm text-green-800">Services & Consulting</div>
              <div className="text-xs text-green-700">(Implementation support)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-sm text-green-800">Data Licensing</div>
              <div className="text-xs text-green-700">(High-margin analytics)</div>
            </div>
          </div>
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
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">LEADERSHIP TRIAD</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">GM</div>
                <h4 className="font-bold text-gray-900">GEORGE MCCAIN</h4>
                <p className="text-sm text-blue-600 font-medium">CEO & Co-Founder</p>
              </div>
              <div className="space-y-2 text-xs">
                <div><strong>Background:</strong> Lifelong programmer, Yale CS sophomore</div>
                <div><strong>Previous:</strong> Built senators' stock trading platform</div>
                <div><strong>Leadership:</strong> Vision & strategy, technical foundation, fundraising & partnerships, team coordination</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">MS</div>
                <h4 className="font-bold text-gray-900">MIDHUN SADANAND</h4>
                <p className="text-sm text-purple-600 font-medium">CTO & Co-Founder</p>
              </div>
              <div className="space-y-2 text-xs">
                <div><strong>Background:</strong> CS & Economics double major, Yale</div>
                <div><strong>Technical:</strong> AI architecture, hybrid vector search system</div>
                <div><strong>Leadership:</strong> Product strategy, system scalability, business integration</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">AB</div>
                <h4 className="font-bold text-gray-900">ANDREW BOANOH</h4>
                <p className="text-sm text-green-600 font-medium">COO & Co-Founder</p>
              </div>
              <div className="space-y-2 text-xs">
                <div><strong>Background:</strong> Newly elected Yale Student Body President</div>
                <div><strong>Operations:</strong> Institutional strategy, policy & advocacy</div>
                <div><strong>Excellence:</strong> Stakeholder management, market development</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">TECHNICAL CORE TEAM</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">AM</div>
                <h4 className="font-bold text-gray-900">ANIKETH MALYALA</h4>
                <p className="text-sm text-orange-600 font-medium">Head ML Engineer & Co-Founder</p>
              </div>
              <div className="space-y-2 text-xs">
                <div><strong>Background:</strong> Former Palantir engineer</div>
                <div><strong>Specialization:</strong> Large-scale AI systems, real-time intelligence</div>
                <div><strong>Innovation:</strong> Automation-resistance modeling, enterprise integration</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">AA</div>
                <h4 className="font-bold text-gray-900">ASHER ARELL</h4>
                <p className="text-sm text-red-600 font-medium">AI Engineer & Co-Founder</p>
              </div>
              <div className="space-y-2 text-xs">
                <div><strong>Background:</strong> Conversational AI and knowledge synthesis</div>
                <div><strong>Innovation:</strong> RAG architecture, conversational intelligence</div>
                <div><strong>Contribution:</strong> Explainable AI, knowledge integration</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">RH</div>
                <h4 className="font-bold text-gray-900">RAYMOND HOU</h4>
                <p className="text-sm text-cyan-600 font-medium">Lead Developer & Co-Founder</p>
              </div>
              <div className="space-y-2 text-xs">
                <div><strong>Background:</strong> Full-stack architect, human-centered design</div>
                <div><strong>Development:</strong> User experience, platform integration</div>
                <div><strong>Leadership:</strong> Onboarding & engagement, quality assurance</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4">SEVEN YEARS OF FRIENDSHIP</h3>
            <ul className="space-y-2 text-sm text-purple-700">
              <li><strong>Deep Trust:</strong> Pre-existing relationships enabling rapid decision-making</li>
              <li><strong>Complementary Strengths:</strong> Natural division based on expertise</li>
              <li><strong>Shared Values:</strong> United commitment to human-empowering technology</li>
              <li><strong>Mission Authenticity:</strong> Every member experienced the problem they're solving</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4">COMPREHENSIVE SKILL COVERAGE</h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li><strong>Technical Depth:</strong> AI/ML, full-stack, enterprise systems, conversational interfaces</li>
              <li><strong>Business Strategy:</strong> Fundraising, partnerships, operations, market development</li>
              <li><strong>Institutional Knowledge:</strong> University operations, student needs, policy</li>
              <li><strong>User Understanding:</strong> Direct experience as target demographic</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">COMPETITIVE ADVANTAGES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Users className="mx-auto mb-2" size={24} />
              <div className="font-medium">Lived Experience</div>
              <div className="text-sm text-blue-100">Team members ARE the users</div>
            </div>
            <div className="text-center">
              <Brain className="mx-auto mb-2" size={24} />
              <div className="font-medium">Technical Excellence</div>
              <div className="text-sm text-blue-100">Complex AI systems at scale</div>
            </div>
            <div className="text-center">
              <Heart className="mx-auto mb-2" size={24} />
              <div className="font-medium">Mission Alignment</div>
              <div className="text-sm text-blue-100">Human empowerment over profit</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 14,
    title: "RISK ANALYSIS & MITIGATION STRATEGIES",
    subtitle: "Comprehensive Approach to Potential Challenges",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="text-red-600" />
              TECHNICAL RISKS
            </h3>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-red-800 mb-1">Risk: AI recommendation bias</div>
                <div className="text-sm text-red-700 mb-2">Leading to unfair career suggestions</div>
                <div className="text-xs text-red-600">
                  <strong>Mitigation:</strong> Algorithmic fairness testing, bias detection protocols, human-in-the-loop validation, transparency features
                </div>
              </div>
              <div>
                <div className="font-medium text-red-800 mb-1">Risk: Scaling challenges</div>
                <div className="text-sm text-red-700 mb-2">Real-time web scraping across 100+ platforms</div>
                <div className="text-xs text-red-600">
                  <strong>Mitigation:</strong> Distributed architecture with IBM Watson, rate limiting, redundant data sources, caching strategies
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
              <TrendingUp className="text-orange-600" />
              MARKET RISKS
            </h3>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-orange-800 mb-1">Risk: Slow university adoption</div>
                <div className="text-sm text-orange-700 mb-2">Universities resistant to new technology</div>
                <div className="text-xs text-orange-600">
                  <strong>Mitigation:</strong> Pilot program strategy, change management support, measurable outcomes, reference customers
                </div>
              </div>
              <div>
                <div className="font-medium text-orange-800 mb-1">Risk: Competition from established platforms</div>
                <div className="text-sm text-orange-700 mb-2">LinkedIn, Handshake developing similar features</div>
                <div className="text-xs text-orange-600">
                  <strong>Mitigation:</strong> Differentiated value proposition, patent-pending technology, network effects, continuous innovation
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              <DollarSign className="text-blue-600" />
              BUSINESS MODEL RISKS
            </h3>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-blue-800 mb-1">Risk: Student willingness to pay</div>
                <div className="text-sm text-blue-700 mb-2">Students may not pay for career services</div>
                <div className="text-xs text-blue-600">
                  <strong>Mitigation:</strong> Freemium model, university partnerships, demonstrated ROI, multiple revenue streams
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
              <Shield className="text-purple-600" />
              REGULATORY RISKS
            </h3>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-purple-800 mb-1">Risk: Data privacy concerns</div>
                <div className="text-sm text-purple-700 mb-2">Student career information protection</div>
                <div className="text-xs text-purple-600">
                  <strong>Mitigation:</strong> FERPA compliance, GDPR readiness, user consent protocols, security-first architecture
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">COMPETITIVE RESPONSE STRATEGIES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">If LinkedIn develops conversational career AI:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Authenticity advantage:</strong> Values-first approach vs. networking focus</li>
                <li>• <strong>University partnerships:</strong> Deep institutional relationships they lack</li>
                <li>• <strong>Mission differentiation:</strong> Human empowerment vs. professional networking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">If universities develop internal solutions:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Technical complexity:</strong> Specialized AI vs. general IT capabilities</li>
                <li>• <strong>Cross-institutional learning:</strong> Network effects they can't replicate</li>
                <li>• <strong>Continuous innovation:</strong> Dedicated team vs. university side project</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4 text-center">RISK MITIGATION FRAMEWORK</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <CheckCircle className="text-green-600 mx-auto mb-2" size={24} />
              <div className="font-medium text-green-900">Proactive Monitoring</div>
              <div className="text-xs text-green-700">Continuous risk assessment</div>
            </div>
            <div>
              <Shield className="text-green-600 mx-auto mb-2" size={24} />
              <div className="font-medium text-green-900">Diversified Strategy</div>
              <div className="text-xs text-green-700">Multiple revenue streams</div>
            </div>
            <div>
              <Users className="text-green-600 mx-auto mb-2" size={24} />
              <div className="font-medium text-green-900">Strong Partnerships</div>
              <div className="text-xs text-green-700">IBM and university alliances</div>
            </div>
            <div>
              <Lightbulb className="text-green-600 mx-auto mb-2" size={24} />
              <div className="font-medium text-green-900">Continuous Innovation</div>
              <div className="text-xs text-green-700">Staying ahead of competition</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 15,
    title: "LONG-TERM VISION & SOCIETAL IMPACT",
    subtitle: "Building the Future of Human-AI Collaboration",
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold mb-4">5-YEAR VISION: TRANSFORMING CAREER DISCOVERY GLOBALLY</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="text-blue-600" size={24} />
              <h3 className="text-lg font-bold text-blue-900">INSTITUTIONAL TRANSFORMATION</h3>
            </div>
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-blue-600">2,000+</div>
              <div className="text-sm text-blue-800">Universities using Milo as primary career discovery platform</div>
            </div>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>• <strong>40%+</strong> improvement in graduate career satisfaction</li>
              <li>• <strong>50%+</strong> reduction in career services operational costs</li>
              <li>• <strong>Equity advancement:</strong> Democratized access regardless of background</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-green-600" size={24} />
              <h3 className="text-lg font-bold text-green-900">GENERATIONAL IMPACT</h3>
            </div>
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-green-600">10M+</div>
              <div className="text-sm text-green-800">Students discovering authentic, automation-resistant careers</div>
            </div>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• <strong>Mental health improvement:</strong> Reduced career-related anxiety</li>
              <li>• <strong>Economic mobility:</strong> Better career-person fit</li>
              <li>• <strong>Social progress:</strong> More mission-driven roles</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="text-purple-600" size={24} />
              <h3 className="text-lg font-bold text-purple-900">AI LEADERSHIP DEMONSTRATION</h3>
            </div>
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-purple-600">Global Model</div>
              <div className="text-sm text-purple-800">for human-empowering artificial intelligence</div>
            </div>
            <ul className="space-y-2 text-sm text-purple-700">
              <li>• <strong>Policy influence:</strong> Shaping AI's role in human development</li>
              <li>• <strong>Academic research:</strong> Human-computer interaction literature</li>
              <li>• <strong>Industry standards:</strong> Values-based AI best practices</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold mb-4">10-YEAR MOONSHOT: REIMAGINING WORK ITSELF</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-orange-900 mb-4">BEYOND CAREER DISCOVERY</h3>
            <div className="space-y-3">
              <div>
                <div className="font-medium text-orange-800">Authentic Work Ecosystem Creation:</div>
                <ul className="text-sm text-orange-700 mt-1 space-y-1">
                  <li>• Company culture prediction: AI helping organizations become human-centered</li>
                  <li>• Meaningful work marketplace: Purpose-driven connections</li>
                  <li>• Career evolution intelligence: Supporting multiple transitions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-cyan-900 mb-4">GLOBAL EXPANSION</h3>
            <div className="space-y-3">
              <div>
                <div className="font-medium text-cyan-800">International Impact:</div>
                <ul className="text-sm text-cyan-700 mt-1 space-y-1">
                  <li>• Emerging markets: Democratizing career discovery</li>
                  <li>• Cultural adaptation: Diverse approaches to meaningful work</li>
                  <li>• Language expansion: Multilingual career discovery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-900 mb-4">SOCIETAL TRANSFORMATION</h3>
          <div className="text-center mb-4">
            <div className="text-xl font-bold text-green-600">Measuring Success by Human Flourishing</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Target className="text-green-600 mx-auto mb-2" size={24} />
              <div className="font-medium text-green-900">Policy Advocacy</div>
              <div className="text-xs text-green-700">Influencing how societies measure economic success</div>
            </div>
            <div className="text-center">
              <Building2 className="text-green-600 mx-auto mb-2" size={24} />
              <div className="font-medium text-green-900">Workplace Evolution</div>
              <div className="text-xs text-green-700">Human-centered organizational cultures</div>
            </div>
            <div className="text-center">
              <GraduationCap className="text-green-600 mx-auto mb-2" size={24} />
              <div className="font-medium text-green-900">Educational Reform</div>
              <div className="text-xs text-green-700">Preparing students for authentic careers</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold mb-4">THE ULTIMATE GOAL</h3>
          <p className="text-xl text-indigo-100 mb-4">
            A world where AI helps every person discover work that makes them feel fully alive
          </p>
          <p className="text-indigo-200">
            This isn't just about building a successful company—it's about proving that technology can enhance rather than diminish human potential, creating a template for the kind of AI-powered future we want to inhabit.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 16,
    title: "PARTNERSHIP INVITATION & NEXT STEPS",
    subtitle: "Building the Future Together with IBM",
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">WHAT WE'RE SEEKING FROM IBM VENTURES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-800 mb-3">Strategic Technology Partnership:</h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Watson platform integration for enterprise-grade conversational AI</li>
                <li>• IBM Cloud infrastructure supporting global scaling</li>
                <li>• Research collaboration on human-AI interaction methodologies</li>
                <li>• Joint IP development in values-based AI recommendation systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-3">Go-to-Market Acceleration:</h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Enterprise customer introductions for Fortune 500</li>
                <li>• University partner network leveraging IBM's relationships</li>
                <li>• International expansion through IBM's global presence</li>
                <li>• Sales team collaboration for enterprise solutions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4">IBM GAINS</h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• <strong>Innovation showcase</strong> demonstrating Watson's human-empowerment potential</li>
              <li>• <strong>New market entry</strong> into the $15B career services industry</li>
              <li>• <strong>Competitive differentiation</strong> in human-AI collaboration space</li>
              <li>• <strong>Research insights</strong> on conversational AI for complex decision-making</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4">MILO GAINS</h3>
            <ul className="space-y-2 text-sm text-purple-700">
              <li>• <strong>Enterprise credibility</strong> accelerating university and corporate adoption</li>
              <li>• <strong>Technical infrastructure</strong> enabling global scaling without massive capital</li>
              <li>• <strong>Market access</strong> through IBM's existing customer relationships</li>
              <li>• <strong>Brand association</strong> with responsible AI development leadership</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">IMMEDIATE NEXT STEPS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">30</div>
              <h4 className="font-medium text-gray-900 mb-2">30-DAY MILESTONE</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Technical architecture review</li>
                <li>• Pilot program design</li>
                <li>• Partnership structure negotiation</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">90</div>
              <h4 className="font-medium text-gray-900 mb-2">90-DAY MILESTONE</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Proof of concept deployment</li>
                <li>• Customer validation</li>
                <li>• Press announcement</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">6M</div>
              <h4 className="font-medium text-gray-900 mb-2">6-MONTH MILESTONE</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Commercial pilot launch</li>
                <li>• Enterprise customer development</li>
                <li>• International expansion planning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold mb-4">THE INVITATION</h3>
          <p className="text-xl text-blue-100 mb-4">
            Join us in proving that AI can enhance rather than replace human potential
          </p>
          <p className="text-blue-200 mb-6">
            This partnership isn't just about technology integration—it's about establishing IBM as the leader in human-empowering AI while building a solution that could transform how an entire generation discovers meaningful work.
          </p>
          
          <div className="bg-white/10 rounded-lg p-4 text-left">
            <h4 className="font-bold mb-2">Contact:</h4>
            <div className="space-y-1 text-sm">
              <div>George McCain, CEO & Co-Founder</div>
              <div>georgemccain88@gmail.com | (917) 803-4541</div>
              <div><strong>Live Demo:</strong> milojobs.netlify.app</div>
              <div><strong>Technical Specs:</strong> Available for immediate review</div>
            </div>
          </div>
          
          <p className="text-blue-200 mt-4 italic">
            Together, we can build technology that helps people become more authentically themselves.
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

      {/* Main Content - Properly Scrollable */}
      <div className="h-[calc(100vh-4rem)] overflow-y-auto">
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
    </div>
  );
}

export default Pitch;