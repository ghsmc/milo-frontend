import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Play, Users, Target, TrendingUp, Zap, Globe, Award, Crown, Cpu, Settings, Code, Brain, Monitor, Database, Search, BarChart3, DollarSign, Building2, Rocket, Shield, CheckCircle, AlertTriangle, Lightbulb, Network, LineChart } from 'lucide-react';
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
    id: 5,
    title: "DEEP TECHNICAL ARCHITECTURE",
    subtitle: "Proprietary AI Systems & Algorithms",
    content: (
      <div className="space-y-8">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise-grade technology stack powering authentic career discovery</h3>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
            <Brain size={24} />
            VALUES VECTOR ARCHITECTURE™
          </h3>
          <p className="text-purple-800 font-medium mb-3">Revolutionary Approach to Human Authenticity Encoding:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-sm text-purple-700 space-y-2">
              <li>• <strong>Multi-dimensional embeddings</strong> encoding passion, purpose, creativity, autonomy, impact</li>
              <li>• <strong>Behavioral pattern analysis</strong> learning from implicit feedback (time spent, engagement patterns)</li>
            </ul>
            <ul className="text-sm text-purple-700 space-y-2">
              <li>• <strong>Values hierarchy modeling</strong> understanding individual preference weights</li>
              <li>• <strong>Authentic interest synthesis</strong> combining stated preferences with discovered patterns</li>
            </ul>
          </div>
          
          {/* Technical Demo */}
          <div className="mt-4 bg-white rounded-lg p-4 border">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Live Values Vector Example:</h4>
            <div className="grid grid-cols-5 gap-2 text-xs">
              <div className="text-center">
                <div className="w-full bg-purple-200 rounded-full h-2 mb-1">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span>Creativity: 0.85</span>
              </div>
              <div className="text-center">
                <div className="w-full bg-blue-200 rounded-full h-2 mb-1">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
                <span>Impact: 0.92</span>
              </div>
              <div className="text-center">
                <div className="w-full bg-green-200 rounded-full h-2 mb-1">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
                <span>Autonomy: 0.78</span>
              </div>
              <div className="text-center">
                <div className="w-full bg-yellow-200 rounded-full h-2 mb-1">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
                <span>Security: 0.65</span>
              </div>
              <div className="text-center">
                <div className="w-full bg-red-200 rounded-full h-2 mb-1">
                  <div className="bg-red-600 h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
                <span>Purpose: 0.88</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Search size={24} />
            HYBRID SEMANTIC SEARCH ENGINE
          </h3>
          <p className="text-blue-800 font-medium mb-3">Enterprise-Grade Discovery Infrastructure:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-sm text-blue-700 space-y-2">
              <li>• <strong>Dense embeddings:</strong> LLaMA-text-embed-v2 for semantic understanding</li>
              <li>• <strong>Sparse retrieval:</strong> Keyword precision for technical requirements</li>
              <li>• <strong>Vector database:</strong> Pinecone for sub-second similarity search across 200K+ records</li>
            </ul>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>• <strong>Real-time indexing:</strong> Redis caching architecture for instant results</li>
              <li>• <strong>Quality scoring:</strong> ML models ranking opportunity authenticity and fit</li>
            </ul>
          </div>

          {/* Performance Metrics */}
          <div className="mt-4 bg-white rounded-lg p-4 border">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Performance Metrics:</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">< 200ms</div>
                <div className="text-xs text-gray-600">Search Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">200K+</div>
                <div className="text-xs text-gray-600">Indexed Opportunities</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">94.7%</div>
                <div className="text-xs text-gray-600">Relevance Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <Shield size={24} />
            AUTOMATION-RESISTANCE PREDICTION ENGINE
          </h3>
          <p className="text-red-800 font-medium mb-3">Proprietary AI Resilience Modeling:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-sm text-red-700 space-y-2">
              <li>• <strong>Labor economics integration:</strong> Real-time analysis of automation risk by industry/role</li>
              <li>• <strong>Human capability mapping:</strong> Identifying work requiring creativity, empathy, complex reasoning</li>
            </ul>
            <ul className="text-sm text-red-700 space-y-2">
              <li>• <strong>Future trend analysis:</strong> Predicting which skills become MORE valuable as AI advances</li>
              <li>• <strong>Career pathway simulation:</strong> Monte Carlo modeling of long-term career resilience</li>
            </ul>
          </div>

          <div className="mt-4 bg-white rounded-lg p-4 border">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
              <div className="text-sm font-medium text-gray-900">Technical Result: Accuracy in identifying automation-resistant career paths</div>
            </div>
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
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-university research validating our approach</h3>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <BarChart3 size={24} />
            ORIGINAL RESEARCH FINDINGS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-blue-800 font-medium mb-3">Multi-University Study (N=19, Expanding to 200+):</p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Universities:</strong> Wake Forest, UVM, Pitzer College, UW-Madison</li>
                <li>• <strong>Demographics:</strong> Diverse majors (Finance, Computer Science, Philosophy, Food Systems)</li>
                <li>• <strong>Geographic spread:</strong> East Coast, Midwest, West Coast validation</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Study Demographics</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Computer Science</span>
                  <span className="font-medium">32%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Business/Finance</span>
                  <span className="font-medium">26%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Liberal Arts</span>
                  <span className="font-medium">21%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>STEM</span>
                  <span className="font-medium">21%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">KEY BEHAVIORAL INSIGHTS:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-green-600">73.7%</div>
              <div className="text-xs text-gray-600 mt-1">adoption intent for AI-powered career discovery</div>
            </div>
            <div className="text-center bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600">57.9%</div>
              <div className="text-xs text-gray-600 mt-1">willingness to pay for authentic career alignment tools</div>
            </div>
            <div className="text-center bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-red-600">42.1%</div>
              <div className="text-xs text-gray-600 mt-1">report career services "make little to no difference"</div>
            </div>
            <div className="text-center bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-600">10.5%</div>
              <div className="text-xs text-gray-600 mt-1">report career services actually helped find meaningful work</div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-purple-900 mb-4">PSYCHOLOGICAL FRAMEWORK VALIDATION:</h3>
          <div className="mb-4">
            <h4 className="text-lg font-medium text-purple-800 mb-2">Career Misalignment → Mental Health Pipeline:</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <AlertTriangle className="text-red-500" size={20} />
                <span className="text-sm"><strong>Chronic stress</strong> from work-value misalignment</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <AlertTriangle className="text-orange-500" size={20} />
                <span className="text-sm"><strong>Decision paralysis</strong> from too many low-quality options</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <AlertTriangle className="text-yellow-500" size={20} />
                <span className="text-sm"><strong>Imposter syndrome</strong> from pursuing inauthentic paths</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-sm"><strong>Burnout prevention</strong> through early authentic alignment</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">COMPETITIVE INTELLIGENCE:</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Platform</th>
                  <th className="text-center py-2">Success Rate</th>
                  <th className="text-center py-2">Values Alignment</th>
                  <th className="text-center py-2">User Satisfaction</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b">
                  <td className="py-2 font-medium">LinkedIn</td>
                  <td className="text-center py-2 text-red-600">0.00006%</td>
                  <td className="text-center py-2 text-red-600">Low</td>
                  <td className="text-center py-2 text-red-600">2.1/10</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Handshake</td>
                  <td className="text-center py-2 text-yellow-600">0.8%</td>
                  <td className="text-center py-2 text-yellow-600">Medium</td>
                  <td className="text-center py-2 text-yellow-600">4.2/10</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Indeed/ZipRecruiter</td>
                  <td className="text-center py-2 text-red-600">0.3%</td>
                  <td className="text-center py-2 text-red-600">Low</td>
                  <td className="text-center py-2 text-red-600">3.1/10</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-blue-600">Milo (Projected)</td>
                  <td className="text-center py-2 text-green-600">15-25%</td>
                  <td className="text-center py-2 text-green-600">High</td>
                  <td className="text-center py-2 text-green-600">8.5/10</td>
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
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Database size={24} />
            EXCLUSIVE DATA ASSETS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border">
              <h4 className="text-lg font-bold text-blue-900 mb-3">Alumni Career Journey Database</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• <strong>100K+ Yale alumni</strong> career transition patterns</li>
                <li>• <strong>Unconventional pathway mapping:</strong> Literature → Documentary → Climate Policy</li>
                <li>• <strong>Success pattern recognition:</strong> Which authentic transitions actually work economically</li>
                <li>• <strong>Mentorship graph analysis:</strong> Connection patterns for warm introductions</li>
              </ul>
              <div className="mt-3 text-center">
                <div className="text-2xl font-bold text-blue-600">100K+</div>
                <div className="text-xs text-gray-600">Alumni Profiles</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border">
              <h4 className="text-lg font-bold text-green-900 mb-3">Company Culture Intelligence</h4>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• <strong>100K+ organization profiles</strong> with deep cultural analysis</li>
                <li>• <strong>Mission-driven scoring:</strong> Quantifying authentic company values vs. corporate speak</li>
                <li>• <strong>Growth stage modeling:</strong> Startup, scale-up, enterprise culture patterns</li>
                <li>• <strong>Values alignment prediction:</strong> Company-individual fit scoring</li>
              </ul>
              <div className="mt-3 text-center">
                <div className="text-2xl font-bold text-green-600">100K+</div>
                <div className="text-xs text-gray-600">Company Profiles</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border">
              <h4 className="text-lg font-bold text-purple-900 mb-3">Real-Time Opportunity Intelligence</h4>
              <ul className="text-sm text-purple-700 space-y-2">
                <li>• <strong>Live web scraping</strong> across job boards, fellowship sites, research programs</li>
                <li>• <strong>Opportunity classification:</strong> Traditional jobs vs. meaningful work detection</li>
                <li>• <strong>Temporal pattern analysis:</strong> When meaningful opportunities typically appear</li>
                <li>• <strong>Geographic opportunity mapping:</strong> Remote vs. location-specific patterns</li>
              </ul>
              <div className="mt-3 text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-xs text-gray-600">Live Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
            <Brain size={24} />
            AI TRAINING METHODOLOGY
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-green-800 mb-3">Human-in-the-Loop Learning:</h4>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• <strong>Conversation mining:</strong> Learning authentic interest patterns from user dialogue</li>
                <li>• <strong>Outcome feedback:</strong> Career satisfaction tracking for algorithm improvement</li>
                <li>• <strong>Values calibration:</strong> Continuous refinement of authenticity detection</li>
                <li>• <strong>Bias mitigation:</strong> Actively countering traditional career pathway bias</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-bold text-gray-900 mb-3">Data Flywheel Effect</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-xs">User Interaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs">Pattern Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-xs">Algorithm Improvement</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-xs">Better Recommendations</span>
                </div>
              </div>
              <div className="mt-3 text-center">
                <div className="text-lg font-bold text-gray-900">Each user interaction improves recommendations for all users</div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Users size={20} />
              TIER 1: DIRECT-TO-STUDENT (B2C)
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Basic</span>
                  <span className="text-green-600 font-bold">Free</span>
                </div>
                <p className="text-xs text-gray-600">Career discovery with limited features</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Premium</span>
                  <span className="text-blue-600 font-bold">$10/month</span>
                </div>
                <p className="text-xs text-gray-600">Unlimited searches, advanced AI features, mentor connections</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Pro</span>
                  <span className="text-purple-600 font-bold">$25/month</span>
                </div>
                <p className="text-xs text-gray-600">One-click apply, AI-generated applications, priority support</p>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-600">$24M</div>
              <div className="text-xs text-gray-600">ARR Potential (1% of 20M students)</div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
              <Building2 size={20} />
              TIER 2: INSTITUTIONAL PARTNERSHIPS (B2B)
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Small Colleges</span>
                  <span className="text-green-600 font-bold">$2K-5K</span>
                </div>
                <p className="text-xs text-gray-600">< 5K students annual license</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Mid-size Universities</span>
                  <span className="text-blue-600 font-bold">$5K-15K</span>
                </div>
                <p className="text-xs text-gray-600">5K-20K students annual license</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Large Universities</span>
                  <span className="text-purple-600 font-bold">$15K-50K</span>
                </div>
                <p className="text-xs text-gray-600">20K+ students annual license</p>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-lg p-3">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Value Proposition:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Improved graduate outcomes</li>
                <li>• Reduced career services staffing needs</li>
                <li>• Competitive advantage in student recruitment</li>
                <li>• Data insights on career trends</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
              <Rocket size={20} />
              TIER 3: ENTERPRISE SOLUTIONS (B2B2C)
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-purple-800">Corporate Talent Acquisition:</h4>
                <ul className="text-xs text-purple-700 mt-2 space-y-1">
                  <li>• Mission-driven company partnerships seeking authentic candidates</li>
                  <li>• Employer branding tools highlighting company values and culture</li>
                  <li>• Predictive hiring: Candidates pre-matched for cultural fit</li>
                  <li>• Revenue sharing with successful placements ($1K-5K per hire)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
              <BarChart3 size={20} />
              TIER 4: DATA & INSIGHTS (B2B)
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-orange-800">Career Intelligence as a Service:</h4>
                <ul className="text-xs text-orange-700 mt-2 space-y-1">
                  <li>• Industry trend reports for career services, HR departments</li>
                  <li>• Workforce development insights for government agencies</li>
                  <li>• Academic research partnerships with psychology/sociology departments</li>
                  <li>• Policy recommendations for educational institutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">REVENUE PROJECTION SUMMARY</h3>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">Year 1</div>
              <div className="text-lg font-medium text-gray-900">$95K</div>
              <div className="text-xs text-gray-600">Foundation & Validation</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">Year 2</div>
              <div className="text-lg font-medium text-gray-900">$925K</div>
              <div className="text-xs text-gray-600">Proven Scaling</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">Year 3</div>
              <div className="text-lg font-medium text-gray-900">$12M</div>
              <div className="text-xs text-gray-600">Market Leadership</div>
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
                <tr className="border-b border-red-200">
                  <th className="text-left py-3 px-2">Platform</th>
                  <th className="text-left py-3 px-2">Approach</th>
                  <th className="text-left py-3 px-2">Why It Fails</th>
                  <th className="text-left py-3 px-2">Our Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-red-100">
                  <td className="py-3 px-2 font-medium">LinkedIn</td>
                  <td className="py-3 px-2">Professional networking</td>
                  <td className="py-3 px-2 text-red-700">Optimizes for recruiters, not seekers</td>
                  <td className="py-3 px-2 text-green-700">Optimizes for authentic human fulfillment</td>
                </tr>
                <tr className="border-b border-red-100">
                  <td className="py-3 px-2 font-medium">Handshake</td>
                  <td className="py-3 px-2">University job board</td>
                  <td className="py-3 px-2 text-red-700">Static listings, keyword matching</td>
                  <td className="py-3 px-2 text-green-700">Dynamic AI conversation + autonomous discovery</td>
                </tr>
                <tr className="border-b border-red-100">
                  <td className="py-3 px-2 font-medium">Indeed/ZipRecruiter</td>
                  <td className="py-3 px-2">Volume-based matching</td>
                  <td className="py-3 px-2 text-red-700">Quantity over quality, no values alignment</td>
                  <td className="py-3 px-2 text-green-700">Quality matching prioritizing passion over pay</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">University Career Services</td>
                  <td className="py-3 px-2">Human counseling</td>
                  <td className="py-3 px-2 text-red-700">Resource-constrained, traditional path bias</td>
                  <td className="py-3 px-2 text-green-700">Scalable AI with unconventional path discovery</td>
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
                <tr className="border-b border-blue-200">
                  <th className="text-left py-3 px-2">Competitor</th>
                  <th className="text-left py-3 px-2">Innovation</th>
                  <th className="text-left py-3 px-2">Limitation</th>
                  <th className="text-left py-3 px-2">Our Breakthrough</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-100">
                  <td className="py-3 px-2 font-medium">AI career chatbots</td>
                  <td className="py-3 px-2">Conversational interface</td>
                  <td className="py-3 px-2 text-red-700">No autonomous discovery, limited data</td>
                  <td className="py-3 px-2 text-green-700">Dual-mode: conversation + 24/7 autonomous agents</td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="py-3 px-2 font-medium">Values-based platforms</td>
                  <td className="py-3 px-2">Cultural fit matching</td>
                  <td className="py-3 px-2 text-red-700">Static company data, no real-time intelligence</td>
                  <td className="py-3 px-2 text-green-700">Live web intelligence + predictive modeling</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">Mentorship platforms</td>
                  <td className="py-3 px-2">Human connections</td>
                  <td className="py-3 px-2 text-red-700">Manual matching, limited scalability</td>
                  <td className="py-3 px-2 text-green-700">AI-powered pathway pattern recognition</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">SUSTAINABLE COMPETITIVE ADVANTAGES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-sm"><strong>Proprietary dataset</strong> of authentic career transitions (100K+ alumni patterns)</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-sm"><strong>Values-first algorithm</strong> designed for human flourishing vs. economic optimization</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-sm"><strong>Real-time market intelligence</strong> discovering opportunities others miss</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-sm"><strong>Network effects</strong> where each user improves system for all users</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-sm"><strong>Mission authenticity</strong> - team solving problem they experience daily</span>
              </div>
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
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">WATSON PLATFORM SYNERGIES</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Brain size={20} />
                WATSON ASSISTANT ENHANCEMENT
              </h4>
              <p className="text-blue-700 font-medium mb-2">Conversational AI Amplification:</p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Advanced NLP for nuanced career dialogue understanding</li>
                <li>• Multi-turn conversation management for complex career exploration</li>
                <li>• Emotional intelligence detection for authentic interest discovery</li>
                <li>• Multi-language support for global university expansion</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                <Search size={20} />
                WATSON DISCOVERY INTEGRATION
              </h4>
              <p className="text-green-700 font-medium mb-2">Enterprise Knowledge Management:</p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Document intelligence for analyzing job descriptions, company reports</li>
                <li>• Insight extraction from career outcome data and alumni stories</li>
                <li>• Content classification distinguishing meaningful work from routine jobs</li>
                <li>• Real-time data ingestion from multiple career-related sources</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Code size={20} />
                WATSON STUDIO COLLABORATION
              </h4>
              <p className="text-purple-700 font-medium mb-2">Advanced ML Model Development:</p>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>• AutoAI capabilities for career prediction model optimization</li>
                <li>• Model monitoring ensuring bias-free authentic career recommendations</li>
                <li>• A/B testing framework for conversation flow optimization</li>
                <li>• Enterprise deployment with IBM Cloud infrastructure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">TECHNICAL ARCHITECTURE INTEGRATION</h3>
          <div className="bg-white rounded-lg p-6 border">
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="bg-blue-100 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium">User Conversation</div>
                </div>
                <div className="mx-4">→</div>
                <div className="bg-green-100 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium">Watson Assistant + Milo Values Engine</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-2xl">↓</div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="bg-purple-100 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium">Career Discovery Request</div>
                </div>
                <div className="mx-4">→</div>
                <div className="bg-yellow-100 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium">Watson Discovery + Milo Web Intelligence</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-2xl">↓</div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="bg-red-100 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium">Opportunity Analysis</div>
                </div>
                <div className="mx-4">→</div>
                <div className="bg-indigo-100 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium">Watson Studio + Milo Matching Algorithm</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-2xl">↓</div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="bg-green-100 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium">Personalized Recommendations</div>
                </div>
                <div className="mx-4">→</div>
                <div className="bg-blue-100 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium">User Action & Feedback Loop</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4">ENTERPRISE VALUE PROPOSITION</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-green-800">IBM gains:</h4>
                <p className="text-sm text-green-700">Innovation showcase in human-AI collaboration</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-blue-800">Milo gains:</h4>
                <p className="text-sm text-blue-700">Enterprise-grade reliability and global scalability</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-purple-800">Joint customers gain:</h4>
                <p className="text-sm text-purple-700">Proven technology stack for career intelligence</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">PILOT PROGRAM PROPOSAL</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-blue-800">Phase 1:</h4>
                <p className="text-sm text-blue-700">Watson integration for 3 university partners</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-green-800">Phase 2:</h4>
                <p className="text-sm text-green-700">Enterprise deployment for Fortune 500 career development</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <h4 className="font-medium text-purple-800">Phase 3:</h4>
                <p className="text-sm text-purple-700">Global scaling with IBM's international university network</p>
              </div>
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
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Target size={20} />
              PHASE 1: UNIVERSITY BEACHHEAD
            </h3>
            <div className="text-center mb-3">
              <div className="text-sm text-blue-700">Months 1-12</div>
              <div className="text-lg font-bold text-blue-900">10-15 pilot universities</div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Selection Criteria:</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Struggling career services (based on our survey insights)</li>
                  <li>• Innovation-friendly administration</li>
                  <li>• Diverse student populations for algorithm training</li>
                  <li>• Strong alumni networks for mentorship data</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-3">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Success Metrics:</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Student engagement: 25%+ of target population using platform monthly</li>
                  <li>• Outcome improvement: 40%+ increase in career satisfaction scores</li>
                  <li>• Cost reduction: 30%+ decrease in career services staffing needs</li>
                  <li>• Revenue validation: $50K+ ARR from pilot partners</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
              <Globe size={20} />
              PHASE 2: REGIONAL EXPANSION
            </h3>
            <div className="text-center mb-3">
              <div className="text-sm text-green-700">Months 12-24</div>
              <div className="text-lg font-bold text-green-900">100+ universities</div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Scaling Strategy:</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Reference customers from Phase 1 success stories</li>
                  <li>• Partner channel development with education consultants</li>
                  <li>• Conference presence at career services and educational technology events</li>
                  <li>• Content marketing showcasing authentic career discovery outcomes</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-3">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Technology Scaling:</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Watson integration for enterprise-grade reliability</li>
                  <li>• Multi-tenant architecture supporting hundreds of institutions</li>
                  <li>• Advanced analytics providing institutional insights and benchmarking</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
              <Building2 size={20} />
              PHASE 3: ENTERPRISE EXPANSION
            </h3>
            <div className="text-center mb-3">
              <div className="text-sm text-purple-700">Months 18-36</div>
              <div className="text-lg font-bold text-purple-900">Fortune 500 companies</div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Corporate Use Cases:</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Internal mobility: Helping employees discover authentic career paths within company</li>
                  <li>• Retention strategy: Reducing turnover through better role-person fit</li>
                  <li>• Diversity & inclusion: Surfacing non-traditional advancement pathways</li>
                  <li>• Leadership development: Identifying high-potential employees based on authentic interests</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-3">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Partnership Strategy:</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• IBM joint go-to-market leveraging Watson ecosystem</li>
                  <li>• HR technology integrations with Workday, SuccessFactors, Oracle</li>
                  <li>• Consulting partnerships with Deloitte, McKinsey for change management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">EXECUTION TIMELINE</h3>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300"></div>
            <div className="space-y-6 ml-6">
              <div className="relative">
                <div className="absolute -left-8 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-blue-900">Q1-Q2 2024: Foundation</h4>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Phase 1</span>
                  </div>
                  <p className="text-sm text-gray-700">Launch pilot programs with 3-5 universities, validate product-market fit, establish core team</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-green-900">Q3-Q4 2024: Scaling</h4>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Phase 2</span>
                  </div>
                  <p className="text-sm text-gray-700">Expand to 25+ universities, implement Watson integration, develop enterprise features</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-purple-900">2025: Enterprise</h4>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Phase 3</span>
                  </div>
                  <p className="text-sm text-gray-700">Launch corporate solutions, international expansion, establish market leadership</p>
                </div>
              </div>
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
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4 text-center">YEAR 1 TARGETS</h3>
            <div className="text-center mb-3">
              <div className="text-sm text-blue-700">Conservative Foundation</div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <h4 className="text-sm font-bold text-gray-900 mb-2">Revenue Streams:</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Student Subscriptions:</span>
                    <span className="font-medium">$60,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>University Pilots:</span>
                    <span className="font-medium">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Research Partnerships:</span>
                    <span className="font-medium">$20,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-bold">
                    <span>Total Revenue:</span>
                    <span className="text-blue-600">$95,000</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-3">
                <h4 className="text-sm font-bold text-gray-900 mb-2">Key Expenses:</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Technical Infrastructure:</span>
                    <span className="font-medium">$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Compensation:</span>
                    <span className="font-medium">$40,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marketing & Sales:</span>
                    <span className="font-medium">$15,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-bold">
                    <span>Total Expenses:</span>
                    <span className="text-red-600">$80,000</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-600">+$15,000</div>
                <div className="text-xs text-green-700">Positive Cash Flow</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4 text-center">YEAR 2 PROJECTIONS</h3>
            <div className="text-center mb-3">
              <div className="text-sm text-green-700">Proven Scaling</div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <h4 className="text-sm font-bold text-gray-900 mb-2">Revenue Growth:</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Student Subscriptions:</span>
                    <span className="font-medium">$600,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>University Partnerships:</span>
                    <span className="font-medium">$200,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Corporate Pilots:</span>
                    <span className="font-medium">$75,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Licensing:</span>
                    <span className="font-medium">$50,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-bold">
                    <span>Total Revenue:</span>
                    <span className="text-green-600">$925,000</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-3">
                <h4 className="text-sm font-bold text-gray-900 mb-2">Scaling Investment:</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Technical Team:</span>
                    <span className="font-medium">$300,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sales & Marketing:</span>
                    <span className="font-medium">$200,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Infrastructure:</span>
                    <span className="font-medium">$75,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-bold">
                    <span>Total Expenses:</span>
                    <span className="text-red-600">$575,000</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-600">+$350,000</div>
                <div className="text-xs text-green-700">Positive Cash Flow</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4 text-center">YEAR 3 VISION</h3>
            <div className="text-center mb-3">
              <div className="text-sm text-purple-700">Market Leadership</div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <h4 className="text-sm font-bold text-gray-900 mb-2">Revenue Acceleration:</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Student Subscriptions:</span>
                    <span className="font-medium">$6,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>University Enterprise:</span>
                    <span className="font-medium">$3,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Corporate Solutions:</span>
                    <span className="font-medium">$2,500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data & Analytics:</span>
                    <span className="font-medium">$500,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-bold">
                    <span>Total Revenue:</span>
                    <span className="text-purple-600">$12,000,000</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-100 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-600">$12M</div>
                <div className="text-xs text-purple-700">ARR Target</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">UNIT ECONOMICS ANALYSIS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-blue-900 mb-3 text-center">Customer Acquisition Cost (CAC)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Students:</span>
                  <span className="font-bold text-blue-600">$25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Universities:</span>
                  <span className="font-bold text-green-600">$2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Corporations:</span>
                  <span className="font-bold text-purple-600">$10,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-green-900 mb-3 text-center">Lifetime Value (LTV)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Students:</span>
                  <span className="font-bold text-blue-600">$240</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Universities:</span>
                  <span className="font-bold text-green-600">$45,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Corporations:</span>
                  <span className="font-bold text-purple-600">$200,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-orange-900 mb-3 text-center">LTV/CAC Ratios</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Students:</span>
                  <span className="font-bold text-green-600">9.6x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Universities:</span>
                  <span className="font-bold text-green-600">18x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Corporations:</span>
                  <span className="font-bold text-green-600">20x</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg p-4">
            <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">Gross Margins</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-xs text-gray-600">Software Subscriptions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">65%</div>
                <div className="text-xs text-gray-600">Services & Consulting</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">90%</div>
                <div className="text-xs text-gray-600">Data Licensing</div>
              </div>
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
              <AlertTriangle size={20} />
              TECHNICAL RISKS
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Risk: AI recommendation bias leading to unfair career suggestions</h4>
                <div className="text-sm text-red-700">
                  <p className="font-medium mb-1">Mitigation:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Algorithmic fairness testing with diverse user groups</li>
                    <li>• Bias detection protocols monitoring recommendation patterns</li>
                    <li>• Human-in-the-loop validation for sensitive career transitions</li>
                    <li>• Transparency features showing users why recommendations were made</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Risk: Scaling challenges with real-time web scraping across 100+ platforms</h4>
                <div className="text-sm text-red-700">
                  <p className="font-medium mb-1">Mitigation:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Distributed architecture with IBM Watson infrastructure</li>
                    <li>• Rate limiting and API management respecting platform terms of service</li>
                    <li>• Redundant data sources ensuring service reliability</li>
                    <li>• Caching strategies reducing computational load</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              <TrendingUp size={20} />
              MARKET RISKS
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2">Risk: Universities slow to adopt new technology solutions</h4>
                <div className="text-sm text-blue-700">
                  <p className="font-medium mb-1">Mitigation:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Pilot program strategy proving ROI before full implementation</li>
                    <li>• Change management support including training and onboarding</li>
                    <li>• Measurable outcomes focus with clear success metrics</li>
                    <li>• Reference customer development accelerating institutional confidence</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2">Risk: Competition from established platforms (LinkedIn, Handshake)</h4>
                <div className="text-sm text-blue-700">
                  <p className="font-medium mb-1">Mitigation:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Differentiated value proposition (authenticity vs. efficiency)</li>
                    <li>• Patent-pending technology for values-based career matching</li>
                    <li>• Network effects creating switching costs as user base grows</li>
                    <li>• Continuous innovation maintaining technological leadership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
              <DollarSign size={20} />
              BUSINESS MODEL RISKS
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-2">Risk: Student willingness to pay for career services</h4>
                <div className="text-sm text-green-700">
                  <p className="font-medium mb-1">Mitigation:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Freemium model proving value before monetization</li>
                    <li>• University partnerships reducing individual payment burden</li>
                    <li>• Demonstrated ROI through improved career outcomes</li>
                    <li>• Multiple revenue streams reducing dependence on any single source</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
              <Shield size={20} />
              REGULATORY RISKS
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-2">Risk: Data privacy concerns with student career information</h4>
                <div className="text-sm text-purple-700">
                  <p className="font-medium mb-1">Mitigation:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• FERPA compliance for educational data handling</li>
                    <li>• GDPR readiness for international expansion</li>
                    <li>• User consent protocols with clear data usage policies</li>
                    <li>• Security-first architecture protecting sensitive career information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">COMPETITIVE RESPONSE STRATEGIES</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-3">If LinkedIn develops conversational career AI:</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Authenticity advantage:</strong> Our values-first approach vs. their networking focus</li>
                <li>• <strong>University partnerships:</strong> Deep institutional relationships they lack</li>
                <li>• <strong>Mission differentiation:</strong> Human empowerment vs. professional networking</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-3">If universities develop internal solutions:</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Technical complexity:</strong> Our specialized AI vs. their general IT capabilities</li>
                <li>• <strong>Cross-institutional learning:</strong> Network effects they can't replicate alone</li>
                <li>• <strong>Continuous innovation:</strong> Dedicated team vs. university side project</li>
              </ul>
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
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Target size={24} />
            5-YEAR VISION: TRANSFORMING CAREER DISCOVERY GLOBALLY
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-blue-800 mb-3">INSTITUTIONAL TRANSFORMATION</h4>
              <div className="text-center mb-3">
                <div className="text-3xl font-bold text-blue-600">2,000+</div>
                <div className="text-sm text-blue-700">Universities using Milo as primary career discovery platform</div>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Measurable outcomes:</strong> 40%+ improvement in graduate career satisfaction</li>
                <li>• <strong>Cost efficiency:</strong> 50%+ reduction in career services operational costs</li>
                <li>• <strong>Equity advancement:</strong> Democratized access to meaningful career discovery regardless of background</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-green-800 mb-3">GENERATIONAL IMPACT</h4>
              <div className="text-center mb-3">
                <div className="text-3xl font-bold text-green-600">10M+</div>
                <div className="text-sm text-green-700">Students discovering authentic, automation-resistant careers</div>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• <strong>Mental health improvement:</strong> Reduced career-related anxiety and depression</li>
                <li>• <strong>Economic mobility:</strong> Better career-person fit leading to higher lifetime earnings</li>
                <li>• <strong>Social progress:</strong> More people in mission-driven roles addressing societal challenges</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-purple-800 mb-3">AI LEADERSHIP DEMONSTRATION</h4>
              <div className="text-center mb-3">
                <div className="text-lg font-bold text-purple-600">Global Model</div>
                <div className="text-sm text-purple-700">for human-empowering artificial intelligence</div>
              </div>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• <strong>Policy influence:</strong> Shaping discussions about AI's role in human development</li>
                <li>• <strong>Academic research:</strong> Contributing to human-computer interaction literature</li>
                <li>• <strong>Industry standards:</strong> Establishing best practices for values-based AI systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
            <Rocket size={24} />
            10-YEAR MOONSHOT: REIMAGINING WORK ITSELF
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-green-800 mb-3">BEYOND CAREER DISCOVERY</h4>
              <p className="text-green-700 font-medium mb-2">Authentic Work Ecosystem Creation:</p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• <strong>Company culture prediction:</strong> AI helping organizations become more human-centered</li>
                <li>• <strong>Meaningful work marketplace:</strong> Connecting purpose-driven individuals with mission-aligned opportunities</li>
                <li>• <strong>Career evolution intelligence:</strong> Supporting people through multiple authentic career transitions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-blue-800 mb-3">GLOBAL EXPANSION</h4>
              <p className="text-blue-700 font-medium mb-2">International Impact:</p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• <strong>Emerging markets:</strong> Democratizing career discovery in developing economies</li>
                <li>• <strong>Cultural adaptation:</strong> AI understanding diverse cultural approaches to meaningful work</li>
                <li>• <strong>Language expansion:</strong> Multilingual career discovery serving global populations</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-purple-800 mb-3">SOCIETAL TRANSFORMATION</h4>
              <p className="text-purple-700 font-medium mb-2">Measuring Success by Human Flourishing:</p>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>• <strong>Policy advocacy:</strong> Influencing how societies measure economic success</li>
                <li>• <strong>Workplace evolution:</strong> Contributing to more human-centered organizational cultures</li>
                <li>• <strong>Educational reform:</strong> Reshaping how schools prepare students for authentic careers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Lightbulb size={28} className="text-yellow-500" />
            THE ULTIMATE GOAL
          </h3>
          <div className="text-xl font-bold text-purple-900 mb-4">
            A world where AI helps every person discover work that makes them feel fully alive
          </div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            This isn't just about building a successful company—it's about proving that technology can enhance rather than diminish human potential, creating a template for the kind of AI-powered future we want to inhabit.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">IMPACT MEASUREMENT FRAMEWORK</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">Career Satisfaction</div>
              <div className="text-xs text-gray-600 mt-1">Measuring authentic work alignment</div>
            </div>
            <div className="text-center bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">Mental Health</div>
              <div className="text-xs text-gray-600 mt-1">Reducing work-related stress and anxiety</div>
            </div>
            <div className="text-center bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">Economic Mobility</div>
              <div className="text-xs text-gray-600 mt-1">Improving lifetime earning potential</div>
            </div>
            <div className="text-center bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600">Social Impact</div>
              <div className="text-xs text-gray-600 mt-1">More people in mission-driven roles</div>
            </div>
          </div>
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
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Network size={24} />
            WHAT WE'RE SEEKING FROM IBM VENTURES
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-blue-800 mb-3">STRATEGIC TECHNOLOGY PARTNERSHIP</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• <strong>Watson platform integration</strong> for enterprise-grade conversational AI</li>
                <li>• <strong>IBM Cloud infrastructure</strong> supporting global scaling requirements</li>
                <li>• <strong>Research collaboration</strong> on human-AI interaction methodologies</li>
                <li>• <strong>Joint IP development</strong> in values-based AI recommendation systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-green-800 mb-3">GO-TO-MARKET ACCELERATION</h4>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• <strong>Enterprise customer introductions</strong> for Fortune 500 career development needs</li>
                <li>• <strong>University partner network</strong> leveraging IBM's educational relationships</li>
                <li>• <strong>International expansion support</strong> through IBM's global presence</li>
                <li>• <strong>Sales team collaboration</strong> for enterprise solution development</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-purple-800 mb-3">TECHNICAL EXPERTISE ACCESS</h4>
              <ul className="text-sm text-purple-700 space-y-2">
                <li>• <strong>Watson technical team</strong> consultation on integration architecture</li>
                <li>• <strong>AI ethics guidance</strong> ensuring responsible development practices</li>
                <li>• <strong>Security and compliance</strong> support for enterprise deployment</li>
                <li>• <strong>Performance optimization</strong> for large-scale conversational AI workloads</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-900 mb-4">MUTUAL VALUE CREATION</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2">IBM GAINS:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Innovation showcase demonstrating Watson's human-empowerment potential</li>
                  <li>• New market entry into the $15B career services industry</li>
                  <li>• Competitive differentiation in human-AI collaboration space</li>
                  <li>• Research insights on conversational AI for complex decision-making</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-2">MILO GAINS:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Enterprise credibility accelerating university and corporate adoption</li>
                  <li>• Technical infrastructure enabling global scaling without massive capital investment</li>
                  <li>• Market access through IBM's existing customer relationships</li>
                  <li>• Brand association with responsible AI development leadership</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4">IMMEDIATE NEXT STEPS</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-2">30-DAY MILESTONE:</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Technical architecture review with Watson integration team</li>
                  <li>• Pilot program design for 3 university partners using Watson infrastructure</li>
                  <li>• Partnership structure negotiation including equity/revenue sharing terms</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2">90-DAY MILESTONE:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Proof of concept deployment showing Watson-enhanced conversational career discovery</li>
                  <li>• Customer validation with joint IBM-Milo university presentations</li>
                  <li>• Press announcement of strategic partnership and shared vision</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-2">6-MONTH MILESTONE:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Commercial pilot launch with measurable outcomes and user feedback</li>
                  <li>• Enterprise customer development leveraging IBM's Fortune 500 relationships</li>
                  <li>• International expansion planning for Watson-powered global deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Lightbulb size={28} className="text-yellow-500" />
            THE INVITATION
          </h3>
          <div className="text-xl font-bold text-blue-900 mb-4">
            Join us in proving that AI can enhance rather than replace human potential
          </div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
            This partnership isn't just about technology integration—it's about establishing IBM as the leader in human-empowering AI while building a solution that could transform how an entire generation discovers meaningful work.
          </p>
          
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-gray-900 mb-4">CONTACT:</h4>
            <div className="space-y-2">
              <div className="text-lg font-medium text-gray-900">George McCain, CEO & Co-Founder</div>
              <div className="text-blue-600">georgemccain88@gmail.com | (917) 803-4541</div>
              <div className="text-sm text-gray-600">
                <strong>Live Demo:</strong> milojobs.netlify.app
              </div>
              <div className="text-sm text-gray-600">
                <strong>Technical Specs:</strong> Available for immediate review
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-lg font-medium text-purple-900 italic">
            Together, we can build technology that helps people become more authentically themselves.
          </div>
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

      {/* Main Content - Scrollable */}
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
              className="bg-white rounded-xl shadow-lg p-8"
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