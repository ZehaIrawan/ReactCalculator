import React from 'react';
import '../App.css';
import Button from './Button';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className='container'>
      <Display />
      <Button />
      <ButtonPanel />
    </div>
  );
}

export default App;
