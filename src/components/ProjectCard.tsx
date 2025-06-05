
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
  image
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-200 dark:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      
      <div className="relative overflow-hidden">
        <img
          src={image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop"}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Floating action buttons */}
        <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="relative p-6 z-20">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium hover:scale-105 transition-transform duration-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
