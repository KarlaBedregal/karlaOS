import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Draggable from 'react-draggable';
import { X, Minimize2, Maximize2 } from 'lucide-react';

const Window = ({ id, title, children, onClose, isActive, onFocus, zIndex }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const nodeRef = useRef(null);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const windowVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  if (isMaximized) {
    return (
      <motion.div
        ref={nodeRef}
        variants={windowVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-4 md:inset-8 glassmorphism rounded-lg overflow-hidden window-shadow ring-2 ring-karla-blue"
        style={{ zIndex }}
        onClick={onFocus}
      >
        {/* Barra de título */}
        <div className="bg-gradient-to-r from-karla-dark to-karla-darker border-b border-gray-700 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              />
              <button
                onClick={(e) => e.stopPropagation()}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleMaximize();
                }}
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
              />
            </div>
            <span className="text-sm font-mono text-gray-300 ml-3">{title}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleMaximize();
              }}
              className="p-1 hover:bg-gray-700 rounded transition-colors"
            >
              <Maximize2 className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-1 hover:bg-red-500/20 rounded transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="h-[calc(100%-2.5rem)] overflow-y-auto p-6 bg-karla-darker/50">
          {children}
        </div>
      </motion.div>
    );
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-drag-handle"
      defaultPosition={{ x: 0, y: 0 }}
      bounds="parent"
    >
      <motion.div
        ref={nodeRef}
        variants={windowVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`w-[95vw] md:w-[800px] max-w-[95vw] glassmorphism rounded-lg overflow-hidden window-shadow ${
          isActive ? 'ring-2 ring-karla-blue' : ''
        }`}
        style={{ zIndex }}
        onClick={onFocus}
      >
        {/* Barra de título - ARRASTRABLE */}
        <div className="window-drag-handle bg-gradient-to-r from-karla-dark to-karla-darker border-b border-gray-700 px-4 py-2 flex items-center justify-between cursor-move">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              />
              <button
                onClick={(e) => e.stopPropagation()}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleMaximize();
                }}
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
              />
            </div>
            <span className="text-sm font-mono text-gray-300 ml-3">{title}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleMaximize();
              }}
              className="p-1 hover:bg-gray-700 rounded transition-colors"
            >
              <Maximize2 className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-1 hover:bg-red-500/20 rounded transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="max-h-[70vh] overflow-y-auto p-6 bg-karla-darker/50">
          {children}
        </div>
      </motion.div>
    </Draggable>
  );
};

export default Window;
