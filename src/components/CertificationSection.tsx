
import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const CertificationSection = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Meta",
      date: "2023",
      credentialId: "FSW2023001",
      skills: ["React", "Node.js", "Database Design"],
      link: "#"
    },
    {
      title: "Flutter Development",
      issuer: "Google",
      date: "2023",
      credentialId: "FLT2023002",
      skills: ["Flutter", "Dart", "Mobile Development"],
      link: "#"
    },
    {
      title: "Agricultural Technology Innovation",
      issuer: "ICAR",
      date: "2022",
      credentialId: "ATI2022003",
      skills: ["AgTech", "IoT", "Data Analysis"],
      link: "#"
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "AWS",
      date: "2023",
      credentialId: "CCF2023004",
      skills: ["AWS", "Cloud Architecture", "DevOps"],
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional certifications that validate my expertise across various technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.credentialId}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold mb-1">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {cert.date}
                      </div>
                    </div>
                    <a
                      href={cert.link}
                      className="p-2 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg hover:from-purple-200 hover:to-indigo-200 dark:hover:from-purple-800/50 dark:hover:to-indigo-800/50 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </a>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Credential ID: {cert.credentialId}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-800 dark:text-purple-300 rounded-full font-medium hover:scale-105 transition-transform duration-200"
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
    </section>
  );
};

export default CertificationSection;
