import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Footer/>
    </Router>
  );
}

export default App;
