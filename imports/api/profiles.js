// import Meteor from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import React from 'react';
import SimpleSchema from 'simpl-schema';


export const Profiles = new Mongo.Collection('profiles');

const Schema = {};

Schema.Profile = new SimpleSchema({
    firstname: {
        type: String,
        optional: false
    },
    lastname: {
        type: String,
        optional: false
    },
    email: {
        type: String,
        optional: false
    },
    birthday: {
        type: Date,
        optional: false
    },
    gender: {
        type: String,
        allowedValues: ['male', 'female', 'preferNo'],
        optional: false
    },
    createdAt: {
        type: Date
    },
    phone: {
        type: String,
        optional: true
    },
    address: {
        type: String,
        optional: true
    },
    city: {
        type: String,
        optional: true
    },
    state: {
        type: String,
        optional: true
    },
    postalCode: {
        type: String,
        optional: true
    },
    country: {
        type: String,
        optional: true
    },
    bio: {
        type: String,
        optional: true
    },
    image: {
        type: String,
        optional: true
    },
    bannerImage: {
        type: String,
        optional: true
    },
    quote: {
        type: String,
        optional: true
    },
    status: {
        type: String,
        allowedValues: ['Active', 'Inactive'],
        optional: true
    }
});

Profiles.attachSchema(Schema.Profile);
