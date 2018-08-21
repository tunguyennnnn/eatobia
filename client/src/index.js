import 'babel-polyfill'

import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'

// const history = createBrowserHistory()
import io from 'socket.io-client'
import moment from 'moment'
window.moment = moment
window.io = io
ReactDom.render(
  <Router>
    <App />
  </Router>
  ,
 document.getElementById('root'))
