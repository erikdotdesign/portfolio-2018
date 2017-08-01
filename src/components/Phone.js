import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from './BlockReveal';

class Phone extends React.Component {
  render () {
    return (
      <div className="c-phone-wrapper">
        <BlockReveal inline={false} delay={0} duration={0.5} direction="topBottom">
          <div className="c-phone">
            <div className="c-phone__layer">
              <div className="c-phone__screen">
                <div className="c-phone__screen-aspect">
                  <img src={this.props.img} className="c-phone__screen-img" />
                </div>
              </div>
            </div>
            <div className="c-phone__layer c-phone__outline"></div>
            <div className="c-phone__layer"></div>
            <div className="c-phone__layer"></div>
          </div>
        </BlockReveal>
      </div>
    );
  }
}

Phone.propTypes = {

};

export default Phone;
