import React from 'react';

import ListingItem from './listing-item';

export default ({ list, disabled = false }) =>
  list
    ? list.map((el) => <ListingItem event={el} key={el} disabled={disabled} />)
    : 'no entries';
