import React from 'react';
import { render } from '@testing-library/react';
import { BasicHelloWorld } from './hello-world.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicHelloWorld />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
