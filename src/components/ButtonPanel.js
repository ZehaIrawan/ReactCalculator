import React from 'react';
import Button from './Button';

const ButtonPanel = (props) => {
  return (
    <div id="buttonPanel">
      <div className="row">
        <Button names="AC" color="grey" wide={false} />
        <Button names="+/-" color="grey" wide={false} />
        <Button names="%" color="grey" wide={false} />
        <Button names="+" wide={false} />
      </div>

      <div className="row">
        <Button names="7" color="grey" wide={false} />
        <Button names="8" color="grey" wide={false} />
        <Button names="9" color="grey" wide={false} />
        <Button names="X" wide={false} />
      </div>

      <div className="row">
        <Button names="4" color="grey" wide={false} />
        <Button names="5" color="grey" wide={false} />
        <Button names="6" color="grey" wide={false} />
        <Button names="-" wide={false} />
      </div>

      <div className="row">
        <Button names="0" color="grey" wide={true} />
        <Button names="." color="grey" wide={false} />
        <Button names="=" color="grey" wide={false} />
      </div>
    </div>
  );
};

export default ButtonPanel;
