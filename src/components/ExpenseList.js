import React, { Component } from 'react'
import { arrayOf, shape, string, number } from 'prop-types'
import moment from 'moment'
import './ExpenseList.scss'

const tempData = [
  {
    date: 1515101473992,
    name: 'Costco',
    price: 35.55,
    tag: 'groceries',
    notes: '',
  },
  {
    date: 1515101473992,
    name: 'Uber',
    price: 20.00,
    tag: 'transportation',
    notes: '',
  },
];

class ExpenseList extends Component {
  render() {
    const { props } = this

    return (
      <div className="ExpenseList">
        
        {
          props.items.map((item, index) => (
            <div key={index} className="expense-item">
              <p>{ moment().date(item.date) }</p>
              <p>{ item.name }</p>
              <p>{ item.price }</p>
              <p>{ item.tag }</p>
              <p>{ item.notes }</p>
            </div>
          ))
        }
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
