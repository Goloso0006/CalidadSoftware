// src/components/Survey.tsx
import { useState } from "react";

export default function Survey() {
    const [rating, setRating] = useState<number | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (rating !== null) {
        setSubmitted(true);
        }
    };

    return (
        <div className="h-full w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Encuesta de Satisfacción</h1>

        <div className="flex gap-4 mb-4">
            {[1, 2, 3, 4, 5].map((value) => (
            <label key={value} className="flex items-center gap-1">
                <input
                type="radio"
                name="rating"
                value={value}
                checked={rating === value}
                onChange={() => setRating(value)}
                />
                {value} ⭐
            </label>
            ))}
        </div>

        <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
            Enviar
        </button>

        {submitted && (
            <div className="mt-4 bg-green-100 p-4 rounded-lg shadow text-lg font-semibold text-green-700">
            ¡Gracias por tu respuesta! Puntuación: {rating} ⭐
            </div>
        )}
        </div>
    );
}
