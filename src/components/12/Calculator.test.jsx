import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { Calculator } from './Calculator.jsx';
import { operators } from './consts.js';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('Calculator', () => {
  afterEach(cleanup);
  beforeEach(() => render(<Calculator />));

  it('should render "Calculator" anywhere in the document', () => {
    screen.getByText('Calculator');
  });

  it('should render numbers anywhere in the document', () => {
    numbers.forEach(number => screen.getByText(number));
  });

  it('should render 4 rows like in a calculator UI', () => {
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(4)
  });

  it('should render math operators: ' + String(operators), () => {
    operators.forEach(operator => screen.getByText(operator));
  });

  it('should render an equal sign', () => {
    screen.getByText('=');
  });

  it('should render an input', () => {
    screen.getByRole('textbox');
  });

  it('should print the number after being clicked by the user', () => {
    const one = screen.getByText('1');
    fireEvent.click(one);
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('1');
  });

  it('should print several numbers after being clicked by the user', () => {
    let result = '';

    for (const number of numbers) {
      fireEvent.click(screen.getByText(number));
      result += number;
    }
    const input = screen.getByRole('textbox');
    expect(input.value).toBe(result);
  });

  it('should print numbers and operator after being clicked by the user', () => {
    const one = screen.getByText('1');
    fireEvent.click(one);

    const plus = screen.getByText('+');
    fireEvent.click(plus);
    fireEvent.click(one);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('1+1');
  });

  it('should calculate based on user input and show the calculation', () => {
    const one = screen.getByText('1');
    fireEvent.click(one);

    const plus = screen.getByText('+');
    fireEvent.click(plus);
    fireEvent.click(one);

    const equal = screen.getByText('=');
    fireEvent.click(equal);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('2');
  });
});
