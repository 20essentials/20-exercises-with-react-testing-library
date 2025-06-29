import { Checkbox } from '#/components/1/Checkbox.jsx';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Checkbox Component', () => {
  it('We can check a checkbox', async () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} />);
    const user = userEvent.setup();
    const label_1 = screen.getByLabelText('I agree to the terms and conditions')
    const label_2 = screen.getByLabelText('I agree to the privacy policy')
    await user.click(label_1);
    expect(label_1.checked).toBe(true)
    expect(label_2.checked).toBe(false)
  });
});
