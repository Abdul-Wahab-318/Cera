
import './App.css';
import Home from './pages/home/Home';
import MemberDirectory from './pages/memberDirectory/MemberDirectory';
import MemberProfile from './pages/memberProfile/MemberProfile';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/memberprofile">
            <MemberProfile />
          </Route>

          <Route exact path="/memberdirectory">
            <MemberDirectory/>
          </Route>
          <Route path="*">
            <h1>bruh</h1>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
