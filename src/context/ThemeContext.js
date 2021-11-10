import { createContext } from "react";


export const themes = {
    light: {
        backgroundColor: "eeeeec",
        color: "#0e0e0c"
    },
    dark: {
        backgroundColor: "0e0e0c",
        color: "#eeeeec"
    }
};


export const ThemeContext = createContext(themes.light);