import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
// import {Profiles} from './profiles';
import {Tasks} from './tasks';
import {Costs} from './costs';


export const Buckets = new Mongo.Collection('buckets');

const Schema = {};

Schema.Bucket = new SimpleSchema(
    {
        profileID: {
            type: String,
            label: '',
            optional: false
        },
        name: {
            type: String,
            label: 'Bucket Name',
            optional: false
        },
        description: {
            type: String,
            label: 'Bucket Description',
            optional: false
        },
        image: {
            type: String,
            label: 'Image',
            optional: true
        },
        category: {
            type: String,
            label: 'Category',
            optional: false
        },
        progress: {
            type: String,
            label: 'Progress',
            optional: true
        },
        tasks: {
            type: Tasks,
            label: 'TaskView',
            optional: true
        },
        costs: {
            type: Costs,
            label: 'Costs',
            optional: true
        },
        status: {
            type: String,
            label: 'Status',
            allowedValues: ["Active", "Inactive"],
            optional: true
        },
        createdAt: {
            type: Date,
            label: 'Created At',
            optional: false
        },
        createdBy: {
            type: String,
            label: 'Created By',
            optional: false
        }
    }
);

Buckets.attachSchema(Schema.Bucket);
