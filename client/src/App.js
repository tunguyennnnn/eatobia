import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {MainPage} from './components'

export default class App extends React.Component {
  render () {
    return (
      <div style={{marginLeft: '0px'}}>
        <Switch>
          <Route exact path='/' component={MainPage} />
        </Switch>
      </div>
    )
  }
}
