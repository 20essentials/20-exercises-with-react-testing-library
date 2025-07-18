import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Autocompletado } from './Autocompletado';

describe('Autocompletado', () => {
  it('debería mostrar el input de búsqueda', () => {
    render(<Autocompletado />);
    expect(screen.getByPlaceholderText('Buscar...')).toBeDefined();
  });

  it('debería mostrar sugerencias al escribir', () => {
    render(<Autocompletado />);

    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'React' } });

    expect(screen.getByText('React')).toBeDefined();
    expect(screen.getByText('React Native')).toBeDefined();
    expect(screen.getByText('React Router')).toBeDefined();
  });

  it('debería seleccionar una sugerencia al hacer clic', () => {
    render(<Autocompletado />);

    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'React' } });

    const sugerencia = screen.getByText('React Native');
    fireEvent.click(sugerencia);

    expect(input.value).toBe('React Native');
    expect(screen.queryByText('React')).toBeNull();
  });

  it('debería navegar por las sugerencias con las flechas', () => {
    render(<Autocompletado />);

    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'React' } });

    // Presionar flecha abajo
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(screen.getByText('React').className).includes('seleccionado');

    // Presionar flecha abajo de nuevo
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(screen.getByText('React Native').className).includes('seleccionado');

    // Presionar flecha arriba
    fireEvent.keyDown(input, { key: 'ArrowUp' });
    expect(screen.getByText('React').className).includes('seleccionado');
  });

  it('debería seleccionar una sugerencia con Enter', () => {
    render(<Autocompletado />);

    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'React' } });

    // Seleccionar primera sugerencia
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    // Presionar Enter
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(input.value).toBe('React');
    expect(screen.queryByText('React Native')).toBeNull();
  });

  it('debería cerrar las sugerencias con Escape', () => {
    render(<Autocompletado />);

    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'React' } });

    expect(screen.getByText('React')).toBeDefined();

    fireEvent.keyDown(input, { key: 'Escape' });

    expect(screen.queryByText('React')).toBeNull();
  });

  it('debería cerrar las sugerencias al hacer clic fuera', () => {
    render(<Autocompletado />);

    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'React' } });

    expect(screen.getByText('React')).toBeDefined();

    fireEvent.mouseDown(document.body);

    screen.debug();

    expect(screen.queryByText('React')).toBeNull();
  });
});
