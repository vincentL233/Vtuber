import React from 'react';
import { motion } from 'framer-motion';
import animations from '../theme/animations';

const PageTransition = ({ children, animation = 'starField' }) => {
  // 獲取指定動畫配置，如果找不到則使用默認配置
  const animationConfig = animations.pageTransitions[animation] || animations.pageTransitions.fade;
  
  return (
    <motion.div
      initial={animationConfig.initial}
      animate={animationConfig.animate}
      exit={animationConfig.exit}
      transition={animationConfig.transition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;