import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart, Mic, Bug } from 'lucide-react';

const BioWindow = () => {
  const [currentLine, setCurrentLine] = useState(0);

  const bioLines = [
    { text: '> Ejecutando Bio_Humana.txt...', delay: 0 },
    { text: '', delay: 500 },
    { text: '┌─ KARLA SYSTEM INFO ───────────────────────────────┐', delay: 600 },
    { text: '│ Nombre: Karla Miluska Bedregal Coaguila (Karla)│', delay: 700 },
    { text: '│ Carreras: Ingenieria Sistemas + Administración   │', delay: 800 },
    { text: '│ Core_Passion: Escribir/leer ficcion y fantasia │', delay: 900 },
    { text: '│ Hobbies: Ver series, películas y aprender cosas│', delay: 1000 },
    { text: '│ Status: Activa y aprendiendo mientras esté viva│', delay: 1100 },
    { text: '└────────────────────────────────────────────────────┘', delay: 1200 },
    { text: '', delay: 1300 },
    { text: '[PASSION_DRIVERS]', delay: 1400 },
    { text: '  ☕ Coffee.Level: CRITICAL (85%)', delay: 1500 },
    { text: '     → Combustible principal para debugging mental o ahogar las penas :)', delay: 1600 },
    { text: '', delay: 1700 },
    { text: '  💜 ImpactoSocial.exe: RUNNING', delay: 1800 },
    { text: '     → Cada proyecto debe dejar buenos recuerdos', delay: 1900 },
    { text: '     → La tecnología puede cambiar vidas', delay: 2000 },
    { text: '', delay: 2100 },
    { text: '[MAJOR_BUG_FIX]', delay: 2200 },
    { text: '  🐛 ERROR: MiedoHablarEnPublico.exe', delay: 2300 },
    { text: '     STATUS: DEPRECATED ✓', delay: 2400 },
    { text: '     → Migrado a Confianza.dll v2.0', delay: 2500 },
    { text: '     → Ahora: Aprendiendo liderazgo en IEEE WIE', delay: 2600 },
    { text: '', delay: 2700 },
    { text: '[FUN_FACTS]', delay: 2800 },
    { text: '  • Debug mode: Música electrónica a fuerte volumen ', delay: 2900 },
    { text: '                Que vivan Calvin Harris, David Guetta, Tiësto y Martin Garrix', delay: 3000 },
    { text: '  • Motto: "Code with purpose, lead with heart"', delay: 3100 },
    { text: '', delay: 3200 },
    { text: '> EOF - Fin de Bio_Humana.txt', delay: 3300 },
  ];

  useEffect(() => {
    if (currentLine < bioLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, bioLines[currentLine].delay + 100);

      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <div className="bg-black/40 rounded-lg p-6 font-mono text-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-gray-400">Terminal: Bio_Humana.txt</span>
      </div>

      <div className="space-y-1">
        {bioLines.slice(0, currentLine).map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className={`
              ${line.text.includes('>') ? 'text-karla-accent font-semibold' : ''}
              ${line.text.includes('[') && line.text.includes(']') ? 'text-karla-purple font-semibold' : ''}
              ${line.text.includes('┌') || line.text.includes('└') || line.text.includes('│') ? 'text-karla-blue' : ''}
              ${line.text.includes('☕') || line.text.includes('💜') || line.text.includes('🐛') ? 'text-karla-green' : ''}
              ${line.text.includes('→') ? 'text-gray-400' : ''}
              ${line.text.includes('•') ? 'text-gray-300' : ''}
              ${!line.text ? 'h-2' : ''}
              text-gray-200
            `}
          >
            {line.text || ' '}
          </motion.div>
        ))}
        {currentLine < bioLines.length && (
          <span className="inline-block w-2 h-4 bg-karla-green animate-pulse"></span>
        )}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center p-3 bg-karla-dark/50 rounded-lg border border-gray-700">
          <Coffee className="w-8 h-8 text-amber-500 mb-2" />
          <span className="text-xs text-gray-400">Coffee Level</span>
          <span className="text-sm font-semibold text-amber-400">85%</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-karla-dark/50 rounded-lg border border-gray-700">
          <Heart className="w-8 h-8 text-pink-500 mb-2" />
          <span className="text-xs text-gray-400">Passion</span>
          <span className="text-sm font-semibold text-pink-400">MAX</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-karla-dark/50 rounded-lg border border-gray-700">
          <Mic className="w-8 h-8 text-purple-500 mb-2" />
          <span className="text-xs text-gray-400">Public Speaking</span>
          <span className="text-sm font-semibold text-green-400">FIXED</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-karla-dark/50 rounded-lg border border-gray-700">
          <Bug className="w-8 h-8 text-red-500 mb-2" />
          <span className="text-xs text-gray-400">Active Bugs</span>
          <span className="text-sm font-semibold text-green-400">0</span>
        </div>
      </div>
    </div>
  );
};

export default BioWindow;
