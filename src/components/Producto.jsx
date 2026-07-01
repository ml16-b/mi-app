function Producto({ titulo, precio, enStock, tags, detalles }) {
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <p>{precio}</p>
            <p>{enStock ? 'disponible' : 'no disponible'}</p>
            <p>Peso: {detalles.peso}</p>
        </div>
    );
}

export default Producto;