import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, FileText, Archive, BookOpen, Terminal, Trophy, Clock, Music } from 'lucide-react';

const DesktopIcon = ({ icon: Icon, label, color, onClick, delay = 0 }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 200 }}
      className="relative flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-karla-dark to-karla-darker border border-gray-700 group-hover:border-karla-blue transition-all duration-300 shadow-lg group-hover:shadow-karla-blue/30">
          <Icon className={`w-8 h-8 md:w-10 md:h-10 ${color}`} strokeWidth={1.5} />
        </div>
      </motion.div>
      <span className="mt-2 text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        {label}
      </span>
      
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-karla-dark border border-karla-blue px-3 py-1 rounded text-xs whitespace-nowrap z-50"
        >
          {label}
        </motion.div>
      )}
    </motion.div>
  );
};

const Desktop = ({ onOpenWindow }) => {
  const icons = [
    { 
      id: 'projects', 
      icon: FolderOpen, 
      label: 'Proyectos.exe', 
      color: 'text-karla-blue',
      delay: 0.1 
    },
    { 
      id: 'bio', 
      icon: FileText, 
      label: 'Bio_Humana.txt', 
      color: 'text-karla-green',
      delay: 0.2 
    },
    { 
      id: 'hobbies', 
      icon: Terminal, 
      label: 'Hobbies.collection', 
      color: 'text-purple-400',
      delay: 0.3 
    },
    { 
      id: 'dreams', 
      icon: Terminal, 
      label: 'Dreams.manifest', 
      color: 'text-cyan-400',
      delay: 0.4 
    },
    { 
      id: 'certificates', 
      icon: Archive, 
      label: 'Certificados.zip', 
      color: 'text-karla-purple',
      delay: 0.5 
    },
    { 
      id: 'ieee', 
      icon: BookOpen, 
      label: 'IEEE_WIE.log', 
      color: 'text-karla-pink',
      delay: 0.6 
    },
    { 
      id: 'terminal', 
      icon: Terminal, 
      label: 'Terminal.app', 
      color: 'text-karla-accent',
      delay: 0.7 
    },
    { 
      id: 'achievements', 
      icon: Trophy, 
      label: 'Achievements.unlock', 
      color: 'text-yellow-400',
      delay: 0.8 
    },
    { 
      id: 'timeline', 
      icon: Clock, 
      label: 'Timeline.journey', 
      color: 'text-orange-400',
      delay: 0.9 
    },
    { 
      id: 'music', 
      icon: Music, 
      label: 'MusicPlayer.exe', 
      color: 'text-pink-400',
      delay: 1.0 
    },
  ];

  return (
    <div className="relative w-full h-full p-8 md:p-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-10 gap-6 md:gap-8">
        {icons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon.icon}
            label={icon.label}
            color={icon.color}
            delay={icon.delay}
            onClick={() => onOpenWindow(icon.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Desktop;
