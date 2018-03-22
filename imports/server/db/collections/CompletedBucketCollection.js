import {Mongo} from 'meteor/mongo';

const CompletedBuckets = new Mongo.Collection('CompletedBuckets');
export default CompletedBuckets;