import React, { useEffect, useRef } from 'react';

const Live2DModel = ({ modelPath, width, height }) => {
  const containerRef = useRef(null);
  
  // 實際項目中這裡會加載和顯示Live2D模型
  useEffect(() => {
    // 顯示佔位圖片
    const container = containerRef.current;
    if (!container) return;
    
    console.log(`Would load Live2D model from ${modelPath}`);
    
    // 在實際項目中，這部分會被替換為真正的Live2D模型加載代碼
    container.innerHTML = `
      <div style="width: ${width}px; height: ${height}px; background: #3a1078; 
                 display: flex; align-items: center; justify-content: center; 
                 color: white; border-radius: 16px;">
        <div>
          <div style="text-align: center; font-size: 20px;">星空繪梨</div>
          <div style="text-align: center; font-size: 14px; margin-top: 8px;">Live2D模型佔位圖</div>
        </div>
      </div>
    `;
  }, [modelPath, width, height]);
  
  return <div ref={containerRef} className="flex items-center justify-center" />;
};

export default Live2DModel;