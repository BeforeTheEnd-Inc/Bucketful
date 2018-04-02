import React, {Component} from 'react';

import '../ui/css/TextFieldStyleSheet.css';

export default class TextField extends Component {
    constructor(props) {
        super(props);
        this.props.id = props.id;
        this.props.type = props.type;
        this.props.placeholder = props.placeholder;
    }

    render() {
        return (
            <div>
                <input id={this.props.id} type={this.props.type} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}