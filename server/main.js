import { Meteor } from 'meteor/meteor';
import { Profiles } from '../imports/api/profiles';
import { Buckets } from '../imports/api/buckets';
import { Costs } from '../imports/api/costs';
import { Tasks } from '../imports/api/tasks';

Meteor.startup(() => {
    Meteor.publish('profiles', function() {
        return Profiles.find({});
    });
    Meteor.publish('buckets', function() {
        return Buckets.find({});
    });
    Meteor.publish('costs', function() {
        return Costs.find({});
    });
    Meteor.publish('tasks', function() {
        return Tasks.find({});
    });
});

// Insert user

Meteor.methods({
    insertUser: function(newUserData) {
        return Accounts.createUser(newUserData);
    }
});