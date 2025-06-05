
import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', icon: '🌐', color: 'bg-orange-500' },
    { name: 'CSS', icon: '🎨', color: 'bg-blue-500' },
    { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-500' },
    { name: 'React', icon: '⚛️', color: 'bg-cyan-500' },
    { name: 'Next.js', icon: '▲', color: 'bg-black dark:bg-white' },
    { name: 'Flutter', icon: '🦋', color: 'bg-blue-400' },
    { name: 'Dart', icon: '🎯', color: 'bg-blue-600' },
    { name: 'Firebase', icon: '🔥', color: 'bg-orange-400' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-500' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-600' },
    { name: 'GitHub', icon: '🐙', color: 'bg-gray-800' },
    { name: 'TypeScript', icon: '📘', color: 'bg-blue-600' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Always learning and adapting to new technologies. Currently exploring 
              AI/ML integration, cloud architecture, and advanced mobile development patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
