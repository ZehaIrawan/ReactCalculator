import React, { useState } from 'react';
import '../styles/App.scss';
import '../styles/Button.scss';
import '../styles/ButtonPanel.scss';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function App() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = buttonName => {
    console.log(buttonName);
  };

  return (
    <div id='container'>
      <Display result={2} />

      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
