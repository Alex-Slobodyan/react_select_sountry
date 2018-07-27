import React from 'react';
import { Menu } from 'semantic-ui-react';
import {  Link,IndexLink } from 'react-router'

export default class MenuExampleBasic extends React.Component {
  render() {
    return (
      <div>
        <Menu className="my_menu">
          <Menu.Item>
            <IndexLink to={`${process.env.PUBLIC_URL}/`} activeClassName="my_menu__item--active" className="my_menu__item">
              Country
            </IndexLink>
          </Menu.Item>
          <Menu.Item > 
            <Link to={`${process.env.PUBLIC_URL}/varify`}  activeClassName="my_menu__item--active" className="my_menu__item">
                Varify Email
            </Link>
          </Menu.Item >
        </Menu>
      </div>
    )
  }
}
