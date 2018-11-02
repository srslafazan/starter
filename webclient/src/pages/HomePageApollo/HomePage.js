import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom'

import axios from '@/constructors/axios';


import './HomePage.sass'

class HomePage extends Component {
  async componentDidMount() {
    const { data } = await axios.post('/graphql', { query: '{ books { author } }' })
    console.log(data)
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

export default withRouter(HomePage)