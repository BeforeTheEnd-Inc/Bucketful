import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';
import ReactRadioButtonGroup from 'react-radio-button-group';
import DatePicker from 'react-datepicker';

import {profilesListQuery} from './Profiles';
import 'react-datepicker/dist/react-datepicker.css';

export class AddProfile extends Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        phone: '',
        email: '',
        birthday: '',
        status: ''
    }

    handleSave = () => {
        const {
            firstName,
            lastName,
            username,
            password,
            gender,
            address,
            city,
            state,
            postalCode,
            country,
            phone,
            email,
            birthday,
            status
        } = this.state;

        const id = require('crypto').randomBytes(5).toString('hex');

        this.props.mutate({
            variables: {
                id,
                firstName,
                lastName,
                username,
                password,
                gender,
                address,
                city,
                state,
                postalCode,
                country,
                phone,
                email,
                birthday,
                status
            },
            optimisticResponse: {
                addProfile: {
                    id,
                    firstName,
                    lastName,
                    username,
                    password,
                    gender,
                    address,
                    city,
                    state,
                    postalCode,
                    country,
                    phone,
                    email,
                    birthday,
                    status,
                    __typename: 'Profile'
                },
            },
            update: (store, {data: {addProfile}}) => {
                const data = store.readQuery({query: profilesListQuery});
                data.profiles.push(addProfile);
                store.writeQuery({query: profilesListQuery, data});
            }
        })
            .then(res => {
                this.setState({
                    firstName: '',
                    lastName: '',
                    username: '',
                    password: '',
                    gender: '',
                    address: '',
                    city: '',
                    state: '',
                    postalCode: '',
                    country: '',
                    phone: '',
                    email: '',
                    birthday: '',
                    status: ''
                });
            });
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s1">
                        <input
                            value={this.state.firstName}
                            placeholder='First name'
                            onChange={(e) => this.setState({firstName: e.target.value})}
                        />
                    </div>
                    <div className="col s2">
                        <input
                            value={this.state.address}
                            placeholder='Address'
                            onChange={(e) => this.setState({address: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s1">
                        <input
                            value={this.state.lastName}
                            placeholder='Last name'
                            onChange={(e) => this.setState({lastName: e.target.value})}
                        />
                    </div>
                    <div className="col s2">
                        <input
                            value={this.state.city}
                            placeholder='City'
                            onChange={(e) => this.setState({city: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s1">
                        <input
                            value={this.state.username}
                            placeholder='Username'
                            onChange={(e) => this.setState({username: e.target.value})}
                        />
                    </div>
                    <div className="col s2">
                        <input
                            value={this.state.state}
                            placeholder='State'
                            onChange={(e) => this.setState({state: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s1">
                        <input
                            value={this.state.password}
                            placeholder='Password'
                            onChange={(e) => this.setState({password: e.target.value})}
                        />
                    </div>
                    <div className="col s2">
                        <input
                            value={this.state.postalCode}
                            placeholder='Postal Code'
                            onChange={(e) => this.setState({postalCode: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s1">
                        <ReactRadioButtonGroup
                            options={['Female', 'Male']}
                            value='Female'
                            name='Gender'
                            onChange={function(checkedValue) {console.log("New value: ", checkedValue);}}
                            isStateful={true}
                        />
                    </div>
                    <div className="col s2">
                        <input
                            value={this.state.country}
                            placeholder='Country'
                            onChange={(e) => this.setState({country: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s1">
                        <DatePicker
                            placeholderText='Birthday'
                            // selected={this.state.birthday}
                            // onSelect={this.handleSelect.birthday}
                            // onChange={this.handleChange.birthday()}
                            value={this.state.birthday}
                        />
                    </div>
                    <div className="col s2">
                        <ReactRadioButtonGroup
                            options={['Active', 'Inactive']}
                            name='Status'
                            value='Active'
                            onChange={function(checkedValue) {console.log("New value: ", checkedValue);}}
                            isStateful={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s2">
                        <button
                            onClick={this.handleSave}
                            className="btn waves-effect waves-light"
                            type="submit">
                            Add New
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export const createProfile = gql`
  mutation addProfile(
	$id: String!,
	$firstName: String,
	$lastName: String,
	$username: String!,
	$password: String!,
	$gender: String,
	$address: String,
	$city: String,
	$state: String,
	$postalCode: Int,
	$country: String,
	$phone: String,
	$email: String,
	$birthday: Date,
	$status: String
	) {   
	addProfile(
		id: $id, 
		firstName: $firstName, 
		lastName: $lastName,
		username: $username,
		password: $password,
		gender: $gender,
		address: $address,
		city: $city,
		state: $state,
		postalCode: $postalCode,
		country: $country,
		phone: $phone,
		email: $email,
		birthday: $birthday,
		status: $status
	) {     id
			firstName
			lastName
			username
			password
			gender
			address
			city
			state
			postalCode
			country
			phone
			email
			birthday
			status
	}
  }
`;

export const AddProfilesWithMutation = graphql(createProfile)(AddProfile);

export default AddProfilesWithMutation;
