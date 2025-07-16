import { useState } from 'react';

export const DragAndDrop = () => {
  const [tareas, setTareas] = useState({
    pendiente: [
      { id: 1, titulo: 'Tarea 1' },
      { id: 2, titulo: 'Tarea 2' }
    ],
    'en-progreso': [{ id: 3, titulo: 'Tarea 3' }],
    completada: [{ id: 4, titulo: 'Tarea 4' }]
  });

  const [tareaArrastrada, setTareaArrastrada] = useState(null);

  const handleDragStart = (e, tarea, estado) => {
    setTareaArrastrada({ ...tarea, estado });
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = (e, nuevoEstado) => {
    e.preventDefault();
    if (!tareaArrastrada) return;
    const estadoAnterior = tareaArrastrada.estado;
    const nuevaTarea = { ...tareaArrastrada };
    delete nuevaTarea.estado;

    setTareas(prevTareas => {
      const nuevasTareas = { ...prevTareas };
      
      //If the column already had the task we return the previousState
      if (nuevasTareas[nuevoEstado].find(el => el.id === nuevaTarea.id)) {
        return prevTareas;
      }

      //We Delete the previous task of its column
      nuevasTareas[estadoAnterior] = prevTareas[estadoAnterior].filter(
        t => t.id !== nuevaTarea.id
      );
      
      //We add the new task in its new column
      nuevasTareas[nuevoEstado] = [...prevTareas[nuevoEstado], nuevaTarea];

      return nuevasTareas;
    });

    setTareaArrastrada(null);
  };

  return (
    <div className='drag-drop'>
      <div className='columnas'>
        {Object.entries(tareas).map(([estado, tareasEstado]) => (
          <div
            key={estado}
            className='columna'
            onDragOver={handleDragOver}
            onDrop={e => handleDrop(e, estado)}
          >
            <h3>{estado}</h3>
            <article className='tareas'>
              {tareasEstado.map(tarea => (
                <aside
                  key={tarea.id}
                  className='tarea'
                  draggable
                  onDragStart={e => handleDragStart(e, tarea, estado)}
                >
                  {tarea.titulo}
                </aside>
              ))}
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};
