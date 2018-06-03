import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import ProfileView from '../imports/ui/profile/ProfileView';
import BucketViewComponent from '../imports/ui/buckets/BucketView';

import SignUpComponent from "../imports/ui/signUp/SignUpComponent";
import HomeView from "../imports/ui/home/HomeView";

export default class Index extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomeView} />
                    <Route path='/profile' component={ProfileView} />
                    <Route path ='/viewbucketitems' component={BucketViewComponent} />
                    <Route path ='/signup' component={SignUpComponent} />
                    {/*<Route path ='/signin' component={SignInComponent} />*/}
                </Switch>
            </BrowserRouter>
        );
    }
}
