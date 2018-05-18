import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import ProfileView from '../imports/ui/profile/ProfileView';
import BucketViewComponent from '../imports/ui/buckets/BucketView';
import AddBucketComponent from "../imports/ui/buckets/AddBucket";
import SignUpComponent from "../imports/ui/signUp/SignUpComponent";
// import SignInComponent from "../imports/ui/signIn/SignInModal";

export default class Index extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ProfileView} />
                    <Route path ='/viewbuckets' component={BucketViewComponent} />
                    <Route path ='/addbucket' component={AddBucketComponent} />
                    <Route path ='/signup' component={SignUpComponent} />
                    {/*<Route path ='/signin' component={SignInComponent} />*/}
                </Switch>
            </BrowserRouter>
        );
    }
}
