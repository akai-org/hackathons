import React from "react";
import moment from "moment";
import "moment/locale/en-gb";

class ListingItem extends React.Component {
  render() {
    const event = this.props.event;

    const customStyles = !this.props.disabled ? {} : { color: "#888" };

    return (
      <div className="hackathon-entry">
        <article style={customStyles}>
          <div class="tags">
            <span class="city">@{event.location}</span>
            {event.tags.map(tag => (
              <span>#{tag}</span>
            ))}
          </div>
          <h3>{event.title}</h3>
          <div class="metadata">
            <span>
              {moment(event.date).format("LL")} -
              {" " + moment(event.date).format("dddd")}
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
            <a target="_blank" href={event.url}>
              website
            </a>
          )}
        </footer>
      </div>
    );
  }
}

export default ListingItem;
