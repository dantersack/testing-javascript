import React from 'react';
import user from '@testing-library/user-event';
import {render} from '@testing-library/react';
import {FavoriteNumber} from '../favorite-number';

test('entering an invalid number shows an error message', () => {
  const {getByLabelText, getByRole, rerender, debug} = render(
    <FavoriteNumber />,
  );
  const input = getByLabelText('Favorite Number');
  user.type(input, '10');
  const errMsg = getByRole('alert');
  expect(errMsg).toHaveTextContent('The number is invalid');
  debug();
  rerender(<FavoriteNumber max={10} />);
  debug();
});
