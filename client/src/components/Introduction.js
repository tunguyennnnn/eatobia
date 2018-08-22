import React from 'react'
import PineappleLogo from '../icons/pineapple-logo.png'

class HeaderAction extends React.Component {
  render () {
    return (
      <div class='row'>
        <div class='col m4 s0'>
        </div>
        <div class='col m8 s12'>
          <div class='row'>
            <div class='col s3'>
              Our product
            </div>
            <div class='col s2'>
              Blog
            </div>
            <div class='col s3'>
              Our product
            </div>
            <div class='col s4'>
              <button>
                Try for free
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div class='row'>
        <div class='col m2 s4'>
          <img class='responsive-img' src={PineappleLogo} />
        </div>
        <div class='col m10 s8'>
          <HeaderAction />
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
