import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default class Btn extends React.Component {
  render () {
    return (
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name='right arrow' />
        </Button.Content>
      </Button>
    )
  }
}
