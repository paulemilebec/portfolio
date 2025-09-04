import React from 'react';
import { MapPin, Calendar, GraduationCap, Car, Stethoscope } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 p-1">
            <img
              src="../../assets/image/Photoident.jpg"
              alt="Alex Martin"
              className="w-full h-full object-cover rounded-full bg-gray-200"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Paul-Emile BECQUART
        </h1>
        
        <div className="flex items-center justify-center space-x-2 text-lg text-gray-600 mb-6">
          <Calendar className="w-5 h-5" />
          <span>20 ans</span>
          <span className="text-gray-400">•</span>
          <MapPin className="w-5 h-5" />
          <span>Nantes, France</span>
        </div>
        
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Étudiant en 2ème année d'IUT informatique. 
          Je cherche une <strong>ALTERNANCE</strong> pour cette année.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            <GraduationCap className="w-4 h-4 mr-2" />
            Bac mention très bien
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
            <Car className="w-4 h-4 mr-2" />
            Permi B
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <Stethoscope className="w-4 h-4 mr-2" />
            PSC1 (Formation premier secours)
          </span>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">À propos de moi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>

            <p className="text-gray-700 leading-relaxed">
              La <strong>musique</strong> m'a appris la rigueur et la persévérance, les <strong>voyages </strong> 
              ont développé ma curiosité culturelle, le <strong>scoutisme</strong> mon sens du leadership, 
              et le <strong>sport</strong> ma discipline personnelle.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Formation académique solide en informatique</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-gray-700">Expérience dans plusieurs langages de programmation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-gray-700">Capacité d'adaptation et d'apprentissage</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <span className="text-gray-700">Esprit d'équipe et de collaboration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl font-bold text-blue-600 mb-2">16,08</div>
          <div className="text-sm text-gray-600">Mention au bac</div>
        </div>
        
        <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl font-bold text-green-600 mb-2">10+</div>
          <div className="text-sm text-gray-600">Années résidant a l'étranger</div>
        </div>
        
        <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl font-bold text-purple-600 mb-2">6</div>
          <div className="text-sm text-gray-600">Années de scoutisme</div>
        </div>
        
        <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl font-bold text-orange-600 mb-2">10+</div>
          <div className="text-sm text-gray-600">Années de piano</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;