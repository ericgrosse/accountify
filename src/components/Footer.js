import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="footer">
          <div className="container has-text-centered">
            <div className="social-media-icons">
              <a href={'https://github.com/ericgrosse'}>
                <i className="fa fa-github" aria-hidden="true" alt="" />
              </a>
              <a href={'https://www.linkedin.com/in/eric-grosse-485a0894/'}>
                <i className="fa fa-linkedin-square" aria-hidden="true" alt="" />
              </a>
              <a href={'https://twitter.com/eric_grosse'}>
                <i className="fa fa-twitter-square" aria-hidden="true" alt="" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer
