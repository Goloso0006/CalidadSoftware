// src/components/RandomNumber.tsx
import { useState } from "react";

export default function RandomNumber() {
    const [number, setNumber] = useState<number | null>(null);

    const generateRandom = () => {
        const random = Math.floor(Math.random() * 100) + 1; // entre 1 y 100
        setNumber(random);
    };

    return (
        <div className="h-full w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Generador de Números Aleatorios</h1>
        <button
            onClick={generateRandom}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
            Generar Número
        </button>

        {number !== null && (
            <div className="mt-4 bg-gray-100 rounded-lg p-4 shadow text-lg font-semibold">
            Número generado: {number}
            </div>
        )}
        </div>
    );
}
