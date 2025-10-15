// src/components/Survey.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Survey from "./Survey";

describe("Survey", () => {
    test("se renderizan las 5 opciones", () => {
        render(<Survey />);
        const radios = screen.getAllByRole("radio");
        expect(radios).toHaveLength(5);
    });

    test("al seleccionar un valor, se refleja en el estado", () => {
        render(<Survey />);
        const radio3 = screen.getByRole("radio", { name: "3 ⭐" });

        // Al inicio no está seleccionado
        expect(radio3).not.toBeChecked();

        // Seleccionar 3 estrellas
        fireEvent.click(radio3);
        expect(radio3).toBeChecked();
    });

    test("al enviar aparece el mensaje de confirmación con la puntuación", () => {
        render(<Survey />);
        const radio4 = screen.getByRole("radio", { name: "4 ⭐" });
        const button = screen.getByRole("button", { name: /Enviar/i });

        fireEvent.click(radio4);
        fireEvent.click(button);

        expect(
        screen.getByText("¡Gracias por tu respuesta! Puntuación: 4 ⭐")
        ).toBeInTheDocument();
    });
});
