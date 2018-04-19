import React, {Component} from 'react';
import Label from './LabelComponent';

export default class Link extends Component {
    constructor(props) {
        super(props);

        this.props.className = props.className;
        this.props.type = props.type;
        this.props.label = props.label;
        this.props.route = props.route;
        this.props.msg = props.msg;
    }

    handleClick = (e) => {
        e.preventDefault();
        window.alert(this.props.msg);
    };

    render() {
        return (
            <a href='#'
               onClick={this.handleClick}
               target={this.props.route}
            >
                <Label
                    className={this.props.className}
                    type={this.props.type}
                    label={this.props.label}
                />
            </a>
        );
    }
}