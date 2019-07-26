import React from 'react';

const Button = props => {
  const { clickHandler, names, wide, color } = props;

  return (
    <div
      onClick={() => clickHandler(names)}
      className={
        'button ' +
        (color ? 'grey ' : 'tomato ') +
        (wide ? 'fifty' : 'twentyfive')
      }
    >
      {names}
    </div>
  );
};

export default Button;
