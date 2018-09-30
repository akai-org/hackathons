import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: "Code4Life Hackathon",
          date: new Date(2018, 10, 6),
          url: "https://code4life.pl/pages/hackathons"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://akai.org.pl/wp-content/themes/akai-new/images/logo.svg"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">AKAI - Hackathons Collector</h1>
        </header>
        <div className="App-intro">
          {this.state.events.map(event => (
            <div>
              <a href={event.url}>
                {event.title} - {event.date.toLocaleDateString("pl")}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
