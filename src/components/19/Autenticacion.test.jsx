import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Autenticacion } from '#/components/19/Autenticacion.jsx';

describe('Autenticacion', () => {
  it('debería mostrar el formulario de login inicialmente', () => {
    render(<Autenticacion />);

    expect(screen.getByRole('heading', { name: 'Iniciar Sesión' })).toBeDefined();
    expect(screen.getByLabelText('Email:')).toBeDefined();
    expect(screen.getByLabelText('Contraseña:')).toBeDefined();
    expect(screen.getByRole('button', { name: 'Iniciar Sesión' })).toBeDefined();
  });

  it('debería mostrar error con credenciales inválidas', () => {
    render(<Autenticacion />);

    const inputEmail = screen.getByLabelText('Email:');
    const inputPassword = screen.getByLabelText('Contraseña:');
    const botonSubmit = screen.getByRole('button', { name: 'Iniciar Sesión' });

    fireEvent.change(inputEmail, { target: { value: 'invalido@ejemplo.com' } });
    fireEvent.change(inputPassword, { target: { value: '123456' } });
    fireEvent.click(botonSubmit);

    expect(screen.getByText('Credenciales inválidas')).toBeDefined();
  });

  it('debería iniciar sesión con credenciales válidas', () => {
    render(<Autenticacion />);

    const inputEmail = screen.getByLabelText('Email:');
    const inputPassword = screen.getByLabelText('Contraseña:');
    const botonSubmit = screen.getByRole('button', { name: 'Iniciar Sesión' });

    fireEvent.change(inputEmail, { target: { value: 'usuario@ejemplo.com' } });
    fireEvent.change(inputPassword, { target: { value: '123456' } });
    fireEvent.click(botonSubmit);

    expect(screen.getByText('Bienvenido')).toBeDefined();
    expect(
      screen.getByText('Has iniciado sesión como: usuario@ejemplo.com')
    ).toBeDefined();
  });

  it('debería cerrar sesión correctamente', () => {
    render(<Autenticacion />);

    // Iniciar sesión
    const inputEmail = screen.getByLabelText('Email:');
    const inputPassword = screen.getByLabelText('Contraseña:');
    const botonSubmit = screen.getByRole('button', { name: 'Iniciar Sesión' });

    fireEvent.change(inputEmail, { target: { value: 'usuario@ejemplo.com' } });
    fireEvent.change(inputPassword, { target: { value: '123456' } });
    fireEvent.click(botonSubmit);

    // Cerrar sesión
    const botonLogout = screen.getByRole('button', { name: 'Cerrar Sesión' });
    fireEvent.click(botonLogout);

    expect(screen.getByRole('heading', { name: 'Iniciar Sesión' })).toBeDefined();
    expect(screen.getByLabelText('Email:')).toBeDefined();
    expect(screen.getByLabelText('Contraseña:')).toBeDefined();
  });

  it('debería validar que la contraseña sea correcta', () => {
    render(<Autenticacion />);

    const inputEmail = screen.getByLabelText('Email:');
    const inputPassword = screen.getByLabelText('Contraseña:');
    const botonSubmit = screen.getByRole('button', { name: 'Iniciar Sesión' });

    fireEvent.change(inputEmail, { target: { value: 'usuario@ejemplo.com' } });
    fireEvent.change(inputPassword, { target: { value: 'password_incorrecta' } });
    fireEvent.click(botonSubmit);

    expect(screen.getByText('Credenciales inválidas')).toBeDefined();
  });
});
