// import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


export const States = new Mongo.Collection('states');

const Schema = {};

const codes = [
    "AL", "AK", "AZ", "AR",
    "CA", "CO", "CT",
    "DE", "DC",
    "FL",
    "GA",
    "HI",
    "ID", "IL", "IN", "IA",
    "KS", "KY",
    "LA",
    "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
    "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND",
    "OH", "OK", "OR",
    "PA",
    "RI",
    "SC", "SD",
    "TN", "TX",
    "UT",
    "VT", "VA",
    "WA", "WV", "WI", "WY"
];

const names = [
    "Alabama", "Alaska", "Arizona", "Arkansas",
    "California", "Colorado", "Connecticut",
    "Delaware", "District Of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky",
    "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
    "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
    "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina", "South Dakota",
    "Tennessee", "Texas",
    "Utah",
    "Vermont", "Virginia",
    "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

Schema.State = new SimpleSchema(
    {
        code: {
            type: String,
            label: 'Code',
            allowedValues: codes
        },
        name: {
            type: String,
            label: 'State',
            allowedValues: names
        }
    }
);

States.attachSchema(Schema.State);

if (Meteor.isServer) {
    if (States.findOne() == null) {
        let i;
        for (i = 0; i < codes.length; i++) {
            States.insert(
                {code: codes[i], name: names[i]}
            );
        }
    }
}
