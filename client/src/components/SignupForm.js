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


class SignupForm extends Component {
  state = {
    email: '',
    password: '',
  }

  signUp() {
    const { classes, history } = this.props;
    const { email, password } = this.state;
    console.log('sign up');
    axios.post('/users', { email }).then((user) => {
      history.push('/')
    });
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
          children={"Sign Up"}
          style={{ display: 'block' }}
          onClick={() => this.signUp()}
        />
        <br />
        <Link to="/login">Need to Login?</Link>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(SignupForm));
