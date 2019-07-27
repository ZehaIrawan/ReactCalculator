import operate from './operate.js';

const calculate = (data, buttonName) => {
  switch (buttonName) {
    case 'AC':
      data.total = '';
      data.next = '';
      break;
    case '+/-':
      data.next = data.next * -1;
      if (data.total !== -0) {
        data.total = data.total * -1;
      }
      break;
    case '%':
      data.next = data.next / 100;
      break;
    case '÷':
    case 'X':
    case '+':
    case '-':
      if (data.operation !== null && data.next !== null && data.total !== '') {
        data.total = operate(data.total, data.next, data.operation, data.error);
        data.operation = buttonName;
        data.next = null;
      } else {
        data.operation = buttonName;
      }

      if (data.next !== null) {
        data.total = data.next;
        data.next = null;
      }
      break;
    case '=':
      if (data.next !== null) {
        data.total = operate(data.total, data.next, data.operation, data.error);
        data.next = null
      }
      data.operation = null
      break;
    case '.':
      data.next = data.next + '.';
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if(data.total === 'Not a number') {
        data.total = ''
      }
      if (data.next === null) {
        data.next = '';
      }
      data.next += buttonName;

      break;
    default:
      break;
  }
console.log(data)
  return data;
};

export default calculate;
