import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import Secret from './pages/Secret'


export default function App() {
  
  return (
    <div className="App">
      <MainNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/secret" component={Secret} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  )
}
