import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class WorkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  toggleHover = () => {
    this.setState({hover: !this.state.hover});
  }
  hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
  }
  render () {
    let linkStyle = this.state.hover ? {background: `rgba(${this.hexToRgb(this.props.hex).r}, ${this.hexToRgb(this.props.hex).g}, ${this.hexToRgb(this.props.hex).b}, 0.5)`} : {background: 'none'};
    return (
      <Link style={linkStyle}
            className="button button--outline"
            to={`/work/${this.props.id}`}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}>
            Read more
      </Link>
    );
  }
}

WorkButton.propTypes = {

};

export default WorkButton;
