import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Register } from '#/components/7/Register.jsx';

describe('Form Component', () => {
  let input1 = null;
  let input2 = null;
  let handleChange = vi.fn();

  beforeEach(() => {
    render(<Register createUser={handleChange} />);
    input1 = screen.getByLabelText('Username');
    input2 = screen.getByLabelText('Password');
  });

  it('should render two inputs', () => {
    expect(input1.value).toBe('Margot');
    expect(input2.value).toBe('Smith');
  });

  it('should change the values of the inputs', async () => {
    await userEvent.clear(input1);
    await userEvent.clear(input2);
    await userEvent.type(input1, 'Ramsy');
    await userEvent.type(input2, 'Cristen');
    expect(input1.value).toBe('Ramsy');
    expect(input2.value).toBe('Cristen');
  });

  it('should call the handleChange', async () => {
    const userTest = { username: 'Patrick', password: 'Londa' };
    const buttonLoging = screen.getByRole('button', { name: /signup/i });
    await userEvent.clear(input1);
    await userEvent.clear(input2);
    await userEvent.type(input1, userTest.username);
    await userEvent.type(input2, userTest.password);
    await userEvent.click(buttonLoging);
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledWith({
      username: userTest.username,
      password: userTest.password
    });
  });
});
