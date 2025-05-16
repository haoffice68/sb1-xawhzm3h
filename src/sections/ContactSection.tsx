import React from 'react';
import { MapPin, Mail, Instagram } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import BusinessHours from '../components/BusinessHours';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white/80 to-pink-50/30 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmY2U3ZjMiLz48L3N2Zz4=')] opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Questions about custom orders? Want to discuss your cake ideas? We're here to help bring your vision to life.
          </p>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>

        <div className="mb-12">
          <BusinessHours />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-pink-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-4 p-2 bg-pink-100 rounded-full">
                    <MapPin size={20} className="text-pink-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-700">Location</h4>
                    <p className="text-gray-600">Brampton, Ontario, Canada</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 p-2 bg-pink-100 rounded-full">
                    <Mail size={20} className="text-pink-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-700">Email</h4>
                    <a href="mailto:chef@thecakestudios.com" className="text-pink-600 hover:underline">
                      chef@thecakestudios.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 p-2 bg-pink-100 rounded-full">
                    <Instagram size={20} className="text-pink-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-700">Instagram</h4>
                    <a 
                      href="https://instagram.com/_thecakestudios__" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-pink-600 hover:underline"
                    >
                      @_thecakestudios__
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.8086400365!2d-79.8848049!3d43.731546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15eaa5d05abf%3A0x352d31667cc38677!2sBrampton%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1695830793570!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            title="Map of The Cake Studios location"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;