import React from 'react'
import PineappleLogo from '../icons/pineapple-logo.png'
import PineappleBkgd from '../icons/pexels-photo-139259.jpeg'

const styleBackground = {
  backgroundImage: `url(${PineappleBkgd})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '980px'
}

class HeaderAction extends React.Component {
  render () {
    return (
      <div class='row indigo-text text-darken-4'>
        <div class='col s1 m2'>
        </div>
        <div class='col s3 m4'>
          <span>Our Product</span><i class="small material-icons">expand_more</i>
        </div>
        <div class='col s1 m1'>
          <span>Blog</span>
        </div>
        <div class='col s2 m2'>
          <span>Pricing</span>
        </div>
        <div class='col s5 m3'>
          <a class="waves-effect waves-light btn indigo darken-4 btn-large">Try for free</a>
        </div>
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div class='row'>
        <div class='col m5 s12'>
          <img style={{width: 150}} src={PineappleLogo} />
          <div style={{color: 'white', fontWeight: 'bold', display: 'inline-block', position: 'absolute', top: '70px', left: '140px'}}>Eatobia<span class='indigo-text text-darken-4'>.</span></div>
        </div>
        <div class='col m7 s12'>
          <HeaderAction />
        </div>
      </div>
    )
  }
}

export default class Introduction extends React.Component {
  render () {
    return (
      <div class='introduction-page' style={styleBackground}>
        <Header />
        <div class='row'>
          <div class='col m2'></div>
          <div class='col m8'>
            <h1 style={{textAlign: 'center'}}>Providing a restaurant <br />with new solutions<span class='indigo-text text-darken-4'>.</span></h1>
          </div>
          <div class='col m2'></div>
        </div>
        <h5 style={{textAlign: 'center', color: 'grey'}}>Faster business growth with new & <br />returning customers</h5>
      </div>
    )
  }
}
