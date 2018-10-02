import React, { Component } from "react";
import "./App.css";
import moment from 'moment'
import 'moment/locale/en-gb'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: "Code4Life Hackathon",
          date: new Date(2018, 10, 6),
          url: "https://code4life.pl/pages/hackathons",
          location: "Warszawa",
          tags: []
        },
        {
          title: "gic week",
          date: new Date(2018, 10, 10),
          url: "https://gic.gd/gic-week/",
          location: "Poznań",
          tags: ["gamedev"]
        },
        {
          title: "HackYeah",
          date: new Date(2018, 11, 24),
          url: "https://hackyeah.pl/",
          location: "Warszawa",
          tags: []
        },
        {
          title: "Nowa strona danych",
          date: new Date(2018, 10, 27),
          url: "https://hackathon.gov.pl",
          location: "Warszawa",
          tags: []
        }
      ]
    };

    this.state.events = this.state.events
      .filter(event => event.date > new Date())
      .sort((a, b) => a.date - b.date);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://akai.org.pl/wp-content/themes/akai-new/images/logo.svg"
            className="App-logo"
            alt="AKAI"
          />
          <h1 className="App-title">Hackathons Collector</h1>
        </header>
        <div className="App-intro">
          {this.state.events.map((event, i) => (
            <div className="hackathon-entry" key={i}>
              <a href={event.url}>
                {event.title} in {event.location}{" - "}
                {moment(event.date).format('LL')}
              </a>
              {` - ${moment(event.date).endOf('hours').diff(new Date(), 'days')} day(s) left`}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
