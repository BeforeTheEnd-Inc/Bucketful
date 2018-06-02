import React, {Component} from 'react';
import Label from "../../components/LabelComponent";
import {
    Modal,
    Glyphicon,
    FormGroup,
    InputGroup,
    FormControl,
    MenuItem,
    DropdownButton,
    ButtonGroup, Button
} from "react-bootstrap";

import "../css/AddItemSheet.css";
import {Buckets} from "../../api/buckets";

export default class AddItemModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            value: '',
            values: [1,2]

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
    }

    formStyle = {
        textAlign: "left"
    };

    handleShow = () => {
        this.setState({show: true});
    };

    handleClose = () => {
        this.setState({show: false});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        window.alert("adding "+ e + " new item to bucket list");
        // Buckets.insert({
        //     profileId: '10001',
        //     name: event.target.name.value,
        //     description: event.target.description.value,
        //     createdBy: '10001'
        // }, (error, result) => {
        //     if (error) {
        //         alert('Oops, something went wrong: ' + Buckets.simpleSchema().namedContext().validationErrors());
        //     } else {
        //         alert('New bucket added: ' + result);
        //     }
        // });
    };

    handleRadio = (e) => {
        this.setState({value: e});
    };

    render() {
        return (

            <div>
                <button type='submit' className='grid-control' onClick={
                    this.handleShow
                }>+</button>
                <Modal show={this.state.show} animation={false} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Bucket Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="addBucket" onSubmit={this.handleSubmit} style={this.formStyle}>

                            {/* Bucket name */}
                            <Label type="5" label="Give it a name!"/>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="hand-right"/>
                                    </InputGroup.Addon>
                                    <FormControl type="text" name="name" placeholder="Activity Name"/>
                                </InputGroup>
                            </FormGroup>

                            {/* Bucket description */}
                            <Label type="5" label="Give it a brief description!"/>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="hand-right"/>
                                    </InputGroup.Addon>
                                    <FormControl type="text" name="description" placeholder="Activity Description"/>
                                </InputGroup>
                            </FormGroup>

                            {/*Set active*/}
                            <Label type="5" label="Set it active or inactive!"/>
                            <ButtonGroup type='radio' name="setActivity" value={this.state.values} onChange={this.handleRadio}>
                                <Button>Active</Button>
                                <Button>Inactive</Button>
                            </ButtonGroup>
                            <br/>

                            <Label type="5" label="Give it a category!"/>
                            <DropdownButton
                                bsStyle="default"
                                title="Category"
                                name="category"
                                id="category"

                                noCaret
                            >
                                <MenuItem eventKey="1" active>Travel</MenuItem>
                                <MenuItem eventKey="2">Lifestyle</MenuItem>
                                <MenuItem eventKey="3">Education</MenuItem>
                            </DropdownButton>

                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}