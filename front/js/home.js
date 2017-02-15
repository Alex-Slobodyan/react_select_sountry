
import '../css/index.css';
import 'semantic-ui-css/semantic.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Input,List, Image,Flag,Grid,Menu,Form,Divider,Table,Step,Icon } from 'semantic-ui-react';
import country from './country.json';

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
    }
    render () {
        return (
            <Grid textAlign='left' columns={2}>
                <Grid.Column>
                    <Form>
                        <Form.Field>
                            <input placeholder='Search country...' onChange={this.serch} />
                        </Form.Field>
                    </Form>
                        {
                            this.state.displayDropdownCountry ? this.state.dropdownCountry.map((el) =>
                                <Menu fluid vertical>
                                <Menu.Item data-country={el.countryCode} key={el.countryCode} onClick={this.click}>
                                    <Flag name={el.countryCode.toLowerCase()} />{el.countryName}
                                </Menu.Item>
                                </Menu>
                            ) : null
                        }
                </Grid.Column>
                <Grid.Column>
                    <div className="fixed_right">
                        {
                            countryesKey.map((index)=> 
                                <div>
                                    <Step.Group>
                                        <Step active>
                                            <Step.Content>
                                                <Step.Title>{index}</Step.Title>
                                            </Step.Content>
                                        </Step>
                                        <Step active description={this.state.selectCountry[index]} />
                                    </Step.Group>
                                    <br />
                                </div>
                            )
                        }
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
