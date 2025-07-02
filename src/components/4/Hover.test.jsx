import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Hover } from '#/components/4/Hover.jsx';
import { render, screen } from '@testing-library/react';

describe('Hover', () => {
  it('should be exist', () => {
    render(<Hover />);
    const button = screen.getByText('Hover on me');
    expect(button.textContent).toBe('Hover on me');
  });

  it('should be have hover correctly', async () => {
    const user = userEvent.setup();
    render(<Hover />);
    let isHover = false;
    const button = screen.getByText('Hover on me');
    button.addEventListener('mouseover', () => {
      isHover = true;
    });
    button.addEventListener('mouseout', () => {
      isHover = false;
    });

    expect(isHover).toBeFalsy();

    await user.hover(button);

    expect(isHover).toBeTruthy();

    await user.unhover(button);

    expect(isHover).toBeFalsy();
  });
});
