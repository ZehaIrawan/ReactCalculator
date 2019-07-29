import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    clickHandler, names, wide, color,
  } = props;

  return (
    <div
      onClick={() => clickHandler(names)}
      className={
`button ${(color ? 'grey ' : 'tomato ')} ${(wide ? 'fifty' : 'twentyfive')}`
      }
    >
      {names}
    </div>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  names: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
