import React from "react";
import "./App.css";
import store from "./store/index";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

//import Home from "./components/Home";
import EventsListContainer from "./components/EventsListContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        App
        <Route path="/" exact component={EventsListContainer} />
      </div>
    </Provider>
  );
}

export default App;
