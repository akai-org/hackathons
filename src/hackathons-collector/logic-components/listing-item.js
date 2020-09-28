import React from 'react';
import moment from 'moment';
import 'moment/locale/en-gb';

import Entry from '../styled-components/entry';
import { H3 } from '../styled-components/text';

import akai from '../assets/akai-logo.svg';

const ListingItem = ({
  event: { date, title, tags, location, description, url },
  disabled,
}) => {
  const weekday = moment(date).format('dddd');
  const customStyles = !disabled ? {} : { color: '#888' };

  return (
    <Entry>
      <article style={customStyles}>
        <div className="tags">
          <span className="city">@{location}</span>
          {tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <H3>
          {title} {akai ? <img src={akai} alt="AKAI" height="16" /> : ''}
        </H3>
        <div className="metadata">
          <span>
            {moment(date).format('LL')} - <span>{weekday}</span>
            {disabled
              ? ''
              : ` - ${moment(date)
                  .endOf('hours')
                  .diff(new Date(), 'days')} day(s) left`}
          </span>
        </div>
        <p>{description}</p>
      </article>
      <footer>
        {disabled ? (
          ''
        ) : (
          <a target="_blank" rel="noopener noreferrer" href={url}>
            website
          </a>
        )}
      </footer>
    </Entry>
  );
};

export default ListingItem;
