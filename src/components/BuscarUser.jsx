import { useState } from "react";
import { useUserStore } from "../store/useUserStore";

export default function BuscarUser() {
    const [idBuscar, setIdBuscar] = useState("");

    const fetchUser = useUserStore((state) => state.fetchUser);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idBuscar.trim() !== "") {
            fetchUser(idBuscar);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Introduce un ID de usuario"
                value={idBuscar}
                onChange={(e) => setIdBuscar(e.target.value)}
            />
            <button type="submit">Buscar usuario</button>
        </form>
    );
}