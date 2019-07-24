import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {

  let result 
  switch (operation) {
    case '÷':
    result =  numberOne / numberTwo 
      break;
    case 'X':
      
     result = numberOne * numberTwo 
      break;
    case '+':
    result =  numberOne + numberTwo 
      break;
    case '-':
    
   result =  numberOne - numberTwo 
      break;
  }
  return result
};

export default operate;
