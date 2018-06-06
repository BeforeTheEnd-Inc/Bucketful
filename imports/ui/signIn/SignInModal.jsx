import React, {Component} from 'react';
import {Modal, FormGroup, ControlLabel, FormControl, NavItem, Button} from "react-bootstrap";

export default class SignIn extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);

        this.state = {
            show: false
        };
    }

    formStyle = {
        textAlign: "left",
        width: "100%"
    };

    submitButtonStyle = {
        backgroundColor: "#3B7CB3",
        borderColor: "#3B7CB3",
        color: "white"
    };

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmitClick() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        Meteor.loginWithPassword(email, password);

        this.handleClose();
    }

    render() {
        return (
            <NavItem>

                <div onClick={this.handleShow}>
                    Sign In
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="signIn" onSubmit={this.handleSubmit} style={this.formStyle}>

                            {/* Email */}

                            <FormGroup controlId="formControlsEmail">
                                <ControlLabel>Email</ControlLabel>
                                <br/>
                                <FormControl type="email" id="email" placeholder="Email"/>
                            </FormGroup>

                            {/* Password */}

                            <FormGroup controlId="formControlsPassword">
                                <ControlLabel>Password</ControlLabel>
                                <br/>
                                <FormControl type="password" id="password" placeholder="Password"/>
                            </FormGroup>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>

                        {/* Submit */}

                        <Button style={this.submitButtonStyle}
                                onClick={this.handleSubmitClick}>Submit</Button>

                    </Modal.Footer>
                </Modal>

            </NavItem>
        );
    }

}