
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Souvik De
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6 animate-fade-in delay-150">
            App & Web Developer, Agricultural Engineer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in delay-300">
            Building clean, scalable apps and web solutions that solve real-world problems
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
