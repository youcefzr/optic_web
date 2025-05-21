import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import MapComponent from '../components/MapComponent';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Contactez-Nous</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions. Contactez-nous par téléphone, 
            email ou venez nous rendre visite en magasin.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Informations de Contact</h2>
            
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Téléphone</h3>
                    <a href="tel:+33422918765" className="text-blue-600 hover:underline">
                      04.22.91.87.65
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a href="mailto:inoptic.republique@gmail.com" className="text-blue-600 hover:underline">
                      inoptic.republique@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      60 rue de la République<br />
                      13002 Marseille, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Horaires d'Ouverture</h3>
                    <p className="text-gray-600">
                      Lundi - Jeudi, Samedi: 10h - 19h<br />
                      Vendredi: 10h - 12h, 14h - 19h<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="bg-white p-3 rounded-xl shadow-md mb-8 h-[400px] overflow-hidden">
              <MapComponent />
            </div>
            
            {/* Call to Action */}
            <div className="bg-blue-700 text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Besoin d'un Rendez-vous Rapide?</h3>
              <p className="text-blue-100 mb-4">
                Appelez-nous directement et nous vous réserverons un créneau dès que possible.
              </p>
              <a 
                href="tel:+33422918765" 
                className="inline-block px-6 py-3 bg-white text-blue-700 font-medium rounded-lg transition-transform transform hover:scale-105"
              >
                Appeler Maintenant
              </a>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Notre équipe à votre service" 
              className="w-full h-[600px] object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Notre Engagement</h3>
              <p className="text-gray-700">
                Notre équipe de professionnels est dédiée à vous offrir un service personnalisé 
                et des solutions adaptées à vos besoins visuels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;