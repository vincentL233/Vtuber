import React, { createContext, useContext, useState, useEffect } from 'react';

const themes = {
  space: {
    id: 'space',
    colors: {
      primary: { main: '#7928ca', light: '#9d5cff', dark: '#4c0099' },
      secondary: { main: '#ff1493', light: '#ff6eb5', dark: '#c60077' },
      background: '#070314',
      text: { primary: '#f9fafb', secondary: '#e5e7eb', tertiary: '#9ca3af' },
      navigation: { 
        background: 'rgba(7, 3, 20, 0.8)',
        backgroundBlur: 'blur(16px)',
        text: '#9ca3af',
        activeText: '#ffffff'
      },
      border: 'rgba(30, 41, 59, 0.3)'
    }
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.space);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);