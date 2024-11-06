import React from 'react';
import { ThemeProvider} from './ThemeContext';
import ThemedButton from './ThemedButton';



const App = () => {
  

  return (
    <ThemeProvider>
    <ThemedButton />
    </ThemeProvider>
  );
};

export default App;














// import { ThemeProvider } from './ThemeContext';
// import ThemedButton from './ThemedButton';
// import ThemedMessage from './ThemedMessage';


// const App=() => { return(
//     <ThemeProvider>
//         <div style={{textAlign: 'center',marginTop: '50px'}}>
//         <ThemedButton/>
//         <ThemedMessage/>
//         </div>
//         </ThemeProvider>

// );
// };



// export default App;
