import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import ProfileView from '../imports/ui/profile/ProfileView';
import BucketViewComponent from '../imports/ui/buckets/BucketView';
import AddBucketComponent from "../imports/ui/buckets/AddBucket";
import SignUpComponent from "../imports/ui/signUp/SignUpComponent";
import BucketDetailComponent from "../imports/ui/buckets/BucketDetail";
import HomeView from "../imports/ui/home/HomeView";

export default class Index extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomeView} />
                    <Route path='/profile' component={ProfileView} />
                    <Route path ='/viewbuckets' component={BucketViewComponent} />
                    <Route path ='/addbucket' component={AddBucketComponent} />
                    <Route path ='/signup' component={SignUpComponent} />
                    <Route path ='/detail' component={BucketDetailComponent} />
                    {/*<Route path ='/signin' component={SignInComponent} />*/}
                </Switch>
            </BrowserRouter>
        );
    }
}
