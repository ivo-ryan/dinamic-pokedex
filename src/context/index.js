import { createContext, useState } from "react"

export const  themes = {
    light:{
        headerBackground: "rgb(99, 99, 199)",
        divBackground:"rgb(187, 173, 229)",
        cardBackground:" rgb(124, 136, 199)",
        color: "black"
    },
    dark:{
        headerBackground: "rgb(28, 78, 101)",
        divBackground: "rgb(29, 18, 63)",
        cardBackground:" rgb(47, 28, 101)",
        color:"white"
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme , setTheme ] = useState(themes.light);
    
    return(
        <ThemeContext.Provider value={{theme, setTheme}} >
        {props.children}
        </ThemeContext.Provider>
    )
   
};