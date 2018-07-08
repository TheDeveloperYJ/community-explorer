import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Activity from './components/Activity'
import Details from './components/Details'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router> 
      <Switch>
        <Route exact path='/' component={Home}/>       
        <Route exact path='/activity' component={Activity}/>
        <Route exact path='/eventDetail/:event' render={props=><Details {...props}/>}/>
      </Switch>
      </Router>
    
    );
  }
}

export default App;
