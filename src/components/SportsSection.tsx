import React from 'react';
import { Trophy, Target, Zap, Clock } from 'lucide-react';

const SportsSection: React.FC = () => {
  const sports = [
    {
      name: 'Course à pied',
      level: '10km en 41min',
      duration: '10 ans',
      frequency: '2x/mois',
      icon: '🏃‍♂️',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Equitation',
      level: 'Galop 4',
      duration: '6 ans',
      frequency: '1x/semaine',
      icon: '🐎',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      name: 'Randonnée',
      level: 'Trails en montagne',
      duration: '15 ans',
      frequency: 'Vacances',
      icon: '🥾',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <Trophy className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Sport et bien-être</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Le sport fait partie intégrante de mon équilibre de vie, apportant discipline, santé et dépassement de soi.
        </p>
      </div>

      {/* Sports Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {sports.map((sport, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${sport.color}`}></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{sport.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{sport.name}</h3>
                </div>
                <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {sport.level}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{sport.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{sport.frequency}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Achievements */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Objectifs sportifs</h3>
            
            <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                <span className="text-gray-700">Ascention du Mt Blanc</span>
                <span className="text-sm font-medium text-orange-600">A venir</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                <span className="text-gray-700">Triathlon S</span>
                <span className="text-sm font-medium text-blue-600">En cours</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                <span className="text-gray-700">Participer au 10km de Rouen</span>
                <span className="text-sm font-medium text-green-600">Réalisé</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                <span className="text-gray-700">Traversée de lac 2km</span>
                <span className="text-sm font-medium text-green-600">Réalisé</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h3 className="text-lg font-semibold text-gray-900">Performances récentes</h3>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Meilleur 10km</span>
                <span className="font-medium text-gray-900">40:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Plus longue sortie en velo</span>
                <span className="font-medium text-gray-900">180km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sommet le plus haut</span>
                <span className="font-medium text-gray-900">4040 m</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Monts escaladé</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                <span className="text-gray-700">Mont Cameroun - Sommet de l'Afrique de l'Ouest</span>
                <span className="text-sm font-medium text-600">4040 m</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                <span className="text-gray-700">Mont Buêt - Sommet du massif du Giffre</span>
                <span className="text-sm font-medium text-600">3096 m </span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                <span className="text-gray-700">Mont Manengouba</span>
                <span className="text-sm font-medium text-600">2411 m</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                <span className="text-gray-700"> Cret de la neige - Sommet du Jura</span>
                <span className="text-sm font-medium text-600">1720 m</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SportsSection;