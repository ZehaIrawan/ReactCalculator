import React from 'react';

const Button = (props) => {
  return (
    <div id="button">
     <button>{props.name}</button>
    </div>
  );
};

export default Button;