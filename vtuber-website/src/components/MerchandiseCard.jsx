import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { useAudio } from '../hooks/useAudio';

const MerchandiseCard = ({ item, index = 0 }) => {
  const { theme } = useTheme();
  const { playSound } = useAudio();
  
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
        delay: index * 0.1 + 0.2
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
  
  // 圖片動畫
  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };
  
  // 按鈕動畫
  const buttonVariants = {
    initial: {
      boxShadow: '0 0 0 rgba(125, 40, 202, 0)'
    },
    hover: {
      boxShadow: '0 0 10px rgba(125, 40, 202, 0.5)',
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };
  
  const handleAddToCart = () => {
    playSound('click');
    // 添加到購物車的邏輯（實際項目中可以觸發Redux action等）
    alert(`已將${item.name}加入購物車！`);
  };
  
  return (
    <motion.div 
      className="card-bg rounded-lg overflow-hidden"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div className="relative overflow-hidden">
        <motion.img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-40 object-cover"
          variants={imageVariants}
          whileHover="hover"
        />
        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
          熱賣中
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1" style={{ color: theme.colors.text.primary }}>{item.name}</h3>
        <p className="text-xl mb-4" style={{ color: theme.colors.secondary.light }}>{item.price}</p>
        <motion.button 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors flex items-center justify-center"
          variants={buttonVariants}
          whileHover="hover"
          onClick={handleAddToCart}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          加入購物車
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MerchandiseCard;