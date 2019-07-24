import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  numberOne = Big(numberOne);
  numberTwo = Big(numberTwo);

  let result;
  switch (operation) {
    case '÷':
      result = numberOne.div(numberTwo).toString();
      break;
    case 'X':
      result = numberOne.times(numberTwo).toString();
      break;
    case '+':
      result = numberOne.plus(numberTwo).toString();
      break;
    case '-':
      result = numberOne.minus(numberTwo).toString();
      console.log(result)
      break;
    default:
      break;
  }
  return result;
};

export default operate;
