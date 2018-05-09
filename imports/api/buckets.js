import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Buckets = new Mongo.Collection('buckets');

const Schema = {};

Schema.Bucket = new SimpleSchema({
    name: {
        type: String
    },
    description: {
        type: String
    }
});

Buckets.attachSchema(Schema.Bucket);


// const BucketSchema = new SimpleSchema({
//     _id: Number,
//     name: String,
//     description: String,
//     profileID: Number,
//     status: String,
//     image: String,
//     category: String,
//     progress: Number,
//     tasks: [Tasks],
//     costs: [Costs],
// });


// const BucketSchema = new SimpleSchema({
//
//   name: { type: String },
//   description: { type: String },
//   profileID: { type: Number},
//   status: { type: String, defaultValue: 'Active'},
//   image: { type: String, defaultValue: null},
//   category: { type: String, defaultValue: null},
//   progress: { type: String, defaultValue: null},
//   tasks: {type: Array[Tasks]},
//   costs: {type: Array[Costs]},
// });

// Buckets.attachSchema(BucketSchema);