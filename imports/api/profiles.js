import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import React from 'react';
import SimpleSchema from 'simpl-schema';
import {States} from './states';
import {Countries} from './countries';


export const Profiles = new Mongo.Collection('profiles');

const Schema = {};

Schema.Profile = new SimpleSchema(
    {
        firstName: {
            type: String,
            label: 'First Name',
            optional: true
        },
        lastName: {
            type: String,
            label: 'Last Name',
            optional: true
        },
        email: {
            type: String,
            label: 'Email',
            optional: false
        },
        // password: {
        //     type: String,
        //     optional: false
        // },
        birthday: {
            type: Date,
            label: 'Birthday',
            optional: true
        },
        gender: {
            type: String,
            label: 'Gender',
            allowedValues: ["Female", "Male", "NoAnswer"],
            optional: true
        },
        phone: {
            type: String,
            label: 'Phone',
            optional: true
        },
        address: {
            type: String,
            label: 'Address',
            optional: true
        },
        city: {
            type: String,
            label: 'City',
            optional: true
        },
        state: {
            type: States,
            label: 'State',
            optional: true
        },
        postalCode: {
            type: String,
            label: 'Postal Code',
            optional: true
        },
        country: {
            type: Countries,
            label: 'Country',
            optional: true
        },
        bio: {
            type: String,
            label: 'Biography',
            optional: true
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

Profiles.attachSchema(Schema.Profile);
