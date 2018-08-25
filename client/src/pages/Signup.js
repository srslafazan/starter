import React from 'react'
import PropTypes from 'prop-types';
import axios from '../utils/axios'
import * as log from 'loglevel'

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';

import { Link, withRouter } from 'react-router-dom'

import Header from '../components/Header';

const styles = {
  root: {
  },
  signUpForm: {
  },
  input: {
    width: '50%',
  }
}


class Signup extends React.Component {

  dom = {
    email: null,
    password: null,
  }

  handleChange() {

  }

  signUp() {
    const { classes, history } = this.props;
    console.log('sign up');
    const email = this.dom.email.value;
    const password = this.dom.password.value;
    axios.post('/users', { email }).then((user) => {
      history.push('/')
    });
  }

  render() {
    const { classes, history } = this.props;
    
    document.title = 'Challenge Coach - Signup'
    
    return (
      <div className={classes.root}>
        <Header title="Sign up" />
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} sm={6}>
            <TextField
              ref={c => (this.dom.email = c)}
              id="email"
              label="Email"
              onChange={(e) => this.handleChange(e)}
              type="text"
              margin="normal"
              className={classes.input}
            />
            <br />
            <TextField
              ref={c => (this.dom.password = c)}
              id="password"
              onChange={(e) => this.handleChange(e)}
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
              onClick={() => this.signUp()}
              children={"Sign Up"}
            />
            <br />
            <Link to="/login">Need to Login?</Link>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(Signup));
