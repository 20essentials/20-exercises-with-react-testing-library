import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchFilter } from './SearchFilter.jsx';

describe('BusquedaFiltrado', () => {
  it('debería mostrar todos los productos inicialmente', () => {
    render(<SearchFilter />);
    expect(screen.getByText('Resultados (8)')).toBeDefined();
    expect(screen.getByText('Laptop - Electrónicos - $999.99')).toBeDefined();
    expect(screen.getByText('Smartphone - Electrónicos - $499.99')).toBeDefined();
  });

  it('debería filtrar productos por búsqueda', () => {
    render(<SearchFilter />);
    const inputBusqueda = screen.getByPlaceholderText('Buscar productos...');
    

    fireEvent.change(inputBusqueda, { target: { value: 'Laptop' } });

    expect(screen.getByText('Laptop - Electrónicos - $999.99')).toBeDefined();
    expect(screen.queryByText('Smartphone - Electrónicos - $499.99')).toBeNull();
  });

  it('debería filtrar productos por precio máximo', () => {
    render(<SearchFilter />);
    const inputPrecio = screen.getByLabelText('Precio máximo: $1000');

    fireEvent.change(inputPrecio, { target: { value: '100' } });

    expect(screen.getByText('Auriculares - Audio - $99.99')).toBeDefined();
    expect(screen.getByText('Altavoz - Audio - $79.99')).toBeDefined();
    expect(screen.queryByText('Laptop - Electrónicos - $999.99')).toBeNull();
  });

   it('debería filtrar productos por categoría', () => {
    render(<SearchFilter />)
    const selectCategoria = screen.getByLabelText('Categoría:')
    
    fireEvent.change(selectCategoria, { target: { value: 'Audio' } })
    
    expect(screen.getByText('Auriculares - Audio - $99.99')).toBeDefined()
    expect(screen.getByText('Altavoz - Audio - $79.99')).toBeDefined()
    expect(screen.queryByText('Laptop - Electrónicos - $999.99')).toBeNull()
  })

    it('debería aplicar múltiples filtros simultáneamente', () => {
    render(<SearchFilter />)
    const inputBusqueda = screen.getByPlaceholderText('Buscar productos...')
    const selectCategoria = screen.getByLabelText('Categoría:')
    const inputPrecio = screen.getByLabelText('Precio máximo: $1000')
    
    fireEvent.change(inputBusqueda, { target: { value: 'phone' } })
    fireEvent.change(selectCategoria, { target: { value: 'Electrónicos' } })
    fireEvent.change(inputPrecio, { target: { value: '500' } })
    
    expect(screen.getByText('Smartphone - Electrónicos - $499.99')).toBeDefined()
    expect(screen.queryByText('Laptop - Electrónicos - $999.99')).toBeNull()
    expect(screen.queryByText('Auriculares - Audio - $99.99')).toBeNull()
  })
});
