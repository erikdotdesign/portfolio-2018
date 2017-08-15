import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Button extends React.Component {
  render () {
    return (
      this.props.router
      ? <Link
        className='c-button c-button--outline'
        role='button'
        aria-label={this.props.text}
        to={this.props.link}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onFocus={this.toggleFocus}
        onBlur={this.toggleFocus}>
        {this.props.text}
      </Link>
      : this.props.link
      ? <a
        className='c-button c-button--outline'
        role='button'
        href={this.props.link}
        aria-label={this.props.text}
        target='_blank'
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onFocus={this.toggleFocus}
        onBlur={this.toggleFocus}>
        {this.props.text}
      </a>
      : <button
        className='c-button c-button--outline'
        role='button'
        aria-label={this.props.text}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onFocus={this.toggleFocus}
        onBlur={this.toggleFocus}>
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  router: PropTypes.bool,
  text: PropTypes.string,
  link: PropTypes.string,
  hex: PropTypes.string
};

export default Button;
