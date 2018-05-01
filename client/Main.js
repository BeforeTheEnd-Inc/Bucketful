import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {render} from 'react-dom';
import React from 'react';

import Index from "./IndexComponent";

import 'bootstrap/dist/css/bootstrap.min.css';

Meteor.startup(() => {
    Tracker.autorun(() => {
        render(<Index/>, document.getElementById('container'));
    });
});
