// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState } from 'react';
import './style.css';

const BasicPokemonDemo = () => {
  const [searchTerm, setSearchTerm] = useState(); // todo: debounce
  const [pokemon, setPokemon] = useState(null);
  const [formError, setFormError] = useState(null);

  const getPokemon = async (pokemon) => {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon';
      const res = await fetch(`${url}/${pokemon}`);
      const data = await res.json();
      const { sprites, moves } = data;

      if (!sprites || !moves) return null;

      return {
        name: pokemon,
        sprites,
        moves,
      };
    } catch (e) {
      return null;
    }
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault(); // avoid page refresh

      // clear form errors
      setFormError(null);

      // validate search term
      if (!searchTerm || searchTerm?.length < 3) {
        setFormError({
          field: 'search',
          msg: 'Must be between 3 and 50 characters in length.',
        });
        return;
      }

      const res = await getPokemon(searchTerm.toLowerCase());
      if (!res) {
        setPokemon(null);
        setFormError({
          field: 'search',
          msg: `"${searchTerm}" not found.`, // Demonstrate string interpolation
        });
        return;
      }
      setPokemon(res);
    } catch (e) {
      console.error('Fail: fetch pokemon', e);
    }
  };

  const onClickClear = () => {
    setSearchTerm(null);
    setFormError(null);
    setPokemon(null);

    const input = document.getElementById('search');
    if (input) input.value = '';
  };

  return (
    <section className="page">      
      <div className="container">
        <form className="form" onSubmit={onSubmit}>
          <div className="form__field">
            <label className="form__field-label" htmlFor="search">
              Search Pokemon
            </label>
            <input
              className="form__field-input"
              id="search"
              type="text"
              placeholder="e.g.. pikachu"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {formError && formError.field === 'search' && (
              <div className="form__field-error">{formError.msg}</div>
            )}
          </div>
          <div className="form__actions">
            <button className="form__btn" type="submit">
              Go
            </button>

            {(pokemon || formError) && (
              <button
                className="form__btn"
                type="button"
                onClick={onClickClear}
              >
                Clear
              </button>
            )}
          </div>
        </form>

        {pokemon && (
          <div className="pokemon">
            <div>
              <div className="pokemon__label">{pokemon.name}</div>
              <img
                src={pokemon.sprites.front_default}
                width={150}
                height={150}
                alt={pokemon.name}
              />
            </div>

            <div className="pokemon__moves">
              <div className="pokemon__label">Moves</div>
              {pokemon.moves.length && (
                <ul className="pokemon__moves-list">
                  {pokemon.moves.map((m, idx) => (
                    <li key={idx} className="pokemon__move">
                      <a href={m.move.url} target="_blank">
                        {m.move.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default BasicPokemonDemo;