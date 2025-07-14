import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Paginacion } from '#/components/18/Paginacion.jsx';

describe('Paginacion', () => {
  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12'
  ];

  it('debería mostrar los primeros 5 items inicialmente', () => {
    render(<Paginacion items={items} />);
    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Item 2')).toBeDefined();
    expect(screen.getByText('Item 3')).toBeDefined();
    expect(screen.getByText('Item 4')).toBeDefined();
    expect(screen.getByText('Item 5')).toBeDefined();
    expect(screen.queryByText('Item 6')).toBeNull();
  });

  it('debería mostrar la página correcta al hacer clic en Siguiente', () => {
    render(<Paginacion items={items} />);

    const botonSiguiente = screen.getByText('Siguiente');
    fireEvent.click(botonSiguiente);

    expect(screen.getByText('Item 6')).toBeDefined();
    expect(screen.getByText('Item 7')).toBeDefined();
    expect(screen.getByText('Item 8')).toBeDefined();
    expect(screen.getByText('Item 9')).toBeDefined();
    expect(screen.getByText('Item 10')).toBeDefined();
    expect(screen.queryByText('Item 11')).toBeNull();
  });

  it('debería mostrar la página correcta al hacer clic en Anterior', () => {
    render(<Paginacion items={items} />);

    // Ir a la página 2
    const botonSiguiente = screen.getByText('Siguiente');
    fireEvent.click(botonSiguiente);

    // Volver a la página 1
    const botonAnterior = screen.getByText('Anterior');
    fireEvent.click(botonAnterior);

    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Item 2')).toBeDefined();
    expect(screen.getByText('Item 3')).toBeDefined();
    expect(screen.getByText('Item 4')).toBeDefined();
    expect(screen.getByText('Item 5')).toBeDefined();
    expect(screen.queryByText('Item 6')).toBeNull();
  });

  it('debería deshabilitar el botón Anterior en la primera página', () => {
    render(<Paginacion items={items} />);

    const botonAnterior = screen.getByText('Anterior');

    expect(botonAnterior.disabled).toBe(true);
  });

  it('debería deshabilitar el botón Siguiente en la última página', () => {
    render(<Paginacion items={items} />);

    // Ir a la última página
    const botonSiguiente = screen.getByText('Siguiente');
    fireEvent.click(botonSiguiente);
    fireEvent.click(botonSiguiente);

    expect(botonSiguiente.disabled).toBeTruthy();
  });

  it('debería mostrar el número correcto de páginas totales', () => {
    render(<Paginacion items={items} />);
    screen.debug();
    expect(screen.getByText('Página 1 de 3')).toBeDefined();
  });
});
