
import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechInnovate Solutions",
      location: "Remote",
      duration: "2023 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices for code quality and performance.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led a team of 5 developers on multiple projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      skills: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"]
    },
    {
      title: "Mobile App Developer",
      company: "AgriTech Innovations",
      location: "Bangalore, India",
      duration: "2022 - 2023",
      type: "Full-time",
      description: "Developed mobile applications for agricultural management using Flutter and Firebase. Created solutions that help farmers optimize crop yield and manage resources efficiently.",
      achievements: [
        "Built 3 mobile apps with 10k+ downloads each",
        "Reduced development time by 30% with reusable components",
        "Integrated IoT sensors for real-time crop monitoring"
      ],
      skills: ["Flutter", "Firebase", "IoT", "Dart", "REST APIs"]
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      location: "Delhi, India",
      duration: "2021 - 2022",
      type: "Full-time",
      description: "Developed responsive web applications for various startups. Collaborated with designers and backend developers to create seamless user experiences.",
      achievements: [
        "Delivered 8+ projects on time and within budget",
        "Improved user engagement by 50% through UX improvements",
        "Established component library used across multiple projects"
      ],
      skills: ["React", "JavaScript", "CSS3", "Figma", "Git"]
    },
    {
      title: "Agricultural Technology Intern",
      company: "Rural Innovation Lab",
      location: "Mumbai, India",
      duration: "2020 - 2021",
      type: "Internship",
      description: "Worked on developing digital solutions for rural communities. Focused on creating technology that bridges the gap between traditional farming and modern agricultural practices.",
      achievements: [
        "Developed prototype for crop disease detection app",
        "Conducted field research with 50+ farmers",
        "Presented findings at National AgriTech Conference"
      ],
      skills: ["Python", "Machine Learning", "Data Analysis", "Research"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              4+ years of professional experience building innovative solutions
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company + exp.duration}
                  className="relative group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block group-hover:scale-125 transition-transform duration-300"></div>

                  <div className="md:ml-20 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-900/10 rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          <span>{exp.company}</span>
                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.duration}
                            </div>
                          </div>
                        </div>
                        <span className="inline-block px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium mb-4">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium hover:scale-105 transition-transform duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
