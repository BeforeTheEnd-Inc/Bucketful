import { Mongo } from 'meteor/mongo';
import { Tasks } from './tasks';
import { Costs } from './costs';
import SimpleSchema from 'simpl-schema';


export const Buckets = new Mongo.Collection('buckets');

const BucketSchema = new SimpleSchema({
    _id: Number,
    name: String,
    description: String,
    profileID: Number,
    isActive: String,
    image: String,
    category: String,
    progress: String,
    tasks: [Tasks],
    costs: [Costs],
});

