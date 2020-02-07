const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "EVENTS_FETCHED": {
      return {
        state: action.events
      };
    }

    default: {
      return state;
    }
  }
}
