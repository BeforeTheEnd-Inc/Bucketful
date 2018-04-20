import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';
import BucketHeader from './BucketHeader';

class BucketSingle extends Component {
    render() {
        const {data: {loading, error, bucket}, match} = this.props;

        if (loading) {
            return <BucketHeader id={match.params.id}/>;
        }

        if (error) {
            return <p>{error.message}</p>;
        }

        return (
            <div className="container">
                <h3>{bucket.bucketId} {bucket.name} {bucket.description}</h3>
            </div>
        );
    }
}

export const bucketSingleQuery = gql`
	query BucketSingleQuery($bucketId: String!) {
		bucket(bucketId: $bucketId) {
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

export default (graphql(bucketSingleQuery, {
    options: (props) => ({
        variables: {bucketId: props.params.bucketId},
    }),
})(BucketSingle));
