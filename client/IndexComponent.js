import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Login from '../imports/components/LoginComponent';
import ProfileView from '../imports/ui/profile/ProfileView';

export default class Index extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ProfileView} />
                </Switch>
            </BrowserRouter>
        );
    }
}
