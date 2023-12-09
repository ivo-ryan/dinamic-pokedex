import { useContext } from "react"
import { ThemeContext, themes } from "../../context"
import { Moon, Sun } from "phosphor-react";
import { Button } from "./style";

export const ThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <Button onClick={() => setTheme( theme === themes.light ? themes.dark : themes.light)}>
            {theme === themes.light ? 
           <Sun /> :
           <Moon/>   }
        </Button>
        
    )
}