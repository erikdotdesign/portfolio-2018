import React from 'react';
import PropTypes from 'prop-types';
import WorkImage from './WorkImage';

class WorkImages extends React.Component {
  render () {
    return (
      <div className="section single">
        {
          this.props.images.map((image, index) =>
            <WorkImage url={image.url} key={index} alt={image.alt} hex={this.props.hex} />
          )
        }
      </div>
    );
  }
}

WorkImages.propTypes = {

};

export default WorkImages;
