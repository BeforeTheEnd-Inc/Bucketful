import React from 'react';
import {gql, graphql} from 'react-apollo';
import {Link} from 'react-router-dom';

export const Profiles = ({data: {loading, error, profiles}}) => {
    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div className="row">
            <ul className="collection">
                {profiles.map(item => (
                    <li className="collection-item" key={item.profileId}>
                        <Link to={item.profileId < 0 ? `/` : `ProfileSingle/${item.profileId}`}>
                            {item.firstName} {item.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const profilesListQuery = gql`
  query ProfilesQuery {
    profiles {
        profileId
        firstName
        lastName
        username
        password
        gender
        birthday
        email
        phone
        address
        city
        state
        postalCode
        country
        status
    }
  }
`;

export default graphql(profilesListQuery)(Profiles);
