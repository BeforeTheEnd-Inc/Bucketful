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