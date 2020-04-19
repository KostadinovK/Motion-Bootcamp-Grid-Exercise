import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';

function App() {
  return (
    <Router>
      <Header/>
    </Router>
  );
}

export default App;
