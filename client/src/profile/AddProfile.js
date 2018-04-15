import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';

import {profilesListQuery} from './Profiles';

class AddProfile extends Component {
    state = {
        firstName: '',
        lastName: ''
    }

    handleSave = () => {
        const {
            firstName,
            lastName
        } = this.state;
        const id = require('crypto').randomBytes(5).toString('hex');
        this.props.mutate({
            variables: {
                id,
                firstName,
                lastName
            },
            optimisticResponse: {
                addProfile: {
                    id,
                    firstName,
                    lastName,
                    __typename: 'Profile',
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
                    lastName: ''
                });
            });
    }

    render() {
        return (
            <div className="row">
                <div className="col s5">
                    <input
                        value={this.state.firstName}
                        placeholder='First name'
                        onChange={(e) => this.setState({firstName: e.target.value})}
                    />
                </div>
                <div className="col s5">
                    <input
                        value={this.state.lastName}
                        placeholder='Last name'
                        onChange={(e) => this.setState({lastName: e.target.value})}
                    />
                </div>
                <div className="col s2">
                    <button
                        onClick={this.handleSave}
                        className="btn waves-effect waves-light"
                        type="submit">
                        Add New
                    </button>
                </div>
            </div>
        )
    }
}

const createProfile = gql`
  mutation addProfile($id: String!, $firstName: String!, $lastName: String!) {
    addProfile(id: $id, firstName: $firstName, lastName: $lastName ) {
        id
        firstName
        lastName
    }
  }
`;

const AddProfilesWithMutation = graphql(createProfile)(AddProfile);

export default AddProfilesWithMutation;
