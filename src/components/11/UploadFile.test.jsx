import { UploadFile } from '#/components/11/UploadFile.jsx';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Checkbox Component', () => {
  it('upload file', async () => {
    const user = userEvent.setup();
    render(<UploadFile />);
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input = screen.getByLabelText(/upload file/i);
    await user.upload(input, file);
    expect(input.files[0]).toBe(file);
    expect(input.files.item(0)).toBe(file);
    expect(input.files.length).toBe(1);
  });

  it('upload multiple files', async () => {
    const user = userEvent.setup();

    render(
      <div>
        <label htmlFor='file-uploader'>Upload file:</label>
        <input id='file-uploader' type='file' multiple />
      </div>
    );

    const files = [
      new File(['hello'], 'hello.png', { type: 'image/png' }),
      new File(['there'], 'there.png', { type: 'image/png' })
    ];
    const input = screen.getByLabelText(/upload file/i);

    await user.upload(input, files);

    expect(input.files.length).toBe(2);
    expect(input.files[0]).toBe(files[0]);
    expect(input.files[1]).toBe(files[1]);
  });
});
