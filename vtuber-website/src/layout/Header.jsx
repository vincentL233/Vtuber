import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import ThemeSwitcher from '../components/UI/ThemeSwitcher';
import { AudioControls } from '../hooks/useAudio';
import vtuberData from '../data/vtuberData';

const Header = ({ activeTab, onNavItemClick, isMenuOpen, setIsMenuOpen }) => {
  const { theme } = useTheme();
  
  // 導航項目
  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'about', label: '關於我' },
    { id: 'videos', label: '影片' },
    { id: 'schedule', label: '直播時間表' },
    { id: 'merchandise', label: '周邊商品' },
    { id: 'community', label: '社群' },
  ];
  
  // 動畫變量
  const navItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.3,
      }
    })
  };
  
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <header className="sticky top-0 z-50"
      style={{
        backgroundColor: theme.colors.navigation.background,
        backdropFilter: theme.colors.navigation.backgroundBlur,
        borderBottom: `1px solid ${theme.colors.border}`
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <motion.span 
              className="text-2xl font-bold text-gradient"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {vtuberData.name}
            </motion.span>
          </div>
          
          {/* 桌面版導航 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.button 
                key={item.id}
                onClick={() => onNavItemClick(item.id)}
                className="relative px-2 py-1 transition-colors hover:text-purple-400"
                style={{
                  color: activeTab === item.id 
                    ? theme.colors.navigation.activeText 
                    : theme.colors.navigation.text
                }}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </motion.button>
            ))}
            
            <div className="ml-4 flex items-center space-x-3">
              <ThemeSwitcher />
              <AudioControls />
            </div>
          </nav>
          
          {/* 手機版導航按鈕 */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeSwitcher />
            <AudioControls />
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ color: theme.colors.navigation.text }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
        
        {/* 手機版下拉菜單 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item, i) => (
                  <motion.button 
                    key={item.id}
                    onClick={() => onNavItemClick(item.id)}
                    className="py-2 px-4 rounded-lg transition-colors hover:bg-purple-900 hover:bg-opacity-30"
                    style={{
                      color: activeTab === item.id 
                        ? theme.colors.navigation.activeText 
                        : theme.colors.navigation.text,
                      backgroundColor: activeTab === item.id 
                        ? 'rgba(125, 40, 202, 0.2)' 
                        : 'transparent'
                    }}
                    variants={navItemVariants}
                    custom={i}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;