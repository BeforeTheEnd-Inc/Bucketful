import React, { Component } from 'react';

export default class RadioButton extends Component {
    constructor(props) {
        super(props);

        this.onChange = props.onChange;
        this.type = props.type;

        this.id = props.id;

        this.label = props.label;
    }

    render() {

        return (
            <div>
                <input
                    type={this.type}
                    id={this.id}
                    onChange={this.onChange}
                />
                <label
                    htmlFor={this.id}
                    style={{
                        fontSize: '12px',
                        padding: '4px'
                    }}>
                    {this.label}
                </label>
            </div>
        )
    }
}