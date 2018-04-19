import {PubSub, withFilter} from 'graphql-subscriptions';

const pubsub = new PubSub();

const profiles = [
	{
		id: '1'
		, firstName: 'Manny'
		, lastName: 'Ramirez'
        , username: 'mramirez'
        , password: 'password'
	},
	{
		id: '2'
		, firstName: 'Jasmine'
		, lastName: 'Humphreys'
        , username: 'jhumphreys'
        , password: 'password'
	},
	{
		id: '3'
		, firstName: 'Jeremy'
		, lastName: 'Edwards'
        , username: 'jedwards'
        , password: 'password'
	}
];

const buckets = [
	{
		id: '1'
		, name: 'Travel'
		, description: 'I love to travel!'
		, profileId: '1'
	},
	{
		id: '2'
		, name: 'Golf'
		, description: 'I love to golf!'
		, profileId: '2'
	},
	{
		id: '3'
		, name: 'Dining'
		, description: 'I love fancy places!'
		, profileId: '3'
	}
];

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
	}
};
