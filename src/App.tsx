import './App.css'
import { useState } from 'react';
import BasicPokemonDemo from './components/Basic/BasicPokemonSearch'
import BarePokemonDemo from './components/Bare/BarePokemonSearch';
import ProductionPokemonDemo from './components/Production/ProductionPokemonSearch';

enum Version {
  Bare = 'bare',
  Basic = 'basic',
  Advanced = 'advanced'
}

const VERSION_DESCRIPTIONS = {
  [Version.Bare]: 'Focus on the core requirements of the task. Display ability to gather core requirements and implement them without straying from the task. Time sensitive. Within 10 minutes.',
  [Version.Basic]: 'Besides demonstrating the core requirements, there is opportunity to demonstrate additional skills. Within 30 minutes.',
  [Version.Advanced]: 'Demonstrate advanced skills. Within 1 hour.'
}


function App() {
  const [version, setVersion] = useState<Version>(Version.Bare);

  return (
    <div className='app-container'>
      <h1 className='app-header'>
        Pokémon Search Demo: {version}
      </h1>
      <p className='app-description'>
        {VERSION_DESCRIPTIONS[version]}
      </p>
      <select className="app-select" value={version} onChange={(e) => setVersion(e.target.value as Version)}>
        <option value={Version.Bare}>Bare</option>
        <option value={Version.Basic}>Basic</option>
        <option value={Version.Advanced}>Advanced</option>
      </select>
      <hr />

      {version === Version.Bare && <BarePokemonDemo />}
      {version === Version.Basic && <BasicPokemonDemo />}
      {version === Version.Advanced && <ProductionPokemonDemo />}
    </div>
  )
}

export default App
