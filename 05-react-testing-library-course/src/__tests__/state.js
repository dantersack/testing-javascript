import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {FavoriteNumber} from '../favorite-number';

test('entering an invalid number shows an error message', () => {
  const {getByLabelText, getByRole} = render(<FavoriteNumber />);
  const input = getByLabelText('Favorite Number');
  fireEvent.change(input, {target: {value: 11}});
  const errMsg = getByRole('alert');
  expect(errMsg).toHaveTextContent('The number is invalid');
});
