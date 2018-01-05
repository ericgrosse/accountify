import React from 'react'

const Content = (props) => <div className={"content " + (props.className || '')}>{ props.children }</div>

export default Content
