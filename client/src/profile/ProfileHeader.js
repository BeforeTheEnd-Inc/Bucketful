import React from 'react';
import {gql, graphql} from 'react-apollo';

export const ProfileHeader = ({data: {loading, error, profile}}) => {
    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            <div>
                {profile.firstName} {profile.lastName} {profile.username}
            </div>
        </div>
    );
};

export const profileQuery = gql`
	query ProfileQuery($profileId: String!) {
		profile(profileId: $profileId) {
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

export default (graphql(profileQuery, {
    options: (props) => ({
        variables: {profileId: props.match.params.profileId},
    }), })(ProfileHeader)
);
