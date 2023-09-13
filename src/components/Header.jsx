import React from 'react';
import '../styles/header.css';

import mobile_header_hero from '../assets/img/image-hero.jpg';
import icon_hamburger from '../assets/icon/icon-hamburger.svg';
import logo from '../assets/icon/logo.svg';

const Header = () => {
  return (
    <>
      <div id='header_container'>
        <img
          src={mobile_header_hero}
          id='mobile_hero_image'
          alt='mobile hero img'
        />
        <img src={logo} id='logo' alt='logo' />
        <img src={icon_hamburger} id='icon_hamburguer' alt='icon hamburguer' />
        <div id='header_title'>
          IMMERSIVE
          <br /> EXPERIENCES
          <br /> THAT
          <br /> DELIVER
        </div>
      </div>
    </>
  );
};

export default Header;
