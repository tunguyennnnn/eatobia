import React from 'react'
import PineappleBkgd from '../icons/pexels-photo-1161547.jpeg'
import PineappleLogo from '../icons/pineapple-logo.png'

const styleBackground = {
  backgroundImage: `url(${PineappleBkgd})`
}

export default class Request extends React.Component {
  render () {
    return (
      <div class='request-page row' style={styleBackground}>
        <div class='col m6 s12'>
          <div class='request-text-container'>
            <p class='request-header'>Request a demo<span class='indigo-text text-darken-4'>.</span></p>
            <br />
            <form class='request-form-container' style={{fontFamily: 'Montserrat, sans-serif'}}>
              <div class='form-group'>
                <label>Restaurant name</label>
                <input type='text' name='resturant_name' style={{borderBottom: '1px solid black'}} />
              </div>
              <br />
              <div class='form-group'>
                <label>Email</label>
                <input type='text' name='email' style={{borderBottom: '1px solid black'}} />
              </div>
              <br />
              <div class='form-group'>
                <label>Phone number</label>
                <input type='text' name='phone_number' style={{borderBottom: '1px solid black'}} />
              </div>
              <br />
              <div>
                <a class='waves-effect waves-light btn indigo darken-4 btn-large'>Request demo</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
