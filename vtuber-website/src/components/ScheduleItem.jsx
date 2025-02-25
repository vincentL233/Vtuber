import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const ScheduleItem = ({ item, index = 0 }) => {
  const { theme } = useTheme();
  
  // 動畫配置
  const itemVariants = {
    initial: { 
      opacity: 0, 
      x: -20 
    },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1 + 0.1
      }
    },
    hover: {
      backgroundColor: 'rgba(125, 40, 202, 0.2)',
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };
  
  // 圖標動畫
  const iconVariants = {
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
        duration: 0.3
      }
    }
  };
  
  return (
    <motion.div 
      className="flex items-center p-4 rounded-lg"
      style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)' }}
      variants={itemVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <motion.div 
        className="bg-purple-600 text-white p-3 rounded-lg mr-4 flex-shrink-0"
        variants={iconVariants}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </motion.div>
      <div>
        <p className="font-bold" style={{ color: theme.colors.text.primary }}>{item.day}</p>
        <p style={{ color: theme.colors.primary.light }}>{item.time}</p>
        <p className="text-sm" style={{ color: theme.colors.text.tertiary }}>{item.content}</p>
        <button className="mt-2 text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
          加入行事曆
        </button>
      </div>
    </motion.div>
  );
};

export default ScheduleItem;