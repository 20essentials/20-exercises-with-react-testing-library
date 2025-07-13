import { useState } from 'react';

const PRODUCTOS = [
  { id: 1, nombre: 'Laptop', categoria: 'Electrónicos', precio: 999.99 },
  { id: 2, nombre: 'Smartphone', categoria: 'Electrónicos', precio: 499.99 },
  { id: 3, nombre: 'Auriculares', categoria: 'Audio', precio: 99.99 },
  { id: 4, nombre: 'Monitor', categoria: 'Electrónicos', precio: 299.99 },
  { id: 5, nombre: 'Teclado', categoria: 'Periféricos', precio: 49.99 },
  { id: 6, nombre: 'Mouse', categoria: 'Periféricos', precio: 29.99 },
  { id: 7, nombre: 'Tablet', categoria: 'Electrónicos', precio: 399.99 },
  { id: 8, nombre: 'Altavoz', categoria: 'Audio', precio: 79.99 }
];

export function SearchFilter() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('todas');
  const [precioMaximo, setPrecioMaximo] = useState(1000);

  const filtrarProductos = () => {
    return PRODUCTOS.filter(producto => {
      return (
        (categoria === 'todas' || producto.categoria === categoria) &&
        producto.precio <= precioMaximo &&
        (busqueda === '' ||
          producto.nombre.toLowerCase().includes(busqueda.toLowerCase()))
      );
    });
  };

  const productosFiltrados = filtrarProductos();

  return (
    <div>
      <h2>Búsqueda y Filtrado de Productos</h2>

      <div>
        <input
          type='text'
          placeholder='Buscar productos...'
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor='categoria'>Categoría:</label>
        <select
          id={'categoria'}
          value={categoria}
          onChange={e => setCategoria(e.target.value)}
        >
          <option value='todas'>Todas</option>
          <option value='Electrónicos'>Electrónicos</option>
          <option value='Audio'>Audio</option>
          <option value='Periféricos'>Periféricos</option>
        </select>
      </div>

      <div>
        <label htmlFor='price'>Precio máximo: ${precioMaximo}</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          value={precioMaximo}
          onChange={e => setPrecioMaximo(Number(e.target.value))}
        />
      </div>

      <div>
        <h3>Resultados ({productosFiltrados.length})</h3>
        <ul>
          {productosFiltrados.map(producto => (
            <li key={producto.id}>
              {producto.nombre} - {producto.categoria} - ${producto.precio}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
