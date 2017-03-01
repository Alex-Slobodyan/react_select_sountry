import React from 'react';
import { Menu } from 'semantic-ui-react';
import {  Link,IndexLink } from 'react-router'

export default class MenuExampleBasic extends React.Component {
  render() {
    return (
      <div>
        <Menu className="my_menu">
          <IndexLink to="/"  activeClassName="my_menu__item--active" className="my_menu__item">
            Country
          </IndexLink>
          <Link to="/varify"  activeClassName="my_menu__item--active" className="my_menu__item">
              Varify Email
          </Link>
        </Menu>
      </div>
    )
  }
}
