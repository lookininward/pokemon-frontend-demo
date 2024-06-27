// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/**
 * Focus on the core requirements of the task:
 * - You have ~10 minutes.
 * - You are given a link to the API documentation: https://pokeapi.co
 * - Display a form with a text input field and a submit button.
 * - User can enter a search term and click the submit button.
 * - The search term is used to fetch data from the PokeAPI.
 * - The data is displayed on the page: Pokémon name, image (front-facing), and moves.
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
 * - No need to worry about styling. Focus on core functinality, use inline styles if needed.
 *
 * Besides demonstrating the core requirements, there is an opportunity to demonstrate additional skills without taking too much additional time.
 * - Semantic HTML
 * - Simple DOM structure
 * - Inline styles
 * - String interpolation
 * - Async functions, try/catch instead of .then/.catch
 * - Destructuring variables
 * - Basic input parsing
 */

import { useState } from 'react';

const BarePokemonDemo = () => {
    const [pokemon, setPokemon] = useState("");
    const [searchTerm, setSearchTerm] = useState();

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
            const parsedInput = searchTerm.trim().toLowerCase();
            const res = await getPokemon(parsedInput);
            setPokemon(res);
        } catch (e) {
            console.error('Fail: fetch pokemon', e);
        }
    };

    return (
        <section style={{ padding: "2em", maxWidth: '500px' }}>
            <form onSubmit={onSubmit}>
                <input
                    id="search"
                    type="text"
                    placeholder="Search Pokemon"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Go</button>
            </form>

            {pokemon && (
                <div>
                    <h2>{pokemon.name}</h2>
                    <img
                        src={pokemon.sprites.front_default}
                        width={150}
                        height={150}
                        alt={pokemon.name}
                    />
                    <div>
                        <h3>Moves</h3>
                        {pokemon.moves.length && (
                            <ul>
                                {pokemon.moves.map(m => <li key={m.move.name}> {m.move.name} </li>)}
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default BarePokemonDemo;