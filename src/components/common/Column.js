import React from 'react'
import classNames from 'classnames'

const Columns = (props) => <div className={classNames('column', props.className)}>{ props.children }</div>

export default Columns
