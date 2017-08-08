import React from 'react';
import PropTypes from 'prop-types';
import WorkImage from './WorkImage';
import WorkGif from './WorkGif';

class ImageList extends React.Component {
  render () {
    return (
      <div className="section single">
        {
          this.props.images.map((image, index) =>
            typeof(image.cover) !== 'undefined'
            ?
            <WorkGif gif={image} key={index} index={index} hex={this.props.hex} />
            :
            <WorkImage image={image} key={index} index={index} hex={this.props.hex} />
          )
        }
      </div>
    );
  }
}

ImageList.propTypes = {

};

export default ImageList;
