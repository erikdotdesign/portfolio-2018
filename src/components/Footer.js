import React from 'react';
import OutlineButton from './OutlineButton';

const Footer = () => (
  <footer className='c-footer section' role='contentinfo'>
    <div className='columns-flush'>
      <div className='column column--duo'>
        <p>&copy; Erik Myers Design 2018</p>
        <a
          className='c-footer__link'
          title='Github Repo'
          target='_blank'
          href='https://github.com/endswithak/portfolio-2018'>
          Created with React, Redux, GSAP
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
