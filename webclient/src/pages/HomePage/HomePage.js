import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from '@/constructors/axios';
import socket from '@/constructors/socket';
import environment from '@/constructors/relay/environment';
import { createFragmentContainer, graphql, QueryRenderer } from 'react-relay'

// import { Link, withRouter } from 'react-router-dom'

import './HomePage.sass'

class HomePage extends Component {
  state = {

  }

  async componentDidMount() {
    const usersResponse = await axios.get('http://127.0.0.1:8000/api/v1/users')
    // const grqphqlHelloResponse = await axios.post('http://127.0.0.1:8000/graphql', { query: '{ hello }' })
    console.log(usersResponse)
    // console.log(grqphqlHelloResponse)
    console.log(socket)
  }

  render() {
    const { history } = this.props;
    
    document.title = 'Starter - HomePage'
    console.log('this.props', this.props)
    return (
      <div className="HomePage">
        <h1 className="title">Home Page</h1>
      </div>
    )
  }
}

export default createFragmentContainer(
  HomePage,
  graphql`
    fragment HomePage_viewer on User {
      id
    }
  `
)
