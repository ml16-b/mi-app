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
import Blog from './pages/Blog';

import MainLayout from './layouts/MainLayout';

const About = () => <h1>Sobre Nosotros 👥</h1>;
const Contacto = () => <h1>Contacto 📧</h1>;

function App() {

  const getLinkClass = ({ isActive }) =>
    isActive ? "font-bold text-blue-500" : "text-gray-500";

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />

        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
