import React from 'react'
import PineappleBkgd from '../icons/pexels-photo-174671.jpeg'
import OnlineOrder from '../icons/online-ordering-system-multi-device-656804e619.png'

const styleBackground = {
  backgroundImage: `url(${PineappleBkgd})`
}

export default class Customer extends React.Component {
  render () {
    return (
      <div class='customer-page row' style={styleBackground}>
        <div class='col s10 m8'>
          <div class='customer-text-container'>
            <div class='customer-acquire'>Customer Acquisition</div>
            <div class='customer-reach'>
              <span>Reach and engage new customers,<br />automatically</span>
            </div>
            <br />
            <div class='customer-check'>
              <i style={{verticalAlign: 'middle', paddingBottom: '20px'}} class='material-icons'>check_circle</i>
              <div style={{display: 'inline-block'}}>
                <span>Online ordering integrated on <br /> your website</span>
              </div>
            </div>
            <div class='customer-check'>
              <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
              <div style={{display: 'inline-block'}} ><span>Create your custome app</span></div>
            </div>
            <br />
            <div class='customer-check'>
              <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
              <div style={{display: 'inline-block'}}><span>Automated increase in Facebook likes</span></div>
            </div>
            <br />
            <div class='customer-check'>
              <i style={{verticalAlign: 'middle', paddingBottom: '35px'}} class='material-icons'>check_circle</i>
              <div style={{display: 'inline-block'}}>
                <span>Receive orders & table reservations <br /> directly on your smartphone or tablet</span>
              </div>
            </div>
          </div>
        </div>
        <img class='order-online-image' src={OnlineOrder} />
      </div>
    )
  }
}
