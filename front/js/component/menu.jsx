import React from 'react';
import { Menu ,Container } from 'semantic-ui-react';
import {  Link } from 'react-router'

export default class MenuExampleBasic extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
           activeItem: 'country',
        }
        this.handleItemClick = this.handleItemClick.bind(this)
    };

  handleItemClick (e, { name }) {
    this.setState({ 
      activeItem: name,
      activeMenu: false
    })

  } 

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu className="my_menu">
          <Link to="/">
            <Menu.Item
                name='country'
                active={activeItem === 'country'}
                onClick={this.handleItemClick}
              >
              Country
            </Menu.Item>
          </Link>
          <Link to="/varify">
            <Menu.Item
                  name='varifyEmail'
                  active={activeItem === 'varifyEmail'}
                  onClick={this.handleItemClick}
              >
              Varify Email
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    )
  }
}
