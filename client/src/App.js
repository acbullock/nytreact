import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Jumbotron from "./components/Jumbotron";

const App = () => 
  <Router>
    <div>
      <Nav />
      <Main>
        <Jumbotron><h1>Search New York Times</h1></Jumbotron>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="*" component={Search} />
        </Switch>
      </Main>
    </div>
  </Router>;

export default App;
