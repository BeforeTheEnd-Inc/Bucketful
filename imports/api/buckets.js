import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Buckets = new Mongo.Collection('buckets');

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

Buckets.attachSchema(Schema.Bucket);