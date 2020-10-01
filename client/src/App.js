import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Router>
        <Tabs />
      </Router>
    </div>
  );
}

export default App;
