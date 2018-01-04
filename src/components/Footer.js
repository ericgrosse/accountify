import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>Footer</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer
