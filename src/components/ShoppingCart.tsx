// src/components/ShoppingCart.tsx
import { useState } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    };

    const products: Product[] = [
    { id: 1, name: "Camisa", price: 20000 },
    { id: 2, name: "Pantalón", price: 35000 },
    { id: 3, name: "Zapatos", price: 50000 },
    ];

    export default function ShoppingCart() {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (id: number) => {
        // elimina solo la primera coincidencia
        const index = cart.findIndex((item) => item.id === id);
        if (index !== -1) {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        }
    };

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="h-full w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>

        <h2 className="text-lg font-semibold mb-2">Productos</h2>
        <ul className="space-y-2 mb-6">
            {products.map((product) => (
            <li key={product.id} className="flex gap-4 items-center">
                <span>
                {product.name} - ${product.price}
                </span>
                <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                Agregar al carrito
                </button>
            </li>
            ))}
        </ul>

        <h2 className="text-lg font-semibold mb-2">Carrito</h2>
        {cart.length === 0 ? (
            <p>El carrito está vacío</p>
        ) : (
            <ul className="space-y-2">
            {cart.map((item, index) => (
                <li key={index} className="flex gap-4 items-center">
                <span>
                    {item.name} - ${item.price}
                </span>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                    Eliminar
                </button>
                </li>
            ))}
            </ul>
        )}

        <div className="mt-4 text-lg font-bold">Total: ${total}</div>
        </div>
    );
}
