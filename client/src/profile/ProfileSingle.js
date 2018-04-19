import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';
import ProfileHeader from './ProfileHeader';

class ProfileSingle extends Component {
    //componentWillMount() {
        // this.props.data.subscribeToMore({
        //     // document: notesSubscription,
        //     variables: {
        //         bucketId: this.props.match.params.bucketId
        //     },
        //     updateQuery: (prev, {subscriptionData}) => {
        //         if (!subscriptionData.data) {
        //             return prev;
        //         }
        //
        //         // const newNote = subscriptionData.data.noteAdded;
        //
        //         // if (!prev.bucket.notes.find((item) => item.id === newNote.id)) {
        //             return Object.assign({}, prev, {
        //                 bucket: Object.assign({}, prev.bucket, {
        //                     // notes: [...prev.bucket.notes, newNote]
        //                 })
        //             });
        //         // } else {
        //         //     return prev;
        //         // }
        //     }
        // })
    //}

    render()
    {
        const {data: {loading, error, profile}, match} = this.props;
        if (loading) {
            return <ProfileHeader id={match.params.id}/>;
        }

        if (error) {
            return <p>{error.message}</p>;
        }

        return (
            <div className="container">
                <h3>{profile.id}</h3>
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
        )
    }
}

export const profileSingleQuery = gql`
    query ProfileSingleQuery($profileId: String!) 
    {   profile(id: $profileId)
        {   id,
            firstName,
            lastName,
            username,
            password,
            gender,
            address,
            city,
            state,
            postalCode,
            country,
            phone,
            email,
            birthday,
            status
        }
    }
`;

export default (graphql(profileSingleQuery, {options: (props) => ({variables: {$profileId: props.match.params.id}, }), })(ProfileSingle));
