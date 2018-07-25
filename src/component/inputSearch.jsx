import React from 'react';
import { Input, Message, Modal, List, Header, Image} from 'semantic-ui-react';
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
    this.setState({ 
      modalOpen: true,
      modalContent: el
    })
  };

  _close = () => this.setState({ modalOpen: false }) 

  render () {
    const {dropdownCountry, statusWarning, modalOpen, modalContent} = this.state;
    return (
      <div>
                <Input fluid icon='search' placeholder='Search country...' onChange={this._inputCallbackDelayed} />
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
        <Modal open={modalOpen} onClose={this._close}>
          <Header>
            <Image src={modalContent.flag} /> {modalContent.name}
          </Header>
          <Modal.Content>
            <List bulleted>
              <List.Item><b>NativeName:</b> {modalContent.nativeName}</List.Item>
              <List.Item><b>Region:</b> {modalContent.region}</List.Item>
              <List.Item><b>Population:</b> {modalContent.population}</List.Item>
              <List.Item><b>Timezones:</b> {modalContent.timezones}</List.Item>
              <List.Item><b>Domain:</b> {modalContent.topLevelDomain}</List.Item>
              <List.Item><b>Code:</b> {modalContent.alpha2Code}</List.Item>
            </List>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
