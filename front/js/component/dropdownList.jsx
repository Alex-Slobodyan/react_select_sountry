import React from 'react';
import { Menu, Image } from 'semantic-ui-react';

export default class DropdownList extends React.Component {
    render () {
        return (
            <Menu fluid vertical>
                <Menu.Item data-country={this.props.countryCode}  onClick={this.props.click}>
                    <Image src={this.props.countryFlagUrl} avatar /> 
                    <span> {this.props.countryName}</span>
                </Menu.Item>
            </Menu>
        )
    }
};
