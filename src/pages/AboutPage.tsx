import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Shield, Award, Heart, Users, Target, Glasses } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const AboutPage: React.FC = () => {
  const [storyRef, storyInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [reasonsRef, reasonsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">À Propos de Nous</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez qui nous sommes, notre mission et notre engagement à offrir des lunettes de vue de qualité 
            et un service attentionné à notre clientèle.
          </p>
        </div>
        
        {/* About Story Section */}
        <div 
          ref={storyRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 ${
            storyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Notre Histoire</h2>
            <p className="text-gray-600 mb-4">
              
            Fondée en 2025 à Marseille, IN OPTIC est née d’une idée simple mais forte : proposer des lunettes de vue qui allient élégance, confort et adaptation parfaite à votre visage et à votre style.

Nous avons créé un espace chaleureux, où chaque monture est choisie avec soin pour répondre à vos besoins visuels tout en reflétant votre personnalité.



Chez IN OPTIC, nous mettons un point d’honneur à accompagner chaque client avec écoute, bienveillance et expertise.
La qualité de votre vision et votre confort sont au centre de toutes nos priorités.


            </p>
            <p className="text-gray-600 mb-4">
              Notre fondateur, opticien diplômé, a voulu créer un espace chaleureux et spécialisé où les besoins 
              spécifiques de la clientels seraient pleinement pris en compte.
            </p>
            <p className="text-gray-600">
              Depuis l'ouverture de notre première boutique au cœur de Marseille, nous mettons un point 
              d'honneur à accompagner chaque client dans le choix de ses lunettes avec écoute et 
              professionnalisme. Chez IN OPTIC, la satisfaction visuelle et le confort de nos clients 
              sont au centre de toutes nos priorités.
            </p>
          </div>
          <div className="relative">
            <img
              src="/about-image.jpg"
              alt="Notre équipe d'opticiens" 
              className="rounded-xl shadow-lg w-full transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-all duration-300">
              <Users className="w-8 h-8" />
            </div>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div 
          ref={missionRef}
          className={`bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-10 text-white mb-16 transition-all duration-1000 ${
            missionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Notre Mission & Nos Valeurs</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Nous sommes guidés par un ensemble de principes fondamentaux qui définissent 
              notre approche et notre engagement envers nos clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Notre Mission
              </h3>
              <p className="text-blue-100">
                Améliorer la qualité de vie de nos clients, en leur proposant 
                des lunettes de vue esthétiques, confortables et parfaitement adaptées à leurs besoins.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                Nos Valeurs
              </h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Proximité et écoute : Chaque client est unique</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Qualité & Confort : Nous sélectionnons des produits fiables et haut de gamme</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Service personnalisé : Un accompagnement de A à Z</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Accessibilité : Des tarifs adaptés à tous les budgets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div 
          ref={teamRef}
          className={`mb-16 transition-all duration-1000 ${
            teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Notre Équipe d'Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              
      
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember 
              title="Opticien Gérant" 
              bio="Expert en lunettes pour seniors et verres progressifs."
            />
            
            <TeamMember 
              title="Conseillère en Lunetterie" 
              bio="Spécialisée dans l'accompagnement des clients pour le choix des montures adaptées à la morphologie du visage."
            />
            
            <TeamMember 
              title="Technicien Optique" 
              bio="Responsable de l'ajustement et du montage des verres."
            />
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div 
          ref={reasonsRef}
          className={`mb-16 transition-all duration-1000 ${
            reasonsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Pourquoi Nous Choisir</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez ce qui distingue IN OPTIC des autres services optiques et pourquoi 
              nos clients nous font confiance pour leurs besoins visuels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
              
            
            <ReasonCard 
              icon={
                <svg className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Conseils personnalisés pour le choix des montures" 
              description="Un accompagnement expert pour trouver la monture parfaite."
            />
            
            <ReasonCard 
              icon={
                <svg className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Large sélection de verres progressifs et anti-fatigue" 
              description="Des solutions adaptées à tous les besoins visuels."
            />
            
            <ReasonCard 
              icon={
                <Target className="h-10 w-10 text-blue-600" />
              }
              title="Service rapide et suivi après-vente attentif" 
              description="Un accompagnement complet pour votre satisfaction."
            />
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-blue-50 rounded-xl p-10 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Prêt à Découvrir la Différence IN OPTIC ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Passez nous voir à Marseille pour découvrir nos collections et bénéficier des conseils d'experts. 
            Offrez à votre vision le confort qu'elle mérite !
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg transition-colors hover:bg-blue-700"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TeamMemberProps {
  title: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ title, bio }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Glasses className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-blue-600 font-medium">{title}</p>
        </div>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50 flex flex-col items-center text-center group">
      <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutPage;