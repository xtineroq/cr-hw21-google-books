import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Tabs from './components/Tabs';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <div className="App">
      <Router>
        <Tabs />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
