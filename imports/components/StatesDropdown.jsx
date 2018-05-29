import React, {Component} from 'react';
import {ButtonToolbar, FormControl} from 'react-bootstrap';
import {States} from '../api/states';


class StateCollection extends Component {
    render() {
        const collection = States.find().fetch();
        return (
            collection.map(function (item) {
                return (
                    <option value={item.code} key={item.code}>{item.name}</option>
                )
            })
        );
    }
}

class StatesDropdown extends Component {
    render() {
        return (
            <ButtonToolbar>
                <FormControl componentClass='select' name='states' key='states' id='states' placeholder='States'>
                    <option value=''>States</option>
                    <StateCollection/>
                </FormControl>
            </ButtonToolbar>
        );
    }
}

export default StatesDropdown;
