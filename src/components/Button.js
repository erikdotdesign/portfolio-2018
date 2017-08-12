import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Button extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  }
  hexToRgba = (hex, alpha) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return `rgba(${parseInt(result[1], 16)},
                 ${parseInt(result[2], 16)},
                 ${parseInt(result[3], 16)},
                 ${alpha})`;
  }
  render () {
    let linkStyle = this.state.hover
                    ? { background: this.hexToRgba(this.props.hex, 0.2) }
                    : { background: 'none' };
    return (
      this.props.router
      ? <Link
        style={linkStyle}
        className='c-button c-button--outline'
        role='button'
        aria-label={this.props.text}
        to={this.props.link}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}>
        {this.props.text}
      </Link>
      : this.props.link
      ? <a
        style={linkStyle}
        className='c-button c-button--outline'
        role='button'
        href={this.props.link}
        aria-label={this.props.text}
        target='_blank'
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}>
        {this.props.text}
      </a>
      : <button
        style={linkStyle}
        className='c-button c-button--outline'
        role='button'
        aria-label={this.props.text}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}>
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
