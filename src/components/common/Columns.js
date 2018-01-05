import React from 'react'

const Columns = (props) => <div className={"columns " + (props.className || '')}>{ props.children }</div>

export default Columns
