import { createContext, useState, useContext } from "react";

// 1. Crear el contexto
const ThemeContext = createContext(null);

// 2. Crear el componente provider (que envuelve los componentes que usaran los datos)
export function ThemeProvider({ children }) {
    //Guardamos estado global
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((current) => (current === 'light' ? 'dark' : 'light'));
    };

    // Valor que compartimos con toda la app. Empaqueta tanto el estado actual (theme) como la función para cambiarlo.
    const contextValue = {
        theme,
        toggleTheme
    };

    return (
        // Se envuelven los hijos con el Provider y le pasamos el valor
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

// 3. Crear custom hook para consumir
export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new error("useTheme debe usarse dentro de un ThemeProvider");
    }

    return context;
};