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
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = (buttonName) => {
    const data = calculate({
      total, next, operation, error,
    }, buttonName);

    setNext(data.next);
    setOperation(data.operation);
    setTotal(data.total);
    setResult(data.next || data.total || data.error);
    setError(data.error);
  };

  return (
    <div id="container">
      <Display result={result} />

      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
