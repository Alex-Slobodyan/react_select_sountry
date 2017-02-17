import React from 'react';
import { Step } from 'semantic-ui-react';

export default class InfoList extends React.Component {
  render () {
    return (
      <div>
          <Step.Group>
              <Step active>
                  <Step.Content >
                      <Step.Title>{this.props.title}</Step.Title>
                  </Step.Content>
              </Step>
              <Step active description={this.props.info} />
          </Step.Group>
          <br />
      </div>
    )
  }
}
