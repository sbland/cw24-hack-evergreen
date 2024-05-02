import React from 'react';
import { render } from '@testing-library/react';
import { BasicPage } from './page.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicPage />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
