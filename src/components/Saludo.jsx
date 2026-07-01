function Saludo({ nombre = 'Invitado'}) {

    return (
        <div>
            <h2>Hola, {nombre}</h2>
            <p>Bienvenido a tu primer componente.</p>
        </div>
    );
}

export default Saludo;