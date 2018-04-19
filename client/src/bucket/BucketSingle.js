import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';
// import Notelist from './NoteList';
import BucketHeader from './BucketHeader';
// import AddNote from './AddNote';

class BucketSingle extends Component {
    // componentWillMount() {
    //     this.props.data.subscribeToMore({
    //         document: notesSubscription,
    //         variables: {
    //             bucketId: this.props.match.params.bucketId,
    //         },
    //         updateQuery: (prev, {subscriptionData}) => {
    //             if (!subscriptionData.data) {
    //                 return prev;
    //             }
    //
    //             const newNote = subscriptionData.data.noteAdded;
    //
    //             if (!prev.bucket.notes.find((item) => item.id === newNote.id)) {
    //                 return Object.assign({}, prev, {
    //                     bucket: Object.assign({}, prev.bucket, {
    //                         notes: [...prev.bucket.notes, newNote]
    //                     })
    //                 });
    //             } else {
    //                 return prev;
    //             }
    //         }
    //     })
    // }

    render() {
        const {data: {loading, error, bucket}, match} = this.props;
        if (loading) {
            return <BucketHeader bucketId={match.params.bucketId}/>;
        }
        if (error) {
            return <p>{error.message}</p>;
        }

        // if (bucket.notes === null) {
            return (
                <div className="container">
                    <h2>{bucket.name} {bucket.description}</h2>
                    {/*<AddNote/>*/}
                </div>
            );
        // }

        // return (
        //     <div className="container">
        //         <div className="row"><h2>{bucket.firstName} {bucket.lastName}</h2></div>
        //         <Notelist notes={bucket.notes}/>
        //         <AddNote/>
        //     </div>
        // );
    }
}

export const bucketSingleQuery = gql`
  query BucketSingleQuery($bucketId: ID!) {
    bucket(id: $bucketId) {
        id
        name
        description
        profileId
    }
  }
`;

// const notesSubscription = gql`
//   subscription noteAdded($bucketId: ID!) {
//     noteAdded(bucketId: $bucketId) {
//       id
//       details
//     }
//   }
// `;

export default (graphql(bucketSingleQuery, {
    options: (props) => ({
        variables: {bucketId: props.match.params.bucketId},
    }),
})(BucketSingle));
