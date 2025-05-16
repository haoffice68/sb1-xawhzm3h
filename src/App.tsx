import React from 'react';
import Header from './components/Header';
import AboutSection from './sections/AboutSection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-neutral-50 to-pink-50/30 text-gray-800">
      <Header />
      <main>
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;