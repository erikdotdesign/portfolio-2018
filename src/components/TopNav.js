import React from 'react';
import { IndexLink } from 'react-router';
import Logo from './Logo';

const TopNav = () => (
  <nav className='c-top-nav' role='navigation'>
    <IndexLink
      className='c-top-nav__logo c-top-nav__link'
      to='/'
      role='button'
      aria-label='Home'>
      <Logo />
    </IndexLink>
    <div className='c-top-nav__block' />
  </nav>
);

export default TopNav;
