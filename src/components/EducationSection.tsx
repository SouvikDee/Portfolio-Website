
import React from 'react';
import { GraduationCap, Award, Star, Trophy } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Agricultural Engineering",
      institution: "Indian Institute of Technology (IIT)",
      location: "Delhi, India",
      duration: "2017 - 2021",
      grade: "CGPA: 8.7/10",
      achievements: [
        "GATE AIR 79 - Agricultural Engineering",
        "Dean's List for 3 consecutive semesters",
        "Winner of Inter-IIT Tech Meet 2020",
        "Published 2 research papers in AgriTech"
      ],
      coursework: ["Agricultural Machinery", "Precision Agriculture", "IoT in Agriculture", "Data Analytics", "Software Engineering"]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Delhi Public School",
      location: "New Delhi, India",
      duration: "2015 - 2017",
      grade: "95.2%",
      achievements: [
        "School Topper in Mathematics and Physics",
        "National Science Olympiad Gold Medal",
        "Head of Technology Club",
        "Best Student Award 2017"
      ],
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/20 dark:to-emerald-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Education
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Academic excellence with a strong foundation in engineering and technology
            </p>
          </div>

          {/* GATE Achievement Highlight */}
          <div className="mb-12 text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-1 rounded-2xl shadow-2xl">
              <div className="bg-white dark:bg-gray-900 rounded-xl px-8 py-6">
                <div className="flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    GATE Achievement
                  </h3>
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  All India Rank 79
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Agricultural Engineering • Top 0.1% of candidates
                </p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.institution + edu.duration}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="text-green-600 dark:text-green-400 font-semibold text-lg mb-2">
                      {edu.institution}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-500 dark:text-gray-400 mb-4">
                      <span>{edu.location}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{edu.duration}</span>
                    </div>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-300 rounded-lg font-semibold">
                      {edu.grade}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-green-500" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-300 rounded-full font-medium hover:scale-105 transition-transform duration-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
