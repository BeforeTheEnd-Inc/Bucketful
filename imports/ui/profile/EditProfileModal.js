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

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmit(event) {

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
                        <form className="editProfile" onSubmit={this.handleSubmit} style={this.formStyle}>

                            {/* Mini bio */}

                            <FormGroup controlId='formControlsBio'>
                                <ControlLabel>Write something about yourself</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Write something about yourself here..." />
                            </FormGroup>

                            {/* Birthday */}

                            <FormGroup>
                                <ControlLabel>Birth date</ControlLabel><br/>
                                <FormControl type="date" name="birthday"/>
                            </FormGroup>

                            {/* Hometown */}

                            <FormGroup controlId="formControlsHometown">
                                <ControlLabel>Hometown</ControlLabel>
                                <FormControl type="text" placeholder="Enter your hometown"/>
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

                            {/* Submit */}

                            <Button type="submit" bsStyle="primary">Submit</Button>

                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

}