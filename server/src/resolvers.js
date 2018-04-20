import {PubSub, withFilter} from 'graphql-subscriptions';

const pubsub = new PubSub();

const profiles = [
	{
        profileId: '1'
		, firstName: 'Manny'
		, lastName: 'Ramirez'
        , username: 'mramirez'
        , password: 'password'
	},
	{
        profileId: '2'
		, firstName: 'Jasmine'
		, lastName: 'Humphreys'
        , username: 'jhumphreys'
        , password: 'password'
	},
	{
        profileId: '3'
		, firstName: 'Jeremy'
		, lastName: 'Edwards'
        , username: 'jedwards'
        , password: 'password'
	}
];

const buckets = [
	{
        bucketId: '1'
        , profileId: '1'
		, name: 'Travel'
		, description: 'I love to travel!'
	},
	{
        bucketId: '2'
        , profileId: '2'
		, name: 'Golf'
		, description: 'I love to golf!'
	},
	{
        bucketId: '3'
        , profileId: '3'
		, name: 'Dining'
		, description: 'I love fancy places!'
	}
];

export const resolvers = {
	Query: {
		profiles: () => {
			return profiles;
		},
		profile: (root, {id}) => {
			return profiles.find(profile => profile.profileId === id);
		},
		buckets: () => {
			return buckets;
		},
		bucket: (root, {id}) => {
			return buckets.find(bucket => bucket.bucketId === id);
		},
	},

	Mutation: {

		addProfile: (root, args) => {
			const newProfile = {
                profileId: args.profileId,
				firstName: args.firstName,
				lastName: args.lastName,
                username: args.username,
                password: args.password,
                gender: args.gender,
                birthday: args.birthday,
                email: args.email,
                phone: args.phone,
                address: args.address,
                city: args.city,
                state: args.state,
                postalCode: args.postalCode,
                country: args.country,
                status: args.status
			};
			profiles.push(newProfile);
			return newProfile;
		},

        updateProfile: (root, args) => {
            const editProfile = {
                profileId: args.profileId,
                firstName: args.firstName,
                lastName: args.lastName,
                username: args.username,
                password: args.password,
                gender: args.gender,
                birthday: args.birthday,
                email: args.email,
                phone: args.phone,
                address: args.address,
                city: args.city,
                state: args.state,
                postalCode: args.postalCode,
                country: args.country,
                status: args.status
            };
            profiles.push(editProfile);
            return editProfile;
        },

		addBucket: (root, args) => {
			const newBucket = {
                bucketId: args.bucketId,
                profileId: args.profileId,
				name: args.name,
				description: args.description,
                category: args.category,
                image: args.image,
                progress: args.progress,
                status: args.status
			};
			buckets.push(newBucket);
			return newBucket;
		},

        updateBucket: (root, args) => {
            const editBucket = {
                bucketId: args.bucketId,
                profileId: args.profileId,
                name: args.name,
                description: args.description,
                category: args.category,
                image: args.image,
                progress: args.progress,
                status: args.status
            };
            buckets.push(editBucket);
            return editBucket;
        }

	}
};
