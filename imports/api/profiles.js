import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Profiles = new Mongo.Collection('profiles');

if (Meteor.isServer) {
    Profiles.allow({
        insert: function (userId, doc) {
            return false;
        },

        update: function (userId, doc, fieldNames, modifier) {
            return false;
        },

        remove: function (userId, doc) {
            return false;
        }
    });

    Profiles.deny({
        insert: function (userId, doc) {
            return true;
        },

        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },

        remove: function (userId, doc) {
            return true;
        }
    });
}

Profiles.attachSchema(new SimpleSchema({
    firstName: {
        type: String,
        label: "First Name",
        max: 100
    },
    lastName: {
        type: String,
        label: "Last Name",
        max: 100
    },
    username: {
        type: String,
        label: "Username",
        max: 100
    },
    password: {
        type: String,
        label: "Password",
        max: 100
    },
    gender: {
        type: String,
        label: "Gender",
        allowedValues: ['Female', 'Male'],
    },
    birthday: {
        type: Date,
        label: "Birthday"
    },
    email: {
        type: String,
        label: "Email",
        max: 100
    },
    phone: {
        type: String,
        label: "Phone",
        max: 100
    },
    address: {
        type: String,
        label: "Address",
        max: 100
    },
    city: {
        type: String,
        label: "City",
        max: 100
    },
    state: {
        type: String,
        label: "State",
        allowedValues: ['{AL} Alabama', '{AK} Alaska', '{AZ} Arizona', '{AR} Arkansas', '{CA} California', '{CO} Colorado', '{CT} Connecticut', '{DE} Delaware', '{DC} District Of Columbia', '{FL} Florida', '{GA} Georgia', '{HI} Hawaii', '{ID} Idaho', '{IL} Illinois', '{IN} Indiana', '{IA} Iowa', '{KS} Kansas', '{KY} Kentucky', '{LA} Louisiana', '{ME} Maine', '{MD} Maryland', '{MA} Massachusetts', '{MI} Michigan', '{MN} Minnesota', '{MS} Mississippi', '{MO} Missouri', '{MT} Montana', '{NE} Nebraska', '{NV} Nevada', '{NH} New Hampshire', '{NJ} New Jersey', '{NM} New Mexico', '{NY} New York', '{NC} North Carolina', '{ND} North Dakota', '{OH} Ohio', '{OK} Oklahoma', '{OR} Oregon', '{PA} Pennsylvania', '{RI} Rhode Island', '{SC} South Carolina', '{SD} South Dakota', '{TN} Tennessee', '{TX} Texas', '{UT} Utah', '{VT} Vermont', '{VA} Virginia', '{WA} Washington', '{WV} West Virginia', '{WI} Wisconsin', '{WY} Wyoming']
    },
    postalCode: {
        type: Number,
        label: "Postal Code"
    },
    country: {
        type: String,
        label: "Country",
        allowedValues: ['Not started', 'Travel', 'Entertainment', 'Sports']
    },
    status: {
        type: String,
        label: "Status",
        allowedValues: ['Active', 'Inactive']
    },
    createdAt: {
        type: Date,
        label: "Created At",
        defaultValue: new Date()
    },
    createdBy: {
        type: String,
        label: "Created By",
        defaultValue: Meteor.userId
    }
}));