import React from 'react';
import { Menu, X, Code2, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DevPortfolio</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-gray-700 hover:text-indigo-600" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-gray-700 hover:text-indigo-600" />
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
            <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Skills</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;