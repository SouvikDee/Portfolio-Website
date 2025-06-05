
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
        <div className="max-w-5xl mx-auto">
          {/* Enhanced badge */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50 rounded-full px-6 py-3 shadow-lg">
                <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Available for hire
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur opacity-75 animate-pulse"></div>
            </div>
          </div>
          
          {/* Main heading with enhanced styling */}
          <div className="relative mb-8">
            <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-4 animate-fade-in leading-tight">
              Souvik De
            </h1>
            
            {/* Floating icons around the name */}
            <div className="absolute -top-4 -left-4 opacity-60">
              <Code className="w-8 h-8 text-blue-500 animate-float" />
            </div>
            <div className="absolute -top-2 -right-8 opacity-60">
              <Palette className="w-6 h-6 text-purple-500 animate-bounce" />
            </div>
            <div className="absolute -bottom-4 left-1/4 opacity-60">
              <Zap className="w-7 h-7 text-yellow-500 animate-pulse" />
            </div>
          </div>
          
          {/* Enhanced subtitle with typing effect simulation */}
          <div className="relative mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-fade-in delay-150">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                App & Web Developer
              </span>
            </h2>
            
            {/* Professional badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-fade-in delay-300">
                Agricultural Engineer ✨
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-fade-in delay-500">
                GATE AIR 79 🏆
              </div>
            </div>
          </div>
          
          {/* Enhanced description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in delay-300 leading-relaxed">
            Crafting <span className="font-bold text-blue-600 dark:text-blue-400">innovative digital solutions</span> that bridge technology and agriculture, 
            creating <span className="font-bold text-purple-600 dark:text-purple-400">scalable applications</span> that solve real-world problems
          </p>
          
          {/* Enhanced buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500 mb-16">
            <button
              onClick={scrollToProjects}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 text-white rounded-2xl font-bold transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-blue-500/25 overflow-hidden transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Explore My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors duration-300"></div>
            </button>
            
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-5 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-2xl font-bold transition-all duration-500 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden transform hover:-translate-y-1"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Let's Connect
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16 animate-fade-in delay-700">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300">
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
