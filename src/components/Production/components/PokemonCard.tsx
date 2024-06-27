import { Pokemon } from "../types"

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <div className="pokemon card">
            <div>
                <h3 className="pokemon__name">{pokemon.name}</h3>
                <div className="pokemon__img-container">
                    <img
                        className="pokemon__img"
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                </div>
            </div>
            <div className="pokemon__moves">
                <h4 className="pokemon__moves-header">Moves</h4>
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
    )
}

export default PokemonCard