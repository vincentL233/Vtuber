import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './layout/Header';
import Footer from './layout/Footer';
import PageContainer from './layout/PageContainer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VideosPage from './pages/VideosPage';
import SchedulePage from './pages/SchedulePage';
import MerchandisePage from './pages/MerchandisePage';
import CommunityPage from './pages/CommunityPage';
import StarBackground from './animations/StarBackground';
import LoadingScreen from './components/UI/LoadingScreen';
import { useTheme } from './hooks/useTheme';
import { useAudio } from './hooks/useAudio';
import PageTransition from './animations/PageTransition';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
  const { playSound, playBgm } = useAudio();
  
  // 初始加載
  useEffect(() => {
    // 模擬資源加載
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // 網站完全加載後延遲播放背景音樂
      setTimeout(() => {
        playBgm();
      }, 1000);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [playBgm]);
  
  // 點擊導航項
  const handleNavItemClick = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      playSound('click');
      setIsMenuOpen(false);
    }
  };
  
  // 渲染當前頁面
  const renderCurrentPage = () => {
    switch(activeTab) {
      case 'home':
        return (
          <PageTransition key="home">
            <HomePage />
          </PageTransition>
        );
      case 'about':
        return (
          <PageTransition key="about">
            <AboutPage />
          </PageTransition>
        );
      case 'videos':
        return (
          <PageTransition key="videos">
            <VideosPage />
          </PageTransition>
        );
      case 'schedule':
        return (
          <PageTransition key="schedule">
            <SchedulePage />
          </PageTransition>
        );
      case 'merchandise':
        return (
          <PageTransition key="merchandise">
            <MerchandisePage />
          </PageTransition>
        );
      case 'community':
        return (
          <PageTransition key="community">
            <CommunityPage />
          </PageTransition>
        );
      default:
        return (
          <PageTransition key="home">
            <HomePage />
          </PageTransition>
        );
    }
  };
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* 星空背景 */}
      <StarBackground density={2500} interactive={true} />
      
      {/* 頁首導航 */}
      <Header 
        activeTab={activeTab} 
        onNavItemClick={handleNavItemClick}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      {/* 主內容區 */}
      <PageContainer>
        <AnimatePresence mode="wait">
          {renderCurrentPage()}
        </AnimatePresence>
      </PageContainer>
      
      {/* 頁尾 */}
      <Footer onNavItemClick={handleNavItemClick} />
    </div>
  );
};

export default App;