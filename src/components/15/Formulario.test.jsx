import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Formulario as Form } from '#/components/15/Formulario.jsx';

describe('Form', () => {
  it('should display the form initially', () => {
    render(<Form />);
    expect(screen.getByText('Contact Form')).toBeDefined();
    expect(screen.getByLabelText('Name:')).toBeDefined();
    expect(screen.getByLabelText('Email:')).toBeDefined();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDefined();
  });

  it('should update the form fields', () => {
    render(<Form />);
    const inputName = screen.getByLabelText('Name:');
    const inputEmail = screen.getByLabelText('Email:');

    fireEvent.change(inputName, { target: { value: 'John' } });
    fireEvent.change(inputEmail, { target: { value: 'john@example.com' } });

    expect(inputName.value).toBe('John');
    expect(inputEmail.value).toBe('john@example.com');
  });

  it('should display thank you message after submitting the form', () => {
    render(<Form />);

    const inputName = screen.getByLabelText('Name:');
    const inputEmail = screen.getByLabelText('Email:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(inputName, { target: { value: 'John' } });
    fireEvent.change(inputEmail, { target: { value: 'john@example.com' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Thank you for submitting the form!')).toBeDefined();
    expect(screen.getByText('Name: John')).toBeDefined();
    expect(screen.getByText('Email: john@example.com')).toBeDefined();
  });
});
