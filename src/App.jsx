import { useState } from 'react';
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


function App() {
  return (
    <div className="App">
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

    </div>
  )
}

export default App
