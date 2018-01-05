import React, { Component } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ExpenseList from 'components/ExpenseList'
import expenseListItems from 'data/expenseListItems'
import './App.scss'

class App extends Component {
  state = {
    showFilters: true,
  }

  toggleFilter = () => {
    this.setState({showFilters: !this.state.showFilters})
  }

  render() {
    const { state, props } = this

    return (
      <div className="App">
        <Header />
        
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                Monthly Expenses
              </h1>

              <div className="content">
                <button
                  className="button is-info"
                  onClick={this.toggleFilter}
                >
                  {state.showFilters  ? 'Hide Filters' : 'Show Filters' }
                </button>

                {
                  state.showFilters &&

                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Price range</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control is-expanded">
                          <input className="input" type="text" placeholder="From" />
                        </p>
                      </div>
                      <div className="field">
                        <p className="control is-expanded">
                          <input className="input" type="email" placeholder="To" />
                        </p>
                      </div>
                    </div>
                  </div>
                }
              </div>

              <ExpenseList
                items={expenseListItems}
              />
            </div>
          </div>
      </section>

        <Footer />
      </div>
    )
  }
}

export default App
