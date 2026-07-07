import { NavLink } from 'react-router';

/*import './Navbar.css';*/

export default function Navbar() {
    return (
        <nav className="p-4 border-b">
            <NavLink to="/" >Inicio</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
}