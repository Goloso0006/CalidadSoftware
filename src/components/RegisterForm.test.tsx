// src/components/RegisterForm.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("RegisterForm", () => {
    test("el botón está deshabilitado si los campos están vacíos", () => {
        render(<RegisterForm />);
        const button = screen.getByRole("button", { name: /Registrar/i });
        expect(button).toBeDisabled();
    });

    test("al completar los campos, se habilita el botón", () => {
        render(<RegisterForm />);
        const nameInput = screen.getByPlaceholderText("Nombre");
        const emailInput = screen.getByPlaceholderText("Correo electrónico");
        const button = screen.getByRole("button", { name: /Registrar/i });

        fireEvent.change(nameInput, { target: { value: "Juan" } });
        fireEvent.change(emailInput, { target: { value: "juan@test.com" } });

        expect(button).not.toBeDisabled();
    });

    test("al hacer submit, se limpia el formulario y aparece mensaje de confirmación", () => {
        render(<RegisterForm />);
        const nameInput = screen.getByPlaceholderText("Nombre") as HTMLInputElement;
        const emailInput = screen.getByPlaceholderText("Correo electrónico") as HTMLInputElement;
        const button = screen.getByRole("button", { name: /Registrar/i });

        fireEvent.change(nameInput, { target: { value: "Ana" } });
        fireEvent.change(emailInput, { target: { value: "ana@test.com" } });
        fireEvent.click(button);

        expect(nameInput.value).toBe("");
        expect(emailInput.value).toBe("");
        expect(screen.getByText("¡Registro exitoso!")).toBeInTheDocument();
    });
});
