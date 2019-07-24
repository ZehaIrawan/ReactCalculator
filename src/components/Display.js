import React from 'react';

const Display = (props) => {
  return (
    <div id='display'>
      <h1>{props.result}</h1>
    </div>
  );
};

Display.defaultProps = {
  result: '0'
};
export default Display;
