import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type ThemeContexts = {
    theme: string;
    setTheme: (newTheme: string) => void;
}
const STORAGE_KEY = 'themeContextKey';

export const ThemeContexts = createContext<ThemeContexts | null>(null);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState( localStorage.getItem(STORAGE_KEY) || 'light' );

        useEffect(() => {
            localStorage.setItem(STORAGE_KEY, theme)
        }, [theme]);

        return(
            <ThemeContexts.Provider value={{theme, setTheme}}>
                {children}
            </ThemeContexts.Provider>
        );
}

export const useTheme = () => useContext(ThemeContexts);