import React from 'react';
import Button from './Button';
import firstRow from '../data/firstRow';
import secondRow from '../data/secondRow';

const ButtonPanel = props => {
  const { clickHandler } = props;

  const thirdRow = ['4', '5', '6', '-'];
  const fourthRow = ['1', '2', '3', '+'];
  const fifthRow = ['0', '.', '='];

  const trymap = param =>
    param.map(e => (
      <Button
        names={e}
        key={e}
        color='grey'
        wide={false}
        clickHandler={clickHandler}
      />
    ));

  const trymap2 = param => {
    let arr = [];

    Object.keys(param).forEach(function(key) {
      arr.push(param[key]);
    });
    return arr.map(e => (
      <Button
        key={e.names}
        names={e.names}
        color={e.color}
        wide={e.wide}
        clickHandler={clickHandler}
      />
    ));
  };

  return (
    <div id='buttonPanel'>
      <div className='row'>{trymap2(firstRow)}</div>

      <div className='row'>{trymap2(secondRow)}</div>

      <div className='row'>{trymap(thirdRow)}</div>

      <div className='row'>{trymap(fourthRow)}</div>
      <div className='row'>{trymap(fifthRow)}</div>
    </div>
  );
};

export default ButtonPanel;
