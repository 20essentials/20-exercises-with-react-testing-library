import { useState } from 'react';

export function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = (e) => {
    e.preventDefault();
    setTareas(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        completada: false,
        texto: nuevaTarea
      }
    ]);

    setNuevaTarea('');
  };

  const toggleTarea = id => {
    setTareas(prev =>
      prev.map(tarea =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = id => {
    setTareas(prev => prev.filter(tarea => tarea.id !== id));
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <form onSubmit={agregarTarea}>
        <input
          type='text'
          value={nuevaTarea}
          onChange={e => setNuevaTarea(e.target.value)}
          placeholder='Nueva tarea'
        />
        <button type='submit'>Agregar</button>
      </form>
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>
            <input
              type='checkbox'
              checked={tarea.completada}
              onChange={() => toggleTarea(tarea.id)}
            />
            <span
              style={{
                textDecoration: tarea.completada ? 'line-through' : 'none'
              }}
            >
              {tarea.texto}
            </span>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
