import React from 'react'
import PineappleBkgd from '../icons/pexels-photo-915016.jpeg'

const styleBackground = {
  backgroundImage: `url(${PineappleBkgd})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '980px'
}

export default class Tracking extends React.Component {
  render () {
    return (
      <div class='tracking-page' style={styleBackground}>
        <div style={{position: 'absolute', right: '5%', marginTop: '70px'}}>
          <h1>Tracking & Automation</h1>
          <div style={{textAlign: 'center', fontSize: '2.28rem'}}>
            <span style={{textAlign: 'center', color: 'grey'}}>Automated email marketing</span>
          </div>
          <br />
          <div>
            <i style={{verticalAlign: 'middle'}} class="medium material-icons">check_circle</i>
            <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>TRACK YOUR CUSTOMER WALKTHROUGH RATE</span>
          </div>
          <br />
          <div>
            <i style={{verticalAlign: 'middle'}} class="medium material-icons">check_circle</i>
            <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>AUTOMATED FACEBOOK LIKES</span>
          </div>
          <br />
          <div>
            <i style={{verticalAlign: 'middle'}} class="medium material-icons">check_circle</i>
            <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>AUTOMATED INSTAGRAM FOLLOWERS</span>
          </div>
          <br />
          <div>
            <i style={{verticalAlign: 'middle'}} class="medium material-icons">check_circle</i>
            <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>IMPROVEMENT ON CUSTOMER RATINGS</span>
          </div>
        </div>
      </div>
    )
  }
}
