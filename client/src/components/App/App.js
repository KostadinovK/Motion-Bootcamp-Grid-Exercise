import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Grid from '../Grid/Grid';

function renderCmp(Cmp) {
  return function () {
    return <Main><Cmp/></Main>
  };
};

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact render={renderCmp(Grid)}></Route>
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
