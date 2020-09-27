import React, {useState} from 'react';

// Global styling
import './global-styles';

// Styled components
import {H1, H2} from './styled-components/text';
import Header from './styled-components/header';
import Logo from './styled-components/logo';
import Main from './styled-components/main';
import Section from './styled-components/section';
import Footer from './styled-components/footer';
import Filter from './styled-components/filter';

// Logic components
import Listing from './logic-components/listing';

// Assets
import logo from './assets/logo.svg';
import akai from './assets/akai-logo.svg';

const HackathonsCollector = ({events}) => {
  const [filterWeekends, changeFilterWeekends] = useState(false);

  const previousEvents = events
    .filter(({date}) => date <= new Date())
    .filter(({date}) => {
      return !filterWeekends || date.getDay() > 5;
    })
    .sort((a, b) => a.date - b.date)
    .reverse()
    .splice(0, 3);

  const updatedEvents = events
    .filter(({date}) => date > new Date())
    .filter(({date}) => {
      return !filterWeekends || date.getDay() > 5;
    })
    .sort((a, b) => a.date - b.date);

  return (
    <div>
      <Header>
        <Logo src={logo} />
        <H1>Hackathons Collector</H1>
      </Header>
      <Filter
        value={filterWeekends}
        setValue={newValue => {
          changeFilterWeekends(newValue);
        }}
      >
        Only weekend events
      </Filter>
      <Main>
        <Section>
          <H2>Incoming hackathons:</H2>
          <Listing list={updatedEvents} />
        </Section>
        <Section>
          <H2>Previous hackathons:</H2>
          <Listing list={previousEvents} disabled={true} />
        </Section>
      </Main>
      <Footer>
        Created by
        <a href="https://akai.org.pl/" title="AKAI">
          <img src={akai} alt="AKAI" height="12" />
        </a>
      </Footer>
    </div>
  );
};

export default HackathonsCollector;
