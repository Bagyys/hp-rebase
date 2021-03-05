import Home from "./routes/home";
import React from "react";
import FlatReview from "./routes/FlatReview/FlatView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Filter from "./components/Filter/filter";
import Navigation from "./components/Navigation/navigation";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Filter />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/flat/:id" component={FlatReview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
