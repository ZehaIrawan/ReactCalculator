import React from 'react';
import '../styles/App.scss';
import '../styles/Button.scss';
import '../styles/ButtonPanel.scss';
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
