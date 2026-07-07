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
        <form onSubmit={handleSubmit} className="px-5 pt-8 flex flex-col items-start">
            <input className="border-1 rounded-lg mb-5 p-2"
                type="number"
                placeholder="Introduce un ID de usuario"
                value={idBuscar}
                onChange={(e) => setIdBuscar(e.target.value)}
            />
            <button className="p-4 bg-red-50 rounded-lg hover:bg-red-100" type="submit">Buscar usuario</button>
        </form>
    );
}