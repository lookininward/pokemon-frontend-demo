import { Version } from "../types";

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

// Production
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

function DetailContainer({ version }: { version: Version }) {
    return (
        <div className="detail-container">
            {version === 'bare' && (
                <div>
                    <div className="mb-2">
                        <h3 className="font-semibold mb-1">Focus on the core requirements of the task</h3>
                        <ul>
                            <li>You have ~10 minutes.</li>
                            <li>Focus on getting the core requirements working. Nothing else.</li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <h3 className="font-semibold mb-1">Approach</h3>
                        <ul>
                            <li>Take a moment to review the API documentation. Identify the endpoint that you will use to fetch data for this task.</li>
                            <li>Create a new React component to contain code. Likely, this will be in an online code editor so just keep it in a single file.</li>
                            <li>Setup state to manage the search term input value and Pokémon data.</li>
                            <li>Create a function to fetch data from the PokeAPI.</li>
                            <li>Create a function to handle form submission.</li>
                            <li>Render the form, input field, and submit button.</li>
                            <li>Render the Pokémon data when it is available: name, front-facing image, and list of moves.</li>
                            <li>All the code is contained in a single file. No need to create separate files for components, styles, etc. No imports.</li>
                            <li>No need to worry about styling. Focus on core functionality, use inline styles if needed.</li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <h3 className="font-semibold">Besides the core requirements, there is an opportunity to demonstrate additional skills like:</h3>
                        <ul>
                            <li>Semantic HTML</li>
                            <li>Simple DOM structure</li>
                            <li>Inline styles</li>
                            <li>String interpolation</li>
                            <li>Async functions, try/catch instead of .then/.catch</li>
                            <li>Destructuring variables</li>
                            <li>Basic input parsing: .toLowerCase(), .trim()</li>
                        </ul>
                    </div>
                </div>
            )}

            {version === 'basic' && (
                <div>
                    <div className="mb-2">
                        <h3 className="font-semibold mb-1">Achieve all requirements from the Bare version plus:</h3>
                        <ul>
                            <li>You have ~30 minutes.</li>
                            <li>Enhance the functionality and user experience.</li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <h3 className="font-semibold mb-1">Approach</h3>
                        <ul>
                            <li>Debounce the search term input field to limit API calls while the user is typing.</li>
                            <li>Add form field validation and display error messages for invalid inputs.</li>
                            <li>Implement basic responsive design, starting with mobile-first and then adjusting for desktop.</li>
                            <li>Use basic CSS for styling, applying CSS classes and selectors.</li>
                            <li>Follow the BEM (Block Element Modifier) CSS naming convention for organizing styles.</li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <h3 className="font-semibold">Additional skills to demonstrate:</h3>
                        <ul>
                            <li>Effective use of async/await for handling asynchronous operations.</li>
                            <li>Managing component state and side effects with React hooks.</li>
                            <li>Ensuring accessibility in form controls and other interactive elements.</li>
                            <li>Implementing clear form and error handling functions.</li>
                            <li>Demonstrating string interpolation for dynamic messages.</li>
                        </ul>
                    </div>
                </div>
            )}

            {version === 'advanced' && (
                <div>
                    <div className="mb-2">
                        <h3 className="font-semibold mb-1">Achieve all requirements from the Basic version plus:</h3>
                        <ul>
                            <li>You have ~60 minutes.</li>
                            <li>Enhance the application to provide a more comprehensive and polished experience.</li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <h3 className="font-semibold mb-1">Approach</h3>
                        <ul>
                            <li>Debounce the search term input field to limit API calls while the user is typing.</li>
                            <li>Add form field validation and display error messages for invalid inputs.</li>
                            <li>Implement basic responsive design, starting with mobile-first and then adjusting for desktop.</li>
                            <li>Use CSS modules or styled-components for a more maintainable styling approach.</li>
                            <li>Follow the BEM (Block Element Modifier) CSS naming convention for organizing styles.</li>
                            <li>Utilize React hooks for managing state and side effects.</li>
                            <li>Ensure accessibility in form controls and other interactive elements.</li>
                            <li>Implement a default Pokémon that is displayed on initial load.</li>
                            <li>Create separate components for the search form and Pokémon card for better code organization.</li>
                            <li>Use TypeScript for type safety and better development experience.</li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <h3 className="font-semibold">Additional skills to demonstrate:</h3>
                        <ul>
                            <li>Enhanced form validation techniques.</li>
                            <li>Effective use of async/await for handling asynchronous operations.</li>
                            <li>Managing component state and side effects with React hooks.</li>
                            <li>Ensuring accessibility in form controls and other interactive elements.</li>
                            <li>Implementing clear form and error handling functions.</li>
                            <li>Demonstrating string interpolation for dynamic messages.</li>
                            <li>Optimizing performance by debouncing the search input.</li>
                            <li>Structuring the project for scalability and maintainability.</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailContainer;