import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router';

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import Saludo from './components/Saludo';
import Producto from './components/Producto';
import Boton from './components/Boton/Boton';
import Card from './components/Card';
import Layout from './components/Layout';
import Cronometro from './components/Cronometro';
import Carrito from './components/Carrito';
import UserList from './components/UserList';
import FormularioNombre from './components/FormularioNombre';
import FormularioRegistro from './components/FormularioRegistro';
import FormularioCompleto from './components/FormularioCompleto';
import { ThemeProvider } from './context/ThemeContext';
import ThemeButton from './components/ThemeButton';
import UserListZustand from './components/UserListZustand';
import BuscarUser from './components/BuscarUser';

import Navbar from './components/Navbar';

import Home from './pages/Home';
const About = () => <h1>Sobre Nosotros 👥</h1>;
const Contacto = () => <h1>Contacto 📧</h1>;

function App() {

  const getLinkClass = ({ isActive }) =>
    isActive ? "font-bold text-blue-500" : "text-gray-500";

  return (
    <div className="App">

      <header className="p-4 border-b">
        <nav className="flex gap-4">
          <NavLink to="/" className={getLinkClass}>Inicio</NavLink>
          <NavLink to="/about" className={getLinkClass}>About</NavLink>
        </nav>
      </header>


      {/* Zona de contenido cambiante */}
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<h1>404 - Página no encontrada 😱</h1>} />

        </Routes>
      </main>

      {/*
      <ThemeProvider>
        <Layout sidebar={<Saludo />}
          content={<Saludo nombre="Carlos" />}
          footer={<p>Texto footer layout</p>} />
        <ThemeButton></ThemeButton>
      </ThemeProvider>

      <h1>Mi app</h1>

      <Saludo nombre="Luis" />
      <Saludo nombre="María" />
      <Saludo nombre="Carlos" />
      <Producto titulo="Ordenador" precio={1200} enStock={true} tags={['asus', 'tech']} detalles={{ peso: '2kg ' }} />

      <Boton>
        <span>Guardar</span>
        <Saludo nombre="Luis" />

      </Boton>

      <Card titulo="Usuario">
        <p>Esto es un texto.</p>
        <button>Botón</button>
        <Boton>
          <p>Texto dentro del Botón.</p>
        </Boton>
      </Card>
      <Carrito></Carrito>
      <Carrito></Carrito>
      <Cronometro></Cronometro>

      <UserList></UserList>

      <FormularioNombre></FormularioNombre>
      <FormularioRegistro></FormularioRegistro>
      <FormularioCompleto></FormularioCompleto>
      <div>
        <BuscarUser></BuscarUser>
        <UserListZustand></UserListZustand>
      </div>*/}
    </div>
  )
}

export default App;
