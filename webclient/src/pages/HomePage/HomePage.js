import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from '@/constructors/axios';
import socket from '@/constructors/socket';

import { Link, withRouter } from 'react-router-dom'

import './HomePage.sass'

class HomePage extends Component {
  state = {

  }

  async componentDidMount() {
    const usersResponse = await axios.get('http://127.0.0.1:8000/api/v1/users')
    const grqphqlHelloResponse = await axios.post('http://127.0.0.1:8000/graphql', { query: '{ hello }' })
    console.log(usersResponse)
    console.log(grqphqlHelloResponse)
    console.log(socket)
  }

  render() {
    const { history } = this.props;
    
    document.title = 'Starter - HomePage'
    
    return (
      <div className="HomePage">
        <h1 className="title">Home Page</h1>
        <section>
          GraphQL is
        </section>
      </div>
    )
  }
}

export default withRouter(HomePage);
