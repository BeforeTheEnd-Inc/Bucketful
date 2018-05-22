import React, {Component} from 'react';
import {Modal, FormGroup, ControlLabel, FormControl, NavItem, Button} from "react-bootstrap";

export default class SignIn extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
        let input = $('#submitInput')[0];
        input.click();
    }

    handleSubmit(event) {
        let email = event.target.email.value;
        let password = event.target.password.value;

        // Load email query from mongo


        // Validate password


        // If everything looks good,
        // Create session


        console.log(event)
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
                                <FormControl type="email" name="email" placeholder="Email"/>
                            </FormGroup>

                            {/* Password */}

                            <FormGroup controlId="formControlsPassword">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" name="password" placeholder="Password"/>
                            </FormGroup>

                            {/* Submit input */}

                            <Button id="submitInput" type="submit" style={{display: "none"}}/>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>

                        {/* Submit */}

                        <Button type="submit" style={this.submitButtonStyle}
                                onClick={this.handleSubmitClick}>Submit</Button>

                    </Modal.Footer>
                </Modal>

            </NavItem>
        );
    }

}