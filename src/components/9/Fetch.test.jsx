import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { beforeAll, afterEach, afterAll, test, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { Fetch } from '#/components/9/Fetch.jsx';

const server = setupServer(
  http.get('/greeting', () => {
    return HttpResponse.json({ greeting: 'hello there' });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays greeting', async () => {
  render(<Fetch url='/greeting' />);
  fireEvent.click(screen.getByText('Load Greeting'));
  await screen.findByRole('heading');
  expect(screen.getByRole('heading').textContent).toBe('hello there');
  expect(screen.getByRole('button').disabled).toBeTruthy();
});

test('handles server error', async () => {
  server.use(
    http.get('/greeting', () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<Fetch url='/greeting' />);

  fireEvent.click(screen.getByText('Load Greeting'));

  await screen.findByRole('alert');

  expect(screen.getByRole('alert').textContent).toBe('Oops, failed to fetch!');
  expect(screen.getByRole('button').disabled).toBeFalsy();
});
