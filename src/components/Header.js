import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <nav className="navbar is-info" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item is-size-4">Accountify</a>
        </div>
      </nav>
    );
  }
}

export default Header
