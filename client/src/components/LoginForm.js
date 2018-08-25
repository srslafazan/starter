import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios'
import * as log from 'loglevel'

import { withStyles } from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';

import { Link, withRouter } from 'react-router-dom'


const styles = {
  root: {},
  input: {
    width: '50%',
  }
}


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  logIn() {
    const { email, password } = this.state;
    console.log('do something with email and password');
    this.props.history.push('/')
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          label="Email"
          type="text"
          margin="normal"
          className={classes.input}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <br />
        <TextField
          label="Password"
          type="password"
          margin="normal"
          className={classes.input}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <Button
          variant="raised"
          color="secondary"
          children={"Log In"}
          style={{ display: 'block' }}
          onClick={() => this.logIn()}
        />
        <br />
        <Link to="/signup">Want to Sign up?</Link>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(LoginForm));
