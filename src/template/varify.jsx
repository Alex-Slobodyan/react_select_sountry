import React from 'react';
import { Header,Icon,Form,Message,Button} from 'semantic-ui-react';

let request_ansver = {};
export default class Varify extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
            loader: false,
            status_success: false,
            status_error: false,
            status_warning: false
        };
        this.getVarify = this.getVarify.bind(this)
    };
  
  getVarify(e) {
    e.preventDefault();
    const val_input_mail = document.querySelector('.input_email').value;

    const scope = this
    if (val_input_mail === '') {
      scope.setState({
        status_warning: true,
        status_success: false,
        status_error: false
      })
    } else {
      let request = new XMLHttpRequest();
      request.open('GET', 'https://apilayer.net/api/check?access_key=22e6af1fbdfc0a929d9895c3aa8015d1&email='+val_input_mail+'', true);
      request.send();
      
      scope.setState({
        loader: true,
        status_warning: false,
        status_success: false,
        status_error: false
      })

      request.onload = function() {
          if (request.status < 400) {
              request_ansver = JSON.parse(request.response) ;
              
              if (request_ansver.smtp_check) {
                console.log('request_answer1',request_ansver);
                scope.setState({
                  status_success: true
                })
              }else {
                console.log('request_answer2',request_ansver.smtp_check);
                scope.setState({
                  status_success: false,
                  status_error: true
                })
              }
          } 
          scope.setState({
                loader: false
          })
      };
    }
  }

  render () {
    return (
        <Form loading={this.state.loader ? true : false} success={this.state.status_success ? true : false} error={this.state.status_error ? true : false} warning={this.state.status_warning ? true : false}>
          <Header as='h2'>Verify email address</Header>
          <Form.Input iconPosition='left' placeholder='Format: "name@domain.xxx"'>
              <Icon name='at' />
              <input className="input_email" />
          </Form.Input>
          {this.state.status_warning ? <Message
              warning
              header='Warning'
              content="Enter Mail"
            /> : null }
          {this.state.status_success ? 
            <Message
              success={this.state.status_success ? true : false}
              header='Completed'
              content="Verify email address is OK"
            /> : <Message
              error
              header='Completed'
              content="Verify email address is NO OK =("
            />
          }
          <Button onClick={this.getVarify}>Submit</Button>
        </Form>
    )
  }
}
