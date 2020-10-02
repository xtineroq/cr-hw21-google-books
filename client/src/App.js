import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Tabs from './components/Tabs';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
        <Tabs />
        <Search />
    </div>
  );
}

export default App;
