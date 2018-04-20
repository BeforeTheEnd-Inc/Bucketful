import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';
import ReactRadioButtonGroup from 'react-radio-button-group';

import {bucketsListQuery} from './Buckets';

export class AddBucket extends Component {
    state = {
        profileId: '',
        name: '',
        description: '',
        category: '',
        image: '',
        progress: '',
        status: ''
    };

    handleSave = () => {
        const {
            profileId,
            name,
            description,
            category,
            image,
            progress,
            status
        } = this.state;

        const bucketId = require('crypto').randomBytes(5).toString('hex');

        this.props.mutate({
            variables: {
                bucketId,
                profileId,
                name,
                description,
                category,
                image,
                progress,
                status
            },
            optimisticResponse: {
                addBucket: {
                    bucketId,
                    profileId,
                    name,
                    description,
                    category,
                    image,
                    progress,
                    status,
                    __typename: 'Bucket'
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
                    profileId: '',
                    name: '',
                    description: '',
                    category: '',
                    image: '',
                    progress: '',
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
                            value={this.state.profileId}
                            placeholder='Profile ID'
                            onChange={(e) => this.setState({profileId: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s1">
                        <input
                            value={this.state.name}
                            placeholder='Name'
                            onChange={(e) => this.setState({name: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s1">
                        <input
                            value={this.state.description}
                            placeholder='Description'
                            onChange={(e) => this.setState({description: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s1">
                        <input
                            value={this.state.category}
                            placeholder='Category'
                            onChange={(e) => this.setState({category: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s1">
                        <input
                            value={this.state.image}
                            placeholder='Image'
                            onChange={(e) => this.setState({image: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s1">
                        <input
                            value={this.state.progress}
                            placeholder='Progress'
                            onChange={(e) => this.setState({progress: e.target.value})}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s1">
                        <ReactRadioButtonGroup
                            options={['Active', 'Inactive']}
                            name='Status'
                            value='Active'
                            onChange={function (checkedValue) {
                                console.log("New value: ", checkedValue);
                            }}
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
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const createBucket = gql`
  mutation addBucket(
	$bucketId: String!,
	$profileId: String!,
	$name: String!,
	$description: String,
	$category: String,
	$image: String,
	$progress: String,
	$status: String
	) {
	addBucket(
		bucketId: $bucketId,
		profileId: $profileId,
		name: $name,
		description: $description,
		category: $category,
		image: $image,
		progress: $progress,
		status: $status
	) {     
		bucketId
		profileId
		name
		description
		category
		image
		progress
		status
	}
  }
`;

export const AddBucketsWithMutation = graphql(createBucket)(AddBucket);

export default AddBucketsWithMutation;
