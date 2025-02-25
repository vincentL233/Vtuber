import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import animations from '../theme/animations';

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeUp', 
  threshold = 0.1, 
  delay = 0 
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // 獲取指定動畫配置，如果找不到則使用默認配置
  const animationConfig = animations.scrollAnimations[animation] || animations.scrollAnimations.fadeUp;
  
  // 使用自定義hook處理滾動檢測
  useScrollAnimation(ref, threshold, isVisible, () => {
    if (!isVisible) {
      setIsVisible(true);
      controls.start('animate');
    }
  });
  
  // 修改動畫配置，添加延遲
  const updatedTransition = {
    ...animationConfig.transition,
    delay
  };
  
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={{
        initial: animationConfig.initial,
        animate: animationConfig.animate
      }}
      transition={updatedTransition}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;