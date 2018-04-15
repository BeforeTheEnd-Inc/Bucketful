import React from 'react';
import {gql, graphql} from 'react-apollo';
import {Link} from 'react-router-dom';

const Buckets = ({data: {loading, error, buckets}}) => {
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div className="row">
            <ul className="collection">
                {buckets.map(item => (<li className="collection-item" key={item.id}><Link to={item.id < 0 ? `/` : `bucket/${item.id}`}>{item.firstName} {item.lastName}</Link></li>))}
            </ul>
        </div>
    );
}

export const bucketsListQuery = gql`
  query BucketsQuery {
    buckets {
        id
        firstName
        lastName
    }
  }
`;

export default graphql(bucketsListQuery)(Buckets);
