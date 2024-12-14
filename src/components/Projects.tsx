import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      tech: ["Next.js", "GraphQL", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "D3.js", "Express", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            A selection of my recent work
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="h-48 w-full object-cover"
                src={project.image}
                alt={project.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-500">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-indigo-600 bg-indigo-50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-indigo-600 hover:text-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;