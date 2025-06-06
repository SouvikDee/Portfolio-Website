
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Souvik De</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            App & Web Developer passionate about creating innovative solutions 
            that bridge technology and real-world problems.
          </p>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> using React, TypeScript & Tailwind CSS
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 Souvik De. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
