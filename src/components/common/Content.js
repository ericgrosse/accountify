import React from 'react'
import classNames from 'classnames'

const Content = (props) => <div className={classNames('content', props.className)}>{ props.children }</div>

export default Content
