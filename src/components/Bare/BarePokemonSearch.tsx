// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

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