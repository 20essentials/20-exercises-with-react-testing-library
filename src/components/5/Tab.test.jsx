import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Tab } from '#/components/5/Tab.jsx';
import { render, screen } from '@testing-library/react';

describe('Tab', () => {
  it('We prove the tab()', async () => {
    const user = userEvent.setup();
    render(<Tab />);
    const inputText = screen.getByRole('textbox');
    const inputNumber = screen.getByRole('spinbutton');
    const inputCheckbox = screen.getByRole('checkbox');
    expect(document.activeElement).toEqual(document.body)
    await user.tab()
    expect(document.activeElement).toBe(inputText)
    await user.tab()
    expect(document.activeElement).toBe(inputNumber)
    await user.tab()
    expect(document.activeElement).toBe(inputCheckbox)
    document.body.focus()
    expect(document.activeElement).toBe(document.body)
    await user.tab({shift: true});
    expect(document.activeElement).toBe(inputCheckbox)
  });
});
