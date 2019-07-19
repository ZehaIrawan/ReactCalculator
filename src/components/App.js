import React from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div id='container'>
      <Display />
      {/* Pass result="" props to the display component */}

      <ButtonPanel />
    </div>
  );
}

export default App;
