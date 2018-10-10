import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as log from 'loglevel'
import cx from 'classnames'
import { withRouter } from 'react-router'

import './Footer.sass';

@withRouter
class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
      </footer>
    );
  }
}

export default Footer;
