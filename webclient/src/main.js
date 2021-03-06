/*
 * Client (Web) - Entrypoint, Bootstrap
**/


import 'normalize.css'

import React from 'react'
import * as log from 'loglevel'

import {
  Router,
  Link,
  Redirect,
  Route,
} from 'react-router-dom'

import { applyRouterMiddleware } from 'react-router'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo';

import '@/style.sass'

import createReduxStore from '@/constructors/redux/store'
import loglevel from '@/constructors/loglevel'
import history from '@/constructors/history'
import sw from '@/constructors/sw'
// import socket from '@/constructors/socket'
import web3 from '@/constructors/web3'
import apollo from '@/constructors/apollo'

import SignupPage from '@/pages/SignupPage'
import LoginPage from '@/pages/LoginPage'
import HomePage from '@/pages/HomePageApollo'

import Layout from '@/components/Layout'

log.info(`Bootstrapping Client (Web) ... (${Date.now()})`)

loglevel()


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    const authenticated = true;  /* TODO - auth */
    return (authenticated) ? <Component {...props} {...rest} /> : <Redirect to='/login' />
    }}
  />
);


function App() {
  history.listen((location, action) => {
    log.info('Routing to location: ', location);
  });
  return (
    <ApolloProvider client={apollo}>
    <Provider store={createReduxStore()}>
      <Router history={history}>
        <Layout>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <PrivateRoute exact path="/" component={HomePage} />
        </Layout>
      </Router>
    </Provider>
    </ApolloProvider>
  )
}

export const run = () => render(<App />, document.getElementById('app'))
