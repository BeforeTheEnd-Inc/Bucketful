import {Meteor} from 'meteor/meteor';
import {Buckets} from '../imports/api/buckets';
import {Costs} from '../imports/api/costs';
import {Countries} from '../imports/api/countries';
import {Profiles} from '../imports/api/profiles';
import {States} from '../imports/api/states';
import {Tasks} from '../imports/api/tasks';


Meteor.startup(() => {

    Meteor.publish('buckets', function () {
        return Buckets.find({})
    });

    Meteor.publish('costs', function () {
        return Costs.find({});
    });

    Meteor.publish('countries', function () {
        return Countries.find({});
    });

    Meteor.publish('profiles', function () {
        return Profiles.find({});
    });

    Meteor.publish('states', function () {
        return States.find({});
    });

    Meteor.publish('tasks', function () {
        return Tasks.find({});
    });

    Buckets.allow(
        {
            insert: () => {           //  bucketId, doc
                return true;
            },
            update: () => {           //  bucketId, doc, fieldNames, modifier
                return true;
            },
            remove: () => {           //  bucketId, doc
                return true;
            }
        }
    );

    Costs.allow(
        {
            insert: () => {           //  costId, doc
                return true;
            },
            update: () => {           //  costId, doc, fieldNames, modifier
                return true;
            },
            remove: () => {           //  costId, doc
                return true;
            }
        }
    );

    Countries.allow(
        {
            insert: () => {           //  countryId, doc
                return true;
            },
            update: () => {           //  countryId, doc, fieldNames, modifier
                return true;
            },
            remove: () => {           //  countryId, doc
                return true;
            }
        }
    );

    Profiles.allow(
        {
            insert: () => {           //  userId, doc
                return true;
            },
            update: () => {           //  userId, doc, fieldNames, modifier
                return true;
            },
            remove: () => {           //  userId, doc
                return true;
            }
        }
    );

    States.allow(
        {
            insert: () => {           //  stateId, doc
                return true;
            },
            update: () => {           //  stateId, doc, fieldNames, modifier
                return true;
            },
            remove: () => {           //  stateId, doc
                return true;
            }
        }
    );

    Tasks.allow(
        {
            insert: () => {           //  taskId, doc
                return true;
            },
            update: () => {           //  taskId, doc, fieldNames, modifier
                return true;
            },
            remove: () => {           //  taskId, doc
                return true;
            }
        }
    );

});
