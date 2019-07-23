import React from 'react';

const Button = (props) => {
  const handleClick = e => {
    console.log(e.target.value);
  };

  let bg;

  props.color === 'grey'
    ? (bg = {
        backgroundColor: 'grey'
      })
    : (bg = {
        backgroundColor: 'tomato'
      });

  let expand;

  props.wide ? (expand = { width: '50%' }) : (expand = { width: '25%' });

  return (
    <div onClick={handleClick} className='button' style={{ ...bg, ...expand }}>
      {props.names}
    </div>
  );
};

export default Button;
