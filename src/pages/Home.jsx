import { useState } from 'react';
import Loader from 'react-loader-spinner';
import { useGetPokemonByNameQuery } from 'redux/pokemon';

function Home() {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isFetching, isError } = useGetPokemonByNameQuery(
    pokemonName,
    {
      skip: pokemonName === '',
    },
  );

  const handleSubmit = event => {
    event.preventDefault();

    setPokemonName(event.currentTarget.elements.pokemonName.value);
    event.currentTarget.reset();
  };

  const showData = data && !isFetching && !isError;

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>

      {isFetching && <Loader />}
      {isError && (
        <p>
          Sorry, pokemon <b>{pokemonName}</b> {error.data}
        </p>
      )}
      {showData && <h1>{data.name}</h1>}
    </>
  );
}

export default Home;
