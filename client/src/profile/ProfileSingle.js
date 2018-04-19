import React from 'react';
import {gql, graphql} from 'react-apollo';
import ProfileHeader from './ProfileHeader';

export const ProfileSingle = ({data: {loading, error, profile}, match})  => {
    if (loading) {
        return <ProfileHeader id={match.params.id}/>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div className="container">
            <h3>{profile.firstName}</h3>
            <h3>{profile.lastName}</h3>
            <h3>{profile.username}</h3>
            <h3>{profile.gender}</h3>
            <h3>{profile.birthday}</h3>
            <h3>{profile.address}</h3>
            <h3>{profile.city}</h3>
            <h3>{profile.state}</h3>
            <h3>{profile.postalCode}</h3>
            <h3>{profile.country}</h3>
            <h3>{profile.phone}</h3>
            <h3>{profile.email}</h3>
            <h3>{profile.status}</h3>
        </div>
    );
};


export const profileSingleQuery = gql`
    query ProfileSingleQuery
    (
        $id: String!, 
        $firstName: String!, 
        $lastName: String!,
        $username: String,
        $password: String,
        $gender: String,
        $address: String,
        $city: String,
        $state: String,
        $postalCode: Int,
        $country: String,
        $phone: String,
        $email: String,
        $birthday: Date,
        $status: String
    ) 
    {
        profile
        (
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
        {
            id
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

export default (graphql(profileSingleQuery, {options: (props) => ({variables: {id: props.match.params.id}, }), })(ProfileSingle));
