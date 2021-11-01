import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer,  Events, Courses,Login , CampusLeader , SpecialOffers } from "./components";
// import SpecialOffers from "./components/SpecialOffers";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
        <Route path="/SpecialOffers" exact component={() => <SpecialOffers/>} />
          <Route path="/CampusLeader" exact component={() => <CampusLeader/>} />
          <Route path="/Events" exact component={() => <Events/>} />
          <Route path="/courses" exact component={() => <Courses />} />
          <Route path="/Login" exact component={() => <Login />} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
