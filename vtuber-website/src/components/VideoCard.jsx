import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const VideoCard = ({ video, index = 0 }) => {
  const { theme } = useTheme();
  
  // 卡片動畫配置
  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  };
  
  // 播放按鈕動畫
  const playButtonVariants = {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };
  
  return (
    <motion.div 
      className="card-bg rounded-lg overflow-hidden"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full object-cover aspect-video"
        />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
          variants={playButtonVariants}
          initial="initial"
          whileHover="hover"
        >
          <div className="bg-purple-600 text-white p-3 rounded-full">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </div>
        </motion.div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>
          {video.title}
        </h3>
        <div className="flex items-center text-sm">
          <div className="flex items-center mr-4">
            <svg className="w-4 h-4 mr-1" 
              style={{ color: theme.colors.secondary.main }}
              fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
            {(Math.random() * 100).toFixed(1)}K
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
            </svg>
            {Math.floor(Math.random() * 60) + 1}:00
          </div>
        </div>
        <button className="mt-3 text-purple-400 hover:text-purple-300 transition-colors">
          觀看影片
        </button>
      </div>
    </motion.div>
  );
};

export default VideoCard;
