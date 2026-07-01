import { useState, useEffect } from "react";

export const useFetch = (url) => {
    //Definición de estados
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);

        const controller = new AbortController(); //?

        fetch(url, { signal: controller.signal })
            .then((response) => {
                if (!response.ok) throw new Error("Error en la petición");
                return response.json();
            })
            .then((jsonData) => {
                setData(jsonData);
                setError(null);
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    setError(err.message);
                } else (
                    setError("error")
                );
            })
            .finally(() => {
                setLoading(false);
            });

        return () => controller.abort();

    }, [url]);

    return { data, loading, error };

};