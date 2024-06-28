import './App.css'
import { useState } from 'react';
import { Version } from './types';
import BasicPokemonDemo from './components/Basic/BasicPokemonSearch'
import BarePokemonDemo from './components/Bare/BarePokemonSearch';
import ProductionPokemonDemo from './components/Advanced/AdvancedPokemonSearch';
import DetailContainer from './components/DetailContainer';
import SrcContainer from './components/SrcContainer';

function App() {
  const [version, setVersion] = useState<Version>(Version.Advanced);
  const [selectedTab, setSelectedTab] = useState<'details' | 'src'>('details');

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVersion(e.target.value as Version);
  }

  return (
    <div className='app-container'>
      <h1 className='app-header'>
        Pokémon Search Demo: {version}
      </h1>
      <p className='app-description'>
        <strong>Task</strong>: You are given a link to the API documentation: <a href="https://pokeapi.co" target='_blank'>https://pokeapi.co</a>.
        Display a form with a text input field and a submit button.
        User can enter a search term and click the submit button.
        The search term is used to fetch data from the PokeAPI.
        The data is displayed on the page: Pokémon name, image (front-facing), and moves.
      </p>
      <div className='app-actions mb-2'>
        <select className="app-select" value={version} onChange={onChangeSelect}>
          <option value={Version.Bare}>Bare</option>
          <option value={Version.Basic}>Basic</option>
          <option value={Version.Advanced}>Advanced</option>
        </select>
      </div>
      <hr />
      <div className='app-body'>
        <div>
          {version === Version.Bare && <BarePokemonDemo />}
          {version === Version.Basic && <BasicPokemonDemo />}
          {version === Version.Advanced && <ProductionPokemonDemo />}
        </div>
        <div>
          <div className='app-tabs'>
            <button className={`app-btn ${selectedTab === 'details' ? 'app-btn--selected' : ''}`} onClick={() => setSelectedTab('details')}>Details</button>
            <button className={`app-btn ${selectedTab === 'src' ? 'app-btn--selected' : ''}`} onClick={() => setSelectedTab('src')}>Source</button>
          </div>
          {selectedTab === 'details' && <DetailContainer version={version} />}
          {selectedTab === 'src' && <SrcContainer version={version} />}
        </div>
      </div>

    </div>
  )
}

export default App
