import 'babel-polyfill'

import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import './styles/style.css'
import './styles/customer.scss'

ReactDom.render(
  <Router>
    <App />
  </Router>
  ,
 document.getElementById('root'))
