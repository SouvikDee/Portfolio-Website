import React, { useRef, useEffect, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'HTML', icon: '/src/assets/html.gif', type: 'img', color: 'bg-gradient-to-br from-orange-400 to-orange-600', proficiency: 90 },
    { name: 'CSS', icon: '/src/assets/coding.gif', type: 'img', color: 'bg-gradient-to-br from-blue-400 to-blue-600', proficiency: 85 },
    { name: 'JavaScript', icon: '/src/assets/java-script.png', type: 'img', color: 'bg-gradient-to-br from-yellow-400 to-yellow-600', proficiency: 75 },
    { name: 'React Native', icon: '⚛️', type: 'emoji', color: 'bg-gradient-to-br from-cyan-400 to-cyan-600', proficiency: 75 },
    // { name: 'Next.js', icon: '▲', color: 'bg-gradient-to-br from-gray-700 to-gray-900', proficiency: 85 },
    // { name: 'Flutter', icon: '🦋', color: 'bg-gradient-to-br from-blue-400 to-blue-500', proficiency: 87 },
    // { name: 'Dart', icon: '🎯', color: 'bg-gradient-to-br from-blue-500 to-blue-700', proficiency: 83 },
    // { name: 'Firebase', icon: '🔥', color: 'bg-gradient-to-br from-orange-400 to-red-500', proficiency: 80 },
    // { name: 'Node.js', icon: '🟢', color: 'bg-gradient-to-br from-green-400 to-green-600', proficiency: 85 },
    // { name: 'MongoDB', icon: '🍃', color: 'bg-gradient-to-br from-green-500 to-green-700', proficiency: 78 },
    { name: 'GitHub', icon: '/src/assets/git.jpeg', type: 'img', color: 'bg-gradient-to-br from-gray-600 to-gray-800', proficiency: 90 },
    { name: 'TypeScript', icon: '/src/assets/typescript.png', type: 'img', color: 'bg-gradient-to-br from-blue-500 to-blue-700', proficiency: 70 },
    { name: 'C', icon: '/src/assets/letter-c.gif', type: 'img', color: 'bg-gradient-to-br from-blue-500 to-blue-700', proficiency: 90 },
    { name: 'Python', icon: '/src/assets/python.png', type: 'img', color: 'bg-gradient-to-br from-blue-500 to-blue-700', proficiency: 60 },
    { name: 'SQLite', icon: '/src/assets/sqlite1.png', type: 'img', color: 'bg-gradient-to-br from-blue-500 to-blue-700', proficiency: 60 },
    { name: 'AutoCAD', icon: '/src/assets/dwg.png', type: 'img', color: 'bg-gradient-to-br from-blue-500 to-blue-700', proficiency: 40 },
    { name: 'PowerBI', icon: '/src/assets/Power-BI.png', type: 'img', color: 'bg-gradient-to-br from-blue-500 to-blue-700', proficiency: 70 },
    { name: 'Postman', icon: '/src/assets/postman.jpg', type: 'img', color: 'bg-gradient-to-br from-blue-500 to-blue-700', proficiency: 80 },
    { name: 'Android Studio', icon: '/src/assets/androidstudio.png', type: 'img', color: 'bg-gradient-to-br from-blue-500 to-blue-700', proficiency: 80 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200 dark:border-gray-700 overflow-hidden ${
                  isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative text-center">
                  <div className={`w-16 h-16 ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {skill.type === 'img' ? (
                      <img src={skill.icon} alt={skill.name + ' icon'} className="w-10 h-10 mx-auto" />
                    ) : (
                      <span className="text-2xl filter drop-shadow-sm">{skill.icon}</span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {skill.name}
                  </h3>
                  
                  {/* Proficiency bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.proficiency}%` : '0%',
                        transitionDelay: `${index * 100 + 500}ms`
                      }}
                    ></div>
                  </div>
                  
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {skill.proficiency}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Always learning and adapting to new technologies. Currently exploring 
                <span className="text-blue-600 dark:text-blue-400 font-semibold"> AI/ML integration</span>, 
                <span className="text-purple-600 dark:text-purple-400 font-semibold"> cloud architecture</span>, and 
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> advanced mobile development patterns</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
