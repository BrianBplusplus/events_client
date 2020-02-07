import React, { Component } from "react";

export default class EventsList extends Component {
  render() {
    return (
      <li className="eventlist">
        <a href={this.props.name}>
          {this.props.name} - {this.props.date} - {this.props.description}
        </a>
      </li>
    );
  }
}
