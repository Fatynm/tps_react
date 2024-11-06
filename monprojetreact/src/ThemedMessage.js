import { useTheme } from './ThemeContext';
const ThemedMessage=()=>{
    const {theme}=useTheme();
    return (
        <p style={{color: theme=== 'light' ? '#333' : '#fff',fontSize:'20px',fontStyle:'italic',fontWeight:'bold'}}>
        this is a themed message.
        </p>
        
    );
};
export default ThemedMessage;
