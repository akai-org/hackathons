import React from 'react';

import ListingItem from './listing-item';

<<<<<<< HEAD
export default ({list, disabled = false}) =>
=======
export default ({ list, disabled = false }) =>
>>>>>>> eslint-prettier-and-airbnb-config
  list ? list.map((el, i) => <ListingItem event={el} key={i} disabled={disabled} />) : 'no entries';
