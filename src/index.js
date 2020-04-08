import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

// imports style sheet (SASS)
import './index.scss'
// imports `App` component (contains all routes)
import App from './components/App/App'

// sets up routing through HashRouter, stores current location in `#` in URL
// the hash is never sent to the server
const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

// renders the app to the `root` element in `index.html`
ReactDOM.render(appJsx, document.getElementById('root'))
