import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
  scalar Date

	type Profile {
		profileId: String!,
		firstName: String,
		lastName: String,
		username: String!,
		password: String!,
        gender: String,
        birthday: Date,
        email: String,
        phone: String,
        address: String,
        city: String,
        state: String,
        postalCode: Int,
        country: String,
        status: String
	}

	type Bucket {
		bucketId: String!,
        profileId: String!,
        name: String!,
        description: String,
        category: String,
        image: String,
        progress: String,
        status: String
	}

	input TaskInput {
		bucketId: String!,
		name: String!,
		status: Boolean,
	}

	input CostInput {
		bucketId: String!,
		name: String!,
		cost: Float
	}

	type Query {
		profiles: [Profile],
		profile(profileId: String!): Profile,
		buckets: [Bucket],
		bucket(bucketId: String!): Bucket
	}

	type Mutation {
		addProfile(
			profileId: String!,
			firstName: String,
			lastName: String,
			username: String!,
			password: String!,
			gender: String,
			birthday: Date,
			email: String,
			phone: String,
			address: String,
			city: String,
			state: String,
			postalCode: Int,
			country: String,
			status: String
		): Profile

		updateProfile(
			profileId: String!,
			firstName: String,
			lastName: String,
			username: String!,
			password: String!,
			gender: String,
			birthday: Date,
			email: String,
			phone: String,
			address: String,
			city: String,
			state: String,
			postalCode: Int,
			country: String,
			status: String
		): Profile

		addBucket(
			bucketId: String!,
			profileId: String!,
			name: String!,
			description: String,
			category: String,
			image: String,
			progress: String,
			status: String
		): Bucket

		updateBucket(
			bucketId: String!,
			profileId: String!,
			name: String!,
			description: String,
			category: String,
			image: String,
			progress: String,
			status: String
		): Bucket

	}
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export {schema};
