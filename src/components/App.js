import React, { Component } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ExpenseList from 'components/ExpenseList'
import expenseListItems from 'data/expenseListItems'
import './App.scss'
import HorizontalField from 'components/common/HorizontalField'
import HorizontalInput from 'components/common/HorizontalInput'
import Columns from 'components/common/Columns'
import Column from 'components/common/Column'
import Content from 'components/common/Content'
import Container from 'components/common/Container'
import axios from 'axios'
import moment from 'moment'
//import Dropzone from 'react-dropzone'

class App extends Component {
  state = {
    showFilters: false,
    name: '',
    dateRangeStart: '',
    dateRangeEnd: '',
    priceRangeStart: '',
    priceRangeEnd: '',
    tags: '',
    expenseListItems,
  }

  handleImportCSV = () => {
    const { state } = this
    let csvFilename = 'csv1989.csv'

    axios.get(`http://localhost:5000/api/parseCSV/${csvFilename}`)
    .then(res => {
      let csvEntries = res.data.map(entry => ({
        date: entry[2],
        name: entry[4],
        price: entry[6],
        tag: '',
        notes: '',
      }))

      //console.log(res.data)
      //console.log(csvEntries)

      let expenseListItems = state.expenseListItems.concat(csvEntries)
      expenseListItems.sort((a,b) => moment(a.date).date() - moment(b.date).date())
      this.setState({expenseListItems})
    })
    .catch(err => {
      console.error(err)
    })
  }

  handleAddNew = () => {

  }

  toggleFilter = () => {
    this.setState({showFilters: !this.state.showFilters})
  }

  handleChangeName = (evt) => {
    this.setState({name: evt.target.value})
  }

  handleChangeDateStart = (evt) => {
    this.setState({dateRangeStart: evt.target.value})
  }

  handleChangeDateEnd = (evt) => {
    this.setState({dateRangeEnd: evt.target.value})
  }

  handleChangePriceStart = (evt) => {
    this.setState({priceRangeStart: evt.target.value})
  }

  handleChangePriceEnd = (evt) => {
    this.setState({priceRangeEnd: evt.target.value})
  }

  handleChangeTags = (evt) => {
      this.setState({tags: evt.target.value})
  }

  render() {
    const { state, props } = this

    return (
      <div className="App">
        <Header />

        <Container>
          <div className="tabs is-centered">
            <ul>
              <li className="is-active"><a>Expenses</a></li>
              <li><a>Tags</a></li>
              <li><a>Misc</a></li>
            </ul>
          </div>
          
          <h1 className="title has-text-centered">Monthly Expenses</h1>

          <p className="field">
            <button className="button is-info" onClick={this.handleImportCSV}>Import CSV</button>
          </p>

          {/*
            <div className="dropzone">
              <Dropzone onDrop={this.handleImportCSV}>
                <p>Try dropping some files here, or click to select files to upload.</p>
              </Dropzone>
            </div>
          */}

          <p className="field">
            <button className="button is-info" onClick={this.handleAddNew}>Add New</button>
          </p>
          <p>
            <button className="button is-info" onClick={this.toggleFilter}>{state.showFilters  ? 'Hide Filters' : 'Show Filters' }</button>
          </p>

          {
            state.showFilters &&

            <Columns>
              <Column className="is-half ">
                <HorizontalField label="Name">
                  <HorizontalInput
                    placeholder=""
                    value={ state.name }
                    onChange={this.handleChangeName}
                  />
                </HorizontalField>

                <HorizontalField label="Date Range">
                  <HorizontalInput
                    placeholder="From"
                    value={ state.dateRangeStart }
                    onChange={this.handleChangeDateStart}
                  />
                  <HorizontalInput
                    placeholder="To"
                    value={ state.dateRangeEnd }
                    onChange={this.handleChangeDateEnd}
                  />
                </HorizontalField>

                <HorizontalField label="Price Range">
                  <HorizontalInput
                    placeholder="From"
                    value={ state.priceRangeStart }
                    onChange={this.handleChangePriceStart}
                  />
                  <HorizontalInput
                    placeholder="To"
                    value={ state.priceRangeEnd }
                    onChange={this.handleChangePriceEnd}
                  />
                </HorizontalField>

                <HorizontalField label="Tags">
                  <HorizontalInput
                    placeholder=""
                    value={ state.tags }
                    onChange={(evt) => this.handleChangeTags(evt)}
                  />
                </HorizontalField>
              </Column>
            </Columns>
          }
          
          <Columns>
            <Column>
              <p className="has-text-right">Month (Dropdown)</p>
            </Column>
          </Columns>

          <ExpenseList
            items={state.expenseListItems}
          />
        </Container>

        <Footer />
      </div>
    )
  }
}

export default App
