import {PubSub, withFilter} from 'graphql-subscriptions';

const pubsub = new PubSub();

const profiles = [
    {
        id: '1'
        ,firstName: 'Manny'
        ,lastName: 'Henri'
        // ,notes: [
        //     {
        //         id: '1',
        //         details: 'I think this guy is an author at linkedin'
        //     },
        //     {
        //         id: '2',
        //         details: 'His name is Manny'
        //     }
        // ]
    },
    {
        id: '2'
        ,firstName: 'Jasmine'
        ,lastName: 'Henri-Rainville'
        // ,notes: [
        //     {
        //         id: '1',
        //         details: 'I think this guy is an author at linkedin'
        //     },
        //     {
        //         id: '2',
        //         details: 'His name is Manny'
        //     }
        // ]
    },
    {
        id: '3'
        ,firstName: 'Jeremy'
        ,lastName: 'Henri-Rainville'
        // ,notes: [
        //     {
        //         id: '1',
        //         details: 'I think this guy is an author at linkedin'
        //     },
        //     {
        //         id: '2',
        //         details: 'His name is Manny'
        //     }
        // ]
    }
]

export const resolvers = {
    Query: {
        profiles: () => {
            return profiles;
        },
        profile: (root, {id}) => {
            return profiles.find(profile => profile.id === id);
        },
    },
    Mutation: {
        addProfile: (root, args) => {
            const newProfile = {
                id: args.id
                , firstName: args.firstName
                , lastName: args.lastName
                // ,notes: []
            };
            profiles.push(newProfile);
            return newProfile;
        }
        // ,addNote: (root, {note}) => {
        //     const newId = require('crypto').randomBytes(5).toString('hex');
        //     const profile = profiles.find(profile => profile.id === note.profileId);
        //     const newNote = {id: String(newId), details: note.details};
        //     profile.notes.push(newNote);
        //     pubsub.publish('noteAdded', {noteAdded: newNote, profileId: note.profileId});
        //     return newNote;
        // }
    }
    // Subscription: {
    //     noteAdded: {
    //         subscribe: withFilter(() =>
    //             pubsub.asyncIterator('noteAdded'), (payload, variables) => {
    //             return payload.profileId === variables.profileId;
    //         }),
    //     }
    // },
};
