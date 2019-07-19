import React from 'react';
import '../App.css';
import Button from './Button';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div id='container'>
      <Display />
      {/* Pass result="" props to the display component */}
      <Button />
      <ButtonPanel />
    </div>
  );
}

export default App;
