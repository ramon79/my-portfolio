import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const themeStyle = {
        backgroundColor: isDarkMode ? '#121212' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000',
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, toggleTheme, themeStyle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}