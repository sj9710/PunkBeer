import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Favourites = lazy(() => import("./components/Favourites"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Favourites" component={Favourites} />
      </Switch>
    </Suspense>
  </Router>
);
export default App;
