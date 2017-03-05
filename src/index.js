import React from 'react'
import ReactDOM from 'react-dom'

const title = "My minimal React Webpack Babel Setup #1"

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
)

module.hot.accept()