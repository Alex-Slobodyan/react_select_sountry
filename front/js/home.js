
import '../css/index.css';
import 'semantic-ui-css/semantic.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Input,List,Grid,Divider,Table } from 'semantic-ui-react';
import country from './country.json';
import debounce from 'throttle-debounce/debounce';

import DropdownList from './component/dropdownList.jsx';
import InputSearch from './component/inputSearch.jsx';
import InfoList from './component/infoList.jsx';
import Btn from './component/btn.jsx';

const   countries       = country.countries.country,
        countryesKey    = Object.keys( countries[0]);

class MyList extends React.Component {
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
            let serchEvent = e.target.value.toLowerCase();
            if(serchEvent.length < 1 ){
                this.setState({
                    displayDropdownCountry: false
                })
            } else {
                let dropdownCountry = countries.filter((el)=>{
                    let serchValue = el.countryName.toLowerCase();
                    return serchValue.indexOf(serchEvent) !== -1;
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
            let serchValue = el.countryCode;
            return serchValue.indexOf(getDataCountry) !== -1;
        });
        this.setState({
            selectCountry: selectCountry[0],
        })
    };
    render () {
        return (
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
                        <Btn />
                    </div>
                    
                </Grid.Column>
            </Grid>
        )
    }
}

ReactDOM.render(
    <MyList />,
    document.getElementById('root')
);
