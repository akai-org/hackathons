import React from 'react';
import ReactDOM from 'react-dom';
import HackathonsCollector from './hackathons-collector';
import registerServiceWorker from './registerServiceWorker';
import events from './events';

ReactDOM.render(
  <HackathonsCollector events={events} />,
  document.getElementById('root')
);
registerServiceWorker();
