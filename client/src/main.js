import 'normalize.css'

import React from 'react'
import * as log from 'loglevel'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { render } from 'react-dom'
import { Button } from 'material-ui'

import Signup from './pages/Signup'
import Login from './pages/Login'


const logLevel = process.env.NODE_ENV === 'development' ? log.levels.DEBUG : log.levels.INFO

log.setLevel(logLevel, true)

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </BrowserRouter>
  )
}

render(<App />, document.querySelector('#app'))