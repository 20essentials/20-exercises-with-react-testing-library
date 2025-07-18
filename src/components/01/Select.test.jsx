import { Select } from './Select.jsx';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Select Component', () => {
  it('should render correctly and select the element declaratively', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Select handleChange={handleChange} />);
    const select = screen.getByRole('combobox');
    const optionAPlus = screen.getByRole('option', {
      name: /a\+/i
    });
    const optionBMinus = screen.getByRole('option', {
      name: /ab-/i
    });
    await user.selectOptions(select, optionAPlus);
    expect(optionAPlus.selected).toBe(true);
    expect(optionBMinus.selected).toBe(false);
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
