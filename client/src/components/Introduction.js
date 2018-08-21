import React from 'react'
import PineappleLogo from '../icons/pineapple-logo.png'

class Header extends React.Component {
  render () {
    return (
      <div class='row'>
        <div class='col-xs-2'>
          <img class='logo' src={PineappleLogo} />
        </div>
        <div class='col-xs-10'>
          <div class='row'>
            <div class='col-xs-6' />
            <div class='col-xs-6'>
              <div class='row'>
                <div class='col-xs-4'>Our product</div>
                <div class='col-xs-2'>Blog</div>
                <div class='col-xs-2'>Pricing</div>
                <div class='col-xs-4 try-for-free-btn'>
                  Try for free
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default class Introduction extends React.Component {
  render () {
    return (
      <div class='introduction-page'>
        <Header />
      </div>
    )
  }
}
