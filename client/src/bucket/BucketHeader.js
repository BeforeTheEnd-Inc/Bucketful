import React from 'react';
import {gql, graphql} from 'react-apollo';

const BucketHeader = ({data: {loading, error, bucket}}) => {
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            <div>
                {bucket.firstName} {bucket.lastName}
            </div>
        </div>
    );
}

export const bucketQuery = gql`
  query BucketQuery($bucketId: ID!) {
    bucket(id: $bucketId) {
        id
        firstName
        lastName
    }
  }
`;

export default (graphql(bucketQuery, {
    options: (props) => ({
        variables: {bucketId: props.bucketId},
    }),
})(BucketHeader));
