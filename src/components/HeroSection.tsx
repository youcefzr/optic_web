import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: 'url("/hero-background.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      {/* Background pattern */}
      
      <div className="container relative mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white max-w-lg">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-blue-600/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4"
            >
              Votre Opticien à Marseille
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Votre Vision, <br />
              <span className="text-white bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Notre Expertise</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/90 text-lg md:text-xl mb-12 leading-relaxed"
            >
              Découvrez notre gamme de lunettes de qualité et de services optiques professionnels à Marseille. 
              Nous sommes dédiés à améliorer votre vision avec style et confort.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link 
                to="/contact" 
                className="group px-8 py-4 bg-white text-blue-800 font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50 text-center flex items-center justify-center space-x-2"
                onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=60+rue+de+la+République+13002+Marseille+France', '_blank')}
              >
                <span>Voir sur la carte</span>
                <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full transition-all duration-300 hover:bg-white/20 hover:border-opacity-80 text-center backdrop-blur-sm"
              >
                Contactez-Nous
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Floating curved shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-24 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white" />
      </div>
    </section>
  );
};

export default HeroSection;