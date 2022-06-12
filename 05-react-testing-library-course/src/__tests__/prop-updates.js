import React from 'react';
import user from '@testing-library/user-event';
import {render} from '@testing-library/react';
import {FavoriteNumber} from '../favorite-number';

test('entering an invalid number shows an error message', () => {
  const {getByLabelText, getByRole, queryByRole, rerender} = render(
    <FavoriteNumber />,
  );
  const input = getByLabelText('Favorite Number');
  user.type(input, '10');
  const errMsg = getByRole('alert');
  expect(errMsg).toHaveTextContent('The number is invalid');
  rerender(<FavoriteNumber max={10} />);
  expect(queryByRole('alert')).toBeNull();
});
