import React from 'react';
import { Menu,Flag } from 'semantic-ui-react';

export default class DropdownList extends React.Component {
    render () {
        return (
            <Menu fluid vertical>
                <Menu.Item data-country={this.props.countryCode} key={this.props.countryCode} onClick={this.props.click}>
                    <Flag name={this.props.countryCode.toLowerCase()} />{this.props.countryName}
                </Menu.Item>
            </Menu>
        )
    }
};
