import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card';

import { Link, withRouter } from 'react-router-dom'

import Header from '@/components/Header'
import LoginForm from '@/components/LoginForm'


const styles = {
  root: {},
}


class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    
    document.title = 'Example - Login'
    
    return (
      <div className={classes.root}>
        <Header title="Log In" />
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} sm={6}>
            <LoginForm />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(LoginPage))