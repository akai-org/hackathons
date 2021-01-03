import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import moment from 'moment';
import 'moment/locale/en-gb';
import ListingItem from './listing-item';

const event = {
  date: '25.03.2021',
  title: 'hackathon',
  tags: ['hello', 'js'],
  location: 'Poznan',
  description: 'pierwszy w 2021',
  url: 'https://reactywny.pl',
};

test('check ListingItem component render', () => {
  render(<ListingItem event={event} />);

  expect(screen.getByText(`@${event.location}`)).toBeInTheDocument();
  expect(screen.getByText(event.title)).toBeInTheDocument();
  expect(screen.getByText(event.description)).toBeInTheDocument();
  expect(
    screen.getByText(moment(event.date).format('dddd'))
  ).toBeInTheDocument();
});

test('check tag array render', () => {
  render(<ListingItem event={event} />);

  event.tags.forEach((tag) => {
    expect(screen.getByText(`#${tag}`)).toBeInTheDocument();
  });
});
