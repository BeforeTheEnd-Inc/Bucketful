import React, {Component} from 'react';
import Label from './LabelComponent';

export default class Link extends Component {
    constructor(props) {
        super(props);

        this.props.className = props.className;
        this.props.type = props.type;
        this.props.label = props.label;
        this.props.route = props.route;
    }

    handleClick = (e) => {
        e.preventDefault();
        window.alert("Redirecting to Bucket Editor");
    };

    render() {
        return (
            <a href='#'
               onClick={this.handleClick}
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