import React from 'react';
import PropTypes from 'prop-types';

class Tablet extends React.Component {
  render () {
    return (
      <div className="c-tablet-wrapper">
        <div className="c-tablet">
          <div className="c-tablet__layer">
            <div className="c-tablet__screen">
              <div className="c-tablet__screen-aspect">
                <img src={this.props.img} className="c-tablet__screen-img" />
              </div>
            </div>
          </div>
          <div className="c-tablet__layer c-tablet__outline"></div>
          <div className="c-tablet__layer"></div>
          <div className="c-tablet__layer"></div>
        </div>
      </div>
    );
  }
}

Tablet.propTypes = {

};

export default Tablet;
