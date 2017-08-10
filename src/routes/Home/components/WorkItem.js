import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import Tablet from '../../../components/Tablet';
import VisibilitySensor from 'react-visibility-sensor';
import Button from '../../../components/Button';

class WorkItem extends React.Component {
  render () {
    return (
      <VisibilitySensor partialVisibility={true} delayedCall={true}>
        {({isVisible}) =>
          <div className="section c-work-item">
            <div className="columns-flush">
              <div className="column column--duo column--mg-b">
                <HalftoneCharacter className="c-work-item__index" character={this.props.index + 1} />
                <BlockReveal inline={false} forcePlay={isVisible} blockColor={this.props.work.hex} delay={0} duration={0.5} direction={this.props.index % 2 == 0 ? "leftRight" : "rightLeft"}>
                  <h1>{this.props.work.name}</h1>
                </BlockReveal>
                <BlockReveal inline={false} forcePlay={isVisible} blockColor={this.props.work.hex} delay={0.1} duration={0.5} direction={this.props.index % 2 == 0 ? "rightLeft" : "leftRight"}>
                  <ul className="c-work-item__tag-list">
                    {
                      this.props.work.tags.map((tag, index) =>
                        <li className={"c-work-item__tag"} key={index}>
                          {
                            index == this.props.work.tags.length - 1
                            ?
                            tag
                            :
                            `${tag},\u00A0`
                          }
                        </li>
                      )
                    }
                  </ul>
                </BlockReveal>
                <BlockReveal inline={false} forcePlay={isVisible} blockColor={this.props.work.hex} delay={0.2} duration={0.5} direction={this.props.index % 2 == 0 ? "leftRight" : "rightLeft"}>
                  <p>{this.props.work.snippet}</p>
                </BlockReveal>
                <div className="button-outline-align">
                  <BlockReveal inline={false} forcePlay={isVisible} blockColor={this.props.work.hex} delay={0.4} duration={0.5} direction={this.props.index % 2 == 0 ? "rightLeft" : "leftRight"}>
                    <Button text="Read more" router link={`/work/${this.props.work.id}`} hex={this.props.work.hex} />
                  </BlockReveal>
                </div>
              </div>
              <div className="column column--duo">
                <HalftoneCharacter className="c-work-item__display-name" character={this.props.work.name.slice(0, 2)} />
                <Tablet className="c-tablet__warp--right" image={this.props.work.image} forcePlay={isVisible} index={this.props.index} />
              </div>
            </div>
          </div>
        }
      </VisibilitySensor>
    );
  }
}

WorkItem.propTypes = {

};

export default WorkItem;
