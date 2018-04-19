import {PubSub, withFilter} from 'graphql-subscriptions';

const pubsub = new PubSub();

const profiles = [
    {
        id: '1'
        ,firstName: 'Manny'
        ,lastName: 'Henri'
    },
    {
        id: '2'
        ,firstName: 'Jasmine'
        ,lastName: 'Henri-Rainville'
    },
    {
        id: '3'
        ,firstName: 'Jeremy'
        ,lastName: 'Henri-Rainville'
    }
]

const buckets = [
    {
        id: '1'
        ,name: 'Travel'
        ,description: ''
        ,profileId: '1'
    },
    {
        id: '2'
        ,name: 'Golf'
        ,description: 'Henri-Rainville'
        ,profileId: '2'
    },
    {
        id: '3'
        ,name: 'Jeremy'
        ,description: 'Henri-Rainville'
        ,profileId: '1'
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
        buckets: () => {
            return buckets;
        },
        bucket: (root, {id}) => {
            return buckets.find(bucket => bucket.id === id);
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
        },
        addBucket: (root, args) => {
            const newBucket = {
                id: args.id
                , name: args.name
                , description: args.description
                , profileId: args.profileId
            };
            buckets.push(newBucket);
            return newBucket;
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
