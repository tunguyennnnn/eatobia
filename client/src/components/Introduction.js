import React from 'react'
import {Link} from 'react-scroll'
import PineappleLogo from '../icons/pineapple-logo.png'
import PineappleBkgd from '../icons/pexels-photo-139259.jpeg'


class HeaderAction extends React.Component {
  componentDidMount () {
    $(this.dropdownEl).dropdown({
      inDuration: 300,
      outDuration: 225,
      hover: false,
      constrainWidth: false,
      gutter: 0,
      belowOrigin: false
    })
  }

  render () {
    return (
      <div class='indigo-text text-darken-4 bottom-align header-text' style={{position: 'relative', height: '12vw'}}>
        <div class='row' style={{position: 'absolute', width: '100%', bottom: 0, padding: '1vw', paddingBottom: 0, fontFamily: 'Lato, sans-serif'}}>
          <div class='col s1 m1' />
          <div class='col s4 m4'>
            <a class='dropdown-trigger' style={{textDecoration: 'none', color: '#1a237e'}} data-beloworigin='true' href='#' data-activates='dropdown1' ref={(el) => this.dropdownEl = el}>
              <span>Our Product<i class='material-icons dropdown-icon'>expand_more</i></span>
            </a>
            <ul id='dropdown1' class='dropdown-content'>
              <li>
                <Link to='customer' spy={true} smooth={true} duration={500} >
                  <a>
                    Customer Acquisition
                  </a>
                </Link>
              </li>
              <li>
                <Link to='loyalty' spy={true} smooth={true} duration={500} >
                  <a>Loyalty & Retention</a>
                </Link>
              </li>
              <li>
                <Link to='track' spy={true} smooth={true} duration={500} >
                  <a>Tracking & Automation</a>
                </Link>
              </li>
            </ul>
          </div>
          <div class='col s2 m2'>
            <span>Blog</span>
          </div>
          <div class='col s2 m2'>
            <span>Pricing</span>
          </div>
          <Link to='request' spy={true} smooth={true} duration={500} >
            <div class='col s3 m3 center-align' style={{background: '#1a237e', border: 'solid 0', borderRadius: 5, color: 'white', padding: '1vw'}}>
              <span style={{color: 'white'}}>Try For Free</span>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div class='row'>
        <div class='col m4 s4 center-align'>
          <img class='intro-image' src={PineappleLogo} />
          <div style={{color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', display: 'inline-block', fontSize: '3vw', marginLeft: '0px'}}>Eatobia<span class='indigo-text text-darken-4'>.</span></div>
        </div>
        <div class='col m8 s12'>
          <HeaderAction />
        </div>
      </div>
    )
  }
}

export default class Introduction extends React.Component {
  render () {
    return (
      <div class='introduction-page' style={{backgroundImage: `url(${PineappleBkgd})`}}>
        <Header />
        <div class='row'>
          <p class='intro-providing-text'>Providing restaurants <br />with new solutions<span class='indigo-text text-darken-4'>.</span></p>
          <p class='intro-fast-text'>Faster business growth with new & <br />returning customers</p>
        </div>
      </div>
    )
  }
}
