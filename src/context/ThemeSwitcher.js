import React from "react";
import { useState } from "react/cjs/react.development";
import PageWrapper from "./PageWrapper";
import {ThemeContext, themes} from "./ThemeContext";


function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);

    const switchTheme = () => {
        setCurrentTheme(
            (prevCurrentTheme) => prevCurrentTheme === themes.light ? themes.dark : themes.light
        );
    };

    return (
        <div>
            <ThemeContext.Provider>
            <PageWrapper />
        </ThemeContext.Provider>
        <button onClick={switchTheme}>Switch theme</button>

        </div>
            
        
    );
}

export default ThemeSwitcher;