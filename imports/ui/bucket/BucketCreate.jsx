import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Button, ControlLabel, Form, FormControl, FormGroup, Radio} from 'react-bootstrap';
import {Buckets} from '../../api/buckets';
import Menu from '../../components/MenuComponent';
import Footer from '../../components/FooterComponent';


class BucketCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bucketName: '',
            description: '',
            category: '',
            // image: '',
            progress: '',
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

        // alert('Bucket Name: ' + this.state.bucketName);

        Buckets.insert(
            {
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
                    console.log(error.reason); // Output error if registration fails
                } else {
                    alert('New bucket added: ' + result);
                    return <Redirect to='/buckets'/>;
                }
            }
        );
    }

    render() {
        return (
            <div style={{width: '1080px', margin: 'auto', verticalAlign: 'top'}}>
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
                        <Button 
                            name='Submit' 
                            type='submit'>
                            Submit
                        </Button>
                    </FormGroup>
                </Form>
                <Footer/>
            </div>
        );
    }
}

export default BucketCreate;
