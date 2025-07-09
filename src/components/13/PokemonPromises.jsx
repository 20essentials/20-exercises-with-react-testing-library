import { use, Suspense, useState } from 'react';

 const pokemonPromise = name =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json());

 function Pokemon({ pokePromise }) {
  const pokemon = use(pokePromise);
  return <h1>{pokemon.name}</h1>;
}

export function PokemonPromises() {
  const [pokeName, setPokeName] = useState('pikachu');

  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Pokemon pokePromise={pokemonPromise(pokeName)} />
      <button onClick={() => setPokeName('pikachu')}>Pikachu</button>
      <button onClick={() => setPokeName('charizard')}>Charizard</button>
    </Suspense>
  );
}
