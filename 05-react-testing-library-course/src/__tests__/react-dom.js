import React from 'react';
import {render} from '@testing-library/react';
import {FavoriteNumber} from '../favorite-number';

test('renders a number input with a label "Favorite Number"', () => {
  const {container, getByLabelText} = render(<FavoriteNumber />);
  console.log(container.innerHTML);
  const input = getByLabelText(/favorite number/i);
  expect(input).toHaveAttribute('type', 'number');
});
