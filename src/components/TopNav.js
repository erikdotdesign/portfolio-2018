import React from 'react';
import { IndexLink } from 'react-router';

export const TopNav = () => (
  <nav className='c-top-nav' role='navigation'>
    <div className='c-top-nav__content'>
      <div className='c-top-nav__left'>
        <IndexLink
          className='c-top-nav__logo'
          to='/'
          role='button'
          aria-label='Home'>
          erik.design
        </IndexLink>
      </div>
      <div className='c-top-nav__right'>
        <div className='button-group-flush'>
          <a
            href='https://www.linkedin.com/in/erikmyers'
            role='button'
            aria-label='My LinkedIn'
            target='_blank'
            className='c-button'>
            LinkedIn
          </a>
          <a
            href='mailto:erik@erik.design'
            role='button'
            aria-label='Email me'
            className='c-button'>
            Email
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default TopNav;
