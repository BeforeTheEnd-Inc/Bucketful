import React from 'react';
import {gql, graphql} from 'react-apollo';
import {Link} from 'react-router-dom';

export const Buckets = ({data: {loading, error, buckets}}) => {
    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div className="row">
            <ul className="collection">
                {buckets.map(item => (
                    <li className="collection-item" key={item.bucketId}>
                        <Link to={item.bucketId < 0 ? `/` : `BucketSingle/${item.bucketId}`}>
                            {item.name} {item.description}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const bucketsListQuery = gql`
  query BucketsQuery {
    buckets {
        bucketId
        profileId
        name
        description,
        category,
        image,
        progress,
        status
    }
  }
`;

export default graphql(bucketsListQuery)(Buckets);
