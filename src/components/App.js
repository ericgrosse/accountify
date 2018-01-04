import React, { Component } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ExpenseList from 'components/ExpenseList'
import './App.scss'

const tempData = [
  {
    date: 1515101473993,
    name: 'Costco',
    price: 35.55,
    tag: 'groceries',
    notes: '',
  },
  {
    date: 1515101473993,
    name: 'Uber',
    price: 20.00,
    tag: 'transportation',
    notes: '',
  },
  {
    date: 1515101473993,
    name: 'Pharmaprix',
    price: 30.00,
    tag: 'groceries',
    notes: '',
  }
];

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

              <ExpenseList
                items={tempData}
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
