import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import vtuberData from '../data/vtuberData';
import VideoCard from '../components/VideoCard';
import ScheduleItem from '../components/ScheduleItem';
import MerchandiseCard from '../components/MerchandiseCard';
import Live2DModel from '../components/Live2DModel';
import ScrollAnimation from '../animations/ScrollAnimation';
import AnimatedText from '../animations/AnimatedText';

const HomePage = () => {
  const { theme } = useTheme();
  
  return (
    <div>
      {/* 英雄區塊 */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
        <div className="lg:w-1/2">
          <AnimatedText 
            text={vtuberData.name}
            className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
            animation="glow"
          />
          <motion.p 
            className="text-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ color: theme.colors.primary.light }}
          >
            {vtuberData.tagline}
          </motion.p>
          <motion.p 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ color: theme.colors.text.secondary }}
          >
            {vtuberData.description}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href={vtuberData.socialLinks.youtube} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"></path>
              </svg>
              訂閱
            </a>
            <a href={vtuberData.socialLinks.twitch} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"></path>
              </svg>
              追蹤
            </a>
          </motion.div>
        </div>
        <motion.div 
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Live2D模型可以替換掉這個靜態圖片 */}
          <div className="w-full h-[500px] flex items-center justify-center">
            <Live2DModel 
              modelPath="/assets/live2d/haru/haru.model.json" 
              width={400} 
              height={500} 
            />
          </div>
        </motion.div>
      </div>
      
      {/* 最新影片 */}
      <ScrollAnimation>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: theme.colors.text.primary }}>
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            最新影片
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vtuberData.videos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-full transition-all"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              查看更多影片
            </button>
          </div>
        </div>
      </ScrollAnimation>
      
      {/* 直播時間表 */}
      <ScrollAnimation>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: theme.colors.text.primary }}>
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            直播時間表
          </h2>
          <div className="card-bg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vtuberData.scheduleItems.slice(0, 2).map((item, index) => (
                <ScheduleItem key={index} item={item} index={index} />
              ))}
            </div>
            <div className="text-center mt-6">
              <button 
                className="text-purple-400 hover:text-purple-300 transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                查看完整時間表 →
              </button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      
      {/* 周邊商品 */}
      <ScrollAnimation>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: theme.colors.text.primary }}>
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11a4 4 0 11-8 0 4 4 0 018 0zm-4-7a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            周邊商品
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vtuberData.merchandise.map((item, index) => (
              <MerchandiseCard key={item.id} item={item} index={index} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-full transition-all"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              瀏覽所有商品
            </button>
          </div>
        </div>
      </ScrollAnimation>
      
      {/* 訂閱區塊 */}
      <ScrollAnimation>
        <div className="mt-20 card-bg p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-gradient">成為星光使者</h2>
          <p className="text-lg mb-6" style={{ color: theme.colors.text.secondary }}>
            訂閱電子報獲得最新直播資訊和優惠通知！
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="你的電子郵件" 
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ 
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: `1px solid ${theme.colors.border}`,
                  color: theme.colors.text.primary
                }}
              />
              <button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                訂閱
              </button>
            </div>
          </form>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default HomePage;