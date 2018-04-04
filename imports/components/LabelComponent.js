import React, {Component} from 'react';

export default class Label extends Component {
    constructor(props) {
        super(props);

        this.props.type = props.type;
        this.props.label = props.label;
        this.props.className = props.className;
    }

    render() {
        switch(this.props.type) {
            case '1':
                return (<h1 className={this.props.className}>{this.props.label}</h1>);
            case '2':
                return (<h2 className={this.props.className}>{this.props.label}</h2>);
            case '3':
                return (<h3 className={this.props.className}>{this.props.label}</h3>);
            case '4':
                return (<h4 className={this.props.className}>{this.props.label}</h4>);
            case '5':
                return (<h5 className={this.props.className}>{this.props.label}</h5>);
            case '6':
                return (<h6 className={this.props.className}>{this.props.label}</h6>);
            default:
                return null;
        }
    }
}
