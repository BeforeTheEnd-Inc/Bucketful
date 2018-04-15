import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';

import {bucketsListQuery} from './Buckets';

class AddBucket extends Component {
    state = {
        name: '',
        description: '',
        bucketID: ''
    }

    handleSave = () => {
        const {
            name,
            description,
            bucketID
        } = this.state;
        const id = require('crypto').randomBytes(5).toString('hex');
        this.props.mutate({
            variables: {
                id,
                name,
                description,
                bucketID
            },
            optimisticResponse: {
                addBucket: {
                    id,
                    name,
                    description,
                    bucketID,
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
