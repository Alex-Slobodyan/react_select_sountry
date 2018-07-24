import React from 'react';
import { Form, Input, Message, Modal, Button } from 'semantic-ui-react';
import {api} from '../api/';
import DropdownList from './dropdownList.jsx';
import debounce from 'lodash/debounce';

export default class InputSearch extends React.Component {
  state = {
    dropdownCountry:  '',
    statusWarning: false,
    modalOpen: false,
    modalContent: ''
  };

  componentWillMount() {
    this.inputCallback = debounce(async e => {
        try {
            const searchEvent = e.target.value;
            const country = await api.fetchCountryName(searchEvent);
            this.setState({
                dropdownCountry: country,
                statusWarning: false
            })
        } catch ({message}) {
            this.setState({
                dropdownCountry: '',
                statusWarning: true
            });
        }
        
    }, 500);
  };

  _inputCallbackDelayed = e => {
      e.persist();
      this.inputCallback(e);
  };

  _click = el => () => {
    console.log("el", el)
    this.setState({ 
      modalOpen: true,
      modalContent: el.name
    })
  };

  _close = () => this.setState({ modalOpen: false }) 

  render () {
    const {dropdownCountry, statusWarning, modalOpen, modalContent} = this.state;
    return (

      <div>
        <Form>
            <Form.Field>
                <input placeholder='Search country...' onChange={this._inputCallbackDelayed} />
                {
                  statusWarning ? 
                    <Message negative>
                      <Message.Header>Sorry ¯\_(ツ)_/¯</Message.Header>
                    </Message> : null 
                }
                {
                  dropdownCountry ? dropdownCountry.map((el) => {
                      return <DropdownList
                          countryCode={el.alpha2Code}
                          countryFlagUrl={el.flag}
                          countryName={el.name}
                          click={this._click(el)}
                          key={el.alpha2Code}
                      />
                  }) : null
                }
                
            </Form.Field>
        </Form>
        <Modal open={modalOpen} onClose={this._close}>
          <Modal.Header>{modalContent}</Modal.Header>
        </Modal>
      </div>
    )
  }
}
