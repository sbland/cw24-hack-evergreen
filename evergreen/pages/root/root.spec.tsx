import React from 'react';
import { render } from '@testing-library/react';
import { BasicRoot } from './root.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicRoot />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
