import React from 'react';
import { useTheme } from '../hooks/useTheme';
import vtuberData from '../data/vtuberData';
import SocialIcons from '../components/SocialIcons';

const Footer = ({ onNavItemClick }) => {
  const { theme } = useTheme();
  
  return (
    <footer className="py-6 mt-12"
      style={{
        backgroundColor: theme.colors.navigation.background,
        backdropFilter: theme.colors.navigation.backgroundBlur,
        color: theme.colors.text.secondary,
        borderTop: `1px solid ${theme.colors.border}`
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-gradient mb-4">
              {vtuberData.name}
            </h2>
            <p className="text-gray-400 max-w-md mb-6">{vtuberData.tagline}</p>
            <SocialIcons />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.text.primary }}>導航</h3>
              <ul className="space-y-2">
                <li><button onClick={() => onNavItemClick('home')} className="text-gray-400 hover:text-purple-400 transition-colors">首頁</button></li>
                <li><button onClick={() => onNavItemClick('about')} className="text-gray-400 hover:text-purple-400 transition-colors">關於我</button></li>
                <li><button onClick={() => onNavItemClick('videos')} className="text-gray-400 hover:text-purple-400 transition-colors">影片</button></li>
                <li><button onClick={() => onNavItemClick('schedule')} className="text-gray-400 hover:text-purple-400 transition-colors">直播時間表</button></li>
                <li><button onClick={() => onNavItemClick('merchandise')} className="text-gray-400 hover:text-purple-400 transition-colors">周邊商品</button></li>
                <li><button onClick={() => onNavItemClick('community')} className="text-gray-400 hover:text-purple-400 transition-colors">社群</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.text.primary }}>社群</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Discord 伺服器</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">粉絲作品</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">會員專區</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">常見問題</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.text.primary }}>聯絡</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">商業合作</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">意見反饋</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">隱私政策</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">使用條款</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2025 {vtuberData.name} | 虛擬主播 | 設計與開發：星光工作室</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;