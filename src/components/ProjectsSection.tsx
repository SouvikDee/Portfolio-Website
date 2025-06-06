import React from 'react';
import { Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "UBKV-CART",
      description: "A React-Native based mobile application for farmers to connect with consumers directly and sell their productsa at the price they wanted.",
      techStack: ["React-Native", "JavaScript", "SQLite", "Figma",],
      liveUrl: "https://github.com/SouvikDee/UBKV-CART",
      githubUrl: "https://github.com/SouvikDee/UBKV-CART",
      image: "/images/projects/logo.png"
    },
    {
      title: "Avijo: The Health Care App",
      description: "A comprehensive React-Native based health care app with real-time analytics, inventory management, and sales tracking.",
      techStack: ["React-Native", "JavaScript", "Firebase", "Figma","socket.io","Node.js"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.randomcompany.mynewapp",
      githubUrl: "https://github.com/SouvikDee/Avijo-User",
      image: "/images/projects/avijo.jpg"
    },
    {
      title: "SceneHack",
      description: "AI powered app for designing interior and exterior of a house",
      techStack: ["React-Native", "JavaScript", "Figma","Node.js"],
      liveUrl: "",
      githubUrl: "",
      image: ""
    },
    // {
    //   title: "Task Management App",
    //   description: "Cross-platform mobile app built with Flutter for team collaboration, project tracking, and productivity enhancement with real-time synchronization.",
    //   techStack: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=300&fit=crop"
    // },
    // {
    //   title: "Weather Analytics Platform",
    //   description: "Web application providing detailed weather analytics and forecasting for agricultural planning with interactive data visualizations and historical trends.",
    //   techStack: ["React", "D3.js", "Node.js", "PostgreSQL", "Weather APIs"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop"
    // },
    // {
    //   title: "Portfolio Website Builder",
    //   description: "A drag-and-drop website builder specifically designed for developers and creatives to showcase their work with customizable themes and responsive design.",
    //   techStack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop"
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            A collection of projects that showcase my expertise in mobile and web development, 
            from agricultural solutions to productivity tools.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
