import React from 'react'

const Columns = (props) => <div className={"column " + (props.className || '')}>{ props.children }</div>

export default Columns
