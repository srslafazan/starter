import makeRouteConfig from 'found/lib/makeRouteConfig'
import Route from 'found/lib/Route'
import React from 'react'
import { graphql } from 'react-relay'

import HomePage from '@/pages/HomePageRelay'

const App = props => {
  console.log('props', props)
  return <div>{props.children}</div>
}
const FooPage = () => <div>FooPage</div>
const BarPage = () => <div>BarPage</div>

const query = graphql`
query Routes_App_Query {
  me { id firstName lastName }
}`

export default makeRouteConfig(
  <Route path="/" Component={App} query={query} variables={{ id: 1 }}>
    <Route Component={HomePage} />
    <Route path="foo" Component={FooPage}>
      <Route path="bar" Component={BarPage} />
    </Route>
  </Route>
)