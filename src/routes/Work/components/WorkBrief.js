import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import Phone from '../../../components/Phone';

class WorkBrief extends React.Component {
  render () {
    return (
      <div className="section c-work-brief">
        <div className='columns-flush'>
          <div className="column column--main">
            <h3>Brief</h3>
            {
              this.props.brief.map((paragraph, index) =>
                <BlockReveal key={index} inline={false} delay={0} duration={0.5} textShift direction={index % 2 == 0 ? "leftRight" : "rightLeft"}>
                  <p>
                    {paragraph}
                  </p>
                </BlockReveal>
              )
            }
          </div>
          <div className="column column--sidebar">
            <Phone img="http://via.placeholder.com/531x945" />
          </div>
        </div>
      </div>
    );
  }
}

WorkBrief.propTypes = {

};

export default WorkBrief;
