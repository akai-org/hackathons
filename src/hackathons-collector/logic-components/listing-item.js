import React from "react";
import moment from "moment";
import "moment/locale/en-gb";

import Entry from "../styled-components/entry";
import { H3 } from "../styled-components/text";

import akai from "../assets/akai-logo.svg";

class ListingItem extends React.Component {
  render() {
    const event = this.props.event;

    const weekday = moment(event.date).format("dddd");

    const customStyles = !this.props.disabled ? {} : { color: "#888" };

    return (
      <Entry>
        <article style={customStyles}>
          <div className="tags">
            <span className="city">@{event.location}</span>
            {event.tags.map((tag, i) => (
              <span key={i}>#{tag}</span>
            ))}
          </div>
          <H3>
            {event.title}{" "}
            {event.akai ? <img src={akai} alt="AKAI" height="16" /> : ""}
          </H3>
          <div className="metadata">
            <span>
              {moment(event.date).format("LL")} - <span>{weekday}</span>
              {this.props.disabled
                ? ""
                : ` - ${moment(event.date)
                    .endOf("hours")
                    .diff(new Date(), "days")} day(s) left`}
            </span>
          </div>
          <p>{event.description}</p>
        </article>
        <footer>
          {this.props.disabled ? (
            ""
          ) : (
            <a target="_blank" rel="noopener noreferrer" href={event.url}>
              website
            </a>
          )}
        </footer>
      </Entry>
    );
  }
}

export default ListingItem;
