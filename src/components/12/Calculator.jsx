import { useState } from 'react';
import { operators } from './consts.js';

const calculatorUI = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];

export const Calculator = () => {
  const [value, setValue] = useState('');
  const createHandleClick = op => () => setValue(value.concat(op));

  return (
    <div>
      <h1>Calculator</h1>
      <input type='text' value={value} readOnly />
      <div role='grid'>
        {calculatorUI.map((numbers, i) => (
          <div key={i} role='row'>
            {numbers.map(number => {
              return (
                <button onClick={createHandleClick(number)} key={number}>
                  {number}
                </button>
              );
            })}
            <button onClick={createHandleClick(operators[i])} key={operators[i]}>
              {operators[i]}
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => setValue(eval(value))}>=</button>
    </div>
  );
};
