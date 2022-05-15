import React from 'react';
import ReactDOM from 'react-dom';
import {FavoriteNumber} from '../favorite-number';

test('renders a number input with a label "favorite Number"', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteNumber />, div);
  console.log(div.innerHTML);
  expect(div.querySelector('input')).toHaveAttribute('type', 'number');
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number');
});
