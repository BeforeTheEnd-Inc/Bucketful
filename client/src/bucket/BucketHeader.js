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
                {bucket.name} {bucket.description} {bucket.profileId}
            </div>
        </div>
    );
}

export const bucketQuery = gql`
  query BucketQuery($bucketId: String!) {
    bucket(id: $bucketId) {
        id
        name
        description
        profileId
    }
  }
`;

export default (graphql(bucketQuery, {
    options: (props) => ({
        variables: {bucketId: props.bucketId},
    }),
})(BucketHeader));
