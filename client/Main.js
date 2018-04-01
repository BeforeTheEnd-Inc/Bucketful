import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import { render } from 'react-dom';
import React from 'react';

import Index from  "../client/IndexComponent";

Meteor.startup(() => {
    Tracker.autorun(() => {
        render(<Index/>, document.getElementById('container'));
    });
});
