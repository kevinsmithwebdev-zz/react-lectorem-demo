import React, { useState } from 'react';
import Lectorem from 'react-lectorem';
import storyData from './frere.data';
import './App.css';

require('react-dom');
window.React2 = require('react');
console.log('asdf react is equal', window.React1 === window.React2);

const App = () => {
  const [shouldShowTranslation, setShouldShowTranslation] = useState(true);
  const [isTranslationBelow, setIsTranslationBelow] = useState(true);
  const [isBySentence, setIsBySentence] = useState(false);

  const toggleValue = (flag, setFlag) =>  setFlag(!flag);

  console.log('asdf1', shouldShowTranslation);
  return (
    <div className='App'>
      <div onChange={ () => toggleValue(shouldShowTranslation, setShouldShowTranslation)}>
        <input type='checkbox' value name='config' checked={ shouldShowTranslation }/>Translation
      </div>

      <div onChange={ () => toggleValue(isTranslationBelow, setIsTranslationBelow)}>
        <input type='checkbox' value name='config' disabled={ !shouldShowTranslation } checked={ isTranslationBelow }/>Below
      </div>

      <div onChange={ () => toggleValue(isBySentence, setIsBySentence)}>
        <input type='checkbox' value name='config' disabled={ !shouldShowTranslation } checked={ isBySentence }/>Sentence
      </div>

      <Lectorem
        configuration={ { shouldShowTranslation, isTranslationBelow, isBySentence } }
        data={ storyData }
      />
    </div>
  );
}

export default App;
