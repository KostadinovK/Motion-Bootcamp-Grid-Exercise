import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Grid from '../Grid/Grid';
import Register from '../Register/Register';
import Login from '../Login/Login';
import AddDepartment from '../AddDepartment/AddDepartment';
import AddEmployee from '../AddEmployee/AddEmployee';


export const UserContext = React.createContext({isLoggedIn: false, setIsLoggedIn: () => {}});

function renderCmp(Cmp) {
  return function () {
    return <Main><Cmp/></Main>
  };
};

function checkIsLoggedIn(){
    return Cookies.get('authCookie');
}

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(checkIsLoggedIn());

  return (
    <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact render={renderCmp(Grid)}></Route>
            <Route path='/register' render={renderCmp(Register)}></Route>
            <Route path='/login' render={renderCmp(Login)}></Route>
            <Route path='/logout'></Route>
            <Route path='/department' render={renderCmp(AddDepartment)}></Route>
            <Route path='/employee' render={renderCmp(AddEmployee)}></Route>
            <Route path='/*'>404 - Page Not Found</Route>
          </Switch>
          <Footer />
        </Router>
    </UserContext.Provider>
  );
}

export default App;
