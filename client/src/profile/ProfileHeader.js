import React from 'react';
import {gql, graphql} from 'react-apollo';

const ProfileHeader = ({data: {loading, error, profile}}) => {
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            <div>
                {profile.firstName} {profile.lastName}
            </div>
        </div>
    );
}

export const profileQuery = gql`
  query ProfileQuery($profileId: ID!) {
    profile(id: $profileId) {
        id
        firstName
        lastName
    }
  }
`;

export default (graphql(profileQuery, {
    options: (props) => ({
        variables: {profileId: props.profileId},
    }),
})(ProfileHeader));
