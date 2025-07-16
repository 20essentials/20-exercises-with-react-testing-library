import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ListaTareas } from './ListaTareas.jsx';

describe('ListaTareas', () => {
  it('debería mostrar el formulario de nueva tarea', () => {
    render(<ListaTareas />);
    expect(screen.getByPlaceholderText('Nueva tarea')).toBeDefined();
    expect(screen.getByRole('button', { name: 'Agregar' })).toBeDefined();
  });

  it('debería agregar una nueva tarea', () => {
    render(<ListaTareas />);
    const input = screen.getByPlaceholderText('Nueva tarea');
    const botonAgregar = screen.getByRole('button', { name: 'Agregar' });

    fireEvent.change(input, { target: { value: 'Comprar leche' } });
    fireEvent.click(botonAgregar);

    expect(screen.getByText('Comprar leche')).toBeDefined();
    expect(input.value).toBe('');
  });

  it('debería marcar una tarea como completada', () => {
    render(<ListaTareas />);
    const input = screen.getByPlaceholderText('Nueva tarea');
    const botonAgregar = screen.getByRole('button', { name: 'Agregar' });

    // Agregar una tarea
    fireEvent.change(input, { target: { value: 'Comprar leche' } });
    fireEvent.click(botonAgregar);

    // Marcar como completada
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
    const element = screen.getByText('Comprar leche');
    expect(element.style.textDecoration).toBe('line-through');
  });

  it('debería eliminar una tarea', () => {
    render(<ListaTareas />)
    const input = screen.getByPlaceholderText('Nueva tarea')
    const botonAgregar = screen.getByRole('button', { name: 'Agregar' })

    // Agregar una tarea
    fireEvent.change(input, { target: { value: 'Comprar leche' } })
    fireEvent.click(botonAgregar)

    // Eliminar la tarea
    const botonEliminar = screen.getByRole('button', { name: 'Eliminar' })
    fireEvent.click(botonEliminar)

    expect(screen.queryByText('Comprar leche')).toBeNull()
  })
});
