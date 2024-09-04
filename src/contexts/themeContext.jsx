import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Dark, Light } from '../constants/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const defaultTheme = useRef('Dark');
    const [currentTheme, setCurrentTheme] = useState(defaultTheme.current);

    useEffect(() => {
        if (localStorage.getItem('theme')) {
            const savedTheme = localStorage.getItem('theme');
            defaultTheme.current = savedTheme;
            setCurrentTheme(savedTheme);
        }
    }, []);

    const theme = () => {
        return currentTheme === 'Light' ? Light : Dark;
    };

    const toggleTheme = () => {
        const newTheme = currentTheme === 'Dark' ? 'Light' : 'Dark';
        setCurrentTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    const getDefault = () => {
        if (currentTheme === "Dark") {
            return true
        } else {
            return false
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, getDefault }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => useContext(ThemeContext);