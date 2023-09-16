import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../styles/header.css';

import mobile_header_hero from '../assets/img/mobile-image-hero.jpg';
import desktop_header_hero from '../assets/img/desktop-image-hero.jpg';
import icon_hamburger from '../assets/icon/icon-hamburger.svg';
import icon_close from '../assets/icon/icon-close.svg';
import logo from '../assets/icon/logo.svg';

const Header = () => {
  let iconBurguer,
    iconClose,
    mobileHeroImage,
    mobileMenuBackground,
    mobileHeaderTitle,
    mobileNavigationLinks;

  useEffect(() => {
    iconBurguer = document.querySelector('#icon_hamburguer');
    iconClose = document.querySelector('#icon_close');
    mobileHeroImage = document.querySelector('#mobile_hero_image');
    mobileMenuBackground = document.querySelector('#mobile_menu_background');
    mobileHeaderTitle = document.querySelector('#mobile_header_title');
    mobileNavigationLinks = document.querySelector('#mobile_navigation_links');
  }, []);

  const navigationLinksArray = [
    'About',
    'Careers',
    'Events',
    'Products',
    'Support',
  ];

  const mobileLinks = navigationLinksArray.map((link, index) => (
    <li key={index}>
      <Link className='react_link' to={link.toLowerCase()}>
        {link.toUpperCase()}
      </Link>
    </li>
  ));

  const desktopLinks = navigationLinksArray.map((link, index) => (
    <li key={index}>
      <Link className='react_link' to={link.toLowerCase()}>
        {link}
      </Link>
    </li>
  ));

  function openMobileMenu() {
    iconBurguer.style.display = 'none';
    iconClose.style.display = 'block';
    mobileHeroImage.style.display = 'none';
    mobileMenuBackground.style.display = 'block';
    mobileHeaderTitle.style.display = 'none';
    mobileNavigationLinks.style.display = 'block';
  }

  function closeMobileMenu() {
    iconBurguer.style.display = 'block';
    iconClose.style.display = 'none';
    mobileHeroImage.style.display = 'block';
    mobileMenuBackground.style.display = 'none';
    mobileHeaderTitle.style.display = 'block';
    mobileNavigationLinks.style.display = 'none';
  }

  return (
    <>
      <div id='header_container'>
        {/* MOBILE BEGINS */}
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
        <div id='mobile_header_title'>
          IMMERSIVE
          <br /> EXPERIENCES
          <br /> THAT
          <br /> DELIVER
        </div>

        <ul id='mobile_navigation_links'>{mobileLinks}</ul>
        {/* MOBILE ENDS */}
        {/* DESKTOP BEGINS */}
        <img
          src={desktop_header_hero}
          id='desktop_hero_image'
          alt='desktop hero img'
        />
        <div id='desktop_header_title'>
          IMMERSIVE
          <br /> EXPERIENCES
          <br /> THAT DELIVER
        </div>
        <ul id='desktop_navigation_links'>{desktopLinks}</ul>

        {/* DESKTOP ENDS */}
      </div>
    </>
  );
};

export default Header;
