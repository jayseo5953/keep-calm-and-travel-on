/* Nested Routing */
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//components
import Home from './screens/home/components/Home'
import Main from './screens/main/components/Main'
import Trips from './screens/trips/components/Trips'
import Login from './screens/login/components/Login'


export default function App() {

  console.log('cookie: ', document.cookie)
  // Parsing the cookie to be used as the user //
  let cookieAsObject = Object.fromEntries(
    document.cookie.split('; ')
      .map(x => x.split('='))
      .map(([k, v]) => [k, decodeURIComponent(v)])
  ); // parse cookie
  let userObject = JSON.parse(cookieAsObject.user || 'null'); // get user object from parsed cookie

  const [user, setUser] = useState(userObject);
  console.log("user is ==> ", user)
  return (
    <Router>
        <Switch>
          <Route path="/main/:city/:budget" render={(routeProps) => <Main {...routeProps} user={user} setUser={setUser} />} />
          <Route path="/trips/:user" component={Trips} />
          <Route path="/login" render={(routeProps) => <Login {...routeProps} user={user} setUser={setUser} />} />
          {/* <Route path="/" component={Home} /> */}
          <Route path="/" render={(routeProps) => <Home {...routeProps} user={user} setUser={setUser} />} />
        </Switch>
    </Router>
  );
}
