import { useFetch } from '../hooks/useFetch';

export default function UserList() {
    const { data, loading, error } = useFetch("https://dummyjson.com/users");

    if (loading) return <p>Cargando...</p>;
    if (error) return <p> Error: {error}</p>;

    return (
        <ul>
            {data?.users?.map(user => <li key={user.id}>{user.firstName} {user.lastName} {user.id}</li>)}
        </ul>
    );
}