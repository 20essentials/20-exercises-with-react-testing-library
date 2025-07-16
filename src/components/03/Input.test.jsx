import { Input } from './Input.jsx';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Input Component', () => {
  it('should write correctly', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Input handleChange={handleChange} />);
    screen.logTestingPlaygroundURL();
    const input = screen.getByPlaceholderText(/your name\.\.\./i);
    expect(input.value).toBe('');
    await user.type(input, 'abc');
    expect(handleChange).toHaveBeenCalled();
    expect(input.value).toBe('abc')
  });
});
