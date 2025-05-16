import React, { useState } from 'react';
import { galleryData, categories, GalleryItem } from '../utils/galleryData';

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-pink-50/30 to-white/80 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmY2U3ZjMiLz48L3N2Zz4=')] opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-800 mb-4">
            Our Cake Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of handcrafted cakes and desserts, each created with attention to detail and premium ingredients.
          </p>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-pink-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg group bg-white/80 backdrop-blur-sm"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div 
                className={`relative h-72 transition-transform duration-500 ${
                  hoveredItem === item.id ? 'scale-110' : 'scale-100'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-70' : 'opacity-0'
                }`}></div>
              </div>
              
              <div 
                className={`absolute inset-0 flex flex-col justify-end p-6 text-white transform transition-all duration-300 ${
                  hoveredItem === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;