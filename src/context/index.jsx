import { createContext, useEffect, useState } from "react";

export const themeContext = createContext('light');

export function GlobalState({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark');
    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [theme])
    return <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>
}