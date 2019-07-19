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

      <Button name='AC' />
      <Button name='+/-' />
      <Button name='%' />
      <Button name='+' />

      <Button name='7' />
      <Button name='8' />
      <Button name='9' />
      <Button name='X' />

      <Button name='4' />
      <Button name='5' />
      <Button name='6' />
      <Button name='-' />

      <Button name='0' />
      <Button name='.' />
      <Button name='=' />

      <ButtonPanel />
    </div>
  );
}

export default App;
