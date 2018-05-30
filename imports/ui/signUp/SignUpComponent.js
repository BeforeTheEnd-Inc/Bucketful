import React, { Component } from "react";
import { Glyphicon, FormGroup, InputGroup, FormControl, Radio, Button } from "react-bootstrap";
import { Profiles } from "../../api/profiles";

import Menu from "../../components/MenuComponent";

export default class SignUp extends Component {

    constructor(props, context) {

        super(props, context);

        this.state = {vale: ''};

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    registerStyle = {
        width: "350px",
        margin: "auto"
    };

    signupHeaderStyle = {
        textAlign: "center"
    };

    handleSubmit(event) {
        event.preventDefault();

        let fields = {
            username: event.target.email.value,
            email: event.target.email.value,
            password: event.target.password.value,
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            birthday: event.target.birthday.value,
            gender: event.target.gender.value,
        };

        let newUserData = {
            username: fields.username,
            email: fields.email,
            password: fields.password
        };

        if (typeof newUserData.password !== 'string')
            throw new Error("options.password must be a string");
        if (!newUserData.password) {
            return reportError(new Meteor.Error(400, "Password may not be empty"), callback);
        }

        Meteor.call('insertUser', newUserData, (error, result) => {
            if (error) {
                alert('Oops. Something went wrong: ' + error);
                this.handleFailedAccountCreation();
            } else {
                Profiles.insert({
                    _id: result,
                    firstname: fields.firstname,
                    lastname: fields.lastname,
                    email: fields.email,
                    birthday: fields.birthday,
                    gender: fields.gender,
                    createdAt: new Date()
                }, (error, result) => {
                    if (error) {
                        alert('Oops. Something went wrong: ' + Profiles.simpleSchema.namedContext().validationErrors());
                        this.handleFailedAccountCreation();
                    } else {
                        this.handleSuccessfulAccountCreation(result, newUserData);
                    }
                });
            }
        });
    }

    handleSuccessfulAccountCreation(result, userData) {
        // Session.set("data", result);
        Meteor.loginWithPassword(userData.email, userData.password);
        this.props.history.push('/profile');
    }

    handleFailedAccountCreation() {
        window.location.reload();
    }

    render() {

        return (
            <div>
                <Menu/>
                <form className="register" onSubmit={this.handleSubmit} style={this.registerStyle}>

                    <br/>
                    <br/>

                    <h1 className="signUpHeader" style={this.signupHeaderStyle}>Sign up for free!</h1>

                    <br/>
                    <br/>

                    {/* User's name */}

                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="user"/>
                            </InputGroup.Addon>
                            <FormControl type="text" name="firstname" placeholder="First Name"/>
                            <FormControl type="text" name="lastname" placeholder="Last Name"/>
                        </InputGroup>
                    </FormGroup>

                    {/* User's email*/}

                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="envelope"/>
                            </InputGroup.Addon>
                            <FormControl type="email" name="email" placeholder="Email"/>
                        </InputGroup>
                    </FormGroup>

                    {/* User's password */}

                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="lock"/>
                            </InputGroup.Addon>
                            <FormControl type="password" name="password" placeholder="Password"/>
                            <FormControl type="password" name="confirmpassword" placeholder="Confirm Password"/>
                        </InputGroup>
                    </FormGroup>

                    {/* User's date of birth */}

                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="gift"/>
                            </InputGroup.Addon>
                            <FormControl type="date" name="birthday"/>
                        </InputGroup>
                    </FormGroup>

                    {/* User's gender */}

                    <FormGroup>
                        <Radio name="gender" value="male" inline >
                            Male
                        </Radio>
                        <Radio name="gender" value="female" inline>
                            Female
                        </Radio>
                        <Radio name="gender" value="preferNo" inline >
                            Prefer not to disclose
                        </Radio>
                    </FormGroup>

                    <br/>
                    <br/>
                    <br/>

                    {/* Submit */}
                    <Button type="submit" bsStyle="primary">Sign Up!</Button>

                </form>
            </div>
        );
    }

}