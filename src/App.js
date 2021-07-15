import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddEvents from "./Components/AddEvents/AddEvents";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEvent">Add Event</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/addEvent">
            <AddEvents></AddEvents>
          </Route>
          <Route path="/dashboard"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
