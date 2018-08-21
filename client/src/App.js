import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {MainPage} from './components'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={MainPage} />
        </Switch>
      </div>
    )
  }
}
