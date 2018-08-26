import React from 'react'
import PineappleLogo from '../icons/pineapple-logo.png'
import PineappleBkgd from '../icons/pexels-photo-139259.jpeg'

class HeaderAction extends React.Component {
  render () {
    return (
      <div class='indigo-text text-darken-4 bottom-align header-text' style={{position: 'relative', height: '12vw'}}>
        <div class='row' style={{position: 'absolute', width: '100%', bottom: 0, padding: '1vw', paddingBottom: 0}}>
          <div class='col s1 m2'>
          </div>
          <div class='col s4 m4'>
            <span>Our Product</span>
            <i class="material-icons">expand_more</i>
          </div>
          <div class='col s1 m1'>
            <span>Blog</span>
          </div>
          <div class='col s2 m2'>
            <span>Pricing</span>
          </div>
          <div class='col s3 m3 center-align' style={{background: '#1a237e', border: 'solid 0', borderRadius: 5, color: 'white', padding: '1vw'}}>
            Try For Free
          </div>
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
          <div style={{color: 'white', fontWeight: 'bold', display: 'inline-block', fontSize: '3vw', marginLeft: '0px'}}>Eatobia<span class='indigo-text text-darken-4'>.</span></div>
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
            <p class='intro-providing-text'>Providing a restaurant <br />with new solutions<span class='indigo-text text-darken-4'>.</span></p>
            <p class='intro-fast-text'>Faster business growth with new & <br />returning customers</p>
        </div>
      </div>
    )
  }
}
