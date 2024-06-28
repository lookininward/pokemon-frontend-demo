import { SearchFormError, Pokemon } from "../types"

function PokemonSearchForm({
    onSubmit,
    onClickClear,
    setSearchTerm,
    formError,
    pokemon,
}: {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    onClickClear: () => void
    setSearchTerm: (value: string) => void
    formError: SearchFormError | null
    pokemon: Pokemon | null
}) {
    return (
        <form className="form" onSubmit={onSubmit}>
            <div className={`form-field ${formError ? 'form-field--error' : ''}`}>
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
                        className="form__btn form__btn--secondary"
                        type="button"
                        onClick={onClickClear}
                    >
                        Clear
                    </button>
                )}
            </div>
        </form>
    )
}

export default PokemonSearchForm