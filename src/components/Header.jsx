import React from 'react';
import '../styles/header.css';

import mobile_header_hero from '../assets/img/image-hero.jpg';
import icon_hamburger from '../assets/icon/icon-hamburger.svg';
import icon_close from '../assets/icon/icon-close.svg';
import logo from '../assets/icon/logo.svg';

const Header = () => {
  const iconBurguer = document.querySelector('#icon_hamburguer');
  const iconClose = document.querySelector('#icon_close');
  const mobileHeroImage = document.querySelector('#mobile_hero_image');
  const mobileMenuBackground = document.querySelector(
    '#mobile_menu_background'
  );
  const headerTitle = document.querySelector('#header_title');
  const mobileNavigationLinks = document.querySelector(
    '#mobile_navigation_links'
  );

  const navigationLinksArray = [
    'ABOUT',
    'CAREERS',
    'EVENTS',
    'PRODUCTS',
    'SUPPORT',
  ];

  const links = navigationLinksArray.map((link, index) => (
    <li key={index}>
      <a>{link}</a>
    </li>
  ));

  function openMobileMenu() {
    iconBurguer.style.display = 'none';
    iconClose.style.display = 'block';
    mobileHeroImage.style.display = 'none';
    mobileMenuBackground.style.display = 'block';
    headerTitle.style.display = 'none';
    mobileNavigationLinks.style.display = 'block';
  }

  function closeMobileMenu() {
    iconBurguer.style.display = 'block';
    iconClose.style.display = 'none';
    mobileHeroImage.style.display = 'block';
    mobileMenuBackground.style.display = 'none';
    headerTitle.style.display = 'block';
    mobileNavigationLinks.style.display = 'none';
  }

  return (
    <>
      <div id='header_container'>
        <div id='mobile_menu_background'></div>
        <img
          src={mobile_header_hero}
          id='mobile_hero_image'
          alt='mobile hero img'
        />
        <img src={logo} id='logo' alt='logo' />
        <img
          src={icon_hamburger}
          id='icon_hamburguer'
          alt='icon hamburguer'
          onClick={openMobileMenu}
        />
        <img
          src={icon_close}
          id='icon_close'
          alt='icon close'
          onClick={closeMobileMenu}
        />
        <div id='header_title'>
          IMMERSIVE
          <br /> EXPERIENCES
          <br /> THAT
          <br /> DELIVER
        </div>

        <ul id='mobile_navigation_links'>{links}</ul>
      </div>
    </>
  );
};

export default Header;
