import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause, SkipForward, SkipBack, Volume2, Heart } from 'lucide-react';

const MusicPlayerWindow = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(35);
  const [isFavorite, setIsFavorite] = useState(false);

  const playlist = [
    { title: 'Summer', artist: 'Calvin Harris', duration: '3:44', genre: 'Electronic' },
    { title: 'Levels', artist: 'Avicii', duration: '3:18', genre: 'Electronic' },
    { title: 'Animals', artist: 'Martin Garrix', duration: '5:04', genre: 'Electronic' },
    { title: 'Titanium', artist: 'David Guetta ft. Sia', duration: '4:05', genre: 'Electronic' },
    { title: 'Wake Me Up', artist: 'Avicii', duration: '4:09', genre: 'Electronic' },
    { title: 'Clarity', artist: 'Zedd ft. Foxes', duration: '4:32', genre: 'Electronic' },
    { title: 'Don\'t You Worry Child', artist: 'Swedish House Mafia', duration: '3:32', genre: 'Electronic' },
    { title: 'Spectre', artist: 'Alan Walker', duration: '3:12', genre: 'Electronic' },
  ];

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleNext = () => setCurrentTrack((prev) => (prev + 1) % playlist.length);
  const handlePrev = () => setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-2">
          MusicPlayer.exe
        </h2>
        <p className="text-gray-400">
          Mi soundtrack favorito - :( No me alcanzo el tiempo para poner todas las canciones que me gustan
        </p>
      </div>

      {/* Now Playing Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glassmorphism rounded-xl p-6 mb-6 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-red-600/20"
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="w-24 h-24 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
          >
            <Music className="w-12 h-12 text-white" />
          </motion.div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">
              {playlist[currentTrack].title}
            </h3>
            <p className="text-gray-400 mb-2">{playlist[currentTrack].artist}</p>
            <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              {playlist[currentTrack].genre}
            </span>
          </div>

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full h-2 bg-karla-dark rounded-full overflow-hidden mb-2">
            <motion.div
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>1:32</span>
            <span>{playlist[currentTrack].duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <SkipBack className="w-5 h-5 text-white" />
          </button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlayPause}
            className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-0.5" />
            )}
          </motion.button>
          
          <button
            onClick={handleNext}
            className="p-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <SkipForward className="w-5 h-5 text-white" />
          </button>
        </div>
      </motion.div>

      {/* Playlist */}
      <div className="glassmorphism rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Coding Playlist</h3>
          <span className="text-sm text-gray-400">{playlist.length} canciones</span>
        </div>
        
        <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
          {playlist.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setCurrentTrack(idx)}
              className={`p-3 rounded-lg cursor-pointer transition-all ${
                currentTrack === idx
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                  : 'hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className={`w-8 h-8 rounded flex items-center justify-center ${
                    currentTrack === idx ? 'bg-purple-500' : 'bg-karla-dark'
                  }`}>
                    {currentTrack === idx && isPlaying ? (
                      <div className="flex gap-0.5">
                        <motion.div
                          animate={{ height: ['4px', '12px', '4px'] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="w-1 bg-white rounded-full"
                        />
                        <motion.div
                          animate={{ height: ['8px', '4px', '8px'] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                          className="w-1 bg-white rounded-full"
                        />
                        <motion.div
                          animate={{ height: ['4px', '12px', '4px'] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                          className="w-1 bg-white rounded-full"
                        />
                      </div>
                    ) : (
                      <Music className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      currentTrack === idx ? 'text-white' : 'text-gray-300'
                    }`}>
                      {track.title}
                    </p>
                    <p className="text-xs text-gray-500">{track.artist}</p>
                  </div>
                </div>
                
                <span className="text-xs text-gray-500">{track.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-4 glassmorphism rounded-lg border-l-4 border-purple-500"
      >
        <div className="flex items-center gap-2 mb-2">
          <Volume2 className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-semibold text-white">Pro Tip</span>
        </div>
        <p className="text-sm text-gray-400">
          A quien no le gusta la música a fuerte volumen meintrs hace tareitas :)
        </p>
      </motion.div>
    </div>
  );
};

export default MusicPlayerWindow;
