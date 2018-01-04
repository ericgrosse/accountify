import React, { Component } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                Monthly Expenses
              </h1>
            </div>
          </div>
      </section>

        <Footer />
      </div>
    )
  }
}

export default App
