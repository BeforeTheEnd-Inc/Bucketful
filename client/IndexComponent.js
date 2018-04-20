import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import ProfileView from '../imports/ui/profile/ProfileView';
import BucketViewComponent from '../imports/ui/buckets/BucketView';
import AddBucketComponent from "../imports/ui/buckets/AddBucket";

export default class Index extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ProfileView} />
                    <Route path ='/viewbuckets' component={BucketViewComponent} />
                    <Route path ='/addbucket' component={AddBucketComponent} />
                </Switch>
            </BrowserRouter>
        );
    }
}
