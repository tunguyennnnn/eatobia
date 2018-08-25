import React from 'react'
import PineappleBkgd from '../icons/pexels-photo-165776.jpeg'

const styleBackground = {
  backgroundImage: `url(${PineappleBkgd})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '980px'
}

export default class Loyalty extends React.Component {
  render () {
    return (
      <div class='loyalty-page' style={styleBackground}>
        <div style={{position: 'absolute', right: '5%', marginTop: '70px'}}>
          <h1>Loyalty & Retention</h1>
          <div style={{textAlign: 'center', fontSize: '2.28rem'}}>
            <span style={{textAlign: 'center', color: 'grey'}}>Easy marketing with Wifi-program</span>
          </div>
          <br />
          <div>
            <i style={{verticalAlign: 'middle', paddingBottom: '35px'}} class="medium material-icons">check_circle</i>
            <div style={{display: 'inline-block'}}>
              <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>COLLECT CUSTOMER INFORMATION</span>
              <br />
              <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>(FACEBOOK, INSTAGRAM & EMAIL)</span>
            </div>
          </div>
          <div>
            <i style={{verticalAlign: 'middle'}} class="medium material-icons">check_circle</i>
            <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>MANAGE FREE WIFI FOR YOUR CUSTOMERS</span>
          </div>
          <br />
          <div>
            <i style={{verticalAlign: 'middle'}} class="medium material-icons">check_circle</i>
            <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>ASK YOUR CUSTOMERS ABOUT THEIR EXPERIENCE</span>
          </div>
          <br />
          <div>
            <i style={{verticalAlign: 'middle'}} class="medium material-icons">check_circle</i>
            <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>SEND SPECIAL OFFERS BASED ON THEIR VISITS</span>
          </div>
        </div>
      </div>
    )
  }
}
