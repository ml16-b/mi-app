/*Sin custom hook*/
import { useCallback, useEffect, useState } from "react";

function UserSkeleton() {
    return (
        <div className="skeleton-card p-4 bg-gray-200 rounded-lg mb-3 animate-pulse">
            <div className="skeleton-title w-3/5 h-5 bg-gray-300 rounded mb-2" />
            <div className="skeleton-line w-11/12 h-3.5 bg-gray-300 rounded" />
        </div>
    );
}

export default function ListaUsuarios() {
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);

    const loadUsers = useCallback(async () => {
        try {
            setStatus("loading");
            setError(null);

            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();
            setUsers(data);
            setStatus("success");
        } catch (err) {
            setError(err.message);
            setStatus("error");
        }
    }, []);

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    if (status === "loading") {
        return (
            <UserSkeleton></UserSkeleton>
        );
    }
    if (status === "error") {
        return (
            <div>
                <p>Error: {error}</p>
                <button onClick={loadUsers}>Reintentar</button>
            </div>
        );
    };

    if (status === "success" && users.length === 0) {
        return <p>No hay usuarios.</p>
    }

    return (
        <ul>
            {status === "loading" && users.length > 0 && (
                <small>Actualizando datos...</small>
            )}
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );

}