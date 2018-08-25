import React from 'react'
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

import Header from '../components/Header'


const styles = {
  root: {
  },
  input: {
    width: '50%',
  }
}


class Login extends React.Component {

  dom = {
    email: null,
    password: null,
  }

  logIn() {
    const email = this.dom.email.value;
    const password = this.dom.password.value;
    console.log('do something with email and password');
    this.props.history.push('/')
  }

  render() {
    const { classes } = this.props;
    
    document.title = 'Example - Login'
    
    return (
      <div className={classes.root}>
        <Header title="Log In" />
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} sm={6}>
            <TextField
              ref={c => (this.dom.email = c)}
              id="email"
              label="Email"
              type="text"
              margin="normal"
              className={classes.input}
            />
            <br />
            <TextField
              ref={c => (this.dom.password = c)}
              id="password"
              label="Password"
              type="password"
              className={classes.textField}
              margin="normal"
              className={classes.input}
            />
            <Button
              style={{ display: 'block' }}
              variant="raised"
              color="secondary"
              onClick={() => this.logIn()}
              children={"Log In"}
            />
            <br />
            <Link to="/signup">Want to Sign up?</Link>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(Login))