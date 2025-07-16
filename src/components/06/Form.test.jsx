import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Form } from './Form.jsx';

describe('Form Component', () => {
  let input1 = null;
  let input2 = null;
  let handleSubmit = vi.fn();

  beforeEach(() => {
    render(<Form onSubmit={handleSubmit} />);
    input1 = screen.getByLabelText('Username');
    input2 = screen.getByLabelText('Password');
  });

  it('should render two inputs', () => {
    expect(input1.value).toBe('Pedro');
    expect(input2.value).toBe('Leenz');
  });

  it('should change the values of the inputs', async () => {
    await userEvent.clear(input1);
    await userEvent.clear(input2);
    await userEvent.type(input1, 'Elena');
    await userEvent.type(input2, 'Beend');
    expect(input1.value).toBe('Elena');
    expect(input2.value).toBe('Beend');
  });

  it('should call the handleSubmit', async () => {
    const userTest = { username: 'Celeste', password: 'PatitoDeGoma' };
    const buttonLoging =  screen.getByRole('button', { name: /login/i });
    await userEvent.clear(input1);
    await userEvent.clear(input2);
    await userEvent.type(input1, userTest.username);
    await userEvent.type(input2, userTest.password);
    await userEvent.click(buttonLoging)
    expect(handleSubmit).toHaveBeenCalled();
  });
});
