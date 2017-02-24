import React from 'react';
import { Form,Input,Header } from 'semantic-ui-react';

export default class Varify extends React.Component {
  render () {
    return (
      <Form>
          <Header as='h2'>Verify email address</Header>
          <Form.Field>
              <input placeholder='Enter email' />
          </Form.Field>
      </Form>
    )
  }
}
