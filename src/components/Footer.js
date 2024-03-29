import React from 'react';

const Footer = () => (
  <footer className='c-footer section' role='contentinfo'>
    <div className='columns-flush'>
      <div className='column column--duo'>
        <p>Erik Myers Design 2019</p>
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
