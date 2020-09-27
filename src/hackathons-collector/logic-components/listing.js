import React from 'react';

import ListingItem from './listing-item';

export default ({list, disabled = false}) =>
  list ? list.map((el, i) => <ListingItem event={el} key={i} disabled={disabled} />) : 'no entries';
