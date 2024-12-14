import React from 'react';
import { Server, Globe, Database, Cloud } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 text-indigo-600" />,
      technologies: ["Node.js", "Express", "NestJS", "Python", "Go"]
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      category: "DevOps",
      icon: <Cloud className="h-8 w-8 text-indigo-600" />,
      technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            A comprehensive toolkit for modern web development
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 ring-4 ring-white">
                  {skill.icon}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {skill.category}
                </h3>
                <ul className="mt-2 text-sm text-gray-500 space-y-2">
                  {skill.technologies.map((tech) => (
                    <li key={tech} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 mr-2" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;