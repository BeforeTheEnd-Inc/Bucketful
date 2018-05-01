import React, { Component } from "react";
import { Glyphicon, FormGroup, InputGroup, FormControl, Radio } from "react-bootstrap";

import Menu from "../../components/MenuComponent";

import "../css/SignUpStyleSheet.css";

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.gender = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();

        let profile = {
            firstName: $('#firstname')[0].value,
            lastName: $('#lastname')[0].value,
            email: $('#email')[0].value,
            password: $('#password')[0].value,
            birthday: $('#birthday')[0].value,
            gender: this.gender,
            createdAt: new Date()
        };

        Meteor.call('insert', profile, (error) => {
            if (error) {
                alert("Oops something went wrong: " + error.reason);
            } else {
                alert("Profile added");
                history.push('/');
            }
        });
    }

    render() {
        return (
            <div>
                <Menu/>
                <form className="register" onSubmit={this.handleSubmit}>

                    <h1 className="signUpHeader">Sign up for free!</h1>

                    <br/>
                    <br/>
                    <br/>

                    {/* User's name */}

                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="user"/>
                            </InputGroup.Addon>
                            <FormControl type="text" id="firstname" placeholder="First Name"/>
                            <FormControl type="text" id="lastname" placeholder="Last Name"/>
                        </InputGroup>
                    </FormGroup>

                    {/* User's email*/}

                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="envelope"/>
                            </InputGroup.Addon>
                            <FormControl type="email" id="email" placeholder="Email"/>
                        </InputGroup>
                    </FormGroup>

                    {/* User's password */}

                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="lock"/>
                            </InputGroup.Addon>
                            <FormControl type="password" id="password" placeholder="Password"/>
                            <FormControl type="password" id="confirmpassword" placeholder="Confirm Password"/>
                        </InputGroup>
                    </FormGroup>

                    {/* User's date of birth */}

                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="gift"/>
                            </InputGroup.Addon>
                            <FormControl type="date" id="birthday" placeholder="Date of Birth"/>
                        </InputGroup>
                    </FormGroup>

                    {/* User's gender */}

                    <FormGroup>
                        <Radio name="radioGroup" value="male" onChange={this.handleChange} inline >
                            Male
                        </Radio>{' '}
                        <Radio name="radioGroup" value="female" onChange={this.handleChange} inline>
                            Female
                        </Radio>{' '}
                        <Radio name="radioGroup" value="preferNo" onChange={this.handleChange} inline >
                            Prefer not to disclose
                        </Radio>
                    </FormGroup>

                    <br/>
                    <br/>
                    <br/>

                    {/* Submit */}
                    <button type="submit" className="btn btn-primary">Sign Up!</button>
                </form>
            </div>
        );
    }

}