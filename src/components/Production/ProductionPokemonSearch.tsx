import React, { useState } from 'react';
import './style.css';

// ping api
// print front facing image of any pokemen
// create search input
// list of moves that the pokemon has
// https://pokeapi.co/
// todo: accessibility, BEM, components
// todo: semantic html
// todo: loading state, loading skeleton

// Improvements for Production app
// Breakup into components: Improves readability of code, more atomic code that easier to get in and edit
// PokemonSearchContainer - Contains all components and functionality, would be rendered within a page route component
// PokemonSearchForm - Contains form that takes debounced input, runs a onSubmit callback on submit

// Use TypeScript, .tsx
// Use React testing component
// Write unit tests for component
// Create a storybook counterpart

// Input valdation would be more robust
// Form would use react-hook-forms or similar lib
// Use a library like zod or yup

// Use a debounce library

// add a skeleton loading placeholder

// show off understanding of the CSS box model

// todo: focus input on load

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
}

interface SearchFormError {
  field: string;
  msg: string;
}

const ProductionPokemonDemo = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // todo: debounce
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [formError, setFormError] = useState<SearchFormError | null>(null);

  const getPokemon = async (name: string): Promise<Pokemon | null> => {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon';
      const res = await fetch(`${url}/${name}`);
      const data = await res.json();
      const { sprites, moves } = data;

      if (!sprites || !moves) return null;

      return {
        name,
        sprites,
        moves,
      }
    } catch (e) {
      return null;
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

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
      if (!res) return;
      setPokemon(res);
    } catch (e) {
      console.error('Fail: fetch pokemon', e);
    }
  };

  const onClickClear = () => {
    setSearchTerm("");
    setFormError(null);
    setPokemon(null);

    const input = document.getElementById('search') as HTMLInputElement;
    if (input) input.value = '';
  };

  return (
    // todo justify section for route page
    <section className="pokemon-search-page">
      <h1>Basic Pokemon Search</h1>
      <div className="pokemon-search-container">
        <form className="form" onSubmit={onSubmit}>
          <div className="form-field">
            <label className="form-field__label" htmlFor="search">
              Search Pokemon
            </label>
            <input
              className="form-field__text-input"
              id="search"
              type="text"
              placeholder="e.g.. pikachu"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {formError && formError.field === 'search' && (
              <div className="form-field__error">{formError.msg}</div>
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
          // todo: pokemon component
          <div className="pokemon">
            <div>
              <div className="pokemon__label">{pokemon.name}</div>

              <div className="pokemon__img">
                <img
                  src={pokemon.sprites.front_default}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
              </div>
            </div>

            {/* todo: pokemon moves component */}
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

export default ProductionPokemonDemo;