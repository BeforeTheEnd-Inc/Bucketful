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
}

export const profileQuery = gql`
  query ProfileQuery(
        $id: String!
        $firstName: String
        $lastName: String
        $username: String!
        $password: String!
        $gender: String
        $address: String
        $city: String
        $state: String
        $postalCode: Int
        $country: String
        $phone: String
        $email: String
        $birthday: Date
        $status: String
    )
    {   profile(
            id: $id
            firstName: $firstName 
            lastName: $lastName
            username: $username
            password: $password
            gender: $gender
            address: $address
            city: $city
            state: $state
            postalCode: $postalCode
            country: $country
            phone: $phone
            email: $email
            birthday: $birthday
            status: $status
        ) 
        {   id
            firstName
            lastName
            username
            password
            gender
            address
            city
            state
            postalCode
            country
            phone
            email
            birthday
            status
        }
    }
`;

export default (graphql(profileQuery, {options: (props) => ({variables: {id: props.id}, }), })(ProfileHeader));
