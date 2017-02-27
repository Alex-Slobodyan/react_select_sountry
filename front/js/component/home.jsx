import 'semantic-ui-css/semantic.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Input,List,Grid,Divider,Header } from 'semantic-ui-react';
import country from '../api/country.json';
import debounce from 'throttle-debounce/debounce';

import DropdownList from './dropdownList.jsx';
import InputSearch from './inputSearch.jsx';
import InfoList from './infoList.jsx';

const   countries       = country.countries.country,
        countryesKey    = Object.keys( countries[0]);

export default class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownCountry:  countries,
            displayDropdownCountry: false,
            selectCountry: ''
        };
        this.serch = this.serch.bind(this)
        this.click = this.click.bind(this)
    };
    serch(e) {
        e.persist();
        debounce(1000, () => {
            let searchEvent = e.target.value.toLowerCase();
            if(searchEvent.length < 1 ){
                this.setState({
                    displayDropdownCountry: false
                })
            } else {
                let dropdownCountry = countries.filter((el)=>{
                    let searchValue = el.countryName;
                    return searchValue.indexOf(searchEvent) !== -1;
                });
                this.setState({
                    dropdownCountry: dropdownCountry,
                    displayDropdownCountry: true
                })
            }
        })()
    };
    click(e) {
        let getDataCountry = e.target.getAttribute('data-country')
        let selectCountry = countries.filter((el)=>{
            let searchValue = el.countryCode;
            return searchValue.indexOf(getDataCountry) !== -1;
        });
        this.setState({
            selectCountry: selectCountry[0],
        })
    };
    render () {
        return (
            <div>
                <Header as='h2'>Countries</Header>
                <Grid textAlign='left' columns={2}>
                    <Grid.Column>
                        <InputSearch serch={this.serch}/>
                        {
                            this.state.displayDropdownCountry ? this.state.dropdownCountry.map((el) => {
                                return <DropdownList
                                    countryCode={el.countryCode}
                                    countryName={el.countryName}
                                    click={this.click}
                                    key={el.countryCode}
                                />
                            }) : null
                        }
                    </Grid.Column>
                    <Grid.Column>
                        <div className="fixed_right">
                            {
                                countryesKey.map((index)=> {
                                    return <InfoList 
                                        title={index}
                                        info={this.state.selectCountry[index]}
                                        key={index}
                                    />
                                })
                            }
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
