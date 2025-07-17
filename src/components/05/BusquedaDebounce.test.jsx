import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BusquedaDebounce } from './BusquedaDebounce';

describe('BusquedaDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('debería mostrar el input de búsqueda', () => {
    render(<BusquedaDebounce />);

    expect(screen.getByPlaceholderText('Buscar...')).toBeDefined();
  });

  it('debería mostrar resultados después de escribir', async () => {
    render(<BusquedaDebounce />);

    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'React' } });

    // Avanzamos el timer del debounce
    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Avanzamos el timer de la simulación de API
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(screen.getByText('React')).toBeDefined();
    expect(
      screen.getByText('Biblioteca para interfaces de usuario')
    ).toBeDefined();
  });

  it('debería mostrar el estado de carga', () => {
    render(<BusquedaDebounce />);

    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'React' } });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText('Cargando...')).toBeDefined();
  });

  it('debería limpiar resultados cuando la búsqueda está vacía', () => {
    render(<BusquedaDebounce />);
    const input = screen.getByPlaceholderText('Buscar...');

    // Primero buscamos algo
    fireEvent.change(input, { target: { value: 'React' } });

    act(() => {
      vi.advanceTimersByTime(300);
      vi.advanceTimersByTime(500);
    });

    // Luego limpiamos la búsqueda
    fireEvent.change(input, { target: { value: '' } });
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.queryByText('React')).toBeNull();
  });

  it('debería buscar en nombre y descripción', () => {
    render(<BusquedaDebounce />);

    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'Framework' } });

    act(() => {
      vi.advanceTimersByTime(300);
      vi.advanceTimersByTime(500);
    });

    screen.debug();
    expect(screen.getByText('Vue')).toBeDefined();
    expect(screen.getByText('Angular')).toBeDefined();
    expect(screen.getByText('Svelte')).toBeDefined();
  });
});
