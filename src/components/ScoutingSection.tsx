import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const ScoutingSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Engagement scout</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        D'abord 3 ans en tant que scout puis 3 ans en tant que chef, le scoutisme est un engagement exigeant qui amène parfois a voyager sur d'autres continents...        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src="../../assets/image/scout2.jpg"
              alt="Activité scoute"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Un projet marquant</h3>
              <p className="text-gray-700 leading-relaxed">
                Le projet le plus spectaculaire est certainement l'élaboration de la roue a eau présenté sur la photo. 
                La technique utilisée est le froissartage : aucun clou, vis ou colle n'a été utilisé, uniquement des techniques d'assemblages en bois. <br />
                3m de diamètre en 3 we avec 7 scouts
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistiques</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">6</div>
                <div className="text-sm text-gray-600">Années d'engagement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Camps organisés</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Valeurs développées</h3>
            
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <Target className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Leadership</h4>
                  <p className="text-gray-600 text-sm">Encadrement et motivation d'équipes dans des projets collectifs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Travail d'équipe</h4>
                  <p className="text-gray-600 text-sm">Collaboration efficace et coordination de groupes hétérogènes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Award className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Responsabilité</h4>
                  <p className="text-gray-600 text-sm">Prise de décisions importantes et gestion des responsabilités</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Bienveillance</h4>
                  <p className="text-gray-600 text-sm">Accompagnement et soutien des plus jeunes dans leur développement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Projets marquants</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-gray-900">Camp d'été au États-Unis</h4>
                <p className="text-gray-600 text-sm">Participation en tant que chef a un camp en Pennsylvanie.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium text-gray-900">Construction d'une roue a eau de 3m</h4>
                <p className="text-gray-600 text-sm"> La technique utilisée est le froissartage : aucun clou, vis ou colle n'a été utilisé, uniquement des techniques d'assemblages en bois.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-medium text-gray-900">Raid</h4>
                <p className="text-gray-600 text-sm">Raid de 70km en 2 jours avec un sac de 10kg, un défis qui m'a laissé tenté en classe de 1ère.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-medium text-gray-900">Formation CEP (Camp École Préparatoire)</h4>
                <p className="text-gray-600 text-sm">Pour qu'un camp scout ait lieu, les chefs doivent avoir des formations spécifique d'une semaine. Formation que j'ai validé.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoutingSection;