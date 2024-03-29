import 'babel-polyfill'

import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import './styles/style.scss'
import './styles/customer.scss'
import './styles/loyalty.scss'
import './styles/tracking.scss'
import './styles/request.scss'

ReactDom.render(
  <Router>
    <App />
  </Router>
  ,
 document.getElementById('root'))
