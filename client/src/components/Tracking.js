import React from 'react'
import PineappleBkgd from '../icons/pexels-photo-915016.jpeg'

const styleBackground = {
  backgroundImage: `url(${PineappleBkgd})`
}

export default class Tracking extends React.Component {
  render () {
    return (
      <div class='tracking-page row' style={styleBackground}>
        <div class='col m5 s0'></div>
        <div class='col m7 s12'>
          <div class='tracking-text-container'>
            <p class='tracking-text'>Tracking & Automation</p>
            <p class='tracking-marketing-text'>Automated email marketing</p>
            <br />
            <div class='customer-check'>
              <i style={{verticalAlign: 'middle', paddingBottom: '10px'}} class='medium material-icons'>check_circle</i>
              <div style={{display: 'inline-block'}}>
                <span>Track your customer walkthrough rate</span>
              </div>
            </div>
            <div class='customer-check'>
              <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
              <div style={{display: 'inline-block'}}>
                <span>Automated  Facebook likes</span>
              </div>
            </div>
            <br />
            <div class='customer-check'>
              <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
              <div style={{display: 'inline-block'}}>
                <span>Automated  Instagram followers</span>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    )
  }
}
