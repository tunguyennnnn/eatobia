import React from 'react'
import PineappleBkgd from '../icons/pexels-photo-1161547.jpeg'
import PineappleLogo from '../icons/pineapple-logo.png'

const styleBackground = {
  backgroundImage: `url(${PineappleBkgd})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '980px'
}

export default class Request extends React.Component {
  render () {
    return (
      <div class='request-page' style={styleBackground}>
        <div style={{position: 'absolute', left: '5%', marginTop: '70px'}}>
          <div class='title'>
            <h1 style={{fontWeight: '700'}}>Request a demo<span class='indigo-text text-darken-4'>.</span></h1>
          </div>
          <br />
          <form>
            <div class="form-group">
              <label style={{fontSize: '2rem', color: 'black', fontWeight: '300'}}>Restaurant name</label>
              <input type="text" name="resturant_name" style={{borderBottom: '1px solid black'}}/>
            </div>
            <br />
            <div class="form-group">
              <label style={{fontSize: '2rem', color: 'black', fontWeight: '300'}}>Email</label>
              <input type="text" name="email" style={{borderBottom: '1px solid black'}}/>
            </div>
            <br />
            <div class="form-group">
              <label style={{fontSize: '2rem', color: 'black', fontWeight: '300'}}>Phone number</label>
              <input type="text" name="phone_number" style={{borderBottom: '1px solid black'}}/>
            </div>
            <br />
            <div>
              <a class="waves-effect waves-light btn indigo darken-4 btn-large" style={{position: 'absolute', top: '575px'}}>Request demo</a>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
