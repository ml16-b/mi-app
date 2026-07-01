import { useState, useRef } from 'react';

export default function Cronometro() {
    const [segundos, setSegundos] = useState(0);

    const intervalRef = useRef(null);

    const iniciar = () => {
        if (intervalRef.current !== null) return;

        intervalRef.current = setInterval(() => {
            setSegundos(s => s + 1);
        }, 1000);
    };

    const detener = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const resetear = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        };

        setSegundos(s => 0);
    };

    return (
        <div>
            <h1>Tiempo: {segundos}s</h1>
            <button onClick={iniciar}>Iniciar</button>
            <button onClick={detener}>Detener</button>
            <button onClick={resetear}>Resetear</button>
        </div>
    );
}