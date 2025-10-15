// src/components/RegisterForm.tsx
import { useState } from "react";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email) return;

        setSubmitted(true);
        setName("");
        setEmail("");
    };

    const isDisabled = !name || !email;

    return (
        <div className="h-full w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Formulario de Registro</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
            <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg p-2"
            />
            <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg p-2"
            />
            <button
            type="submit"
            disabled={isDisabled}
            className={`px-4 py-2 rounded-lg text-white transition ${
                isDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            >
            Registrar
            </button>
        </form>

        {submitted && (
            <div className="mt-4 bg-green-100 text-green-700 font-semibold p-3 rounded-lg shadow">
            ¡Registro exitoso!
            </div>
        )}
        </div>
    );
}
