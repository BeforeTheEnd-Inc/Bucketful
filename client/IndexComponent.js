import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ProfileView from '../imports/ui/profile/ProfileView';
import BucketViewComponent from '../imports/ui/buckets/BucketView';
import AddBucketComponent from '../imports/ui/buckets/AddBucket';
import BucketView from '../imports/ui/bucket/BucketView';
import BucketCreate from '../imports/ui/bucket/BucketCreate';
import CostView from '../imports/ui/cost/CostView';
import CostCreate from '../imports/ui/cost/CostCreate';
import TaskView from '../imports/ui/task/TaskView';
import TaskCreate from '../imports/ui/task/TaskCreate';
import UserView from '../imports/ui/user/UserView';
import UserCreate from '../imports/ui/user/UserUpdate';
import RegisterSimple from '../imports/ui/user/RegisterSimple';
import Register from '../imports/ui/user/Register';
import RegisterExtended from '../imports/ui/user/RegisterExtended';
import SignUpComponent from '../imports/ui/signUp/SignUpComponent';

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ProfileView}/>
                    <Route path='/viewbuckets' component={BucketViewComponent}/>
                    <Route path='/addbucket' component={AddBucketComponent}/>
                    <Route path='/signup' component={SignUpComponent}/>
                    <Route path='/buckets' component={BucketView}/>
                    <Route path='/bucket-create' component={BucketCreate}/>
                    <Route path='/costs' component={CostView}/>
                    <Route path='/cost-create' component={CostCreate}/>
                    <Route path='/tasks' component={TaskView}/>
                    <Route path='/task-create' component={TaskCreate}/>
                    <Route path='/users' component={UserView}/>
                    <Route path='/user-create' component={UserCreate}/>
                    <Route path='/register-simple' component={RegisterSimple}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/register-extended' component={RegisterExtended}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Index;
