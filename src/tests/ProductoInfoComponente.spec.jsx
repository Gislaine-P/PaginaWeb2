import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import ProductoInfoComponente from "../src/component/productoInfComp.jsx";

describe("Botón Agregar al carrito", () => {
  const productoPrueba = {
    id: 1,
    nombre: "Uñas Gelificadas",
    precio: 15000,
    imagen: "https://ejemplo.com/unas.jpg",
  };

  it('renderiza el botón "Agregar al carrito"', () => {
    render(
      <MemoryRouter>
        <ProductoInfoComponente producto={productoPrueba} />
      </MemoryRouter>
    );

    const botonAgregar = screen.getByRole("button", {
      name: /agregar al carrito/i,
    });

    expect(botonAgregar).toBeInTheDocument();
  });

  it('permite hacer clic en "Agregar al carrito" sin errores', () => {
    render(
      <MemoryRouter>
        <ProductoInfoComponente producto={productoPrueba} />
      </MemoryRouter>
    );

    const botonAgregar = screen.getByRole("button", {
      name: /agregar al carrito/i,
    });

    fireEvent.click(botonAgregar);
    expect(botonAgregar).toBeInTheDocument();
  });
});
