import React, { useState } from 'react';
import { functions, numbers, operators } from '../../constant';
import { datas } from '../../data';
import { handleEqual } from '../../function';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
  const [history, setHistory] = useState();
  const [result, setResult] = useState();
  const [isAfterOperator, setIsAfterOperator] = useState(false);
  const [isEquals, setIsEquals] = useState(false);

  const handleAction = (input) => {
    // CHECK INPUT NUMBER
    if (numbers.includes(input)) {
      if (isEquals) {
        setResult(input);
        setIsEquals(false);
        setIsAfterOperator(false);
        return;
      }
      setResult(result ? result + input : history ? history + input : input);
      setIsAfterOperator(false);
      return;
    }

    // CHECK INPUT OPERATOR
    if (operators.includes(input)) {
      // + - * /
      if (!isAfterOperator) {
        if (input === '=') {
          if ([...result]?.some((res) => operators?.includes(res))) {
            setResult(
              result
                ? result + ' ' + input + ' ' + handleEqual(result)
                : history
                ? history + ' ' + input + ' ' + handleEqual(history)
                : '',
            );
            setHistory(handleEqual(result));
            setIsEquals(true);
            setIsAfterOperator(true);
            return;
          }
          return;
        }
        if ([...result]?.some((res) => operators?.includes(res))) {
          setHistory(handleEqual(result));
          setResult(result ? handleEqual(result) + ' ' + input + ' ' : '');
          setIsAfterOperator(true);
          setIsEquals(false);
          return;
        }
        setResult(
          result
            ? result + ' ' + input + ' '
            : history
            ? history + ' ' + input + ' '
            : '',
        );
        setIsAfterOperator(true);
        return;
      }
      // =
      if (isEquals) {
        if (input !== '=') {
          setResult(history ? history + ' ' + input + ' ' : '');
          setIsEquals(false);
          setIsAfterOperator(false);
          return;
        }
        setResult(history);
        setIsEquals(false);
        setIsAfterOperator(false);
        return;
      }
    }

    // CHECK INPUT FUNCTION
    if (functions.includes(input)) {
      setIsAfterOperator(false);
      setIsEquals(true);
      setResult('');
      if (input === 'AC') setHistory('');
      return;
    }
  };
  return (
    <div className="grid grid-rows-6 grid-cols-4 gap-2 p-3 max-h-[500px] bg-gray-300 rounded-lg [box-shadow:0px_4px_0_0_#b1b1b1,0_4px_0_0_#b1b1b140] shadow-2xl">
      <div className="w-[230px] h-[50px] flex justify-center items-center col-span-4 bg-gray-700 rounded shadow-inner">
        <span className="p-3 text-gray-300 text-right w-full font-bold text-xl whitespace-nowrap overflow-hidden flex flex-row-reverse">
          {result}
        </span>
      </div>
      {datas?.map((data) => {
        const { input, className } = data;
        return (
          <CalculatorButton
            input={input}
            action={() => handleAction(input)}
            className={className}
          />
        );
      })}
    </div>
  );
};

export default Calculator;
