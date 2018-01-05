import React from 'react'
import { arrayOf, shape, string, number, instanceOf } from 'prop-types'

const HorizontalField = (props) => (
  <div className="field is-horizontal">
    {
      props.label &&

      <div className="field-label is-normal">
        <label className="label">{ props.label }</label>
      </div>
    }

    <div className="field-body">
      {props.children}
    </div>
  </div>
)

HorizontalField.propTypes = {
  label: string
}

export default HorizontalField
