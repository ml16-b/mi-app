import { useCounter } from "../hooks/useCounter";

export default function Carrito() {
    const { counter, increment, decrement, reset } = useCounter(1); //?

    return (
        <div>
            <h3>Productos: {counter}</h3>
            <button onClick={() => decrement()}>-</button>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => reset()}>Reset</button>
        </div>
    );
}
