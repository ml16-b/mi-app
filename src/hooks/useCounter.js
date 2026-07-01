import { useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (step = 1) => setCounter(c => c + step);
    const decrement = (step = 1) => {
        if (counter >= 1) {
            setCounter(c => c - step);
        } else if(counter == 0) {
            return;
        }
    };
    const reset = () => setCounter(initialValue);

    return {
        counter,
        increment,
        decrement,
        reset,
    };
};