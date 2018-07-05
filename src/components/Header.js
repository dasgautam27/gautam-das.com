import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/doruparu.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Gautam Das</strong><br /> </h1>
                    <h2>Acquia Certified Drupal 7 & 8 Developer <a href="https://www.drupal.org/u/dasgautam27">My Profile on Drupal.org</a>.</h2>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
