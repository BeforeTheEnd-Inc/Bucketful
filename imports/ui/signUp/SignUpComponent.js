import React, { Component } from "react";
import { Glyphicon, FormGroup, InputGroup, FormControl, Radio, Button } from "react-bootstrap";
import { Profiles } from "../../api/profiles";

import Menu from "../../components/MenuComponent";

export default class SignUp extends Component {

    constructor(props, context) {

        super(props, context);

        this.state = {vale: ''};

        this.handleGenderElect  = this.handleGenderElect.bind(this);
        this.handleChange       = this.handleChange.bind(this);
        this.handleSubmit       = this.handleSubmit.bind(this);

    }

    registerStyle = {
        width: "350px",
        margin: "auto"
    };

    signupHeaderStyle = {
        textAlign: "center"
    };

    handleGenderElect(event) {
        this.gender     = event.target.value;
    }

    handleChange(event) {
        // TODO: Evaluate confirm pass

        const target    = event.target;
        const value     = target.type === 'checkbox' ? target.checked : target.value;
        const name      = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        Profiles.insert({
            profileId: '10001',
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            email: event.target.email.value,
            password: event.target.password.value,
            birthday: event.target.birthday.value,
            gender: event.target.gender.value,
            createdAt: new Date(),
            createdBy: '10001'
        }, (error, result) => {
            if (error) {
                alert('Oops something went wrong: ' + Profiles.simpleSchema().namedContext().validationErrors());
            } else {
                alert('New profile created: ' + result);
            }
        });
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
                        <Radio name="gender" value="male" onChange={this.handleGenderElect} inline >
                            Male
                        </Radio>
                        <Radio name="gender" value="female" onChange={this.handleGenderElect} inline>
                            Female
                        </Radio>
                        <Radio name="gender" value="preferNo" onChange={this.handleGenderElect} inline >
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