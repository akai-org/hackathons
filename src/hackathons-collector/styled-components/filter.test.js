import React from 'react';
import { render, screen } from '@testing-library/react';
import Filter from './filter';

test('test', function () {
  const value = 'text';
  render(
    <Filter value={false} setValue={() => {}}>
      {value}
    </Filter>
  );

  expect(screen.getByText(value)).toBeInTheDocument();
});
