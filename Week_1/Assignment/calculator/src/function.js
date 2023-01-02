import { operators } from './constant';

export const handleEqual = (result) => {
  let final;
  operators.forEach((operator) => {
    if (result.includes(operator)) {
      const temp = result.split(operator);
      final = calculate(operator, parseFloat(temp[0]), parseFloat(temp[1]));
    }
  });
  return final;
};

const calculate = (operator, left, right) => {
  switch (operator) {
    case '+':
      return plus(left, right);
    case '-':
      return minus(left, right);
    case '*':
      return times(left, right);
    case '/':
      return divide(left, right);
    default:
      return '';
  }
};
const plus = (left, right) => {
  return left + right;
};
const minus = (left, right) => {
  return left - right;
};
const times = (left, right) => {
  return left * right;
};
const divide = (left, right) => {
  return left / right;
};
