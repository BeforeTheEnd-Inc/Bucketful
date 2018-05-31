import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Buckets = new Mongo.Collection('buckets');

const Schema = {};

Schema.Bucket = new SimpleSchema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    isActive: {
        type: Boolean
    },
    category: {
        type: String
    }

});

export default Buckets;

Buckets.attachSchema(Schema.Bucket);