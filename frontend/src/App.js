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
import Itinerary from './screens/itinerary/components/Itinerary'


export default function App() {

  // Parsing the cookie to be used as the user //
  let cookieAsObject = Object.fromEntries(
    document.cookie.split('; ')
      .map(x => x.split('='))
      .map(([k, v]) => [k, decodeURIComponent(v)])
  ); // parse cookie
  let userObject = JSON.parse(cookieAsObject.user || 'null'); // get user object from parsed cookie

  const [user, setUser] = useState(userObject);
  const [background, setBackGround] = useState('https://media2.giphy.com/media/yTwbZGqO360Mw/source.gif')

  return (
    <Router>
        <Switch>
          <Route path="/main/:city/:budget" render={(routeProps) => <Main {...routeProps}   user={user} setUser={setUser}  />} />
          <Route path="/edit/:city/:budget/:tripName/:tripId" exact render={(routeProps) => <Main {...routeProps} user={user} setUser={setUser} />} />
          <Route path="/itinerary/:itineraryId/:country/:city" render={(routeProps) => <Itinerary {...routeProps} user={user} setUser={setUser} />} />
          <Route path="/trips/:userName" render={(routeProps) => <Trips {...routeProps} user={user} setUser={setUser} />} />
          <Route path="/login" render={(routeProps) => <Login {...routeProps} user={user} setUser={setUser} />} />
          <Route path="/" render={(routeProps) => <Home {...routeProps} user={user} setUser={setUser} background={background} setBackGround={setBackGround} />} />
        </Switch>
    </Router>
  );
}
