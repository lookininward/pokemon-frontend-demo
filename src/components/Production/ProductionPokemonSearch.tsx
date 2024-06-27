import './style.css';
import PokemonSearchContainer from './components/PokemonSearchContainer';

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

const ProductionPokemonDemo = () => {

  return (
    // todo justify section for route page
    <section className="pokemon-search-page">
      <PokemonSearchContainer />
    </section>
  );
}

export default ProductionPokemonDemo;