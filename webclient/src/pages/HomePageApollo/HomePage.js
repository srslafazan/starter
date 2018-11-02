import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom'

import axios from '@/constructors/axios';


import './HomePage.sass'

class HomePage extends Component {
  render() {
    const { history } = this.props;
    
    document.title = 'Starter - HomePage'
    console.log('this.props', this.props)
    return (
      <Query query={gql`{ users { firstName } }`}>
      {({ error, loading, data }) => {
        if (error) return 'error'
        if (loading) return 'loading...'
        return (
          <div className="HomePage">
            <h1 className="title">Home Page</h1>
            <pre>{JSON.stringify(data)}</pre>
          </div>
        )
      }}
    )
  }
}

export default withRouter(HomePage)