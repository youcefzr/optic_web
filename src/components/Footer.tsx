import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.jpg" alt="IN OPTIC Logo" className="h-14 w-auto rounded-lg shadow-md" />
            </div>
            <p className="mt-2 text-blue-100">
              Votre spécialiste en lunettes optiques à Marseille, offrant des services
              professionnels et des produits de qualité supérieure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">
                  À Propos de Nous
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                <span>60 rue de la République, 13002 Marseille, France</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0" />
                <a href="tel:0422918765" className="hover:underline">
                  04.22.91.87.65
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0" />
                <a href="mailto:inoptic.republique@gmail.com" className="hover:underline">
                  inoptic.republique@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Horaires d'Ouverture</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Lundi - Jeudi, Samedi: 10h - 19h</p>
                  <p>Vendredi: 10h - 12h, 14h - 19h</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </li>
              <li className="mt-4 flex space-x-3">
                <a 
                  href="https://www.instagram.com/inoptic_republique" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.snapchat.com/add/in_optic?share_id=vebj0ILMg-o&locale=fr-FR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  <svg 
                    className="h-6 w-6" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.206 0H12C9.865 0 9.007 0.8 8.549 1.282C8.25 1.602 8 2.021 8 2.8L8.001 2.872C8.001 2.948 7.996 3.025 7.991 3.102L7.961 4.228C7.946 4.547 7.892 5.142 7.36 5.142C6.845 5.142 3.84 3.57 3.64 3.47C3.605 3.452 3.525 3.409 3.466 3.409C3.336 3.409 3.135 3.524 3.135 3.762C3.135 3.942 3.3 4.172 3.3 4.172C3.715 4.927 5.217 6.441 7.045 6.897C7.208 6.934 7.35 7.046 7.393 7.205L7.399 7.227C7.434 7.342 7.35 7.465 7.233 7.48C6.508 7.557 5.5 7.08 5.25 6.95C5.022 6.836 4.95 7.089 4.942 7.152L4.939 7.173C4.927 7.325 5.072 7.436 5.072 7.436C5.54 7.753 6.033 7.99 6.537 8.143C6.976 8.275 7.415 8.342 7.854 8.342C7.98 8.342 8.107 8.336 8.232 8.324L8.312 8.316C8.312 8.316 8.312 8.316 8.312 8.316C8.364 8.311 8.415 8.307 8.466 8.306L8.54 8.307L8.522 8.355C8.486 8.455 8.407 8.631 8.201 8.631C8.162 8.631 8.122 8.624 8.08 8.61C7.927 8.563 7.757 8.52 7.567 8.52C7.193 8.52 6.887 8.62 6.653 8.819C6.188 9.197 6.13 9.704 6.13 10.004C6.13 10.225 6.201 10.421 6.333 10.579C6.529 10.816 6.827 10.909 7.127 10.909H7.155C7.562 10.909 7.84 10.693 7.963 10.599C8.007 10.677 8.02 10.762 8.02 10.848C8.02 11.144 7.88 11.43 7.595 11.684C7.309 11.938 6.915 12.107 6.42 12.183C6.296 12.201 6.211 12.313 6.214 12.439C6.214 12.444 6.215 12.449 6.215 12.454C6.229 12.663 6.34 12.788 6.44 12.86C6.55 12.94 6.669 12.98 6.762 13.01C6.969 13.078 7.264 13.145 7.641 13.21C7.694 13.22 7.725 13.27 7.725 13.325V13.336C7.725 13.488 7.66 13.57 7.503 13.711C7.453 13.755 7.399 13.803 7.343 13.857C7.2 13.994 7 14.14 7 14.382C7 14.492 7.05 14.592 7.13 14.672C7.349 14.891 7.843 15 8.61 15H8.657C9.607 15 10.125 14.821 10.489 14.529C10.908 14.193 11.11 13.769 11.096 13.255C11.091 13.072 11.06 12.916 10.99 12.796L11.5 12.796C12.3 12.796 12.947 12.611 13.442 12.243C13.941 11.872 14.235 11.337 14.319 10.7C14.325 10.657 14.328 10.612 14.328 10.569C14.328 10.233 14.225 9.983 14.141 9.806L14.15 9.804C14.47 9.744 14.807 9.611 15.15 9.394C15.62 9.091 15.95 8.729 16.19 8.39C16.313 8.217 16.508 7.926 16.508 7.676C16.508 7.557 16.471 7.46 16.385 7.371C16.309 7.293 16.187 7.25 16.07 7.25C15.945 7.25 15.853 7.299 15.79 7.336C15.122 7.73 14.51 7.928 13.958 7.928C13.784 7.928 13.626 7.902 13.484 7.851L13.47 7.813C13.4 7.447 13.34 6.998 13.31 6.473L13.307 6.411C13.293 6.116 13.286 5.822 13.286 5.529V5.5C13.286 3.66 13.323 2.748 13.357 2.128L13.365 2.012C13.379 1.777 13.39 1.609 13.39 1.483C13.39 1.307 13.37 1.149 13.336 1.012C13.274 0.762 13.107 0.622 12.883 0.514C12.697 0.426 12.42 0.357 12.075 0.314C12.045 0.31 12.013 0.306 11.98 0.304L12.206 0Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            &copy; {currentYear} IN OPTIC. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;