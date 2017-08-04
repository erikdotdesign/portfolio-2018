import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import Phone from '../../../components/Phone';
import HalftoneCharacter from '../../../components/HalftoneCharacter';

class WorkBrief extends React.Component {
  render () {
    return (
      <div className="section c-work-brief">
        <div className='columns-flush'>
          <div className="column column--sidebar">
            <HalftoneCharacter className="c-work-item__index" character={this.props.title.slice(0,2)} />
            <Phone image={this.props.mobile} />
          </div>
          <div className="column column--main c-work-brief__text">
            {
              this.props.brief.map((paragraph, index) =>
                <BlockReveal key={index} blockColor={this.props.hex} inline={false} delay={0} duration={0.5} direction={index % 2 == 0 ? "leftRight" : "rightLeft"}>
                  <p>
                    {paragraph}
                  </p>
                </BlockReveal>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

WorkBrief.propTypes = {

};

export default WorkBrief;
