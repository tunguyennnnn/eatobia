import React from 'react'
import PineappleBkgd from '../icons/pexels-photo-174671.jpeg'
import OnlineOrder from '../icons/online-ordering-system-multi-device-656804e619.png'

const styleBackground = {
  backgroundImage: `url(${OnlineOrder}), url(${PineappleBkgd})`,
  backgroundPosition: '600px 300px, center',
  backgroundRepeat: 'no-repeat, no-repeat',
  backgroundSize: '800px 500px, cover',
  height: '980px'
}

export default class Customer extends React.Component {
  render () {
    return (
      <div class='customer-page' style={styleBackground}>
        <div style={{position: 'absolute', left: '5%', marginTop: '70px'}}>
          <h1>Customer Acquisition</h1>
          <div style={{textAlign: 'center', fontSize: '2.28rem'}}>
            <span style={{textAlign: 'center', color: 'grey'}}>Reach and engage new customers,</span>
            <br />
            <span style={{textAlign: 'center', color: 'grey'}}>automatically</span>
          </div>
          <br />
          <div>
            <i style={{verticalAlign: 'middle'}} class="medium material-icons">check_circle</i>
            <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>ONLINE ORDERING INTEGRATED ON YOUR WEBSITE</span>
          </div>
          <br />
          <div>
            <i style={{verticalAlign: 'middle'}} class="medium material-icons">check_circle</i>
            <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>CREATE YOUR CUSTOM APP</span>
          </div>
          <br />
          <div>
            <i style={{verticalAlign: 'middle'}} class="medium material-icons">check_circle</i>
            <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>AUTOMATED INCREASE IN FACEBOOK LIKES</span>
          </div>
          <br />
          <div>
            <i style={{verticalAlign: 'middle', paddingBottom: '35px'}} class="medium material-icons">check_circle</i>
            <div style={{display: 'inline-block'}}>
              <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>RECEIVE ORDERS & TABLE RESERVATIONS</span>
              <br />
              <span style={{fontSize: '18px', fontWeight: '500', marginLeft: '20px'}}>DIRECTLY ON YOUR SMARTPHONE OR TABLET</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
