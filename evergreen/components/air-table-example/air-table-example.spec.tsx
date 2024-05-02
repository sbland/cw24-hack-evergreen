import React from 'react';
import { render } from '@testing-library/react';
import { BasicAirTableExample } from './air-table-example.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicAirTableExample />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
