import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BootSequence = ({ onBootComplete }) => {
  const [bootMessages, setBootMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    { text: 'Iniciando KarlaOS v1.0...', delay: 100 },
    { text: '[OK] Cargando módulo: Core Systems Engineering', delay: 150 },
    { text: '[OK] Cargando módulo: Business Administration', delay: 150 },
    { text: '[OK] Inicializando passion.driver: Participar en Hackatones', delay: 200 },
    { text: '[OK] Montando filesystem: ProyectosHackatones/', delay: 150 },
    { text: '    └─ HuellitasAI.app', delay: 100 },
    { text: '    └─ LungTrack.app', delay: 100 },
    { text: '    └─ Yachai.app', delay: 100 },
    { text: '    └─ CunaUnsa.app', delay: 100 },
    { text: '[OK] Conectando a Dune.network', delay: 200 },
    { text: '[OK] Verificando estado de biografía al 85%', delay: 150 },
    { text: '[OK] Cargando achievements: Certificados.zip', delay: 150 },
    { text: '[OK] Detectando bug fixes: MiedoHablarPublico.exe → RESUELTO', delay: 200 },
    { text: '', delay: 100 },
    { text: '✨ Sistema listo. Bienvenid@s a mi universo.', delay: 300 },
  ];

  useEffect(() => {
    if (currentIndex < messages.length) {
      const timer = setTimeout(() => {
        setBootMessages((prev) => [...prev, messages[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, messages[currentIndex].delay);

      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        onBootComplete();
      }, 1000);
      return () => clearTimeout(finalTimer);
    }
  }, [currentIndex, messages.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-karla-darker z-50 flex items-center justify-center"
    >
      <div className="w-full max-w-3xl px-8">
        <div className="font-mono text-sm md:text-base space-y-1">
          {bootMessages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`${
                msg.text.includes('[OK]')
                  ? 'text-karla-green'
                  : msg.text.includes('✨')
                  ? 'text-karla-accent text-lg font-semibold text-glow'
                  : msg.text.includes('└─')
                  ? 'text-gray-400 ml-4'
                  : 'text-gray-300'
              }`}
            >
              {msg.text}
              {idx === bootMessages.length - 1 && currentIndex < messages.length && (
                <span className="inline-block w-2 h-4 bg-karla-accent ml-1 animate-pulse"></span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BootSequence;
