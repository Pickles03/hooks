import './App.css';
import React from 'react';
import useFetchCharacter from './hooks/useCustomHook';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/2';
const urlRick = 'https://rickandmortyapi.com/api/character/1';

function App() {

  const {data: pokemon, loading: loadingPokemon, error: errorPokemon} = useFetchCharacter(urlPokemon);
  const {data: rick, loading: loadingRick, error: errorRick} = useFetchCharacter(urlRick);
  
  return (
    <div>
      <h2>Pokemon Character</h2>
      {loadingPokemon && <p>Loading...</p>}
      {errorPokemon && <p>Error: </p>}
      {pokemon && (
        <>
          <p>Name: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      )}


      <h2>Rick and Morty Character</h2>
      {loadingRick && <p>Loading...</p>}
      {errorRick && <p>Error: {errorRick}</p>}
      {rick && (
        <>
          <p>Name: {rick.name}</p>
          <img src={rick.image} alt={rick.name} />
        </>
      )}
    </div>
  );
}

export default App;
