
import React from 'react';
import { ChevronDown, Sparkles, Code, Palette, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-950 pt-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-400/20 rounded-full animate-bounce"></div>
        
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -top-20 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-gradient-to-r from-pink-400/30 to-blue-400/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-slate-100/25 dark:bg-grid-slate-700/25 bg-[size:60px_60px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for hire</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Main heading - reverted to previous style */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Souvik De
            </span>
          </h1>
          
          {/* Subtitle - reverted to previous style */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-6 animate-fade-in delay-150">
            App & Web Developer
          </h2>
          
          {/* Professional badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in delay-300">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Agricultural Engineer ✨
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              GATE AIR 79 🏆
            </div>
          </div>
          
          {/* Description - reverted to previous style */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in delay-500 leading-relaxed">
            Crafting innovative digital solutions that bridge technology and agriculture, 
            creating scalable applications that solve real-world problems
          </p>
          
          {/* Enhanced buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-700 mb-16">
            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Explore My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Let's Connect
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in delay-700">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Months of Experience</div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Technologies</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/20 dark:bg-gray-800/20 rounded-full p-3 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-lg">
            <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
