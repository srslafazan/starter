import React from 'react'
import { Link } from 'react-router-dom'

const HomeLink = props => <Link to="/" {...props} />
const LogoutLink = props => <Link to="/logout" {...props} />

export {
  HomeLink,
  LogoutLink,
}