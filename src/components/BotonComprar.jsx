import { useCartStore } from "../store/useCartStore";

function BotonComprar() {
    const addItem = useCartStore((state) => state.addItem);

    return <button onClick={addItem}>Añadir al carrito</button>;
}