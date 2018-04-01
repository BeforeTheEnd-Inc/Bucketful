import React, {Component} from 'react';

import '../components/TextFieldStyle.css';

export default class TextField extends Component {
    constructor(id, type, placeholder) {
        super();
        this.id = id;
        this.type = type;
        this.placeholder = placeholder;
    }

    render() {
        return (
            <div>
                <input id={this.id} type={this.type} placeholder={this.placeholder}/>
            </div>
        );
    }
}