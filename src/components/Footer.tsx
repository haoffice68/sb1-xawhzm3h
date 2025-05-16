import React from 'react';
import { Instagram, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">The Cake Studios</h3>
            <p className="text-gray-400 mb-4">
              Crafting delicious memories with artisanal cakes and desserts for every celebration.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/_thecakestudios__" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:chef@thecakestudios.com" 
                className="text-white hover:text-pink-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Our Specialties</h3>
            <ul className="space-y-2">
              {[
                'Wedding Cakes', 
                'Birthday Cakes', 
                'Custom Celebrations', 
                'Dessert Tables',
                'Corporate Events'
              ].map((item) => (
                <li key={item} className="text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-gray-400 flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:chef@thecakestudios.com" 
                  className="hover:text-white transition-colors duration-300"
                >
                  chef@thecakestudios.com
                </a>
              </p>
              <p className="text-gray-400 flex items-start">
                <Instagram size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a 
                  href="https://instagram.com/_thecakestudios__" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  @_thecakestudios__
                </a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} The Cake Studios. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2 flex items-center justify-center">
            Made with <Heart size={12} className="text-pink-500 mx-1" /> in Brampton, Canada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;