import React, { useState } from 'react';
import Lectorem from 'react-lectorem';
import storyData from './frere.data';
import './App.css';

const App = () => {
  const [shouldShowTranslation, setShouldShowTranslation] = useState(true);
  const [isTranslationBelow, setIsTranslationBelow] = useState(true);
  const [isBySentence, setIsBySentence] = useState(false);

  const toggleValue = (flag, setFlag) =>  setFlag(!flag);

  return (
    <div className='App'>

      <div className='demoBox'>
        <div className='controls'>
          <button className='control' onClick={ () => toggleValue(isBySentence, setIsBySentence) }>
            { isBySentence ? 'Organize by Paragraph' : 'Organize by Sentence' }
          </button>

          <button className='control' onClick={ () => toggleValue(shouldShowTranslation, setShouldShowTranslation)}>
            { shouldShowTranslation ? 'Hide Translation' : 'ShowTranslation' }
          </button>

          <button className={`control ${!shouldShowTranslation ? 'disabled' : '' }`} onClick={ () => toggleValue(isTranslationBelow, setIsTranslationBelow)}>
            { isTranslationBelow ? 'Translation Beside' : 'Translation Below' }
          </button>
        </div>
        <p className='controlText'>This is not part of the component - it's to show that these can be controlled.</p>
      </div>

      <Lectorem
        configuration={ { shouldShowTranslation, isTranslationBelow, isBySentence } }
        data={ storyData }
      />
    </div>
  );
}

export default App;
