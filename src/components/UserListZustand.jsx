import { useUserStore } from "../store/useUserStore";
import { useEffect } from "react";

export default function UserListZustand() {
    const user = useUserStore((state) => state.user);
    const loading = useUserStore((state) => state.loading);
    /*const fetchUser = useUserStore((state) => state.fetchUser);

    useEffect(() => {
        fetchUser(1);
    }, [fetchUser]);*/

    if (loading) {
        return <p>Cargando usuario...</p>;
    }

    if (!user) {
        return <p>No se encontró el usuario.</p>
    }

    return (
        <div className="py-8 px-5">
            <h2 className="font-theme text-lg font-medium">Perfil de usuario</h2>
            <p>ID: {user.id}</p>
            <p>Nombre: {user.firstName}</p>
            <p>Email: {user.email}</p>
        </div>
    )

}

