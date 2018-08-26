import React from 'react'
import Customer from './Customer'
import Introduction from './Introduction'
import Loyalty from './Loyalty'
import Tracking from './Tracking'
import Request from './Request'

export default class MainPage extends React.Component {
  render () {
    return (
      <div style={{marginLeft: '0px'}}>
        <Introduction />
        <Customer />
        <Loyalty />
        <Tracking />
        <Request />
      </div>
    )
  }
}
