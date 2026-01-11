import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Award, CheckCircle, Lock } from 'lucide-react';

const AchievementCard = ({ icon: Icon, title, description, unlocked, date, points, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={`glassmorphism rounded-lg p-4 transition-all duration-300 ${
      unlocked ? 'hover:scale-105 cursor-pointer' : 'opacity-60'
    }`}
  >
    <div className="flex items-start gap-3">
      <div className={`p-3 rounded-lg bg-gradient-to-br ${color} ${!unlocked && 'grayscale'}`}>
        {unlocked ? (
          <Icon className="w-6 h-6 text-white" />
        ) : (
          <Lock className="w-6 h-6 text-gray-400" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className={`text-lg font-semibold ${unlocked ? 'text-white' : 'text-gray-400'}`}>
            {title}
          </h3>
          {unlocked && (
            <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
              +{points} pts
            </span>
          )}
        </div>
        <p className="text-sm text-gray-400 mb-2">{description}</p>
        {unlocked && date && (
          <p className="text-xs text-gray-500">Desbloqueado: {date}</p>
        )}
        {!unlocked && (
          <p className="text-xs text-yellow-500 italic">🔒 Por desbloquear...</p>
        )}
      </div>
    </div>
  </motion.div>
);

const AchievementsWindow = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Primera Línea de Código',
      description: 'Escribir mi primer "Hola Mundo" y así comenzó la aventura.',
      unlocked: true,
      date: '2023',
      points: 50,
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Award,
      title: 'Superando Miedos',
      description: 'Bug Fix Épico: MiedoHablarPublico.exe → RESUELTO',
      unlocked: true,
      date: '2024',
      points: 200,
      color: 'from-purple-500 to-pink-500',
      delay: 0.15
    },
    {
      icon: Star,
      title: 'Iniciando en IEEE WIE',
      description: 'Apoyando como voluntaria en IEEE Women in Engineering.',
      unlocked: true,
      date: '2025',
      points: 300,
      color: 'from-pink-500 to-rose-500',
      delay: 0.2
    },
    {
      icon: Zap,
      title: 'Hackathon Warrior: Nasa Space Apps Challenge',
      description: 'Como es participar en tu primer hackathon y sobrevivir #Sin miedo al éxito.',
      unlocked: true,
      date: '2025',
      points: 150,
      color: 'from-orange-500 to-amber-500',
      delay: 0.25
    },
    {
      icon: CheckCircle,
      title: 'Triple Threat',
      description: 'Completar 3 proyectos con tecnología e impacto social. Y haciendo amigos en el proceso.',
      unlocked: true,
      date: '2025',
      points: 250,
      color: 'from-green-500 to-emerald-500',
      delay: 0.3
    },
    {
      icon: Trophy,
      title: 'Finish the online courses',
      description: 'Completar cursos en línea de programación y electrónica para seguir aprendiendo.',
      unlocked: true,
      date: '2025',
      points: 100,
      color: 'from-amber-600 to-orange-700',
      delay: 0.35
    },
    {
      icon: Award,
      title: 'Certificación Master',
      description: 'Obtener 10+ certificaciones profesionales.',
      unlocked: false,
      date: '2025',
      points: 400,
      color: 'from-yellow-500 to-orange-500',
      delay: 0.4
    },
    {
      icon: Star,
      title: 'Conferencia Internacional',
      description: 'Hablar en tu primera conferencia tech internacional.',
      unlocked: false,
      date: null,
      points: 500,
      color: 'from-purple-500 to-indigo-500',
      delay: 0.45
    },
    {
      icon: Zap,
      title: 'Startup Founder',
      description: 'Lanzar tu propia startup de impacto social.',
      unlocked: false,
      date: null,
      points: 1000,
      color: 'from-red-500 to-pink-500',
      delay: 0.5
    }
  ];

  const totalPoints = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0);
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;
  const progress = (unlockedCount / totalCount) * 100;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-2">
          Achievements.unlock
        </h2>
        <p className="text-gray-400">
          Logros desbloqueados en el camino tech 🏆
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glassmorphism rounded-lg p-4 text-center"
        >
          <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
          <div className="text-2xl font-bold text-white">{unlockedCount}/{totalCount}</div>
          <div className="text-xs text-gray-400">Desbloqueados</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glassmorphism rounded-lg p-4 text-center"
        >
          <Star className="w-8 h-8 mx-auto mb-2 text-orange-400" />
          <div className="text-2xl font-bold text-white">{totalPoints}</div>
          <div className="text-xs text-gray-400">Total Puntos</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glassmorphism rounded-lg p-4 text-center"
        >
          <Zap className="w-8 h-8 mx-auto mb-2 text-green-400" />
          <div className="text-2xl font-bold text-white">{progress.toFixed(0)}%</div>
          <div className="text-xs text-gray-400">Progreso</div>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 glassmorphism rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Progreso General</span>
          <span className="text-sm font-semibold text-white">{progress.toFixed(0)}%</span>
        </div>
        <div className="w-full h-3 bg-karla-dark rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
          />
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, idx) => (
          <AchievementCard key={idx} {...achievement} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 p-4 glassmorphism rounded-lg border-l-4 border-yellow-500"
      >
        <p className="text-sm text-gray-300 italic">
          "Cada logro es un recordatorio de que los límites solo existen en nuestra mente.
          Sigue desbloqueando tu potencial. 🚀"
        </p>
      </motion.div>
    </div>
  );
};

export default AchievementsWindow;
