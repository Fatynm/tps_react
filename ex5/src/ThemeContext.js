import { createContext, useContext, useState } from 'react';

import React from 'react';

const ThemeContext = createContext();

const randomColor = () => {
  // Génération d'une couleur aléatoire en format hexadécimal
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [backgroundColor, setBackgroundColor] = useState(randomColor);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    setBackgroundColor(randomColor()); // Changez la couleur de fond lors du changement de thème
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, backgroundColor }}>
      {children}
    </ThemeContext.Provider>
  );
};





// const ThemeContext=createContext();

// export const useTheme =()=>{
//     const context=useContext(ThemeContext);
//     if(!context){
//         throw new Error('useTheme must be used within a ThemeProvider');
//     }
//     return context;

// };
// export const ThemeProvider=({children})=>{
//     const [theme, setTheme]=useState('light');
//     const toggleTheme=()=>{
//         setTheme((prevTheme) => (prevTheme ==='light' ? 'dark' : 'light'));
//     };
//     return(
//         <ThemeContext.Provider value={{theme,toggleTheme}}>
//             {children}
//         </ThemeContext.Provider>
//     );


// };