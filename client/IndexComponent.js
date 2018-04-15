import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Login from '../imports/components/LoginComponent';
import Bucket from '../imports/ui/buckets/BucketView';

import ProfileView from '../imports/ui/profile/ProfileView';

export default class Index extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ProfileView} />
                    {/*<Route exact path='/' component={Bucket} />*/}
                </Switch>
            </BrowserRouter>
        );
    }
}
