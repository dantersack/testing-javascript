import React from 'react';
import {render} from '@testing-library/react';
import {FavoriteNumber} from '../favorite-number';

test('renders a number input with a label "Favorite Number"', () => {
  const {container, getByLabelText, debug} = render(<FavoriteNumber />);
  debug(container);
  const input = getByLabelText(/favorite number/i);
  expect(input).toHaveAttribute('type', 'number');
  debug(input);
});
