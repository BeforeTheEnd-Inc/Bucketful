import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


export const Tasks = new Mongo.Collection('tasks');

const Schema = {};

Schema.Task = new SimpleSchema(
    {
        name: {
            type: String,
            label: 'Task',
            optional: false,
        },
        status: {
            type: String,
            label: 'Status',
            allowedValues: ["Active", "Inactive"],
            optional: false,
        },
        createdAt: {
            type: Date,
            label: 'Created At',
            optional: false,
        },
        createdBy: {
            type: String,
            label: 'Created By',
            optional: false,
        }
    }
);

Tasks.attachSchema(Schema.Task);
