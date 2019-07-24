import React from 'react';
import Button from './Button';

const ButtonPanel = props => {
  const { clickHandler } = props;
  return (
    <div id='buttonPanel'>
      <div className='row'>
        <Button
          names='AC'
          color='grey'
          wide={false}
          clickHandler={clickHandler}
        />
        <Button
          names='+/-'
          color='grey'
          wide={false}
          clickHandler={clickHandler}
        />
        <Button
          names='%'
          color='grey'
          wide={false}
          clickHandler={clickHandler}
        />
        <Button names='+' wide={false} clickHandler={clickHandler} />
      </div>

      <div className='row'>
        <Button
          names='7'
          color='grey'
          wide={false}
          clickHandler={clickHandler}
        />
        <Button
          names='8'
          color='grey'
          wide={false}
          clickHandler={clickHandler}
        />
        <Button
          names='9'
          color='grey'
          wide={false}
          clickHandler={clickHandler}
        />
        <Button names='X' wide={false} clickHandler={clickHandler} />
      </div>

      <div className='row'>
        <Button
          names='4'
          color='grey'
          wide={false}
          clickHandler={clickHandler}
        />
        <Button
          names='5'
          color='grey'
          wide={false}
          clickHandler={clickHandler}
        />
        <Button
          names='6'
          color='grey'
          wide={false}
          clickHandler={clickHandler}
        />
        <Button names='-' wide={false} clickHandler={clickHandler} />
      </div>

      <div className='row'>
        <Button
          names='0'
          color='grey'
          wide={true}
          clickHandler={clickHandler}
        />
        <Button
          names='.'
          color='grey'
          wide={false}
          clickHandler={clickHandler}
        />
        <Button
          names='='
          color='grey'
          wide={false}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
};

export default ButtonPanel;
