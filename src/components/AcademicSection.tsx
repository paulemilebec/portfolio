import React from 'react';
import { GraduationCap, Code, Briefcase, Award, ExternalLink, Github } from 'lucide-react';

const AcademicSection: React.FC = () => {
  const projects = {
    iut: [
      {
        title: 'Création d\'une base de données et analyse de données - IUT',
        tech: 'SQL, oracleSQL',
        description: 'Extraction de toutes les informations concernants les bornes de recharges de voitures électriques, aménagement de la base de donnée. Et analyse des comportements avec des requêtes puis des graphiques.',
        status: 'Terminé',
        year: '2024'
      },
      {
        title: 'Système de recommandation',
        tech: 'Python, Machine Learning',
        description: 'Implémentation d\'algorithmes de recommandation basés sur le filtrage collaboratif.',
        status: 'Terminé',
        year: '2023'
      },
      {
        title: 'API RESTful e-commerce',
        tech: 'Java Spring Boot, MySQL',
        description: 'Développement d\'une API complète pour une plateforme de commerce électronique.',
        status: 'En cours',
        year: '2024'
      },
      {
        title: 'Application mobile IoT',
        tech: 'React Native, Arduino',
        description: 'Interface mobile pour contrôler des objets connectés et visualiser les données capteurs.',
        status: 'Planifié',
        year: '2024'
      }
    ]
  };

  const skills = {
    languages: ['JavaScript', 'Python', 'Kotlin (Java)', 'SQL', 'GO Lang', 'PHP'],
    frameworks: ['React', 'Node.js', 'Tailwind CSS', 'Vite', 'Vue.js'],
    databases: ['MongoDB', 'MySQL'],
    tools: ['Git', 'Docker/Podman', 'VSCode', 'Suite Intellij ???', 'Linux', 'Serveur web', 'Environnement microsoft']
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Parcours académique</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Formation solide en informatique avec une spécialisation en développement logiciel et intelligence artificielle.
        </p>
      </div>

            {/* Experience Section */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-8">Expérience professionnelle</h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-4 h-4 bg-green-600 rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-medium text-gray-900">Stage Ingénieur Processus et Outils</h4>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Avril - Juillet 2025</span>
              </div>
              <p className="text-gray-600 mb-2">Thales, Cergy (95) • 3 mois</p>
              <p className="text-sm text-gray-500">
                Développement d'un logiciel de type ETL (Extract Transform Load) en python. Traitement automatisé de tickets Jira via son API. 
                Utilisation de threads, et de shelves.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-medium text-gray-900">Stage d'observation à la MisLog</h4>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Avril 2018</span>
              </div>
              <p className="text-gray-600 mb-2">Cameroun, Douala • 1 semaine</p>
              <p className="text-sm text-gray-500">
                Découverte du monde militaire francais a l'étranger. Découverte de métier de technicien réseau.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-8">Formation</h3>
        
        <div className="space-y-6">

          
          <div className="flex items-start space-x-4">
            <div className="w-4 h-4 bg-green-600 rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-medium text-gray-900">IUT Informatique</h4>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">2023-2025</span>
              </div>
              <p className="text-gray-600 mb-2">Université de Nantes</p>
              <p className="text-sm text-gray-500">
                Programmation, Développement, Algorithmique, Bases de données, Réseaux, Mathématiques appliquées
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-4 h-4 bg-purple-600 rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-medium text-gray-900">Baccalauréat Technologique</h4>
                <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">2021-2023</span>
              </div>
              <p className="text-gray-600 mb-2">Lycée la Chataigneraie, Mesnil-Esnard</p>
              <p className="text-sm text-gray-500">
                Mention Très Bien • Option SIN
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-4">
            <div className="w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-medium text-gray-900">Scolarité en Afrique</h4>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2008-2019</span>
              </div>
              <p className="text-gray-600 mb-2">Benin, Niger, Togo, Cameroun</p>
              <p className="text-sm text-gray-500">
                En lycée francais, et en école anglophpone
              </p>
            </div>
          </div>

      </div>

      {/* Skills Section */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-8">Compétences techniques</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-blue-600" />
              Langages
            </h4>
            <div className="space-y-2">
              {skills.languages.map((skill) => (
                <span key={skill} className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-green-600" />
              Frameworks
            </h4>
            <div className="space-y-2">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-purple-600" />
              Bases de données
            </h4>
            <div className="space-y-2">
              {skills.databases.map((skill) => (
                <span key={skill} className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-orange-600" />
              Outils
            </h4>
            <div className="space-y-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-8">Projets d'IUT</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.iut.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-medium text-gray-900">{project.title}</h4>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    project.status === 'Terminé' ? 'bg-green-100 text-green-700' :
                    project.status === 'En cours' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-gray-500">{project.year}</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              
              {/* Techno + lien */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">{project.tech}</span>
                <div className="flex items-center space-x-2">
                  <Github className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                  <ExternalLink className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AcademicSection;