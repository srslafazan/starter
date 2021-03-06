/*
 * Client (Web) - Entrypoint, Bootstrap
**/


import 'normalize.css'

import React from 'react'
import * as log from 'loglevel'

// import {
  // Router,
  // Link,
  // Redirect,
  // Route,
// } from 'react-router-dom'

// import { BrowserProtocol, queryMiddleware } from 'farce';
// import {
//   createFarceRouter,
//   createRender,
//   makeRouteConfig,
//   Route,
// } from 'found';
// import { Resolver } from 'found-relay';


import { applyRouterMiddleware } from 'react-router'

import { render } from 'react-dom'
import { Provider } from 'react-redux'

import '@/style.sass'

import createReduxStore from '@/constructors/redux/store'
// import environment from '@/constructors/relay/environment'
import Router from '@/constructors/found/Router'
import loglevel from '@/constructors/loglevel'
import history from '@/constructors/history'
import sw from '@/constructors/sw'
import socket from '@/constructors/socket'

import SignupPage from '@/pages/SignupPage'
import LoginPage from '@/pages/LoginPage'
import HomePage from '@/pages/HomePage'

import Layout from '@/components/Layout'

log.info(`Bootstrapping Client (Web) ... (${Date.now()})`)

loglevel()


// const Router = createFarceRouter({
//   historyProtocol: new BrowserProtocol(),
//   historyMiddlewares: [queryMiddleware],
//   routeConfig: makeRouteConfig(
//     <Route
//       path="/"
//       Component={HomePage}
//       query={graphql`
//         query main_Query {
//           hello
//           world { id }
//         }
//       `}
//     >
//     </Route>
//   ),

//   render: createRender({}),
// });

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => {
//     const authenticated = true;  /* TODO - auth */
//     return (authenticated) ? <Component {...props} {...rest} /> : <Redirect to='/login' />
//     }}
//   />
// );

// function App() {
//   history.listen((location, action) => {
//     log.info('Routing to location: ', location);
//   });

//   return (
//     <Provider store={createReduxStore()}>
//       <Layout>
//         {/*<Route exact path="/login" component={LoginPage} />*/}
//         {/*<Route exact path="/signup" component={SignupPage} />*/}
//         {/*<PrivateRoute exact path="/" component={HomePage} />*/}
//       </Layout>
//     </Provider>
//   )
// }

export function run() {
  render(<Router />, document.getElementById('app'))
}

export default run
