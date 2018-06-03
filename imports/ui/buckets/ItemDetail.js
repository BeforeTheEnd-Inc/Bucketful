import React, { Component } from "react";

import Label from '../../components/LabelComponent';
import {Button, ButtonToolbar, Overlay, Popover} from "react-bootstrap";
//import "../css/AddBucketStyleSheet.css";

export default class ItemDetail extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false
        };

        this.button = props.button;
        this.name = props.name;
        this.description = props.description;

        this.handleClick = this.handleClick.bind(this);
    }

    formStyle = {
        textAlign: "left"
    };

    handleClick = (e) => {
        this.setState({ target: e.target, show: !this.state.show });
    };

    render() {
        return (
            <ButtonToolbar>
                    <Button onClick={this.handleClick}>Holy guacamole!</Button>

                <Overlay
                    show={this.state.show}
                    target={this.state.target}
                    placement="right"
                    container={this}
                    containerPadding={20}
                >
                    <Popover id="popover-contained" title="Popover right">
                        <section>
                            <Label
                                className='profile-title'
                                type='5'
                                label='Item name:'
                            />
                            <p>{this.name}</p>
                            <Label
                                className='profile-title'
                                type='5'
                                label='Item description:'
                            />
                            <p>{this.description}</p>
                        </section>
                    </Popover>
                </Overlay>
            </ButtonToolbar>
        );
    }
}



