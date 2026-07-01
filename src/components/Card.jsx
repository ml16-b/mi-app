export default function Card({ children, titulo }) {
    return (
        <div className="card-borde-sombra">
            <div className="card-header">
                <h2>{titulo}</h2>
            </div>


            <div className="card-body">
                { }
                {children}
            </div>
        </div>

    );
}