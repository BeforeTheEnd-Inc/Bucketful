import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Session} from 'meteor/session';
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Button, ControlLabel, Form, FormControl, FormGroup, Radio} from 'react-bootstrap';
import {Profiles} from '../../api/profiles';
import StatesDropdown from '../../components/StatesDropdown';
import CountriesDropdown from '../../components/CountriesDropdown';
import Menu from '../../components/MenuComponent';
import Footer from '../../components/FooterComponent';


class RegisterExtended extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            birthday: '',
            gender: '',
            phone: '',
            address: '',
            city: '',
            states: '',
            postalCode: '',
            countries: '',
            bio: '',
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

        alert('State: ' + this.state.states);
        alert('Country: ' + this.state.countries);

        const email = this.state.email;
        const password = this.state.password;
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const birthday = this.state.birthday;
        const gender = this.state.gender;
        const phone = this.state.phone;
        const address = this.state.address;
        const city = this.state.city;
        const state = this.state.states;
        const postalCode = this.state.postalCode;
        const country = this.state.countries;
        const bio = this.state.bio;
        const status = this.state.status;

        Accounts.createUser(
            {
                email: email,
                password: password
            }, function (error) {
                if (error) {
                    console.log(error.reason); // Output error if registration fails
                } else {
                    console.log('Success');

                    // let user = Meteor.users.find({email: this.state.email}).fetch();
                    console.log(email);
                    console.log(status);
                    console.log(Meteor.userId());

                    Profiles.insert(
                        {
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            birthday: birthday,
                            gender: gender,
                            phone: phone,
                            address: address,
                            city: city,
                            state: state,
                            postalCode: postalCode,
                            country: country,
                            bio: bio,
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
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl
                                name='fistName'
                                ref='firstName'
                                type='text'
                                onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Last Name</ControlLabel>
                            <FormControl
                                name='lastName'
                                ref='lastName'
                                type='text'
                                onChange={this.handleChange}/>
                        </FormGroup>
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
                            <ControlLabel>Birthday</ControlLabel>
                            <FormControl
                                name='birthday'
                                ref='birthday'
                                type='date'
                                onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Gender</ControlLabel>
                            <Radio
                                name='gender'
                                ref='gender'
                                value='Female'
                                inline
                                onChange={this.handleChange}>
                                Female
                            </Radio>
                            <Radio
                                name='gender'
                                ref='gender'
                                value='Male'
                                inline
                                onChange={this.handleChange}>
                                Male
                            </Radio>
                            <Radio
                                name='gender'
                                ref='gender'
                                value='NoAnswer'
                                inline
                                onChange={this.handleChange}>
                                Choose not to identify
                            </Radio>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Phone</ControlLabel>
                            <FormControl
                                name='phone'
                                ref='phone'
                                type='phone'
                                onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Address</ControlLabel>
                            <FormControl
                                name='address'
                                ref='address'
                                type='text'
                                onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>City</ControlLabel>
                            <FormControl
                                name='city'
                                ref='city'
                                type='text'
                                onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>State</ControlLabel>
                            <StatesDropdown/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Postal Code</ControlLabel>
                            <FormControl
                                name='postalCode'
                                ref='postalCode'
                                type='text'
                                onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Country</ControlLabel>
                            <CountriesDropdown/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Biography</ControlLabel>
                            <FormControl
                                name='bio'
                                ref='bio'
                                type='textarea'
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

export default RegisterExtended;
