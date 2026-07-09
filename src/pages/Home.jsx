import UserListZustand from '../components/UserListZustand';
import BuscarUser from '../components/BuscarUser';
import ListaUsuarios from '../components/ListaUsuarios';
import UserList from '../components/UserList';

export default function Home() {
    return (
        <div>
            <h1 className='font-theme text-3xl font-bold'>Inicio</h1>
            <BuscarUser></BuscarUser>
            <UserListZustand> </UserListZustand>
            <ListaUsuarios></ListaUsuarios>
        </div>
    );
}