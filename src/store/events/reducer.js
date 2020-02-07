const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "EVENTS_FETCHED": {
      return action.events;
    }

    case "EVENT_CREATE_SUCCESS": {
      return [...state, action.event];
    }

    default: {
      return state;
    }
  }
}
