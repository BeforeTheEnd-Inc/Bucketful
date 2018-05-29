import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


export const Costs = new Mongo.Collection('costs');

const Schema = {};

Schema.Cost = new SimpleSchema(
    {
        name: {
            type: String,
            label: 'Cost',
            optional: false
        },
        amount: {
            type: Number,
            label: 'Amount',
            optional: false
        },
        status: {
            type: String,
            label: 'Status',
            allowedValues: ["Active", "Inactive"],
            optional: false
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

Costs.attachSchema(Schema.Cost);
