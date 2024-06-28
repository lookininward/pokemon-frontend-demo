import React, { useState } from 'react';
import { Version } from '../types';
import CodeSnippet from '../components/CodeSnippet';
import BasicPokemonCode from '../components/Basic/BasicPokemonSearch.tsx?raw';
import BarePokemonCode from '../components/Bare/BarePokemonSearch.tsx?raw';
import PokemonSearchContainer from '../components/Advanced/components/PokemonSearchContainer.tsx?raw';
import PokemonSearchForm from '../components/Advanced/components/PokemonSearchForm.tsx?raw';
import PokemonCard from '../components/Advanced/components/PokemonCard.tsx?raw';
import basicStyle from '../components/Basic/style.css?raw';
import prodStyle from '../components/Advanced/style.css?raw';

interface SrcContainerProps {
  version: Version;
}

const SrcContainer: React.FC<SrcContainerProps> = ({ version }) => {
  const [activeTab, setActiveTab] = useState(0);

  let codeSnippets: { file: string, code: string }[] = [];

  switch (version) {
    case 'bare':
      codeSnippets = [
        { file: 'BarePokemonSearch.tsx', code: BarePokemonCode }
      ];
      break;
    case 'basic':
      codeSnippets = [
        { file: 'BasicPokemonSearch.tsx', code: BasicPokemonCode },
        { file: 'style.css', code: basicStyle },
      ];
      break;
    case 'advanced':
      codeSnippets = [
        { file: 'PokemonSearchContainer.tsx', code: PokemonSearchContainer },
        { file: 'PokemonSearchForm.tsx', code: PokemonSearchForm },
        { file: 'PokemonCard.tsx', code: PokemonCard },
        { file: 'style.css', code: prodStyle },
      ];
      break;
    default:
      return <div>Invalid version</div>;
  }

  return (
    <div className='src-container'>
      <div className='src-container__tabs'>
        {codeSnippets.map((snippet, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'app-btn app-btn--selected' : 'app-btn'}
          >
            {snippet.file}
          </button>
        ))}
      </div>
      <div className='code-display'>
        <CodeSnippet code={codeSnippets[activeTab].code} />
      </div>
    </div>
  );
};

export default SrcContainer;