import Meteor from 'meteor/meteor';
import React, {Component} from 'react';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Radio, Row, Table} from 'react-bootstrap';
import {BucketCollection} from '../../api/buckets';
import Menu from '../../components/MenuComponent';

class AddBucket extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            bucketName: '',
            description: '',
            category: '',
            // image: '',
            progress: '',
            status: ''
        };

        // this.handleChange = this.handleChange.bind(this);

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //
    //     this.setState({
    //         [name]: value
    //     });
    // }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            bucketName: this.refs.bucketName.value,
            description: this.refs.description.value,
            category: this.refs.category.value,
            // image: this.refs.image.value,
            progress: this.refs.progress.value,
            status: this.refs.status.value
        });
        alert('Bucket Name: ' + this.state.bucketName);

        BucketCollection.insert({
            profileId: '10001',
            bucketName: this.state.bucketName,
            description: this.state.description,
            category: this.state.category,
            // image: this.state.image,
            progress: this.state.progress,
            status: this.state.status,
            createdAt: new Date(),
            createdBy: '10001'
        }, (error, result) => {
            if (error) {
                alert('Oops something went wrong: ' + BucketCollection.simpleSchema().namedContext().validationErrors());
            } else {
                alert('New bucket added: ' + result);
                // return () => {
                //     return (
                //         <Redirect push to='./viewbuckets'/>)
                // }
            }
        });
    }

    render() {
        // const defaultValues = {
        //     category: 'Select Category',
        //     progress: 'Select Progress',
        //     status: 'Active'
        // };

        return (
            <div style={{width: '800px', margin: 'auto', verticalAlign: 'top'}}>
                <Menu/>
                <h3 className='text-primary'>Add a new bucket</h3>
                <Form onSubmit={this.handleSubmit} horizontal style={{width: '700px', margin: 'auto'}}>

                    <FormGroup style={{width: '690px', margin: 'auto'}}>
                        <FormGroup>
                            <ControlLabel>Bucket Name</ControlLabel>
                            <FormControl name='bucketName' ref='bucketName' type='text' onChange={this.handleChange}/>
                        </FormGroup>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Description</ControlLabel>
                        <FormControl name='description' ref='description' type='text' onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Category</ControlLabel>
                        <select name='category' ref='category' onChange={this.handleChange}>
                            <option value='Select Category'>Select Category</option>
                            <option value='Adventure'>Adventure</option>
                            <option value='Dining'>Dining</option>
                            <option value='Entertainment'>Entertainment</option>
                            <option value='Sports'>Sports</option>
                            <option value='Theatre'>Theatre</option>
                            <option value='Travel'>Travel</option>
                        </select>
                    </FormGroup>

                    {/*<AvField name='image' label='Image' type='file' ref='image'/>*/}

                    <FormGroup>
                        <ControlLabel>Progress</ControlLabel>
                        <select name='progress' ref='progress' onChange={this.handleChange}>
                            <option value='Select Progress'>Select Progress</option>
                            <option value='0'>Not started</option>
                            <option value='1'>Started</option>
                            <option value='2'>Halfway</option>
                            <option value='3'>Over-half</option>
                            <option value='4'>Complete!</option>
                        </select>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Status</ControlLabel>
                        <Radio name='status' ref='status' value='Active' inline onChange={this.handleChange}>Active</Radio>
                        <Radio name='status' ref='status' value='Inactive' inline onChange={this.handleChange}>Inactive</Radio>
                    </FormGroup>

                    <FormGroup>
                        <Button name='Submit' type='submit' onClick={this.handleSubmit.bind(this)}>Submit</Button>
                    </FormGroup>

                </Form>
            </div>
        )
    }
}

export default AddBucket;
