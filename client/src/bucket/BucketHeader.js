import React from 'react';
import {gql, graphql} from 'react-apollo';

export const BucketHeader = ({data: {loading, error, bucket}}) => {
    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            <div>
                {bucket.profileId} {bucket.name} {bucket.description}
            </div>
        </div>
    );
};

export const bucketQuery = gql`
    query BucketQuery($bucketId: String!) {
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

export default (graphql(bucketQuery, {
    options: (props) => ({
        variables: {bucketId: props.params.bucketId},
    }), })(BucketHeader)
);
