import React from 'react';
import { motion } from 'framer-motion';
import animations from '../theme/animations';

const AnimatedText = ({ 
  text, 
  className = '', 
  animation = 'letters', 
  delay = 0 
}) => {
  // 獲取指定動畫配置，如果找不到則使用默認配置
  const animationConfig = animations.textAnimations[animation] || animations.textAnimations.letters;
  
  // 根據動畫類型決定渲染方式
  switch (animation) {
    case 'letters':
      // 逐字母動畫
      const letterVariants = {
        initial: animationConfig.initial,
        animate: animationConfig.animate
      };
      
      return (
        <motion.span 
          className={className}
          initial="initial"
          animate="animate"
          transition={{ 
            delayChildren: delay,
            ...animationConfig.transition
          }}
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={letterVariants}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      );
      
    case 'words':
      // 逐詞動畫
      const wordVariants = {
        initial: animationConfig.initial,
        animate: animationConfig.animate
      };
      
      return (
        <motion.span 
          className={className}
          initial="initial"
          animate="animate"
          transition={{ 
            delayChildren: delay,
            ...animationConfig.transition
          }}
        >
          {text.split(' ').map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              variants={wordVariants}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      );
      
    case 'blur':
    case 'glow':
      // 整體淡入/模糊動畫
      return (
        <motion.span 
          className={className}
          initial={animationConfig.initial}
          animate={animationConfig.animate}
          transition={{ 
            delay,
            ...animationConfig.transition
          }}
        >
          {text}
        </motion.span>
      );
      
    case 'typewriter':
      // 打字機效果
      return (
        <div className={className} style={{ position: 'relative' }}>
          <span>{text}</span>
          <motion.span
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              background: 'currentColor',
              zIndex: 1,
              transformOrigin: 'right',
            }}
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            transition={{ 
              delay,
              ...animationConfig.transition
            }}
          />
        </div>
      );
      
    default:
      // 如果沒有匹配的動畫類型，直接返回文本
      return <span className={className}>{text}</span>;
  }
};

export default AnimatedText;