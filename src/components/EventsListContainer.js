import React from "react";
import { loadEvents } from "../store/events/action";
import { connect } from "react-redux";
import EventsList from "./EventsList";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }
  render() {
    console.log(this.props.events);
    return (
      <ul>
        {this.props.events &&
          this.props.events.map(currentEvent => {
            return (
              <EventsList
                key={currentEvent.id}
                name={currentEvent.name}
                date={currentEvent.date}
                description={currentEvent.description}
              />
            );
          })}
      </ul>
    );
  }
}
const mapStateToProps = state => ({
  events: state.events
});
export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
