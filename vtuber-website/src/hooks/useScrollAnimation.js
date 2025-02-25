import { useEffect } from 'react';

export const useScrollAnimation = (ref, threshold = 0.1, isVisible, callback) => {
  useEffect(() => {
    // 如果元素已經可見，則不再監聽
    if (isVisible) return;
    
    const currentRef = ref.current;
    
    // 創建 Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 當元素進入可視區域時
        if (entry.isIntersecting) {
          callback();
          
          // 停止觀察此元素（只觸發一次）
          observer.unobserve(currentRef);
        }
      },
      {
        root: null, // 視口作為根
        rootMargin: '0px',
        threshold // 可見度閾值
      }
    );
    
    // 開始觀察
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    // 清理函數
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold, isVisible, callback]);
};