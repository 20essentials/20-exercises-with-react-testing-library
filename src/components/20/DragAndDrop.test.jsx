import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DragAndDrop } from './DragAndDrop.jsx';

describe('DragAndDrop', () => {
  it('debería mostrar las columnas de estados', () => {
    render(<DragAndDrop />);
    expect(screen.getByText('pendiente')).toBeDefined();
    expect(screen.getByText('en-progreso')).toBeDefined();
    expect(screen.getByText('completada')).toBeDefined();
  });

  it('debería mostrar las tareas en sus estados iniciales', () => {
    render(<DragAndDrop />);

    expect(screen.getByText('Tarea 1')).toBeDefined();
    expect(screen.getByText('Tarea 2')).toBeDefined();
    expect(screen.getByText('Tarea 3')).toBeDefined();
    expect(screen.getByText('Tarea 4')).toBeDefined();
  });

  it('debería mover una tarea a otro estado', () => {
    render(<DragAndDrop />);
    const tarea = screen.getByText('Tarea 1');
    const columnaDestino = screen.getByText('en-progreso').closest('.columna');

    fireEvent.dragStart(tarea);
    fireEvent.dragOver(columnaDestino);
    fireEvent.drop(columnaDestino);

    // La tarea debería aparecer en la nueva columna
    const tareasEnProgreso = columnaDestino.querySelector('.tareas');
    expect(tareasEnProgreso.children.length).toBe(2);
  });

  it('debería mantener las tareas no arrastradas en su estado original', () => {
    render(<DragAndDrop />)
    const tarea = screen.getByText('Tarea 1')
    const columnaDestino = screen.getByText('en-progreso').closest('.columna')
    
    fireEvent.dragStart(tarea)
    fireEvent.dragOver(columnaDestino)
    fireEvent.drop(columnaDestino)
    
    // Tarea 2 debería permanecer en pendiente
    const columnaPendiente = screen.getByText('pendiente').closest('.columna')
    expect(columnaPendiente.textContent).toMatch('Tarea 2')
  })

    it('debería poder mover una tarea múltiples veces', () => {
    render(<DragAndDrop />)
    const tarea = screen.getByText('Tarea 1')
    const columnaEnProgreso = screen.getByText('en-progreso').closest('.columna')
    const columnaCompletada = screen.getByText('completada').closest('.columna')
    
    // Primera movida
    fireEvent.dragStart(tarea)
    fireEvent.dragOver(columnaEnProgreso)
    fireEvent.drop(columnaEnProgreso)
    
    // Segunda movida
    const tareaMovida = screen.getByText('Tarea 1')
    fireEvent.dragStart(tareaMovida)
    fireEvent.dragOver(columnaCompletada)
    fireEvent.drop(columnaCompletada)
    
    // La tarea debería estar en completada
    screen.debug()
    expect(columnaCompletada.textContent).toMatch('Tarea 1')
  })
});
