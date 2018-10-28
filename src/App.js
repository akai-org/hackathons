import React, { Component } from "react";
import "./App.css";
import ListingItem from "./components/listing-item/listing-item";
import events from "./events";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events
    };

    this.state.previousEvents = this.state.events
      .filter(event => event.date <= new Date())
      .sort((a, b) => a.date - b.date);

    this.state.events = this.state.events
      .filter(event => event.date > new Date())
      .sort((a, b) => a.date - b.date);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="/Hackathons.svg"
            className="App-logo"
            alt="AKAI"
          />
          <h1 className="App-title">Hackathons Collector</h1>
          <p>The best hackathons in Poland</p>
        </header>
        <div className="App-intro">
          <h2>Incoming hackathons:</h2>
          {this.state.events.map((event, i) => (
            <ListingItem key={i} event={event} />
          ))}
        </div>

        <div className="App-intro">
          <h2>Previous hackathons</h2>
          {this.state.previousEvents.map((event, i) => (
            <ListingItem key={i} event={event} disabled={true} />
          ))}
        </div>
        <footer>
          <small>
            Created by <a href="https://akai.org.pl/">AKAI</a>
          </small>
        </footer>
      </div>
    );
  }
}

export default App;
