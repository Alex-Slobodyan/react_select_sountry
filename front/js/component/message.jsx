import React from 'react';
import { Message } from 'semantic-ui-react';

export default class Messages extends React.Component {
  render () {
    return (
      <Message
        success={this.props.success}
        error={this.props.error}
        header={this.props.header}
        content={this.props.content}
      />
    )
  }

}
