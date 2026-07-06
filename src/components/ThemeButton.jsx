import { useTheme } from "../context/ThemeContext";

export default function ThemeButton() {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={({
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff'
            })}
        > Cambiar a modo {theme === 'light' ? 'Oscuro' : 'Claro'}
        </button>
    );
}