import React, {Component} from 'react';
import {ButtonToolbar, FormControl} from 'react-bootstrap';
import {Countries} from '../api/countries';


class CountryCollection extends Component {
    render() {
        const collection = Countries.find().fetch();
        return (
            collection.map(function (item) {
                return (
                    <option value={item.code} key={item.code}>{item.name}</option>
                )
            })
        );
    }
}

class CountriesDropdown extends Component {
    render() {
        return (
            <ButtonToolbar>
                <FormControl componentClass='select' name='countries' key='countries' id='countries' placeholder='Countries'>
                    <option value=''>Countries</option>
                    <CountryCollection/>
                </FormControl>
            </ButtonToolbar>
        );
    }
}

export default CountriesDropdown;
