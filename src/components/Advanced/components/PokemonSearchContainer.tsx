import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import PokemonSearchForm from './PokemonSearchForm'
import { Pokemon, SearchFormError } from '../types';

function PokemonSearchContainer() {
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

    useEffect(() => {
        const setDefaultPokemon = async () => {
            await getPokemon('charizard').then(res => {
                if (!res) return;
                setPokemon(res);
            });
        }
        setDefaultPokemon();
    }, []);

    return (
        <div className="pokemon-search-container">
            <PokemonSearchForm
                onSubmit={onSubmit}
                onClickClear={onClickClear}
                setSearchTerm={setSearchTerm}
                formError={formError}
                pokemon={pokemon}
            />

            {pokemon && (
                <PokemonCard pokemon={pokemon} />
            )}
        </div>
    )
}

export default PokemonSearchContainer