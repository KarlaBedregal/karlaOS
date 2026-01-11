import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award, Code, Heart } from 'lucide-react';

const TimelineEvent = ({ year, title, location, description, type, icon: Icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="relative pl-8 pb-8 border-l-2 border-gray-700 last:pb-0 hover:border-karla-accent transition-colors"
  >
    {/* Timeline Dot */}
    <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br ${color} border-4 border-karla-darker flex items-center justify-center`}>
      <Icon className="w-3 h-3 text-white" />
    </div>

    {/* Content */}
    <div className="glassmorphism rounded-lg p-4 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-2">
        <span className={`px-3 py-1 text-sm font-bold rounded-full bg-gradient-to-r ${color} text-white`}>
          {year}
        </span>
        <span className="px-2 py-1 text-xs rounded bg-karla-dark text-gray-300 border border-gray-700">
          {type}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      
      {location && (
        <div className="flex items-center gap-1 text-sm text-gray-400 mb-2">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      )}
      
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const TimelineWindow = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Primeros Pasos en Administración',
      location: 'Universidad Continental',
      description: 'La verdad era que no sabia que estudiar. Asi que me meti en esto para no perder tiempo. Pensé en dejarlo muchas veces pero creo que ya le entendi',
      type: 'Educación',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      year: '2023',
      title: 'Primer Hola mundo',
      location: 'Proyecto Personal',
      description: 'Segui un video de YouTube y escribí mi primer "Hola Mundo" en html. Fue increible',
      type: 'Desarrollo',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      delay: 0.15
    },
    {
      year: '2024',
      title: 'Entrando en Ingeniería de Sistemas',
      location: 'Universidad Nacional de San Agustín',
      description: 'Fue increible ingresar a la U. Siempre quise entrar a la UNSA por su prestigio. Ahora si, empieza lo bueno',
      type: 'Educación',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      delay: 0.15
    },
    {
      year: '2025',
      title: 'Voluntaria en IEEE WIE',
      location: 'IEEE Women in Engineering',
      description: 'Decidi probar con organizaciones para complementar el cv y fue una gran idea. Conocí mujeres increíbles que me inspiraron a crecer.',
      type: 'Liderazgo y Voluntariado',
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      delay: 0.25
    },
    {
      year: '2025',
      title: 'HuellitasAI - Proyecto web',
      location: 'Proyectos Colaborativos',
      description: 'Plataforma para la búsqueda de perritos perdidos usando IA. Fue genial',
      type: 'Desarrollo',
      icon: Code,
      color: 'from-purple-500 to-indigo-500',
      delay: 0.35
    },
    {
      year: '2025',
      title: 'LungTrack - NASA Space Apps',
      location: 'Nasa Space Apps Challenge - Hackathon',
      description: 'Sistema de monitoreo pulmonar usando APIs de NASA. Trabajo en equipo bajo presión y mucho café.',
      type: 'Desarrollo',
      icon: Code,
      color: 'from-blue-500 to-purple-500',
      delay: 0.45
    },
    {
      year: '2025',
      title: 'YachAI - Educación Gamificada',
      location: 'Hack4Edu - Hackathon',
      description: 'Plataforma gamificada con IA para aprendizaje personalizado de niños y adolescentes. Tecnología + cultura.',
      type: 'Desarrollo',
      icon: Code,
      color: 'from-green-500 to-teal-500',
      delay: 0.55
    },
    {
      year: '2026',
      title: 'El Futuro Comienza Aquí',
      location: 'En Construcción',
      description: 'Presentación de nuevos proyectos, ms voluntariados. El futuro...',
      type: 'Futuro',
      icon: Heart,
      color: 'from-cyan-400 to-blue-500',
      delay: 0.6
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">
          Timeline.journey
        </h2>
        <p className="text-gray-400">
          Mi viaje a través del tiempo, código y sueños ⏳
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glassmorphism rounded-lg p-3 text-center"
        >
          <Calendar className="w-6 h-6 mx-auto mb-1 text-blue-400" />
          <div className="text-xl font-bold text-white">6</div>
          <div className="text-xs text-gray-400">Años</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glassmorphism rounded-lg p-3 text-center"
        >
          <Code className="w-6 h-6 mx-auto mb-1 text-green-400" />
          <div className="text-xl font-bold text-white">6</div>
          <div className="text-xs text-gray-400">Proyectos</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glassmorphism rounded-lg p-3 text-center"
        >
          <Users className="w-6 h-6 mx-auto mb-1 text-pink-400" />
          <div className="text-xl font-bold text-white">500+</div>
          <div className="text-xs text-gray-400">Impacto</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glassmorphism rounded-lg p-3 text-center"
        >
          <Award className="w-6 h-6 mx-auto mb-1 text-yellow-400" />
          <div className="text-xl font-bold text-white">15+</div>
          <div className="text-xs text-gray-400">Logros</div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="space-y-0">
        {timeline.map((event, idx) => (
          <TimelineEvent key={idx} {...event} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 p-4 glassmorphism rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 border-blue-500"
      >
        <p className="text-sm text-gray-300 italic">
          "Cada momento en esta timeline es una pieza del puzzle que soy hoy. 
          Y el mejor capítulo aún está por escribirse. 💫"
        </p>
      </motion.div>
    </div>
  );
};

export default TimelineWindow;
