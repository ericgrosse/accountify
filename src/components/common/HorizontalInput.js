import React from 'react'
import { arrayOf, shape, string, number, func, instanceOf } from 'prop-types'

const HorizontalInput = (props) => (
  <div className="field">
    <p className="control is-expanded">
      <input
        className="input"
        type="text"
        placeholder={ props.placeholder }
        value={ props.value }
        onChange={ props.onChange }
      />
    </p>
  </div>
)

HorizontalInput.propTypes = {
  value: string.isRequired,
  placeholder: string,
  onChange: func,
}

export default HorizontalInput
