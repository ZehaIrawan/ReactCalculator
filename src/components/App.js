import React, { useState } from 'react';
import '../styles/App.scss';
import '../styles/Button.scss';
import '../styles/ButtonPanel.scss';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function App() {
  const [total, next, operation] = useState(null);

  const handleClick = e => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div id='container'>
      <Display />
      {/* Pass result="" props to the display component */}

      <ButtonPanel onClick={handleClick} />
    </div>
  );
}

export default App;
