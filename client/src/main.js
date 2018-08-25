import 'normalize.css'

import React from 'react'
import * as log from 'loglevel'

import {
  BrowserRouter,
  Link,
  Redirect,
  Route,
} from 'react-router-dom'

import { render } from 'react-dom'

import '@/style.css'

import Signup from '@/pages/Signup'
import Login from '@/pages/Login'
import Home from '@/pages/Home'


const logLevel = process.env.NODE_ENV === 'development' ? log.levels.DEBUG : log.levels.INFO

log.setLevel(logLevel, true)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    const authenticated = true;  /* TODO - auth */
    return (authenticated) ? <Component {...props} {...rest} /> : <Redirect to='/login' />
    }}
  />
);



function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  )
}

render(<App />, document.querySelector('#app'))