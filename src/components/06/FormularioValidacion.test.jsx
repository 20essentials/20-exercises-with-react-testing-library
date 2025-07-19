import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormularioValidacion } from './FormularioValidacion';

describe('FormularioValidacion', () => {
  it('debería mostrar el formulario inicialmente', () => {
    render(<FormularioValidacion />);

    expect(screen.getByText('Registro')).toBeDefined();
    expect(screen.getByLabelText('Nombre:')).toBeDefined();
    expect(screen.getByLabelText('Contraseña:')).toBeDefined();
    expect(screen.getByLabelText('Confirmar Contraseña:')).toBeDefined();
  });

  it('debería mostrar error cuando el nombre es muy corto', () => {
    render(<FormularioValidacion />);

    const inputNombre = screen.getByLabelText('Nombre:');
    fireEvent.change(inputNombre, { target: { value: 'Jo' } });

    const botonSubmit = screen.getByRole('button', { name: 'Registrarse' });
    fireEvent.click(botonSubmit);

    expect(
      screen.getByText('El nombre debe tener al menos 3 caracteres')
    ).toBeDefined();
  });

  it('debería mostrar error cuando la contraseña es muy corta', () => {
    render(<FormularioValidacion />);

    const inputPassword = screen.getByLabelText('Contraseña:');
    fireEvent.change(inputPassword, { target: { value: '12345' } });

    const botonSubmit = screen.getByRole('button', { name: 'Registrarse' });
    fireEvent.click(botonSubmit);

    expect(
      screen.getByText('La contraseña debe tener al menos 6 caracteres')
    ).toBeDefined();
  });

  it('debería mostrar error cuando las contraseñas no coinciden', () => {
    render(<FormularioValidacion />);

    const inputPassword = screen.getByLabelText('Contraseña:');
    const inputConfirmarPassword = screen.getByLabelText('Confirmar Contraseña:');

    fireEvent.change(inputPassword, { target: { value: '123456' } });
    fireEvent.change(inputConfirmarPassword, { target: { value: '654321' } });

    const botonSubmit = screen.getByRole('button', { name: 'Registrarse' });
    fireEvent.click(botonSubmit);

    expect(screen.getByText('Las contraseñas no coinciden')).toBeDefined();
  });

  it('debería limpiar el error de un campo al escribir en él', () => {
    render(<FormularioValidacion />);
    const inputNombre = screen.getByLabelText('Nombre:');

    // Primero mostramos el error
    const botonSubmit = screen.getByRole('button', { name: 'Registrarse' });
    fireEvent.click(botonSubmit);

    expect(screen.getByText('El nombre es requerido')).toBeDefined();

    // Luego escribimos en el campo
    fireEvent.change(inputNombre, { target: { value: 'Juan' } });
    expect(screen.queryByText('El nombre es requerido')).toBeNull();
  });

  it('debería mostrar mensaje de éxito con datos válidos', () => {
    render(<FormularioValidacion />);

    // Llenamos el formulario con datos válidos
    fireEvent.change(screen.getByLabelText('Nombre:'), {
      target: { value: 'Juan' }
    });
    fireEvent.change(screen.getByLabelText('Contraseña:'), {
      target: { value: '123456' }
    });
    fireEvent.change(screen.getByLabelText('Confirmar Contraseña:'), {
      target: { value: '123456' }
    });

    const botonSubmit = screen.getByRole('button', { name: 'Registrarse' });
    fireEvent.click(botonSubmit);

    expect(screen.getByText('¡Registro exitoso!')).toBeDefined();
    expect(screen.getByText('Bienvenido Juan')).toBeDefined();
  });
});
