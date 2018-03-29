import React, {Component} from 'react';

export default class ComboBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <label
                    //the label cannot be null or an empty string
                    className=""
                    label=""
                />
                <input

                //className and placeholder text will should be standard everywhere except for the registration form
                    className={}
                    placeholder={}
                    name='searchName'
                    type='search'
                />
                <select>
                    <!--option should be dynamically rendered based on the stored list value
                    if the list isn't empty then automatically select the first item in the list-->
                    <option value={}>value</option>
                </select>
            </div>
        );


    }
}