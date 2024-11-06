import React from 'react';
import { ThemeProvider} from './ThemeContext';
import ThemedButton from './ThemedButton';



const Ex5 = () => {
  

  return (
    <ThemeProvider>
    <ThemedButton />
    </ThemeProvider>
  );
};

export default Ex5;