import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { useAudio } from '../hooks/useAudio';
import vtuberData from '../data/vtuberData';

const SocialIcons = ({ size = 'md' }) => {
  const { theme } = useTheme();
  const { playSound } = useAudio();
  
  // 根據尺寸調整圖標大小
  const getIconSize = () => {
    switch (size) {
      case 'sm': return 'w-4 h-4';
      case 'lg': return 'w-6 h-6';
      case 'xl': return 'w-8 h-8';
      default: return 'w-5 h-5';
    }
  };
  
  // 動畫配置
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const iconVariants = {
    initial: { 
      opacity: 0,
      y: 10
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      y: -3,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1
      }
    }
  };
  
  // 社交平台配置
  const socialPlatforms = [
    { 
      id: 'youtube', 
      name: 'YouTube', 
      url: vtuberData.socialLinks.youtube,
      color: '#FF0000',
      icon: (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"></path>
        </svg>
      )
    },
    { 
      id: 'twitch', 
      name: 'Twitch', 
      url: vtuberData.socialLinks.twitch,
      color: '#6441A4',
      icon: (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"></path>
        </svg>
      )
    },
    { 
      id: 'twitter', 
      name: 'Twitter', 
      url: vtuberData.socialLinks.twitter,
      color: '#1DA1F2',
      icon: (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
        </svg>
      )
    },
    { 
      id: 'instagram', 
      name: 'Instagram', 
      url: vtuberData.socialLinks.instagram,
      color: '#E1306C',
      icon: (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
        </svg>
      )
    }
  ];
  
  const handleClick = (platform) => {
    playSound('click');
    window.open(platform.url, '_blank');
  };
  
  return (
    <motion.div 
      className="flex space-x-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {socialPlatforms.map(platform => (
        <motion.a
          key={platform.id}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          onMouseEnter={() => playSound('hover')}
          onClick={(e) => {
            e.preventDefault();
            handleClick(platform);
          }}
          style={{
            color: theme.id === 'dark' || theme.id === 'space' ? '#9CA3AF' : platform.color,
            opacity: 0.8
          }}
        >
          {platform.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;