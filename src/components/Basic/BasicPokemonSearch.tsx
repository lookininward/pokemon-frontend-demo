// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Demonstrate basic pokemon search using the PokeAPI
// Functional React component
// manage local state using useState
// demonstrate async fetch
// demonstrate form validation
// demonstrate error handling
// demonstrate conditional rendering
// demonstrate string interpolation
// demonstrate event handling
// demonstrate basic css
// demonstrate basic html
// demonstrate basic form
// demonstrate basic input
// demonstrate basic button
// demonstrate basic label
// demonstrate basic div
// demonstrate basic section
// demonstrate basic h1
// demonstrate basic ul
// demonstrate basic li
// demonstrate basic a
// demonstrate basic img
// demonstrate basic inline styles
// demonstrate basic css classes
// demonstrate basic css selectors
// demonstrate basic css combinators
// demonstrate semantic html
// demonstrate debouncing
// efficient DOM updates
// efficient DOM design -- no unnecessary elements
// useCallback?


/**
 * Focus on the core requirements of the task:
 * - You have ~30 minutes.
 * - Core requirements outlined in the BarePokemonSearch.tsx.
 *
 * Approach:
 * - Take a moment to review the API documentation. Identify the endpoint that you will use to fetch data for this task.
 * - Create a new React component to contain code. Likely, this will be in an online code editor so just keep it in a single file.
 * - Setup state to manage the search term input value and Pokémon data.
 * - Create a function to fetch data from the PokeAPI.
 * - Create a function to handle form submission.
 * - Render the form, input field, and submit button.
 * - Render the Pokémon data when it is available: name, front-facing image, and list of moves.
 * - All the code is contained in a single file. No need to create separate files for components, styles, etc. No imports.
 *
 * Besides demonstrating the core requirements, there is an opportunity to demonstrate additional skills without taking too much additional time.
 * - Debounce the search term input field.
 * - Form field validation. Display error messages.
 * - Basic responsiven design. Mobile first then desktop.
 * - Basic CSS. Use CSS classes and selectors.
 * - BEM CSS naming convention.
 */

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
    // todo justify section for route page
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

export default BasicPokemonDemo;