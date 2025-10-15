// src/components/RandomNumber.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import RandomNumber from "./RandomNumber";

describe("RandomNumber", () => {
    test("muestra un número aleatorio después de hacer clic", () => {
        render(<RandomNumber />);

        const button = screen.getByRole("button", { name: /Generar Número/i });

        // Antes de hacer clic no debe haber número
        expect(screen.queryByText(/Número generado:/)).toBeNull();

        // Clic en el botón
        fireEvent.click(button);

        // Ahora debe aparecer el número generado
        expect(screen.getByText(/Número generado:/)).toBeInTheDocument();
    });

    test("el número generado está dentro del rango [1,100]", () => {
        render(<RandomNumber />);
        const button = screen.getByRole("button", { name: /Generar Número/i });

        fireEvent.click(button);

        const numberText = screen.getByText(/Número generado:/).textContent;
        const number = parseInt(numberText?.replace(/\D/g, "") || "0", 10);

        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(100);
    });

    test("cada clic genera un nuevo número (puede ser distinto)", () => {
        render(<RandomNumber />);
        const button = screen.getByRole("button", { name: /Generar Número/i });

        fireEvent.click(button);
        const firstText = screen.getByText(/Número generado:/).textContent;
        const firstNumber = parseInt(firstText?.replace(/\D/g, "") || "0", 10);

        fireEvent.click(button);
        const secondText = screen.getByText(/Número generado:/).textContent;
        const secondNumber = parseInt(secondText?.replace(/\D/g, "") || "0", 10);

        // Puede que salgan iguales por azar, pero normalmente deberían ser distintos.
        // Verificamos que ambos estén en rango válido al menos.
        expect(firstNumber).toBeGreaterThanOrEqual(1);
        expect(firstNumber).toBeLessThanOrEqual(100);
        expect(secondNumber).toBeGreaterThanOrEqual(1);
        expect(secondNumber).toBeLessThanOrEqual(100);
    });
});
