import React, { Component } from "react";

// Global styling
import "./global-styles";

// Styled components
import { H1, H2 } from "./styled-components/text";
import Header from "./styled-components/header";
import Logo from "./styled-components/logo";
import Main from "./styled-components/main";
import Section from "./styled-components/section";
import Footer from "./styled-components/footer";

// Logic components
import Listing from "./logic-components/listing";

// Data
import events from "../events";

// Assets
import logo from "./assets/logo.svg";
import akai from "./assets/akai-logo.svg";

export default class HackathonsCollector extends Component {
  constructor() {
    super();
    this.previousEvents = events
      .filter(event => event.date <= new Date())
      .sort((a, b) => a.date - b.date);

    this.events = events
      .filter(event => event.date > new Date())
      .sort((a, b) => a.date - b.date);
  }
  render() {
    return (
      <div>
        <Header>
          <Logo src={logo} />
          <H1>Hackathons Collector</H1>
        </Header>
        <Main>
          <Section>
            <H2>Incoming hackathons:</H2>
            <Listing list={this.events} />
          </Section>
          <Section>
            <H2>Previous hackathons:</H2>
            <Listing list={this.previousEvents} disabled={true} />
          </Section>
        </Main>
        <Footer>
          Created by{" "}
          <a href="https://akai.org.pl/" title="AKAI">
            <img src={akai} alt="AKAI" height="12" />
          </a>
        </Footer>
      </div>
    );
  }
}
