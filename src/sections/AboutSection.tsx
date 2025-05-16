import React from 'react';
import { MapPin, Star, Calendar, Award, ChefHat, Globe2, Gem } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white/80 to-pink-50/30 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmY2U3ZjMiLz48L3N2Zz4=')] opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="text-pink-600 text-sm font-medium tracking-wider uppercase mb-2 block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-800 mb-4">
            Meet Our Executive Chef
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-pink-200 rounded-lg"></div>
              <img
                src="https://images.pexels.com/photos/8477954/pexels-photo-8477954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Executive Chef at The Cake Studios"
                className="rounded-lg shadow-xl max-h-[600px] object-cover relative z-10"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-pink-200 rounded-lg"></div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-pink-700 text-sm font-medium mb-4">
              10+ Years of Excellence
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-pink-800 mb-6">
              Crafting Culinary Masterpieces
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              With over a decade of international experience, our Executive Chef brings the finest traditions of pastry artistry to Brampton. Having refined their craft in prestigious Five Star Hotels across India and abroad, they now create extraordinary custom designs that blend classical techniques with contemporary innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-pink-100">
                <ChefHat className="text-pink-600 mb-2" size={24} />
                <h4 className="font-semibold text-pink-700 mb-1">Culinary Training</h4>
                <p className="text-sm text-gray-600">Classical French pastry techniques and modern cake artistry</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-pink-100">
                <Globe2 className="text-pink-600 mb-2" size={24} />
                <h4 className="font-semibold text-pink-700 mb-1">Global Experience</h4>
                <p className="text-sm text-gray-600">Trained in prestigious hotels across multiple countries</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-pink-100">
                <Gem className="text-pink-600 mb-2" size={24} />
                <h4 className="font-semibold text-pink-700 mb-1">Specialty Skills</h4>
                <p className="text-sm text-gray-600">Sugar work, chocolate sculpting, and fondant artistry</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-pink-100">
                <Award className="text-pink-600 mb-2" size={24} />
                <h4 className="font-semibold text-pink-700 mb-1">Recognition</h4>
                <p className="text-sm text-gray-600">Award-winning designs and industry accolades</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-white/90 to-pink-50/50 backdrop-blur-sm p-6 rounded-lg border border-pink-100">
              <p className="text-gray-700 italic font-serif text-lg">
                "Every cake tells a story. Our passion is bringing your vision to life through the art of pastry."
              </p>
              <p className="text-sm text-pink-600 mt-2 font-medium">— Executive Chef, The Cake Studios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;