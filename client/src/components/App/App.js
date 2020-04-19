import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact></Route>
        <Route path='/register'>Test</Route>
        <Route path='/login'></Route>
        <Route path='/logout'></Route>
        <Route path='/department'></Route>
        <Route path='/employee'></Route>
        <Route path='/*'>404 - Page Not Found</Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
