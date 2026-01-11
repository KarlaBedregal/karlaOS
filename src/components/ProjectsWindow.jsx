import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ title, description, tech, color, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="glassmorphism rounded-lg p-6 hover:border-karla-blue transition-all duration-300 group"
  >
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-karla-blue" />
    </div>
    
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 text-sm mb-4">{description}</p>
    
    <div className="flex flex-wrap gap-2">
      {tech.map((t, idx) => (
        <span
          key={idx}
          className="px-2 py-1 text-xs rounded bg-karla-dark text-karla-blue border border-karla-blue/30"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectsWindow = () => {
  const projects = [
    {
      title: 'HuellitasAI',
      description: 'Plataforma de IA para el bienestar animal. Detección de mascotas perdidas y análisis de comportamiento usando Machine Learning.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'React'],
      color: 'from-purple-500 to-pink-500',
      icon: Code2,
      delay: 0.1
    },
    {
      title: 'LungTrack',
      description: 'Sistema de monitoreo pulmonar usando APIs de NASA para correlacionar calidad del aire con salud respiratoria.',
      tech: ['Node.js', 'NASA API', 'Tree.js', 'Supabase', 'React'],
      color: 'from-blue-500 to-cyan-500',
      icon: Code2,
      delay: 0.2
    },
    {
      title: 'YachAI',
      description: 'Plataforma educativa gamificada para el aprendizaje regular con sistemas de recompensas.',
      tech: ['React', 'Supabase', 'Gamification', 'Python', 'MetaModel'],
      color: 'from-green-500 to-emerald-500',
      icon: Code2,
      delay: 0.3
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-karla-blue to-karla-purple mb-2">
          Mis Proyectos
        </h2>
        <p className="text-gray-400">
          No son lo mejor del mundo pero me gustan y estoy orgullosa de ellos :)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsWindow;
