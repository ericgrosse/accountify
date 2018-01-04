import React, { Component } from 'react'
import { arrayOf, shape, string, number } from 'prop-types'
import moment from 'moment'
import './ExpenseList.scss'

class ExpenseList extends Component {
  render() {
    const { props } = this

    return (
      <div className="ExpenseList">
        <div className="columns header">
          <div className="column has-text-centered">
            <p>{ 'Date' }</p>
          </div>
          <div className="column has-text-centered">
            <p>{ 'Name' }</p>
          </div>
          <div className="column has-text-centered">
            <p>{ 'Price' }</p>
          </div>
          <div className="column has-text-centered">
            <p>{ 'Tag' }</p>
          </div>
          <div className="column has-text-centered">
            <p>{ 'Notes' }</p>
          </div>
        </div>

        <div>
          {
            props.items.map((item, index) => (
              <div key={index} className="columns">
                <div className="column has-text-centered">
                  <p>{ moment(item.date).date() }</p>
                </div>
                <div className="column has-text-centered">
                  <p>{ item.name }</p>
                </div>
                <div className="column has-text-centered">
                  <p>{ item.price }</p>
                </div>
                <div className="column has-text-centered">
                  <p>{ item.tag }</p>
                </div>
                <div className="column has-text-centered">
                  <p>{ item.notes }</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

ExpenseList.propTypes = {
  items: arrayOf(shape({
    date: string.isRequired,
    name: string.isRequired,
    price: number.isRequired,
    tag: string.isRequired,
    notes: string.isRequired,
  })).isRequired
}

export default ExpenseList
