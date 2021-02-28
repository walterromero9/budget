import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Header  from './components/Header';
import  Home  from './components/Home';
import { Main } from './components/Main';
import SignIn  from './components/SignIn';
import SignUp  from './components/SignUp';
import Entry from './components/Entry'
import {connect} from 'react-redux'
import userActions from './redux/actions/userActions'
import movActions from './redux/actions/movActions';
import DetailsMovs from './components/DetailsMovs';

const App = (props) => {
  
  if(props.loggedUser){
    
    var routes =
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/entry' component={Entry} />
      <Route exact path='/edit/:id' component={DetailsMovs} />
      <Redirect to='/' />
      
    </Switch>
    
  } else if(localStorage.getItem('token')) {
    props.logFromLS(localStorage.getItem('token'))
  } else {
    var routes =
    <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/signin' component={SignIn} />
    <Route exact path='/signup' component={SignUp} />
    
    <Redirect to='/' />
    </Switch>

  }
  return (
  <>
  <BrowserRouter>
  <Header/>
    <Switch>
    {routes}

    </Switch>

  </BrowserRouter>
  </>
  )
}
const mapStateToProps = state =>{
  return{
    loggedUser: state.auth.loggedUser
  }
}
const mapDispatchToProps = {
  logFromLS: userActions.logFromLS,
  listMovs: movActions.listMovs
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

