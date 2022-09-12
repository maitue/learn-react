//import { useState, createContext } from "react";
import { useContext } from "react";
import { ThemeProvider, ThemeContext} from "./ThemeContext";
import Content from "./Content";
import './Content.css';

//export const ThemeContext =createContext()

function UseContext() {
    /*const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light':'dark')
    }*/
    const context = useContext(ThemeContext)
    console.log(context)
    return ( 
        
        /*
        <ThemeContext.Provider value={theme}>
            <div>
                <button onClick={toggleTheme}> toggle theme</button>
                <Content />
            </div>
        </ThemeContext.Provider>
        */
        <ThemeProvider>
            <div>
                
                <Content />
            </div>
        </ThemeProvider>

     );
}

export default UseContext;