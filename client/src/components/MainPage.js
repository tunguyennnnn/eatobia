import React from 'react'
import {Element} from 'react-scroll'
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
        <Element name='customer' className='non-margin'>
          <Customer />
        </Element>
        <Element name='loyalty' className='non-margin'>
          <Loyalty />
        </Element>
        <Element name='track' className='non-margin'>
          <Tracking />
        </Element>
        <Element name='request' className='non-margin'>
          <Request />
        </Element>
      </div>
    )
  }
}
