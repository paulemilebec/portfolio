import React from 'react';
import { Music, Play, Award, Clock } from 'lucide-react';

const MusicSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <Music className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Ma passion pour la musique</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Le piano accompagne ma vie depuis plus de 10 ans, m'apportant rigueur, créativité et persévérance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Image and Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src="../../assets/image/piano1.jpg"
              alt="Piano"
              className="w-full h-128 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mon instrument de prédilection</h3>
              <p className="text-gray-700">
                Le piano m'accompagne depuis l'enfance et reste ma passion principale. 
                J'apprécie particulièrement la musique sacrée ainsi que le jazz. 
                Je sais aussi bien improvisier sur une grille que lire une partition.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">10+</div>
              <div className="text-sm text-gray-600">Années d'expérience</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">Niveau</div>
              <div className="text-sm text-gray-600">Intermédiaire avancé</div>
            </div>
          </div>
        </div>

        {/* Right Column - Skills and Benefits */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">J'ai déja :</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Joué dans un JazzBand</h4>
                  <p className="text-gray-600 text-sm">En improvisant sur des grilles de Jazz</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Joué dans un groupe de rock</h4>
                  <p className="text-gray-600 text-sm">Des classiques comme Je t'emmene au vent, Allez reste, Trop beau, ...</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Animé des messes</h4>
                  <p className="text-gray-600 text-sm">A l'orgue et au piano !</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Accompagné d'autres musiciens</h4>
                  <p className="text-gray-600 text-sm">Comme sur la photo...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Répertoire favori</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Chopin - Nocturnes</span>
                <Play className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Debussy - Clair de Lune</span>
                <Play className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Bach - Inventions</span>
                <Play className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Ludovico Einaudi - Nuvole Bianche</span>
                <Play className="w-4 h-4 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSection;