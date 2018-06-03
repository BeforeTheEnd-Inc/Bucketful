import React, {Component} from 'react';
import {Modal, FormGroup, ControlLabel, FormControl, NavItem, Button} from "react-bootstrap";

export default class SignIn extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);

        this.state = {
            show: false
        };
    }

    formStyle = {
        textAlign: "left"
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
        $('#submitInput')[0].click();
    }

    handleSubmit(event) {
        if (event === undefined ) { return }

        let email = event.target.email.value;
        let password = event.target.password.value;

        // Create session
        Meteor.loginWithPassword(email, password);

        this.props.history.push('/profile');
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
                                <FormControl type="email" name="email" placeholder="Email"/>
                            </FormGroup>

                            {/* Password */}

                            <FormGroup controlId="formControlsPassword">
                                <ControlLabel>Password</ControlLabel>
                                <br/>
                                <FormControl type="password" name="password" placeholder="Password"/>
                            </FormGroup>

                            {/* Submit input */}

                            <input id="submitInput" type="submit" style={{display: "none"}}/>

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