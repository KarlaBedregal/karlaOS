import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BootSequence from './components/BootSequence';
import ParticleBackground from './components/ParticleBackground';
import Desktop from './components/Desktop';
import Window from './components/Window';
import Taskbar from './components/Taskbar';
import SystemStatus from './components/SystemStatus';
import ProjectsWindow from './components/ProjectsWindow';
import BioWindow from './components/BioWindow';
import CertificatesWindow from './components/CertificatesWindow';
import IEEEWindow from './components/IEEEWindow';
import TerminalWindow from './components/TerminalWindow';
import HobbiesWindow from './components/HobbiesWindow';
import DreamsWindow from './components/DreamsWindow';
import AchievementsWindow from './components/AchievementsWindow';
import TimelineWindow from './components/TimelineWindow';
import MusicPlayerWindow from './components/MusicPlayerWindow';
import { motion } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [nextZIndex, setNextZIndex] = useState(1000);
  const [themeColor, setThemeColor] = useState('blue'); // 'blue', 'pink', 'purple', 'green', 'orange'
  const [showLogout, setShowLogout] = useState(false);

  // Define todos los temas disponibles
  const themes = {
    blue: {
      name: 'Cyber Blue',
      primary: 'from-karla-blue to-karla-accent',
      secondary: 'from-blue-500 to-cyan-500',
      glow: 'text-karla-blue',
      border: 'border-karla-blue',
      bg: 'bg-karla-blue'
    },
    pink: {
      name: 'IEEE WIE Pink',
      primary: 'from-karla-pink to-purple-500',
      secondary: 'from-pink-500 to-rose-500',
      glow: 'text-karla-pink',
      border: 'border-karla-pink',
      bg: 'bg-karla-pink'
    },
    purple: {
      name: 'Dream Purple',
      primary: 'from-purple-500 to-indigo-500',
      secondary: 'from-violet-500 to-purple-600',
      glow: 'text-purple-400',
      border: 'border-purple-400',
      bg: 'bg-purple-500'
    },
    green: {
      name: 'Hacker Green',
      primary: 'from-karla-green to-emerald-500',
      secondary: 'from-green-500 to-teal-500',
      glow: 'text-karla-green',
      border: 'border-karla-green',
      bg: 'bg-karla-green'
    },
    orange: {
      name: 'Sunset Orange',
      primary: 'from-orange-500 to-amber-500',
      secondary: 'from-orange-600 to-yellow-500',
      glow: 'text-orange-400',
      border: 'border-orange-400',
      bg: 'bg-orange-500'
    }
  };

  const handleBootComplete = () => {
    setIsBooting(false);
  };

  const openWindow = (id) => {
    // Check if window already exists
    const existingWindow = windows.find(w => w.id === id);
    if (existingWindow) {
      setActiveWindow(id);
      setWindows(windows.map(w => 
        w.id === id ? { ...w, zIndex: nextZIndex } : w
      ));
      setNextZIndex(nextZIndex + 1);
      return;
    }

    const windowConfig = {
      projects: { title: 'Proyectos.exe', component: ProjectsWindow },
      bio: { title: 'Bio_Humana.txt', component: BioWindow },
      hobbies: { title: 'Hobbies.collection', component: HobbiesWindow },
      dreams: { title: 'Dreams.manifest', component: DreamsWindow },
      certificates: { title: 'Certificados.zip', component: CertificatesWindow },
      ieee: { title: 'IEEE_WIE.log', component: IEEEWindow },
      terminal: { title: 'Terminal.app', component: TerminalWindow },
      achievements: { title: 'Achievements.unlock', component: AchievementsWindow },
      timeline: { title: 'Timeline.journey', component: TimelineWindow },
      music: { title: 'MusicPlayer.exe', component: MusicPlayerWindow },
    };

    const config = windowConfig[id];
    if (config) {
      const newWindow = {
        id,
        title: config.title,
        component: config.component,
        zIndex: nextZIndex,
      };
      setWindows([...windows, newWindow]);
      setActiveWindow(id);
      setNextZIndex(nextZIndex + 1);
    }
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id));
    if (activeWindow === id) {
      setActiveWindow(null);
    }
  };

  const cycleTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(themeColor);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setThemeColor(themeKeys[nextIndex]);
  };

  const currentTheme = themes[themeColor];

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-gradient-to-br from-karla-darker via-karla-dark to-karla-darker">
      <ParticleBackground />

      <AnimatePresence>
        {isBooting && <BootSequence onBootComplete={handleBootComplete} />}
      </AnimatePresence>

      {!isBooting && (
        <>
          {/* Easter Egg Button - Cambiar Tema */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: 'spring' }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={cycleTheme}
            className={`fixed top-4 left-4 z-50 p-3 rounded-full bg-gradient-to-r ${currentTheme.primary} shadow-lg hover:shadow-2xl transition-all duration-300`}
            title={`Easter Egg: Cambiar tema! (Actual: ${currentTheme.name})`}
          >
            <Sparkles className="w-5 h-5 text-white" />
          </motion.button>

          {/* Theme Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="fixed top-4 left-20 z-40 px-3 py-1 glassmorphism rounded-full text-xs text-gray-300"
          >
            {currentTheme.name}
          </motion.div>

          <Desktop onOpenWindow={openWindow} />
          
          {/* SystemStatus movido abajo a la derecha */}
          <SystemStatus themeColor={themeColor} />

          {/* Windows Container */}
          <div className="fixed inset-0 pointer-events-none z-30">
            <div className="relative w-full h-full flex items-center justify-center p-4 pb-16">
              <AnimatePresence>
                {windows.map((window) => (
                  <div key={window.id} className="pointer-events-auto">
                    <Window
                      id={window.id}
                      title={window.title}
                      onClose={() => closeWindow(window.id)}
                      isActive={activeWindow === window.id}
                      onFocus={() => {
                        setActiveWindow(window.id);
                        setWindows(windows.map(w => 
                          w.id === window.id ? { ...w, zIndex: nextZIndex } : w
                        ));
                        setNextZIndex(nextZIndex + 1);
                      }}
                      zIndex={window.zIndex}
                    >
                      <window.component />
                    </Window>
                  </div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <Taskbar onLogout={() => setShowLogout(true)} themeColor={themeColor} />

          {/* Logout/Contact Modal */}
          <AnimatePresence>
            {showLogout && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
                onClick={() => setShowLogout(false)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="glassmorphism rounded-lg p-8 max-w-md w-full mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">¡Gracias por Visitarme!</h2>
                    <button
                      onClick={() => setShowLogout(false)}
                      className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    ¿Te gustaría conectar? Aquí están mis datos de contacto:
                  </p>

                  <div className="space-y-3">
                    <div className="p-3 glassmorphism rounded hover:border-karla-blue transition-all">
                      <div className="text-xs text-gray-400">Email</div>
                      <div className="text-white font-mono">karla@example.com</div>
                    </div>
                    <div className="p-3 glassmorphism rounded hover:border-karla-blue transition-all">
                      <div className="text-xs text-gray-400">LinkedIn</div>
                      <div className="text-white font-mono">/in/karla-dev</div>
                    </div>
                    <div className="p-3 glassmorphism rounded hover:border-karla-blue transition-all">
                      <div className="text-xs text-gray-400">GitHub</div>
                      <div className="text-white font-mono">@karla-dev</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-karla-blue/20 to-karla-purple/20 rounded-lg border border-karla-blue/30">
                    <p className="text-sm text-gray-300 italic text-center">
                      "Gracias por explorar mi universo. ¡Construyamos algo increíble juntos!"
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
