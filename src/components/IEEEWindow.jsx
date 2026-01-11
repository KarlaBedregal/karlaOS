import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Award, TrendingUp } from 'lucide-react';

const IEEEWindow = () => {
  const timeline = [
    {
      year: '2025',
      role: 'Voluntaria',
      achievement: 'Iniciando en IEEE Women in Engineering',
      description: 'Primeros pasos en la comunidad de mujeres en tecnología. Me postule como voluntaria por curiosidad.'
    },
    {
      year: '2025',
      role: 'Voluntaria activa en Evento: RoadMap de sueños a metas',
      achievement: 'Apoyo en organización y logística',
      description: 'Me interesó las historias de las ponentes. Creo que es muy inspirador ver a mujeres líderes compartir sus experiencias.'
    },
    {
      year: '2026',
      role: 'Coordinadora de Eventos',
      achievement: 'Coordinadora de eventos nuevos',
      description: 'Decidi postularme como coordinadora de eventos para aprender más sobre organización y liderazgo.'
    }
  ];

  const impact = [
    { icon: Users, label: 'Networking :)', value: 'Perdí la cuenta', color: 'from-pink-500 to-rose-500' },
    { icon: Lightbulb, label: 'Workshops', value: '5+', color: 'from-purple-500 to-pink-500' },
    { icon: Award, label: 'Proyectos', value: '5+', color: 'from-blue-500 to-purple-500' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-karla-pink to-purple-400 mb-2">
          IEEE_WIE.log
        </h2>
        <p className="text-gray-400">
          Mi historia en voluntariado y liderazgo
        </p>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {impact.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="glassmorphism rounded-lg p-6 text-center"
          >
            <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} mb-3`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
            <div className="text-sm text-gray-400">{item.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-karla-pink" />
          Mi paso por IEEE WIE
        </h3>
        
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="relative pl-8 pb-6 border-l-2 border-karla-pink/30 last:pb-0"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-karla-pink border-4 border-karla-darker"></div>
            
            <div className="glassmorphism rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-karla-pink to-purple-500 text-white">
                  {item.year}
                </span>
                <span className="text-gray-300 font-semibold">{item.role}</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.achievement}</h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-6 glassmorphism rounded-lg bg-gradient-to-r from-karla-pink/10 to-purple-500/10 border-l-4 border-karla-pink"
      >
        <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
          <Award className="w-5 h-5 text-karla-pink" />
          Impacto y Aprendizajes
        </h4>
        <p className="text-gray-300 mb-3">
          En IEEE WIE aprendi muchisimo, vi de cerca lo que hacen ls organizaciones y aprendi. 
          Además, descubrí que el liderazgo no es solo dirigir, es inspirar y crear espacios 
          donde otras mujeres puedan brillar en tecnología. Y conocí muchisimas personas increíbles.
        </p>
        <p className="text-gray-400 text-sm italic">
          "Aprendí que cada proyecto o evento es una semilla de cambio en nuestra comunidad tech." 
        </p>
      </motion.div>
    </div>
  );
};

export default IEEEWindow;
