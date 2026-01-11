import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, Star, TrendingUp, Globe, Zap, Award, Heart, Smile, PlaneIcon, DogIcon } from 'lucide-react';

const DreamCard = ({ icon: Icon, title, description, status, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    className="glassmorphism rounded-lg p-6 hover:border-karla-accent transition-all duration-300 group relative overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>
    
    <div className="relative">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center gap-2">
          {status === 'in-progress' && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
              <span className="text-xs text-yellow-400">En Progreso</span>
            </div>
          )}
          {status === 'planned' && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span className="text-xs text-blue-400">Planeado</span>
            </div>
          )}
          {status === 'dream' && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <span className="text-xs text-purple-400">Sueño</span>
            </div>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-karla-accent transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </motion.div>
);

const DreamsWindow = () => {
  const dreams = [
    {
      icon: Rocket,
      title: 'Startup de Innovación Social',
      description: 'Crear una empresa tech que resuelva un problemas reales en Latinoamérica.',
      status: 'dream',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Globe,
      title: 'Hablar en Conferencias Internacionales',
      description: 'Compartir conocimiento en eventos tech globales. Superar el miedo, y vencer la timidez.',
      status: 'dream',
      color: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Award,
      title: 'Liderar y gestionar proyectos de IA',
      description: 'Aprender y convertirme en líder técnica de proyectos de Machine Learning y AI.',
      status: 'in-progress',
      color: 'from-green-500 to-emerald-500',
      delay: 0.3
    },
    {
      icon: Star,
      title: 'Mentoría a Mujeres en Tech',
      description: 'Crear un programa de mentoría para impulsar a más mujeres en tecnología e ingeniería.',
      status: 'planned',
      color: 'from-pink-500 to-rose-500',
      delay: 0.4
    },
    {
      icon: Zap,
      title: 'Open Source Contributor',
      description: 'Contribuir activamente a proyectos open source que generen impacto global.',
      status: 'planned',
      color: 'from-yellow-500 to-orange-500',
      delay: 0.5
    },
    {
      icon: Heart,
      title: 'Publicacion de un Libro',
      description: 'Lograr publicar alguno de los libros que escribí.',
      status: 'in-progress',
      color: 'from-red-500 to-pink-600',
      delay: 0.6
    },
    {
      icon: Smile,
      title: 'Publicacion de un Libro',
      description: 'Lograr publicar alguno de los libros que escribí.',
      status: 'dream',
      color: 'from-gray-500 to-pink-600',
      delay: 0.6
    },
    {
      icon: PlaneIcon,
      title: 'Viajar por el mundo, conocer Europa y Asia',
      description: 'Explorar diferentes culturas y lugares alrededor del planeta.',
      status: 'dream',
      color: 'from-green-500 to-purple-600',
      delay: 0.6
    },
    {
      icon: DogIcon,
      title: 'Fundar una ONG para protección de animales',
      description: 'Crear una ONG para la protección y bienestar de los animales.',
      status: 'dream',
      color: 'from-blue-500 to-red-600',
      delay: 0.6
    }
  ];

  const milestones = [
    { year: '2028', goal: 'Graduación y primer trabajo tech' },
    { year: '2028', goal: 'Certificación en ML/AI avanzado' },
    { year: '2030', goal: 'Primera conferencia internacional' },
    { year: '2032', goal: 'Lanzar primera startup al mercado' }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-2">
          Dreams.manifest
        </h2>
        <p className="text-gray-400">
          Metas, sueños y el roadmap hacia el futuro que me gustaría construir
        </p>
      </div>

      {/* Timeline */}
      <div className="mb-8 glassmorphism rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-karla-accent" />
          Roadmap 2028-2032
        </h3>
        <div className="space-y-3">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-karla-accent to-karla-purple text-white font-mono text-sm font-bold">
                {milestone.year}
              </div>
              <div className="flex-1 text-gray-300">{milestone.goal}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dreams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dreams.map((dream, idx) => (
          <DreamCard key={idx} {...dream} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-6 glassmorphism rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-l-4 border-purple-500"
      >
        <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
          <Target className="w-5 h-5 text-purple-400" />
          Es bueno recordar
        </h4>
        <p className="text-gray-300 mb-2">
          "Los sueños sin acción son solo deseos. Cada día es una oportunidad para convertir 
          lo imposible en inevitable."
        </p>
        <p className="text-gray-400 text-sm italic">
          El futuro no se predice, se construye. 
        </p>
      </motion.div>
    </div>
  );
};

export default DreamsWindow;
