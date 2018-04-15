import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';
// import Notelist from './NoteList';
import ProfileHeader from './ProfileHeader';
// import AddNote from './AddNote';

class ProfileSingle extends Component {
    // componentWillMount() {
    //     this.props.data.subscribeToMore({
    //         document: notesSubscription,
    //         variables: {
    //             profileId: this.props.match.params.profileId,
    //         },
    //         updateQuery: (prev, {subscriptionData}) => {
    //             if (!subscriptionData.data) {
    //                 return prev;
    //             }
    //
    //             const newNote = subscriptionData.data.noteAdded;
    //
    //             if (!prev.profile.notes.find((item) => item.id === newNote.id)) {
    //                 return Object.assign({}, prev, {
    //                     profile: Object.assign({}, prev.profile, {
    //                         notes: [...prev.profile.notes, newNote]
    //                     })
    //                 });
    //             } else {
    //                 return prev;
    //             }
    //         }
    //     })
    // }

    render() {
        const {data: {loading, error, profile}, match} = this.props;
        if (loading) {
            return <ProfileHeader profileId={match.params.profileId}/>;
        }
        if (error) {
            return <p>{error.message}</p>;
        }

        // if (profile.notes === null) {
            return (
                <div className="container">
                    <h2>{profile.firstName} {profile.lastName}</h2>
                    {/*<AddNote/>*/}
                </div>
            );
        // }

        // return (
        //     <div className="container">
        //         <div className="row"><h2>{profile.firstName} {profile.lastName}</h2></div>
        //         <Notelist notes={profile.notes}/>
        //         <AddNote/>
        //     </div>
        // );
    }
}

export const profileSingleQuery = gql`
  query ProfileSingleQuery($profileId: ID!) {
    profile(id: $profileId) {
        id
        firstName
        lastName
    }
  }
`;

// const notesSubscription = gql`
//   subscription noteAdded($profileId: ID!) {
//     noteAdded(profileId: $profileId) {
//       id
//       details
//     }
//   }
// `;

export default (graphql(profileSingleQuery, {
    options: (props) => ({
        variables: {profileId: props.match.params.profileId},
    }),
})(ProfileSingle));
