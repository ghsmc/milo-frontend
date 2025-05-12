import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Lightbulb, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { UIPreview } from '../UIPreview';

interface HeroSectionProps {
  inView: boolean;
  onGetStarted: () => void;
}

const categories = [
  { name: 'JOBS', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { name: 'RESEARCH LABS', color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { name: 'SUMMER PROGRAMS', color: 'bg-amber-50 text-amber-600 border-amber-100' },
  { name: 'STUDENT CLUBS', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
  { name: 'COURSES', color: 'bg-rose-50 text-rose-600 border-rose-100' }
];

export function HeroSection({ inView, onGetStarted }: HeroSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { title: 'CONVICTION', href: '/conviction' },
    { title: "WHAT'S NEXT", href: '#whats-next' },
    { title: 'TEAM', href: '#team' }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between pt-8 lg:pt-16">
      {/* Left Content */}
      <div className="w-full lg:w-1/4 flex-shrink-0 px-4 sm:px-8 lg:px-8 mb-8 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="https://gmccain.com/milo.png"
              alt="Milo"
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl shadow-lg"
            />
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Milo
            </h2>
          </div>

          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
            AI-powered <span className="font-semibold">discovery engine</span> connecting a generation of young <span className="font-semibold border-b border-gray-400">people</span> to the <span className="font-semibold border-b border-gray-400">opportunities</span> that matter.
          </p>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {categories.map((category, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-md text-xs font-medium border ${category.color}`}
              >
                {category.name}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <button
              onClick={onGetStarted}
              className="group relative px-6 py-3 rounded-lg text-white font-medium text-base
                bg-gray-900 hover:bg-gray-800 transition-all duration-200"
            >
              <div className="relative flex items-center justify-center lg:justify-start gap-2">
                Start Discovering
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </button>
            <a
              href="https://forms.gle/Vx7MFU8Eu7GkvxZ8A"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 rounded-lg font-medium text-base text-center
                bg-emerald-500/20 text-emerald-700 hover:bg-emerald-500/30 transition-all duration-200
                border border-emerald-600/20"
            >
              <div className="relative flex items-center justify-center lg:justify-start gap-2">
                <Lightbulb size={18} />
                Share your thoughts
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Demo Section */}
      <div className="w-full lg:w-3/4 pl-0 lg:pl-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full px-4 lg:px-0"
        >
          <UIPreview onGetStarted={onGetStarted} />
        </motion.div>
      </div>

      {/* Menu Button and Dropdown */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            <Menu size={24} className="text-gray-600" />
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                  onClick={() => setIsMenuOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute right-0 top-full mt-2 w-48 py-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                >
                  {menuItems.map((item, index) => (
                    <button
                      key={item.title}
                      onClick={() => {
                        setIsMenuOpen(false);
                        if (item.href.startsWith('/')) {
                          navigate(item.href);
                        }
                      }}
                      className="w-full px-4 py-2 text-left text-sm tracking-wide font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50/80 transition-colors duration-200"
                    >
                      {item.title}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}