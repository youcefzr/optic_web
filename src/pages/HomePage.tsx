import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Calendar, Shield, CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import { LampDemo } from '../components/ui/LampDemo';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HomePage: React.FC = () => {
  return (
    <div className="pt-16" itemScope itemType="http://schema.org/Optician">
      <meta itemProp="name" content="IN OPTIC" />
      <meta itemProp="image" content="/in-optic.jpg" />
      <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
        <meta itemProp="streetAddress" content="60 rue de la République" />
        <meta itemProp="addressLocality" content="Marseille" />
        <meta itemProp="postalCode" content="13002" />
        <meta itemProp="addressCountry" content="FR" />
      </div>
      <meta itemProp="telephone" content="+33422918765" />
      <meta itemProp="url" content="https://inoptic.fr" />
      <HeroSection />
      
      {/* Lamp Section */}
      <section className="py-16">
        <LampDemo />
      </section>
      
      {/* Quick Contact Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-6 rounded-xl shadow-sm flex items-center space-x-4"
            >
              <div className="bg-blue-600 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Notre Adresse</h3>
                <p className="text-gray-600">60 rue de la République, Marseille</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=60+rue+de+la+République+13002+Marseille+France"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 text-sm hover:underline mt-1 inline-block"
                >
                  Y aller
                </a>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-6 rounded-xl shadow-sm flex items-center space-x-4"
            >
              <div className="bg-blue-600 p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Téléphone</h3>
                <a href="tel:0422918765" className="text-gray-600 hover:text-blue-600 transition-colors">04.22.91.87.65</a>
                <a 
                  href="tel:0422918765" 
                  className="text-blue-600 text-sm hover:underline mt-1 inline-block"
                >
                  Appelez-nous maintenant
                </a>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-6 rounded-xl shadow-sm flex items-center space-x-4"
            >
              <div className="bg-blue-600 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Horaires</h3>
                <p className="text-gray-600">Lun-Sam: 10h-19h (Ven: 10h-12h, 14h-19h)</p>
                <Link 
                  to="/contact" 
                  className="text-blue-600 text-sm hover:underline mt-1 inline-block"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            >
              <img 
                src="/about-image.jpg" 
                alt="IN OPTIC - Un regard d'exception" 
                className="rounded-xl shadow-lg w-full object-cover h-[400px]"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Votre Opticien de Confiance à Marseille</h2>
              <p className="text-gray-600 mb-6">
                Chez IN OPTIC, nous sommes passionnés par la qualité de votre vision et votre style. 
                Notre équipe de professionnels qualifiés est dédiée à vous fournir les meilleures solutions 
                optiques adaptées à vos besoins spécifiques.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <p>Large sélection de montures de designer et de marques populaires</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <p>Personnel hautement qualifié pour des conseils personnalisés</p>
                </div>
              </div>
              <Link 
                to="/about" 
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-colors hover:bg-blue-700"
              >
                En Savoir Plus
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Trust Badges */}
      <section className="py-12 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Shield className="h-12 w-12 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Garantie de Qualité</h3>
              <p className="text-blue-100">
                Tous nos produits sont garantis pour leur qualité et leur durabilité.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Award className="h-12 w-12 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experts Certifiés</h3>
              <p className="text-blue-100">
                Notre équipe est composée de professionnels certifiés et expérimentés.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <svg className="h-12 w-12 text-blue-300 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 11L11 15L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Client</h3>
              <p className="text-blue-100">
                Votre satisfaction est notre priorité absolue, avec un service personnalisé.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Améliorer Votre Vision?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-blue-800 font-medium rounded-lg transition-colors hover:bg-blue-100"
            >
              Prendre Rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;