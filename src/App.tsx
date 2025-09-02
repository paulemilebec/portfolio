import React, { useState } from 'react';
import { User, Music, MapPin, Users, Trophy, GraduationCap, Github, Linkedin, Mail, Download, Home } from 'lucide-react';
import HomePage from './components/HomePage';
import MusicSection from './components/MusicSection';
import TravelSection from './components/TravelSection';
import ScoutingSection from './components/ScoutingSection';
import SportsSection from './components/SportsSection';
import AcademicSection from './components/AcademicSection';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const navigation = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'music', label: 'Musique', icon: Music },
    { id: 'travel', label: 'Voyages', icon: MapPin },
    { id: 'scouting', label: 'Scoutisme', icon: Users },
    { id: 'sports', label: 'Sport', icon: Trophy },
    { id: 'academic', label: 'Parcours', icon: GraduationCap }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomePage />;
      case 'music': return <MusicSection />;
      case 'travel': return <TravelSection />;
      case 'scouting': return <ScoutingSection />;
      case 'sports': return <SportsSection />;
      case 'academic': return <AcademicSection />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Paul-Emile</h1>
                <p className="text-sm text-gray-600">Étudiant en Informatique</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/paul-emile-becquart-297192308/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/paulemilebec"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:paulemilebecquart@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">CV</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex overflow-x-auto px-4 py-2 space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;