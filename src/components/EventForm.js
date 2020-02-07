import React from "react";

export default function EventForm(props) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)}>
        Name
        <input
          type="text"
          name="name"
          value={props.values.name}
          onChange={event => props.onChange(event)}
        />
        Date
        <input
          type="text"
          name="date"
          value={props.values.date}
          onChange={event => props.onChange(event)}
        />
        Description
        <input
          type="text"
          name="description"
          value={props.values.description}
          onChange={event => props.onChange(event)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
