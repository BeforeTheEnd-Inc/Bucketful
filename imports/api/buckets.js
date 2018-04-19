// import {Mongo} from 'meteor/mongo';
// import {Tasks} from './tasks';
// import {Costs} from './costs';
// import SimpleSchema from 'simple-schema';
//
// export const Buckets = new Mongo.Collection('buckets');
//
// const BucketSchema = new SimpleSchema({
//     _id: Number,
//     name: String,
//     description: String,
//     profileID: Number,
//     status: String,
//     image: String,
//     category: String,
//     progress: String,
//     tasks: [Tasks],
//     costs: [Costs],
// });
//
// Buckets.attachSchema(BucketSchema);
//
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
