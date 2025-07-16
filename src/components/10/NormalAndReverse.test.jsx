import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NormalAndReverse } from './NormalAndReverse.jsx';

describe('NormalAndReverse', () => {
  const mockupData = [
    { productName: 'Apple iPhone' },
    { productName: 'Tide laundry detergent' },
    { productName: 'Nike Air Jordans' }
  ];

  const getRenderedNames = () =>
    screen.getAllByTestId('product-name').map(el => el.textContent);

  it('should render the button and the list in normal order', () => {
    render(<NormalAndReverse data={mockupData} />);
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Reverse');

    expect(getRenderedNames()).toEqual([
      'Apple iPhone',
      'Tide laundry detergent',
      'Nike Air Jordans'
    ]);
  });

  it('should reverse the list after clicking the button', async () => {
    const user = userEvent.setup();
    render(<NormalAndReverse data={mockupData} />);
    const button = screen.getByRole('button');

    await user.click(button);

    expect(button.textContent).toBe('Normal');
    expect(getRenderedNames()).toEqual([
      'Nike Air Jordans',
      'Tide laundry detergent',
      'Apple iPhone'
    ]);
  });

  it('should re-reverse the list if the button is clicked again', async () => {
    const user = userEvent.setup();
    render(<NormalAndReverse data={mockupData} />);
    const button = screen.getByRole('button');

    await user.click(button); // Reverse
    await user.click(button); // Back to normal

    expect(button.textContent).toBe('Reverse');
    expect(getRenderedNames()).toEqual([
      'Apple iPhone',
      'Tide laundry detergent',
      'Nike Air Jordans'
    ]);
  });
});
