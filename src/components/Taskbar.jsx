import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Battery, Wifi, Volume2, Mail } from 'lucide-react';

const Taskbar = ({ onLogout, themeColor }) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('es-ES', { 
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      className={`fixed bottom-0 left-0 right-0 h-12 glassmorphism border-t ${
        themeColor === 'pink' ? 'border-karla-pink/30' :
        themeColor === 'purple' ? 'border-purple-400/30' :
        themeColor === 'green' ? 'border-karla-green/30' :
        themeColor === 'orange' ? 'border-orange-400/30' :
        'border-karla-blue/30'
      } backdrop-blur-xl z-40`}
    >
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left - Start Button */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-1.5 rounded bg-gradient-to-r ${
              themeColor === 'pink' ? 'from-karla-pink to-purple-500' :
              themeColor === 'purple' ? 'from-purple-500 to-indigo-500' :
              themeColor === 'green' ? 'from-karla-green to-emerald-500' :
              themeColor === 'orange' ? 'from-orange-500 to-amber-500' :
              'from-karla-blue to-karla-purple'
            } text-white font-mono text-sm font-semibold shadow-lg`}
          >
            KarlaOS
          </motion.button>
        </div>

        {/* Center - System Status */}
        <div className="hidden md:flex items-center gap-6 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${
              themeColor === 'pink' ? 'bg-karla-pink' :
              themeColor === 'purple' ? 'bg-purple-400' :
              themeColor === 'green' ? 'bg-karla-green' :
              themeColor === 'orange' ? 'bg-orange-400' :
              'bg-karla-blue'
            } animate-pulse`}></div>
            <span>Sistema: Operativo</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-mono">Coffee:</span>
            <div className="w-16 h-2 bg-karla-dark rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ delay: 1, duration: 1 }}
                className={`h-full ${
                  themeColor === 'pink' ? 'bg-karla-pink' :
                  themeColor === 'purple' ? 'bg-purple-500' :
                  themeColor === 'green' ? 'bg-karla-green' :
                  themeColor === 'orange' ? 'bg-orange-500' :
                  'bg-amber-500'
                }`}
              />
            </div>
            <span>85%</span>
          </div>
        </div>

        {/* Right - System Tray */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-gray-400">
            <Wifi className="w-4 h-4" />
            <Volume2 className="w-4 h-4" />
            <Battery className="w-4 h-4" />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onLogout}
            className="p-2 hover:bg-karla-dark rounded-full transition-colors"
            title="Contacto"
          >
            <Mail className={`w-4 h-4 ${
              themeColor === 'pink' ? 'text-karla-pink' :
              themeColor === 'purple' ? 'text-purple-400' :
              themeColor === 'green' ? 'text-karla-green' :
              themeColor === 'orange' ? 'text-orange-400' :
              'text-karla-blue'
            }`} />
          </motion.button>

          <div className={`px-3 py-1 rounded bg-karla-dark/50 border ${
            themeColor === 'pink' ? 'border-karla-pink/30' :
            themeColor === 'purple' ? 'border-purple-400/30' :
            themeColor === 'green' ? 'border-karla-green/30' :
            themeColor === 'orange' ? 'border-orange-400/30' :
            'border-karla-blue/30'
          }`}>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-gray-400" />
              <div className="text-xs">
                <div className="font-mono text-white">{formatTime(time)}</div>
                <div className="text-gray-400 text-[10px]">{formatDate(time)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Taskbar;
