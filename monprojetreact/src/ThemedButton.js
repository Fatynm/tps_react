import { useTheme } from './ThemeContext';
import ThemedMessage from './ThemedMessage';


const ThemedButton = () =>{
    const{theme,toggleTheme,backgroundColor}=useTheme();
    return(
        <div  style={{
            textAlign: 'center',
              marginTop: '0px',
              transition: 'background-color 0.5s',
              backgroundColor,
              minHeight: '300vh',  }}>
        <button
        style={{backgroundColor: theme ==='light' ? 'orange' : 'yellow',
        color: theme=== 'light' ? 'white' :  'black',marginTop:'100px', width:200, height:100,fontSize:'20px',fontWeight:'bold'}}
        onClick={toggleTheme}>
            Toggle Theme
        </button>
        <ThemedMessage/>
        </div>
    
    );
};
export default ThemedButton;