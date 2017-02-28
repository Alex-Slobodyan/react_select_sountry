import React from 'react';
import { Form,Input } from 'semantic-ui-react';

export default class InputSearch extends React.Component {
  render () {
    return (
      <Form>
          <Form.Field>
              <input placeholder='Search country...' onChange={this.props.search} />
          </Form.Field>
      </Form>
    )
  }

}
