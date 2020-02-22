/* Nested Routing */
import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//components
import Home from './screens/home/components/Home'
import Main from './screens/main/components/Main'
import Trips from './screens/trips/components/Trips'
import Login from './screens/login/components/LoginTest'


export default function App() {

  let cookieAsObject = Object.fromEntries(
    document.cookie.split('; ')
      .map(x => x.split('='))
      .map(([k, v]) => [k, decodeURIComponent(v)])
  ); // parse cookie
  let userObject = JSON.parse(cookieAsObject.user || 'null'); // get user object from parsed cookie

  console.log("cAO", cookieAsObject);
  console.log("user", userObject);
  console.log(document.cookie.length)

  const [user, setUser] = useState(userObject);
  // const [user, setUser] = useState(null);
  return (
    <Router>
        <Switch>
          <Route path="/main/:city/:budget" render={(routeProps) => <Main {...routeProps} user={user} setUser={setUser} />} />
          <Route path="/trips/:user" component={Trips} />
          <Route path="/login" render={(routeProps) => <Login {...routeProps} user={user} setUser={setUser} />} />
          <Route path="/" component={Home} />
        </Switch>
    </Router>
  );
}
