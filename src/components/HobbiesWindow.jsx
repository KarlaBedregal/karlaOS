import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Music, Book, Palette, Sparkles, Heart } from 'lucide-react';

const HobbyCard = ({ icon: Icon, title, description, images, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="glassmorphism rounded-lg p-6 hover:scale-105 transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    
    <p className="text-gray-400 text-sm mb-4">{description}</p>
    
    {images && images.length > 0 && (
      <div className="grid grid-cols-2 gap-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="aspect-square rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden border border-gray-600 hover:border-karla-blue transition-colors"
          >
            {img.emoji ? (
              <span className="text-4xl">{img.emoji}</span>
            ) : (
              <span className="text-xs text-gray-500">{img.placeholder}</span>
            )}
          </div>
        ))}
      </div>
    )}
  </motion.div>
);

const HobbiesWindow = () => {
  const hobbies = [
    {
      icon: Book,
      title: 'Lectura & Escritura',
      description: 'Ficción, fantasía, ciencia ficción, y más. Creando mundos con palabras.',
      color: 'from-blue-500 to-indigo-600',
      images: [
        { url: './imagenes/lectura1.jpg' },
        { url: '/imagenes/lectura2.jpg' },
        { url: '/imagenes/lectura3.jpg' },
        { url: '/imagenes/lectura4.jpg' }
      ],
      delay: 0.1
    },
    {
      icon: Music,
      title: 'Música Electrónica',
      description: 'Calvin Harris, David Guetta, Martin Garrix, Taylor Swift, Lana del Rey.',
      color: 'from-purple-500 to-pink-600',
      images: [
        { url: '/imagenes/musica1.jpg' },
        { url: '/imagenes/musica2.jpg' },
        { url: '/imagenes/musica3.jpg' },
        { url: '/imagenes/musica4.jpg' }
      ],
      delay: 0.2
    },
    {
      icon: Camera,
      title: 'Series & Películas',
      description: 'Maratones épicas de HOTD, GOT, Stranger Things y Maxton Hall.',
      color: 'from-red-500 to-orange-500',
      images: [
        { url: '/imagenes/series1.jpg' },
        { url: '/imagenes/series2.jpg' },
        { url: '/imagenes/series3.jpg' },
        { url: '/imagenes/series4.jpg' }
      ],
      delay: 0.3
    },
    {
      icon: Sparkles,
      title: 'Aprender Cosas Nuevas',
      description: 'Lenguajes y nuevas tecnologías, idiomas, costumbres y más.',
      color: 'from-green-500 to-teal-500',
      images: [
        { url: '/imagenes/aprender1.jpg' },
        { url: '/imagenes/aprender2.jpg' },
        { url: '/imagenes/aprender3.jpg' },
        { url: '/imagenes/aprender4.jpg' }
      ],
      delay: 0.4
    },
    {
      icon: Palette,
      title: 'Arte & Creatividad',
      description: 'Bailar, cantar, tocar el violin y aprender piano.',
      color: 'from-yellow-500 to-orange-600',
      images: [
        { url: '/imagenes/bailar1.jpg' },
        { url: '/imagenes/bailar2.jpg' },
        { url: '/imagenes/bailar3.jpg' },
        { url: '/imagenes/bailar4.jpg' }
      ],
      delay: 0.5
    },
    {
      icon: Heart,
      title: 'Café & Conversaciones',
      description: 'Me gusta un buen café un sábado por la tarde acompañado de una buena conversación.',
      color: 'from-amber-600 to-amber-800',
      images: [
        { url: '/imagenes/cafe1.jpg' },
        { url: '/imagenes/cafe2.jpg' },
        { url: '/imagenes/cafe3.jpg' },
        { url: '/imagenes/cafe4.jpg' }
      ],
      delay: 0.6
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
          Hobbies.collection
        </h2>
        <p className="text-gray-400">
          Las cosas que me hacen feliz fuera del código ✨
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, idx) => (
          <HobbyCard key={idx} {...hobby} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 p-4 glassmorphism rounded-lg border-l-4 border-purple-500"
      >
        <p className="text-sm text-gray-300 italic">
          "Soy firme creyente de que la vida no es solo trabajo. Es el balance perfecto entre creatividad, diversión y conexión
          entre tecnología y humanidad, entre trabajo y pasiones."
        </p>
      </motion.div>
    </div>
  );
};

export default HobbiesWindow;
