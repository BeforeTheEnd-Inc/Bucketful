import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Button, ControlLabel, Form, FormControl, FormGroup, Radio} from 'react-bootstrap';
import {Costs} from '../../api/costs';
import Menu from '../../components/MenuComponent';
import Footer from '../../components/FooterComponent';


class CostCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            amount: '',
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

        // alert('Name: ' + this.state.name);
        // alert('Amount: ' + this.state.amount);
        // alert('Status: ' + this.state.status);
        // alert('Date: ' + new Date());

        Costs.insert(
            {
                name: this.state.name,
                amount: this.state.amount,
                status: this.state.status,
                createdAt: new Date(),
                createdBy: '10001'
            }, (error) => {
                if (error) {
                    console.log(error.reason); // Output error if registration fails
                } else {
                    // alert('New cost added: ' + result);
                    return <Redirect to="/costs"/>;
                }
            }
        );
    }

    render() {
        return (
            <div style={{width: '800px', margin: 'auto', verticalAlign: 'top'}}>
                <Menu/>
                <h3 className='text-primary'>Add a new cost</h3>
                <Form onSubmit={this.handleSubmit} horizontal style={{width: '700px', margin: 'auto'}}>
                    <FormGroup style={{width: '690px', margin: 'auto'}}>
                        <FormGroup>
                            <ControlLabel>Cost Name</ControlLabel>
                            <FormControl
                                name='name'
                                ref='name'
                                type='text'
                                onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Cost Amount</ControlLabel>
                            <FormControl
                                name='amount'
                                ref='amount'
                                type='text'
                                onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Status</ControlLabel>
                            <Radio
                                name='status'
                                ref='status'
                                value='Active'
                                inline
                                onChange={this.handleChange}>
                                Active
                            </Radio>
                            <Radio
                                name='status'
                                ref='status'
                                value='Inactive'
                                inline
                                onChange={this.handleChange}>
                                Inactive
                            </Radio>
                        </FormGroup>
                        <FormGroup>
                            <Button
                                name='submit'
                                type='submit'>
                                Submit
                            </Button>
                        </FormGroup>
                    </FormGroup>
                </Form>
                <Footer/>
            </div>
        );
    }
}

export default CostCreate;
