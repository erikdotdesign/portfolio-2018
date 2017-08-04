import React from 'react';
import PropTypes from 'prop-types';
import WorkImage from './WorkImage';

class ImageList extends React.Component {
  render () {
    return (
      <div className="section single">
        {
          this.props.images.map((image, index) =>
            <WorkImage url={image.url} key={index} index={index} alt={image.alt} hex={this.props.hex} />
          )
        }
      </div>
    );
  }
}

ImageList.propTypes = {

};

export default ImageList;
