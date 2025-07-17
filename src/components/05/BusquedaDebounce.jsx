import { useState, useEffect } from 'react';

const datos = [
  {
    id: 1,
    nombre: 'React',
    descripcion: 'Biblioteca para interfaces de usuario'
  },
  { id: 2, nombre: 'Vue', descripcion: 'Framework progresivo' },
  { id: 3, nombre: 'Angular', descripcion: 'Framework completo' },
  { id: 4, nombre: 'Svelte', descripcion: 'Framework compilado' }
];

export const BusquedaDebounce = () => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (busqueda) {
        setCargando(true);
        // Simulamos una llamada a API
        setTimeout(() => {
          const filtrados = datos.filter(
            item =>
              item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
              item.descripcion.toLowerCase().includes(busqueda.toLowerCase())
          );
          setResultados(filtrados);
          setCargando(false);
        }, 500);
      } else {
        setResultados([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [busqueda]);

  return (
    <div className='busqueda-debounce'>
      <input
        type='text'
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        placeholder='Buscar...'
      />

      {cargando && <p>Cargando...</p>}

      <div className='resultados'>
        {resultados.map(resultado => (
          <div key={resultado.id} className='resultado'>
            <h3>{resultado.nombre}</h3>
            <p>{resultado.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
