// src/components/ShoppingCart.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

describe("ShoppingCart", () => {
    test("el carrito inicia vacío", () => {
        render(<ShoppingCart />);
        expect(screen.getByText("El carrito está vacío")).toBeInTheDocument();
        expect(screen.getByText("Total: $0")).toBeInTheDocument();
    });

    test("al agregar un producto, aumenta el total", () => {
        render(<ShoppingCart />);
        const addButtons = screen.getAllByRole("button", { name: /Agregar al carrito/i });

        fireEvent.click(addButtons[0]); // Camisa 20000

        expect(screen.queryByText("El carrito está vacío")).toBeNull();
        expect(screen.getByText("Total: $20000")).toBeInTheDocument();
    });

    test("eliminar un producto actualiza el total", () => {
        render(<ShoppingCart />);
        const addButtons = screen.getAllByRole("button", { name: /Agregar al carrito/i });

        // Agregar dos productos
        fireEvent.click(addButtons[0]); // Camisa 20000
        fireEvent.click(addButtons[1]); // Pantalón 35000
        expect(screen.getByText("Total: $55000")).toBeInTheDocument();

        // Eliminar Camisa (primer "Eliminar")
        const removeButtons = screen.getAllByRole("button", { name: /Eliminar/i });
        fireEvent.click(removeButtons[0]);

        expect(screen.getByText("Total: $35000")).toBeInTheDocument();
    });

    test("se calcula el precio total correctamente con varios productos", () => {
        render(<ShoppingCart />);
        const addButtons = screen.getAllByRole("button", { name: /Agregar al carrito/i });

        fireEvent.click(addButtons[0]); // 20000
        fireEvent.click(addButtons[1]); // 35000
        fireEvent.click(addButtons[2]); // 50000

        expect(screen.getByText("Total: $105000")).toBeInTheDocument();
    });
});
