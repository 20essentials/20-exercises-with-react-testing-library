import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Message } from './Message.jsx';

describe('Form Component', () => {
  let paragraphMessage = null;
  let user = null;

  beforeEach(() => {
    user = userEvent.setup();
    render(<Message />);
    paragraphMessage = screen.queryByText(/hi! this is the message 😎/i);
  });

  it('should not render the paragraph message', () => {
    expect(paragraphMessage).toBeFalsy();
  });

  it('should render the paragraph message', async () => {
    const buttonShowMessage = screen.getByRole('button', {
      name: /show message/i
    });
    await user.click(buttonShowMessage);
    paragraphMessage = screen.getByText(/hi! this is the message 😎/i);
    expect(paragraphMessage).toBeTruthy();
  });
});
