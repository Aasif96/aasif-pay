import React from 'react'
import Home from './Home'
import { Route, Switch } from 'react-router'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Service from './pages/Service'
import Error from './pages/Error'

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contacts}></Route>
      <Route path="/service" component={Service}></Route>
      <Route component={Error}></Route>
    </Switch>

    </>
  )
};
export default App; 