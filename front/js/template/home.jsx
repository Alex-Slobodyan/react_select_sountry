import React, {Component} from 'react';
import {Grid,Header } from 'semantic-ui-react';

import InputSearch from '../component/inputSearch.jsx';

export default class MyList extends React.Component {
    render () {
        return (
            <div>
                <Header as='h2'>Countries</Header>
                <Grid textAlign='left' columns={2}>
                    <Grid.Column>
                        <InputSearch />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
