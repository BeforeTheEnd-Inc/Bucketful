import React, { Component } from "react";

import Menu from "../../components/MenuComponent";
import Label from '../../components/LabelComponent';
import "../css/AddBucketStyleSheet.css";

export default class BucketDetail extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {value: ''};
        this.name='Skydiving';
        this.description='I want to go skydiving in Hawaii with my best friend';
    }

    formStyle = {
        textAlign: "left"
    };

    render() {

        return (
            <div>
                <Menu/>
                <section>
                    <Label
                        className='profile-title'
                        type='3'
                        label='Bucket name:'
                    />
                    <p>{this.name}</p>
                    <Label
                        className='profile-title'
                        type='3'
                        label='Bucket description:'
                    />
                    <p>{this.description}</p>
                </section>
            </div>
        );
    }
}