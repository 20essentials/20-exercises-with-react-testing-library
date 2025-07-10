import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Contador } from './Counter.jsx'

describe('Contador', () => {
  it('debería mostrar el contador inicial en 0', () => {
    render(<Contador />)
    expect(screen.getByText('Contador: 0')).toBeDefined()
  })

  it('debería incrementar el contador al hacer clic en el botón Incrementar', () => {
    render(<Contador />)
    const botonIncrementar = screen.getByText('Incrementar')
    fireEvent.click(botonIncrementar)
    expect(screen.getByText('Contador: 1')).toBeDefined()
  })

  it('debería decrementar el contador al hacer clic en el botón Decrementar', () => {
    render(<Contador />)
    const botonDecrementar = screen.getByText('Decrementar')
    fireEvent.click(botonDecrementar)
    expect(screen.getByText('Contador: -1')).toBeDefined()
  })
}) 