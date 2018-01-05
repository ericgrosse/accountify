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

class App extends Component {
  state = {
    showFilters: false,
    name: '',
    dateRangeStart: '',
    dateRangeEnd: '',
    priceRangeStart: '',
    priceRangeEnd: '',
    tags: '',
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

          <Content>
            <Columns>
              <Column>
                <button
                  className="button is-info"
                  onClick={this.toggleFilter}
                >
                  {state.showFilters  ? 'Hide Filters' : 'Show Filters' }
                </button>
              </Column>
            </Columns>

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
          </Content>

          <ExpenseList
            items={expenseListItems}
          />
        </Container>

        <Footer />
      </div>
    )
  }
}

export default App
