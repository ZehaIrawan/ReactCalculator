import React from 'react';

const Button = props => {
  const { clickHandler, names, wide, color } = props;
  let bg;

  color === 'grey'
    ? (bg = {
        backgroundColor: 'grey'
      })
    : (bg = {
        backgroundColor: 'tomato'
      });

  let expand;

  wide ? (expand = { width: '50%' }) : (expand = { width: '25%' });

  return (
    <div
      onClick={() => clickHandler(names)}
      value={names}
      className='button'
      style={{ ...bg, ...expand }}
    >
      {names}
    </div>
  );
};

export default Button;
