import './App.css'
import { useState } from 'react';
import BasicPokemonDemo from './components/Basic/BasicPokemonSearch'
import BarePokemonDemo from './components/Bare/BarePokemonSearch';
import ProductionPokemonDemo from './components/Production/ProductionPokemonSearch';
import SrcContainer from './components/SrcContainer';
import { Version } from './types';


const VERSION_DESCRIPTIONS = {
  [Version.Bare]: 'Focus on the core requirements of the task. Display ability to gather core requirements and implement them without straying from the task. Time sensitive. Within 10 minutes.',
  [Version.Basic]: 'Besides demonstrating the core requirements, there is opportunity to demonstrate additional skills. Within 30 minutes.',
  [Version.Advanced]: 'Demonstrate advanced skills. Within 1 hour.'
}


function App() {
  const [version, setVersion] = useState<Version>(Version.Advanced);
  const [isViewingSrc, setIsViewingSrc] = useState<boolean>(false);

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsViewingSrc(false);
    setVersion(e.target.value as Version);
  }

  return (
    <div className='app-container'>
      <h1 className='app-header'>
        Pokémon Search Demo: {version}
      </h1>
      <p className='app-description'>
        {VERSION_DESCRIPTIONS[version]}
      </p>
      <div className='app-actions'>
        <select className="app-select" value={version} onChange={onChangeSelect}>
          <option value={Version.Bare}>Bare</option>
          <option value={Version.Basic}>Basic</option>
          <option value={Version.Advanced}>Advanced</option>
        </select>
        <button className={`app-btn ${isViewingSrc ? "app-btn--selecteed" : ""}`} onClick={() => setIsViewingSrc(!isViewingSrc)}>
          {isViewingSrc ? 'View Demo' : 'View Source'}
        </button>
      </div>
      <hr />

      {isViewingSrc ? (
        <SrcContainer version={version} />
      ) : (
        <>
          {version === Version.Bare && <BarePokemonDemo />}
          {version === Version.Basic && <BasicPokemonDemo />}
          {version === Version.Advanced && <ProductionPokemonDemo />}
        </>
      )}

    </div>
  )
}

export default App
