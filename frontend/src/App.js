/* Nested Routing */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//components
import Home from './screens/home/components/Home'
import Main from './screens/main/components/Main'
import Trips from './screens/trips/components/Trips'
import Login from './screens/login/components/Login'


export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
        <Switch>
          <Route path="/main/:city/:budget" component={Main} />
          <Route path="/trips/:user" component={Trips} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
    </Router>
  );
}
