import React, { Component } from "react";

import Menu from "../../components/MenuComponent";

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    formStyle = {
        width: "350px",
        margin: "auto"
    };

    signUpStyle = {
        textAlign: "center"
    };

    inputGroupStyle = {
        margin: "0 auto"
    };

    radioStyle = {
        marginLeft: "14px"
    };

    handleChange(event) {
        // TODO:
    }

    handleSubmit(event) {
        // TODO:
    }

    render() {
        return (
            <div>
                <Menu/>
                <form style={this.formStyle}>
                    <h1 className="signUpHeader" style={this.signUpStyle}>Sign up for free!</h1>
                    <br/>
                    {/* User's name */}
                    <div className="input-group" style={this.inputGroupStyle}>
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"/></span>
                        <input id="firstname" type="text" className="form-control" name="firstname" placeholder="First Name"/>
                        <input id="lastname" type="text" className="form-control" name="lastname" placeholder="Last Name"/>
                    </div>
                    <br/>
                    {/* User's email*/}
                    <div className="input-group" style={this.inputGroupStyle}>
                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"/></span>
                        <input id="email" type="email" className="form-control" name="email" placeholder="Email"/>
                    </div>
                    <br/>
                    {/* User's password */}
                    <div className="input-group" style={this.inputGroupStyle}>
                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"/></span>
                        <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
                        <input id="confirmpassword" type="password" className="form-control" name="confirmpassword" placeholder="Confirm Password"/>
                    </div>
                    <br/>
                    {/* User's date of birth */}
                    <div className="input-group" style={this.inputGroupStyle}>
                        <span className="input-group-addon"><i className="glyphicon glyphicon-gift"/></span>
                        <input id="birthdate" type="date" className="form-control" name="birthdate" placeholder="Date of Birth"/>
                    </div>
                    <br/>
                    {/* User's gender */}
                    <div style={this.radioStyle}>
                        <div className="radio">
                            <label><input type="radio" name="optradio"/>Male</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="optradio"/>Female</label>
                        </div>
                        <div className  ="radio">
                            <label><input type="radio" name="optradio"/>Prefer not to disclose</label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}