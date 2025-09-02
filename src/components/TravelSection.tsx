import React from 'react';
import { MapPin, Camera, Globe, Star } from 'lucide-react';

const TravelSection: React.FC = () => {
  const countries = [
    { name: 'Espagne', city: 'Barcelone', year: '2022', image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Italie', city: 'Rome', year: '2021', image: 'https://images.pexels.com/photos/2411628/pexels-photo-2411628.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Allemagne', city: 'Berlin', year: '2023', image: 'https://images.pexels.com/photos/109630/pexels-photo-109630.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Portugal', city: 'Porto', year: '2022', image: 'https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Suisse', city: 'Zurich', year: '2021', image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Belgique', city: 'Bruxelles', year: '2023', image: 'https://images.pexels.com/photos/2294125/pexels-photo-2294125.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Mes voyages</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrir de nouvelles cultures, rencontrer des personnes inspirantes et élargir mes horizons.
        </p>
      </div>

      {/* Interactive Map Section */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Pays explorés</h3>
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 text-center">
          <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <p className="text-2xl font-bold text-gray-900 mb-2">8 pays visités</p>
          <p className="text-gray-600">Carte interactive en développement</p>
        </div>
      </div>

      {/* Countries Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={country.image}
                alt={`${country.city}, ${country.name}`}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                {country.year}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{country.name}</h3>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{country.city}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Camera className="w-4 h-4 mr-1" />
                  <span>Photos disponibles</span>
                </div>
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Developed */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Compétences développées par les voyages</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Ouverture culturelle</h4>
                <p className="text-gray-600 text-sm">Découverte de nouvelles perspectives et modes de vie</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Adaptabilité</h4>
                <p className="text-gray-600 text-sm">Capacité à s'adapter rapidement à de nouveaux environnements</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Communication interculturelle</h4>
                <p className="text-gray-600 text-sm">Amélioration des compétences linguistiques et sociales</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-gray-900">Autonomie et confiance</h4>
                <p className="text-gray-600 text-sm">Développement de l'indépendance et de la débrouillardise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelSection;