import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

const TerminalWindow = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'KarlaOS Terminal v1.0.0' },
    { type: 'output', text: 'Escribe "help" para ver comandos disponibles' },
    { type: 'output', text: '' },
  ]);

  const commands = {
    help: () => [
      'Comandos disponibles:',
      '  about      - Información sobre Karla',
      '  skills     - Lista de habilidades técnicas',
      '  contact    - Información de contacto',
      '  quote      - Cita motivacional aleatoria',
      '  projects   - Resumen de proyectos',
      '  hobbies    - Mis pasatiempos favoritos',
      '  dreams     - Metas y sueños',
      '  ieee       - Historia en IEEE WIE',
      '  achievements - Logros desbloqueados ',
      '  timeline   - Mi viaje en el tiempo',
      '  music      - Mi playlist de coding',
      '  books      - Libros que estoy leyendo',
      '  fun        - Dato curioso aleatorio',
      '  matrix     - ???',
      '  clear      - Limpiar terminal',
      '  easter     - ¿Encontraste el easter egg? buscaloooo',
    ],
    about: () => [
      '=== ABOUT KARLA ===',
      'Nombre: Karla Miluska Bedregal Coaguila',
      'Edad: Eso no se le pregunta a una chica :) Pero ya puedes suponerlo...',
      'Carreras: Ingeniería de Sistemas + Administración (Ambas en curso)',
      'Apasionada por: Todo, la vida, viajar, aprender, crear, bailaaaar',
      'Core Values: Me gustan los retos, a veces la presión nos ayuda a sacar lo mejor de nosotros mismos',
      'Bug Fix: Superar el miedo a hablar en público, actuar en teatro y no quedarme callada',
      '',
      'Lema: "Sin miedo al éxito". Siempre lo digo aunque las cosas salgan mal jasjajs',
    ],
    skills: () => [
      'Technical Stack:',
      '  Languages: Python, JavaScript, Java, C++, Ingles menos fluido :)', 
      '  Frameworks: React, Node.js, FastAPI, djangooo es lo máximo',
      '  Tools: Git, Docker, AWS, PostgreSQL, Figma',
      '  AI/ML: Aprendiendo aun, todavia no conozco bien :(',
      '  Soft Skills: Aprendiendo liderazgo, trabajo en Equipo, comunicación efectiva',
      '  Idiomas: Español (Nativo), Inglés (Intermedio aun)',
    ],
    contact: () => [
      '📧 Email: karlabedregalxd@gmail.com',
      '💼 LinkedIn: www.linkedin.com/in/karla-miluska-b-597a441bb',
      '💻 GitHub: @karlabedregal',
      '🌐 Portfolio: Pendiente :)',
      '📱 WhatsApp: +51 920 712 100',
      '',
      'Si tienes alguna pregunta ¡No dudes en contactarme!',
    ],
    projects: () => [
      '=== MIS PROYECTOS ===',
      '',
      '1. HuellitasAI 🐾',
      '   → Plataforma de IA para bienestar animal',
      '   → Tech: Python, PostgreSQL, OpenCV, React',
      '',
      '2. LungTrack 🫁',
      '   → Monitoreo de contaminaciñon en tiempo real con APIs de NASA',
      '   → Tech: Node.js, Tree.js, Supabase, React',
      '',
      '3. Yachai 📚',
      '   → Aprendizaje gamificado para niños y adolescentes',
      '   → Tech: React, Supabase, Metamodel, Python',
    ],
    hobbies: () => [
      '=== MIS HOBBIES ===',
      '📚 Leer ficción, fantasía y ciencia ficción',
      '✍️  Escribir historias y crear mundos',
      '🎵 Música electrónica (Calvin Harris, Lana del Rey, etc.)',
      '📺 Maratones de series y películas. Veamos Stranger Things!!!',
      '📸 Bailar y cantar. Bailemos una bachataa :)',
      '☕ Café (Por que me da hiperactividad. 100 puntos para el café)',
      '💡 Aprender cosas nuevas constantemente. Por ejemplo trends de tik tok :D',
    ],
    dreams: () => [
      '=== METAS Y SUEÑOS ===',
      '🚀 Crear una startup que ayude al país',
      '🌍 Hablar en conferencias internacionales',
      '🤖 Sacar una maestria en robótica e IA',
      '👩‍🏫 Crear una ONG para perritos abandonados',
      '💻 Contribuir a open source',
      '⚖️  Publicar un libro',
      '',
      'Roadmap: 2026 → Graduación | 2028 → ML Cert | 2032 → Startup',
    ],
    ieee: () => [
      '=== MI HISTORIA EN IEEE WIE ===',
      '2025: Voluntaria inicial',
      '2025: Aprendiendo y ganando experiencia',
      '2025-2026: Iniciando como coordinadora',
      '',
    ],
    music: () => [
      'PLAYLIST FAVORITO:',
      '  • Calvin Harris - Feel So Close',
      '  • David Guetta - Titanium',
      '  • Tiësto - Red Lights',
      '  • Martin Garrix - Animals',
      '  • Avicii - Levels',
      '  • Lana del Rey - Ride',
      '',
      'Volumen recomendado: 10/10 🔊',
    ],
    books: () => [
      '📚 ACTUALMENTE LEYENDO:',
      '  • "Caraval" - Stephanie Garber',
      '  • "El principe cruel" - Holly Black',
      '  • "Dune" - Frank Herbert',
      '  • "Hábitos atómicos" - James Clear',
      '',
      'Género favorito: Fantasía épica y Sci-Fi',
    ],
    achievements: () => [
      '=== LOGROS DESBLOQUEADOS ===',
      '🏆 Primera Línea de Código (2023)',
      '🏆 Superando Miedos - Bug Fix: MiedoPublico.exe (2025)',
      '🏆 IEEE WIE - Tomando nuevas responsabilidades (2026)',
      '🏆 Hackathon Warrior - Es emocionante hacer una app web o proyecto en 48 horas (2025)',
      '🏆 Postular a más voluntariados ¡AIESEC aqui te voy! - Sin miedo al éxito (2026)',
      '',
      'Abre la ventana de Achievements para ver más.',
    ],
    timeline: () => [
      '=== MI TIMELINE ===',
      '2020: 🎓 Primeros pasos en administración',
      '2023: 🎓 Primeros pasos en tech',
      '2024: 💻 Primera aplicación web',
      '2025: 📚 Empezando en los hackatones: HuellitasAI, Lung Track, YachAI',
      '2025: 👥 Voluntaria IEEE WIE',
      '2026: 🌟 Postulando a más retos',
      '2026: El cielo es el límite...',
      '',
      'Abre la ventana Timeline para el viaje completo.',
    ],
    fun: () => {
      const facts = [
        'Puedo debuggear código escuchando música a todo volumen 🎵',
        'Mi primer programa fue un "Hola Mundo" en html con un video de un youtuber 📺, me senti Mark Zuckerberg',
        'El café es mi principal fuente de energía renovable ☕, me encantaaa',
        'Tengo más libros pendientes que leidos 📚',
        'Mi playlist del cel tiene más de 500 canciones 🎧',
        'Puedo hacer maratón de series de 12 horas seguidas 📺',
        'Mi lenguaje favorito cambia cada 6 meses 😅. El de ahora es React',
      ];
      return [facts[Math.floor(Math.random() * facts.length)]];
    },
    matrix: () => [
      '01001000 01101111 01101100 01100001',
      '01001101 01110101 01101110 01100100 01101111',
      '',
      'Decodificado: "Hola Mundo"',
      '',
      '> Wake up, Neo... 🕶️',
      '> The Matrix has you...',
      '> Follow the white rabbit. 🐰',
    ],
    quote: () => {
      const quotes = [
        '"Sin miedo al éxito" - Karla',
        '"El mejor código es el que ayuda a alguien"',
        '"Cada bug es una oportunidad de aprendizaje" Excepto cuando es un error de sintaxis :(',
        '"La tecnología sin impacto es solo ruido digital"',
        '"Los sueños sin acción son solo deseos"',
        '"El futuro no se predice, se construye"',
        '"Código limpio es código feliz"',
        '"First, solve the problem. Then, write the code."',
      ];
      return [quotes[Math.floor(Math.random() * quotes.length)]];
    },
    clear: () => {
      setHistory([]);
      return [];
    },
    easter: () => [
      '🎉 ¡Encontraste el Easter Egg!',
      '✨ Cambiando temas de colores...',
      '(Pista: busca el botón con estrellitas en la esquina)',
      '',
      'Temas disponibles: 5 colores diferentes! 🌈',
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [
      ...history,
      { type: 'input', text: input },
    ];

    const cmd = input.toLowerCase().trim();
    if (commands[cmd]) {
      const output = commands[cmd]();
      output.forEach((line) => {
        newHistory.push({ type: 'output', text: line });
      });
    } else {
      newHistory.push({ 
        type: 'error', 
        text: `Comando no encontrado: ${input}. Escribe "help" para ver comandos.` 
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="bg-black/60 rounded-lg p-6 font-mono text-sm h-[500px] flex flex-col">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
        <TerminalIcon className="w-5 h-5 text-karla-accent" />
        <span className="text-gray-400">KarlaOS Terminal</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-1 mb-4">
        {history.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className={`
              ${item.type === 'input' ? 'text-karla-accent flex items-center gap-2' : ''}
              ${item.type === 'error' ? 'text-red-400' : ''}
              ${item.type === 'output' ? 'text-gray-300' : ''}
            `}
          >
            {item.type === 'input' && (
              <>
                <ChevronRight className="w-4 h-4" />
                <span>{item.text}</span>
              </>
            )}
            {item.type !== 'input' && item.text}
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-gray-700 pt-3">
        <ChevronRight className="w-4 h-4 text-karla-accent" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-white"
          placeholder="Escribe un comando..."
          autoFocus
        />
      </form>
    </div>
  );
};

export default TerminalWindow;
