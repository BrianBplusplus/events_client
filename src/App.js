import React from "react";
import "./App.css";
import store from "./store/index";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

//import Home from "./components/Home";
import EventsListContainer from "./components/EventsListContainer";
import CreateEventFormContainer from "./components/CreateEventFormContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        App
        <Route path="/" exact component={EventsListContainer} />
        <Route path="/" exact component={CreateEventFormContainer} />
      </div>
    </Provider>
  );
}

export default App;
