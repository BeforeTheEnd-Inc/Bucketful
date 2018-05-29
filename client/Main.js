import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {render} from 'react-dom';
import React from 'react';

import Index from './IndexComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

Meteor.subscribe('buckets');
Meteor.subscribe('costs');
Meteor.subscribe('countries');
Meteor.subscribe('profiles');
Meteor.subscribe('states');
Meteor.subscribe('tasks');
Meteor.subscribe('users');

Meteor.startup(() => {
    Tracker.autorun(() => {
        render(<Index/>, document.getElementById('container'));
    });
});
