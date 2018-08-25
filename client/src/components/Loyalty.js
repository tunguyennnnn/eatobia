import React from 'react'
import PineappleBkgd from '../icons/pexels-photo-165776.jpeg'
import Screen from '../icons/splash-screen_boustan.png'

const styleBackground = {
  backgroundImage: `url(${PineappleBkgd})`
}

export default class Loyalty extends React.Component {
  render () {
    return (
      <div class='loyalty-page row' style={styleBackground}>
        <div class='col m6 s0'>
          <div><img class='loyalty-image' src={Screen} /></div>
        </div>
        <div class='col m6 s12'>
          <div class='loyalty-text-container'>
            <p class='loyalty-text'>Loyalty & Retention</p>
            <p class='loyalty-marketing-text'>Easy marketing with Wifi-program</p>
            <br />
            <div class='customer-check'>
              <i style={{verticalAlign: 'middle'}} class='medium material-icons'>check_circle</i>
              <div style={{display: 'inline-block'}}>
                <span>Collect customer information <br />(Facebook,Instagram& Email)</span>
              </div>
            </div>
            <br />
            <div class='customer-check'>
              <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
              <div style={{display: 'inline-block'}}>
                <span>Manage free wifi for your customers</span>
              </div>
            </div>
            <br />
            <div class='customer-check'>
              <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
              <div style={{display: 'inline-block'}}>
                <span>Ask your customers about their experience</span>
              </div>
            </div>
            <br />
            <div class='customer-check'>
              <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
              <div style={{display: 'inline-block'}}>
                <span>Send special offers based on their visits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
