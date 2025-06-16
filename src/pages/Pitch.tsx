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
  // ... rest of the slides array ...
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