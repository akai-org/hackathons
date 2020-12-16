import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filter from './filter';

test('checkbox should not be checked if value prop is false', () => {
  render(
    <Filter value={false} setValue={() => {}}>
      test
    </Filter>
  );

  expect(screen.getByRole('checkbox')).not.toBeChecked();
});

test('checkbox should be checked if value prop is true', () => {
  render(
    <Filter value setValue={() => {}}>
      test
    </Filter>
  );

  expect(screen.getByRole('checkbox')).toBeChecked();
});

test.each([
  [true, false],
  [false, true],
])(
  'when value is %s and checkbox is clicked should call setValue with %s',
  (value, expected) => {
    const spy = jest.fn();
    render(
      <Filter value={value} setValue={spy}>
        test
      </Filter>
    );

    userEvent.click(screen.getByRole('checkbox'));

    expect(spy).toHaveBeenCalledWith(expected);
  }
);

test('should render content based on props', () => {
  const value = 'text';
  render(
    <Filter value={false} setValue={() => {}}>
      {value}
    </Filter>
  );

  expect(screen.getByText(value)).toBeInTheDocument();
});
