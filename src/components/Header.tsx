import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative w-full h-screen">
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Navigation isScrolled={isScrolled} />
        </div>
      </div>
      
      <div className="relative h-full w-full overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            filter: "brightness(0.85)"
          }}
        ></div>
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="animate-fade-in">
            <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-wide leading-tight">
              The Cake Studios
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-8 font-light">
              Where Every Slice Tells a Story of Artisanal Excellence
            </p>
            <a
              href="#gallery"
              className="bg-white text-pink-700 hover:bg-pink-50 transition-colors duration-300 font-medium py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Explore Our Creations
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;