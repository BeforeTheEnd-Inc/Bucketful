import React, {Component} from 'react';
import {Button, ControlLabel, FormGroup, Form, FormControl, Modal} from 'react-bootstrap';


export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            show: false
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    formStyle = {
        textAlign: 'left'
    };

    submitButtonStyle = {
        backgroundColor: '#3B7CB3',
        borderColor: '#3B7CB3',
        color: 'white'
    };

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const username = this.state.email;
        console.log(username);
        const password = this.state.password;
        console.log(password);

        Meteor.loginWithPassword(username, password, (err) => {
            if (err) {
                this.setState({error: err.reason});
            } else {
                this.setState({show: false});
                this.props.history.push('/');
            }
        });
    }

    render() {
        return (
            <div>
                <div onClick={this.handleShow}>
                    Sign In
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Form id='signIn' onSubmit={this.handleSubmit} style={this.formStyle}>
                        <FormGroup>
                            <Modal.Header closeButton>
                                <Modal.Title>Sign In</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>

                                {/* Email */}
                                <FormGroup>
                                    <ControlLabel>Email</ControlLabel>
                                    <br/>
                                    <FormControl type='email' name='email' id='email' placeholder='Email' onChange={this.handleChange}/>
                                </FormGroup>

                                {/* Password */}
                                <FormGroup>
                                    <ControlLabel>Password</ControlLabel>
                                    <br/>
                                    <FormControl type='password' name='password' id='password' placeholder='Password' onChange={this.handleChange}/>
                                </FormGroup>

                                {/* Submit input */}
                                {/*<input id='submitInput' type='submit' style={{display: 'none'}}/>*/}

                            </Modal.Body>

                            <Modal.Footer>

                                {/* Submit */}
                                <FormGroup>
                                    <Button type='submit' name='submit' style={this.submitButtonStyle}>Submit</Button>
                                </FormGroup>
                            </Modal.Footer>
                        </FormGroup>
                    </Form>
                </Modal>
            </div>
        );
    }
}
