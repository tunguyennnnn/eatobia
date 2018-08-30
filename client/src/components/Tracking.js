import React from 'react'
import PineappleBkgd from '../icons/eyewear-food-food-photography-1004525.jpg'

const styleBackground = {
  backgroundImage: `url(${PineappleBkgd})`
}

export default class Tracking extends React.Component {
  render () {
    return (
      <div class='tracking-page row' style={styleBackground}>
        <div class='col m7 s12'>
          <div class='tracking-text-container'>
            <div class='tracking-text'>Tracking & Automation</div>
            <div class='tracking-reach'>
              <span>Automated email marketing</span>
            </div>
            <br />
            <div class='row'>
              <div class='customer-check'>
                <div class='col s2 m1'>
                  <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
                </div>
                <div class='col s10'>
                  <span>Track your customer walkthrough rate</span>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='customer-check'>
                <div class='col s2 m1'>
                  <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
                </div>
                <div class='col s10'>
                  <span>Automated  Facebook likes</span>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='customer-check'>
                <div class='col s2 m1'>
                  <i style={{verticalAlign: 'middle'}} class='material-icons'>check_circle</i>
                </div>
                <div class='col s10'>
                  <span>Automated  Instagram followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
