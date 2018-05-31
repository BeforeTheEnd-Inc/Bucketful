import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Session} from 'meteor/session';
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Button, ControlLabel, Form, FormControl, FormGroup, Radio} from 'react-bootstrap';
import {Profiles} from '../../api/profiles';
import Menu from '../../components/MenuComponent';
import Footer from '../../components/FooterComponent';


class RegisterSimple extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            status: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        // alert('Email: ' + this.state.email);
        // alert('Password: ' + this.state.password);
        // alert('Status: ' + this.state.status);
        // alert('Date: ' + new Date());

        const email = this.state.email;
        const password = this.state.password;
        const status = this.state.status;

        Accounts.createUser(
            {
                email: email,
                password: password
            }, function (error) {
                if (error) {
                    console.log(error.reason); // Output error if registration fails
                } else {
                    console.log("Success");

                    // let user = Meteor.users.find({email: this.state.email}).fetch();
                    console.log(email);
                    console.log(status);
                    console.log(Meteor.userId());

                    Profiles.insert(
                        {
                            email: email,
                            status: status,
                            createdAt: new Date(),
                            createdBy: Meteor.userId()
                        }, function (error) {
                            if (error) {
                                console.log(error.reason); // Output error if registration fails
                            } else {
                                return <Redirect to='/'/>;
                            }
                        }
                    );
                }
            }
        );
    }

    render() {
        return (
            <div style={{width: '1080px', margin: 'auto', verticalAlign: 'top'}}>
                <Menu/>
                <h3 className='text-primary'>Add a new user</h3>
                <Form onSubmit={this.handleSubmit} horizontal style={{width: '700px', margin: 'auto'}}>
                    <FormGroup style={{width: '690px', margin: 'auto'}}>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                name='email'
                                ref='email'
                                type='email'
                                onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                name='password'
                                ref='password'
                                type='password'
                                onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Status</ControlLabel>
                            <Radio
                                name='status'
                                ref='status'
                                value='Active'
                                inline
                                onChange={this.handleChange}>
                                Active
                            </Radio>
                            <Radio
                                name='status'
                                ref='status'
                                value='Inactive'
                                inline
                                onChange={this.handleChange}>
                                Inactive
                            </Radio>
                        </FormGroup>
                        <FormGroup>
                            <Button
                                name='submit'
                                type='submit'>
                                Submit
                            </Button>
                        </FormGroup>
                    </FormGroup>
                </Form>
                <Footer/>
            </div>
        );
    }
}

export default RegisterSimple;
