import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom'


class HomePage extends Component {
  render() {
    const { history } = this.props;
    
    document.title = 'Example - Signup'
    
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}

export default withRouter(HomePage);
