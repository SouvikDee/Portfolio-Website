
import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 pt-20">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Sparkle animation */}
          <div className="flex justify-center mb-6">
            <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Souvik De
          </h1>
          
          <div className="relative">
            <h2 className="text-2xl md:text-4xl text-blue-600 dark:text-blue-400 mb-6 animate-fade-in delay-150 font-semibold">
              App & Web Developer
            </h2>
            <div className="absolute -top-2 -right-4 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full animate-bounce delay-300">
              Agricultural Engineer ✨
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in delay-300 leading-relaxed">
            Building <span className="text-blue-600 dark:text-blue-400 font-semibold">clean, scalable apps</span> and 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> web solutions</span> that solve real-world problems
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500">
            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/20 dark:bg-gray-800/20 rounded-full p-2 backdrop-blur-sm">
            <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
