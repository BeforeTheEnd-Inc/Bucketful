const typeDefs = `
  scalar Date

    type Profile {
        id: String!
        firstName: String!
        lastName: String!
        username: String
        password: String
        gender: String
        address: String
        city: String
        state: String
        postalCode: Int
        country: String
        phone: String
        email: String
        birthday: Date
        status: String
    }

    type Bucket {
        id: String!
        name: String!
        description: String
        profileID: String!
        status: String
        image: String
        category: String
        progress: String
    }

    input TaskInput {
        bucketId: String!
        name: String
        status: Boolean
    }

    input CostInput {
        bucketId: String!
        name: String
        cost: Float
    }

    type Query {
        profiles: [Profile]
        profile(id: String!): Profile

        buckets: [Bucket]
        bucket(id: String!): Bucket
    }

    type Mutation {
        addProfile(
            id: String!
            firstName: String!
            lastName: String!
        ): Profile
        
        updateProfile(
            id: String!
            firstName: String! 
            lastName: String!
            username: String
            password: String
            gender: String
            address: String
            city: String
            state: String
            postalCode: Int
            country: String
            phone: String
            email: String
            birthday: Date
            status: String
        ): Profile

        addBucket(
            id: String!
            name: String!
            description: String
            profileID: String!
            status: String
            image: String
            category: String
            progress: String
        ): Bucket
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export {schema};
