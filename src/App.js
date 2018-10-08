import React, { Component } from "react";
import "./App.css";
import moment from "moment";
import "moment/locale/en-gb";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: "Code4Life Hackathon",
          date: new Date(2018, 9, 6),
          url: "https://code4life.pl/pages/hackathons",
          location: "Warszawa",
          tags: []
        },
        {
          title: "Paysafe Global Hackathon 2018",
          date: new Date(2018, 10, 27),
          url: "https://app.codility.com/l/paysafe_hackathon2018/",
          location: "online",
          tags: []
        },
        {
          title: "Geek Jam",
          date: new Date(2018, 9, 10),
          url: "https://gic.gd/geekjam/",
          location: "Poznań",
          tags: ["gamedev"]
        },
        {
          title: "HackYeah",
          date: new Date(2018, 10, 24),
          url: "https://hackyeah.pl/",
          location: "Warszawa",
          tags: []
        },
        {
          title: "Nowa strona danych",
          date: new Date(2018, 9, 27),
          url: "https://hackathon.gov.pl",
          location: "Warszawa",
          tags: []
        },
        {
          title: "#MAP_IT! Mapping Hackathon",
          date: new Date(2018, 10, 17),
          url: "http://www.map-it.com.pl/",
          location: "Kraków",
          tags: []
        },
        {
          title: "Mercari Euro Hack 2018",
          date: new Date(2018, 9, 20),
          url: "https://challengerocket.com/mercari",
          location: "Warszawa",
          tags: []
        },
        {
          title: "CodePlay by Asseco 2018",
          subtitle: "All you need is bank!",
          date: new Date(2018, 9, 27),
          duration: "12h",
          url: "https://codeplay.asseco.com/",
          location: "Kraków",
          tags: []
        },
        {
          title: "Let's Code",
          date: new Date(2018, 10, 17),
          duration: "24h",
          url: "http://letscode.sii.pl",
          location: "Poznań",
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
                {event.title} in {event.location}
                {" - "}
                {moment(event.date).format("LL")}
              </a>
              {` - ${moment(event.date)
                .endOf("hours")
                .diff(new Date(), "days")} day(s) left`}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
