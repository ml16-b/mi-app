import { useState } from "react";

export default function FormularioNombre() {
    const [nombre, setNombre] = useState('');

    const handleChange = (e) => {
        const valorMayusculas = e.target.value.toUpperCase();
        setNombre(valorMayusculas);
    };

    return (
        <form>
            <label>Tu nombre:</label>
            <input type="text" value={nombre} onChange={handleChange}/>

        <p>Escribiendo: {nombre}</p>
        </form>
    );
}