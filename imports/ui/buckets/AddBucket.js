import React, { Component } from "react";
import { Glyphicon, FormGroup, InputGroup, FormControl, MenuItem, DropdownButton } from "react-bootstrap";
import { Buckets } from "../../api/buckets";

import Menu from "../../components/MenuComponent";

import "../css/AddBucketStyleSheet.css";
import {Tasks} from "../../api/tasks";
import {Costs} from "../../api/costs";

export default class AddBucket extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {value: ''};

        this.handleSubmit       = this.handleSubmit.bind(this);

    }


    //This section isn't actually pushing
    handleSubmit(event) {
        event.preventDefault();
        Buckets.insert({
            profileId: '10001',
            name: event.target.name.value,
            description: event.target.description.value,
            createdBy: '10001'
        }, (error, result) => {
            if (error) {
                alert('Oops, something went wrong: ' + Buckets.simpleSchema().namedContext().validationErrors());
            } else {
                alert('New bucket added: ' + result);
            }
        });
    }

    render() {

        return (
            <div>
                <Menu/>
                <form className="addBucket" onSubmit={this.handleSubmit}>

                    <br/>
                    <br/>

                    <h1 className="addBucketHeader">Add a new bucket</h1>

                    <br/>
                    <br/>
                    <br/>

                    {/* Bucket name */}

                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="folder-open"/>
                            </InputGroup.Addon>
                            <FormControl type="text" name="name" placeholder="Bucket Name"/>
                        </InputGroup>
                    </FormGroup>

                    {/* Bucket description */}

                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="lock"/>
                            </InputGroup.Addon>
                            <FormControl type="textarea" name="description" placeholder="Description"/>
                        </InputGroup>
                    </FormGroup>

                    <DropdownButton
                        bsStyle="default"
                        title="Category"
                        name="category"
                        // key={i}
                        noCaret
                    >
                        <MenuItem eventKey="1" active>Travel</MenuItem>
                        <MenuItem eventKey="2">Activity</MenuItem>
                        <MenuItem eventKey="3">Education</MenuItem>
                    </DropdownButton>

                    <br/>
                    <br/>
                    <br/>

                    {/* Submit */}
                    <button type="submit" className="btn btn-primary">Add Bucket!</button>
                </form>
            </div>
        );
    }
}