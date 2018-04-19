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
                {
                    profiles.map(
                        item => (
                            <li className="collection-item" key={item.id}>
                                <Link to={item.id < 0 ? `/` : `ProfileSingle/${item.id}`}>
                                    {item.firstName} {item.lastName}
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}

export const profilesListQuery = gql`
  query ProfilesQuery {
    profiles {
        id
        firstName
        lastName
    }
  }
`;

export default graphql(profilesListQuery)(Profiles);
