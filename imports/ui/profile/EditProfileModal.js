import React, {Component} from "react";
import {Button, Modal, FormGroup, ControlLabel, FormControl, Radio} from "react-bootstrap";

export default class EditProfile extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
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
        let minibio = event.target.minibio.value;
        let birthday = event.target.birthday.value;
        let hometown = event.target.hometown.value;
        let gender = event.target.gender.value;

        console.log(event)
    }

    render() {

        return (
            <div>
                <Button bsStyle="link" onClick={this.handleShow}>
                    Edit
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="editProfile" onSubmit={this.handleSubmit} style={this.formStyle}>

                            {/* Mini bio */}

                            <FormGroup controlId='formControlsBio'>
                                <ControlLabel>Write something about yourself</ControlLabel>
                                <FormControl componentClass="textarea" name="minibio" placeholder="Write something about yourself here..." />
                            </FormGroup>

                            {/* Birthday */}

                            <FormGroup>
                                <ControlLabel>Birth date</ControlLabel><br/>
                                <FormControl type="date" name="birthday"/>
                            </FormGroup>

                            {/* Hometown */}

                            <FormGroup controlId="formControlsHometown">
                                <ControlLabel>Hometown</ControlLabel>
                                <FormControl type="text" name='hometown' placeholder="Enter your hometown"/>
                            </FormGroup>

                            {/* Gender */}

                            <FormGroup>
                                <ControlLabel>Gender</ControlLabel><br/>
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

                            {/* Submit input */}

                            <Button id="submitInput" type="submit" style={{display: "none"}}/>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>

                        {/* Submit */}

                        <Button type="submit" style={this.submitButtonStyle} onClick={this.handleSubmitClick}>Submit</Button>

                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}