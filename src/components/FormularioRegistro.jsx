import { useState } from "react";

export default function FormularioRegistro() {
    const [datos, setDatos] = useState({ // Valor del campo
        nombre: '',
        email: '',
        password: '',
        aceptarTerminos: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target; // Más que el valor: toda la info del campo

        const valorFinal = type === 'checkbox' ? checked : value;

        setDatos((prevDatos) => ({
            ...prevDatos,
            [name]: valorFinal // Usar una variable como clave de un objeto
        }));
    };

    return (
        <form>
            <input
                name="nombre"
                value={datos.nombre}
                onChange={handleChange}
                placeholder="Nombre"
            />

            <input
                name="email"
                value={datos.email}
                onChange={handleChange}
                placeholder="Email"
            />

            <label>
                Acepto términos
                <input
                    type="checkbox"
                    name="aceptarTerminos"
                    checked={datos.aceptarTerminos}
                    onChange={handleChange}
                />
            </label>
        </form>
    );

}