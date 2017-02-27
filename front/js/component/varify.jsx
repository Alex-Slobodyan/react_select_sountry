import React from 'react';
import { Input,Header,Icon,Form,Message,Button} from 'semantic-ui-react';

export default class Varify extends React.Component {
  render () {
    return (
      
      <Form success>
        <Form.Field>
          <Header as='h2'>Verify email address</Header>
          <Input iconPosition='left' placeholder='Format: "name@domain.xxx"'>
              <Icon name='at' />
              <input />
          </Input>
          <Message
            success
            header='Form Completed'
            content="You're all signed up for the newsletter"
          />
          <Button>Submit</Button>
        </Form.Field>
      </Form>
    )
  }
}
