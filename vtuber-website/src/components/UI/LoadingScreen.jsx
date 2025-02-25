import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const LoadingScreen = () => {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('正在載入星空...');
  
  useEffect(() => {
    const loadingTexts = [
      '正在載入星空...',
      '繪製星辰中...',
      '準備畫筆與調色盤...',
      '調校麥克風音質...',
      '將要與你相見...'
    ];
    
    // 隨機更換載入文字
    const textInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setLoadingText(loadingTexts[randomIndex]);
    }, 1500);
    
    // 模擬載入進度
    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const nextProgress = prevProgress + Math.floor(Math.random() * 15);
        return nextProgress > 100 ? 100 : nextProgress;
      });
    }, 400);
    
    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-32 h-32 relative">
          {/* 旋轉星星 */}
          <motion.div 
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {[...Array(6)].map((_, i) => (
                <motion.path
                  key={i}
                  initial={{ scale: 0.6, opacity: 0.6 }}
                  animate={{ scale: [0.6, 1, 0.6], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  d="M50 10 L54 40 L85 40 L60 60 L70 90 L50 70 L30 90 L40 60 L15 40 L46 40 Z"
                  fill="none"
                  stroke={i % 2 === 0 ? theme.colors.primary.light : theme.colors.secondary.light}
                  strokeWidth="1"
                  transform={`rotate(${i * 60} 50 50)`}
                />
              ))}
            </svg>
          </motion.div>
          
          {/* 中心光點 */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full"
            style={{ 
              backgroundColor: theme.colors.primary.light,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
      
      <motion.h1 
        className="text-2xl font-bold text-gradient mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        星空繪梨
      </motion.h1>
      
      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ color: theme.colors.text.secondary }}
      >
        {loadingText}
      </motion.p>
      
      <motion.div 
        className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 256 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <motion.div 
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{ width: `${progress}%` }}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      <motion.p
        className="mt-2 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{ color: theme.colors.text.tertiary }}
      >
        {progress}%
      </motion.p>
    </div>
  );
};

export default LoadingScreen;