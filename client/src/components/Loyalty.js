import React from 'react'
import PineappleBkgd from '../icons/pexels-photo-165776.jpeg'
import Screen from '../icons/splash-screen_boustan.png'

const styleBackground = {
  backgroundImage: `url(${PineappleBkgd})`
}

export default class Loyalty extends React.Component {
  render () {
    return (
      <div class='loyalty-page' style={styleBackground}>
        <div class='row'>
          <div class='col m4 s2'></div>
          <div class='col m8 s10'>
            <div class='loyalty-text-container'>
              <div class='loyalty-text'>Loyalty & Retention</div>
              <div class='loyalty-reach'>
                <span>Easy marketing with Wifi-program</span>
              </div>
              <br />
              <div class='row'>
                <div class='customer-check'>
                  <div class='col s2'>
                    <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
                  </div>
                  <div class='col s10'>
                    <span>Collect customer information <br />(Facebook, Instagram & Email)</span>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='customer-check'>
                  <div class='col s2'>
                    <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
                  </div>
                  <div class='col s10'>
                    <span>Manage free wifi for your customers</span>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='customer-check'>
                  <div class='col s2'>
                    <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
                  </div>
                  <div class='col s10'>
                    <span>Ask your customers about their experience</span>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='customer-check'>
                  <div class='col s2'>
                    <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
                  </div>
                  <div class='col s10'>
                    <span>Send special offers based on their visits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col m6 s0'>
            <div><img class='loyalty-image' src={Screen} /></div>
          </div>
        </div>
      </div>
    )
  }
}
