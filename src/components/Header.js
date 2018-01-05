import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <nav className="navbar is-info" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item is-size-4">Accountify</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header
