import React from 'react';
import { Version } from '../types';
import CodeSnippet from '../components/CodeSnippet';
import BasicPokemonCode from '../components/Basic/BasicPokemonSearch.tsx?raw';
import BarePokemonCode from '../components/Bare/BarePokemonSearch.tsx?raw';
import ProductionPokemonCode from '../components/Production/ProductionPokemonSearch.tsx?raw';

interface SrcContainerProps {
  version: Version;
}

const SrcContainer: React.FC<SrcContainerProps> = ({ version }) => {
  let code: string;

  switch (version) {
    case 'basic':
      code = BasicPokemonCode;
      break;
    case 'bare':
      code = BarePokemonCode;
      break;
    case 'advanced':
      code = ProductionPokemonCode;
      break;
    default:
      return <div>Invalid version</div>;
  }

  return (
    <div className='src-container'>
      <CodeSnippet code={code} />
    </div>
  );
};

export default SrcContainer;
