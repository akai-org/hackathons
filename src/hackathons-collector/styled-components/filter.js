import React from 'react';
import styled from 'react-emotion';

const Filter = styled('label')`
  display: block;
  font-size: 0.8rem;
  text-align: center;
`;

export default ({value, setValue, children}) => (
  <Filter>
    <input type='checkbox' checked={value} onChange={() => setValue(!value)} />
    <span>{children}</span>
  </Filter>
);
