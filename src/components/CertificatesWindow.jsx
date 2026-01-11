import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, TrendingUp } from 'lucide-react';

const CertificateCard = ({ title, issuer, year, category, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    className="glassmorphism rounded-lg p-4 hover:scale-105 transition-transform duration-300 cursor-pointer group"
  >
    <div className="flex items-start gap-3">
      <div className="p-2 rounded bg-gradient-to-br from-yellow-500 to-orange-500">
        <Award className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-white mb-1 group-hover:text-karla-accent transition-colors">
          {title}
        </h4>
        <p className="text-xs text-gray-400">{issuer}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="px-2 py-0.5 text-xs rounded bg-karla-dark text-karla-green border border-karla-green/30">
            {year}
          </span>
          <span className="px-2 py-0.5 text-xs rounded bg-karla-dark text-karla-purple border border-karla-purple/30">
            {category}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

const CertificatesWindow = () => {
  const certificates = [
    {
      title: 'Lengua de Señas Peruana (LSP)',
      issuer: 'Instituto de Desarrollo Profesional S.A.C. - ESPED',
      year: '2024',
      category: 'Inclusión Social',
      delay: 0.1
    },
    {
      title: 'Gestión y Administración pública',
      issuer: 'Instituto de Desarrollo Profesional S.A.C. - ESPED',
      year: '2024',
      category: 'Administración',
      delay: 0.1
    },
    {
      title: 'II Seminario Internacional en Ingeniría de Software, Ciberseguridad e IA',
      issuer: 'Universidad La Salle',
      year: '2024',
      category: 'Seminarios',
      delay: 0.15
    },
    {
      title: 'Asistencia a evento de alta tecnología - Hackathon 2025',
      issuer: 'Peru Hub Digital Universitario',
      year: '2025',
      category: 'Hackathon',
      delay: 0.2
    },
    {
      title: 'Participación Proyecto LungTrack - Hackathon 2025',
      issuer: 'NASA Space Apps Challenge - Arequipa',
      year: '2025',
      category: 'Hackathon',
      delay: 0.2
    },
    {
      title: 'Participación Proyecto YachAI - Hackathon 2025',
      issuer: 'Hack4Edu - Arequipa',
      year: '2025',
      category: 'Hackathon',
      delay: 0.2
    },
    {
      title: 'Participación Proyecto HuellitasAI - Hackathon 2025',
      issuer: 'Proyectos Colaborativos UNSA',
      year: '2025',
      category: 'Metodologías ágiles y desarrollo de software',
      delay: 0.3
    },
    {
      title: 'Participación en IEEE/WIE Events',
      issuer: 'IEEE - WIE UNSA Student Branch',
      year: '2025',
      category: 'Voluntariado y liderazgo',
      delay: 0.35
    },
  ];

  const stats = [
    { icon: Award, label: 'Certificaciones', value: '15+', color: 'text-yellow-400' },
    { icon: Star, label: 'Reconocimientos', value: '8', color: 'text-purple-400' },
    { icon: TrendingUp, label: 'Skills Activas', value: '20+', color: 'text-green-400' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
          Certificados.zip
        </h2>
        <p className="text-gray-400">
          Descomprimiendo logros y aprendizaje continuo...
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glassmorphism rounded-lg p-4 text-center"
          >
            <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert, idx) => (
          <CertificateCard key={idx} {...cert} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 p-4 glassmorphism rounded-lg border-l-4 border-karla-accent"
      >
        <p className="text-sm text-gray-300 italic">
          "El aprendizaje es un viaje sin fin. Cada certificado es un checkpoint,
          no el destino final."
        </p>
      </motion.div>
    </div>
  );
};

export default CertificatesWindow;
