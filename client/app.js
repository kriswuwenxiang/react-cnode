import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './Main'

const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./Main.jsx', () => {
    const NextApp = require('./Main.jsx').default
    render(NextApp)
  })
}
