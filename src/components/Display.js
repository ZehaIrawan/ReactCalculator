import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
    <div id="display">
      <h1>{result}</h1>
    </div>
  );
};

function nullable(subRequirement) {
  const check = (required, p, key, ...rest) => {
    if (p[key] === null) {
      return null;
    }
    const sub = required ? subRequirement.isRequired : subRequirement;
    return sub(p, key, ...rest);
  };
  const fn = check.bind(null, false);
  fn.isRequired = check.bind(null, true);
  return fn;
}

Display.propTypes = {
  result: nullable(PropTypes.string).isRequired,
};

export default Display;
