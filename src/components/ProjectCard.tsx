
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
      <div className="relative overflow-hidden">
        <img
          src={image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop"}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
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
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
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
