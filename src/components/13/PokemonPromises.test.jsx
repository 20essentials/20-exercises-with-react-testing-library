import { PokemonPromises } from '#/components/13/PokemonPromises.jsx';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';

async function getPikachu() {
  return fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(r => r.json());
}

describe('PokemonPromises component', () => {
  beforeEach(() => {
    render(<PokemonPromises />);
  });

  it('should display the loading text "Cargando..." initially while fetching data', () => {
    const expectedText = 'Cargando...';
    const loadingElement = screen.getByText(expectedText);
    expect(loadingElement.textContent).toBe(expectedText);
  });

  it('should successfully fetch Pikachu data from the API and contain the correct name', async () => {
    await expect(getPikachu()).resolves.toMatchObject({ name: 'pikachu' });
  });
});
