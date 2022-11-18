import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Ben Basty</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">Scroll down</a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header;