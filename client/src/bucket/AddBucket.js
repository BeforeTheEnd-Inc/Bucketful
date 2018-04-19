import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';

import {bucketsListQuery} from './Buckets';

class AddBucket extends Component {
    state = {
        name: '',
        description: '',
        profileId: ''
    }

    handleSave = () => {
        const {
            name,
            description,
            profileId
        } = this.state;
        const id = require('crypto').randomBytes(5).toString('hex');
        this.props.mutate({
            variables: {
                id,
                name,
                description,
                profileId
            },
            optimisticResponse: {
                addBucket: {
                    id,
                    name,
                    description,
                    profileId,
                    __typename: 'Bucket',
                },
            },
            update: (store, {data: {addBucket}}) => {
                const data = store.readQuery({query: bucketsListQuery});
                data.buckets.push(addBucket);
                store.writeQuery({query: bucketsListQuery, data});
            }
        })
            .then(res => {
                this.setState({
                    name: '',
                    description: '',
                    profileId: ''
                });
            });
    }

    render() {
        return (
            <div className="row">
                <div className="col s5">
                    <input
                        value={this.state.name}
                        placeholder='Name'
                        onChange={(e) => this.setState({Name: e.target.value})}
                    />
                </div>
                <div className="col s5">
                    <input
                        value={this.state.description}
                        placeholder='Description'
                        onChange={(e) => this.setState({Description: e.target.value})}
                    />
                </div>
                <div className="col s5">
                    <input
                        value={this.state.profileId}
                        placeholder='Profile ID'
                        onChange={(e) => this.setState({ProfileID: e.target.value})}
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

const createBucket = gql`
  mutation addBucket($id: String!, $name: String!, $description: String, $profileId: String!) {
    addBucket(id: $id, name: $name, description: $description, profileId: $profileId) {
        id
        name
        description
        profileId
    }
  }
`;

const AddBucketsWithMutation = graphql(createBucket)(AddBucket);

export default AddBucketsWithMutation;
