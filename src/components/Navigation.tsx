import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const textColor = isScrolled ? 'text-pink-700' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-pink-500' : 'hover:text-pink-200';

  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center">
        <a 
          href="#" 
          className={`text-xl md:text-2xl font-serif font-bold ${textColor} transition-colors duration-300`}
        >
          The Cake Studios
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`${textColor} ${hoverColor} transition-colors duration-300`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className={`${textColor} focus:outline-none transition-colors duration-300`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-pink-700 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col space-y-6 items-center">
            {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-pink-700 hover:text-pink-500 text-xl transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;