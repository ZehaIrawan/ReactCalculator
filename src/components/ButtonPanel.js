import React from 'react';
import Button from './Button';
import firstRow from '../data/firstRow';
import secondRow from '../data/secondRow';
import thirdRow from '../data/thirdRow';
import fourthRow from '../data/fourthRow';
import fifthRow from '../data/fifthRow';

const ButtonPanel = props => {
  const { clickHandler } = props;

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

      <div className='row'>{trymap2(thirdRow)}</div>

      <div className='row'>{trymap2(fourthRow)}</div>

      <div className='row'>{trymap2(fifthRow)}</div>
    </div>
  );
};

export default ButtonPanel;
