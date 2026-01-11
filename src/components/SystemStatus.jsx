import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Zap, TrendingUp } from 'lucide-react';

const SystemStatus = ({ themeColor }) => {
  const stats = [
    {
      icon: Cpu,
      label: 'Core',
      value: 'Systems + Admin',
      color: themeColor === 'pink' ? 'text-karla-pink' : 'text-karla-blue'
    },
    {
      icon: Zap,
      label: 'Level of optimism',
      value: '99.9%',
      color: 'text-amber-400'
    },
    {
      icon: TrendingUp,
      label: 'Current Goal',
      value: 'Build a good future',
      color: themeColor === 'pink' ? 'text-purple-400' : 'text-karla-green'
    },
    {
      icon: HardDrive,
      label: 'Projects',
      value: '3+ Active, 3+ sleeping',
      color: themeColor === 'pink' ? 'text-pink-400' : 'text-karla-accent'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="fixed bottom-16 right-4 w-64 glassmorphism rounded-lg p-4 z-30 hidden lg:block"
    >
      <h3 className="text-sm font-mono font-semibold text-gray-300 mb-3 flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${
          themeColor === 'pink' ? 'bg-karla-pink' : 
          themeColor === 'purple' ? 'bg-purple-400' :
          themeColor === 'green' ? 'bg-karla-green' :
          themeColor === 'orange' ? 'bg-orange-400' :
          'bg-karla-blue'
        } animate-pulse`}></div>
        System Status
      </h3>
      
      <div className="space-y-3">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + idx * 0.1 }}
            className="flex items-center gap-3"
          >
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
            <div className="flex-1">
              <div className="text-xs text-gray-400">{stat.label}</div>
              <div className="text-sm font-semibold text-white">{stat.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-700">
        <div className="text-xs text-gray-400 mb-2">Memory Usage</div>
        <div className="w-full h-2 bg-karla-dark rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '67%' }}
            transition={{ delay: 1.5, duration: 1 }}
            className={`h-full ${
              themeColor === 'pink' 
                ? 'bg-gradient-to-r from-karla-pink to-purple-500' :
              themeColor === 'purple'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500' :
              themeColor === 'green'
                ? 'bg-gradient-to-r from-karla-green to-emerald-500' :
              themeColor === 'orange'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500' :
                'bg-gradient-to-r from-karla-blue to-karla-accent'
            }`}
          />
        </div>
        <div className="text-xs text-gray-400 mt-1">67% (Learning Mode)</div>
      </div>
    </motion.div>
  );
};

export default SystemStatus;
