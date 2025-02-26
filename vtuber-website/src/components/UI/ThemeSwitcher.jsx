import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const ThemeSwitcher = () => {
  const { theme } = useTheme();
  
  return (
    <motion.button
      className="p-2 rounded-full focus:outline-none"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-16c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59 8-8 8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
      </svg>
    </motion.button>
  );
};

export default ThemeSwitcher;