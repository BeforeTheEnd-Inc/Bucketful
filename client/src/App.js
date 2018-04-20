import React, {Component} from 'react';
// import {Session} from 'meteor/session';
import {ApolloClient, ApolloProvider, createNetworkInterface, toIdValue} from 'react-apollo';
import {SubscriptionClient, addGraphQLSubscriptions} from 'subscriptions-transport-ws';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Profiles from './profile/Profiles';
import AddProfile from './profile/AddProfile';
import ProfileSingle from './profile/ProfileSingle';
import Buckets from './bucket/Buckets';
import AddBucket from './bucket/AddBucket';
import BucketSingle from './bucket/BucketSingle';

// Session.setDefault('sessionId', 0);

const PORT = 4000;

const networkInterface = createNetworkInterface({
    uri: `http://localhost:${PORT}/graphql`,
});

const wsClient = new SubscriptionClient(`ws://localhost:${PORT}/subscriptions`, {
    reconnect: true
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
    networkInterface,
    wsClient
);

const dataIdFromObject = (result) => {
    if (result.__typename) {
        if (result.id !== undefined) {
            return `${result.__typename}:${result.id}`
        }
    }
    return null;
};

const client = new ApolloClient({
    networkInterface: networkInterfaceWithSubscriptions,
    customResolvers: {
        Query: {
            profile: (__, args) => {
                return toIdValue(dataIdFromObject({__typename: 'Profile', profileId: args['profileId']}))
            },
            bucket: (__, args) => {
                return toIdValue(dataIdFromObject({__typename: 'Bucket', bucketId: args['bucketId']}))
            },
        },
    },
    dataIdFromObject,
});

const header = () => {
    return (
        <div className="navbar-fixed">
            <nav className="purple darken-1">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo center">Bucketful Database</Link>
                    <Link to="/Profiles">Profile</Link>
                    &nbsp;&nbsp;
                    <Link to="/Buckets">Bucket</Link>
                    &nbsp;&nbsp;
                    <Link to="/AddProfile">Add Profile</Link>
                    &nbsp;&nbsp;
                    <Link to="/AddBucket">Add Bucket</Link>

                </div>
            </nav>
        </div>
    );
}

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <div>
                        {header()}
                        <Switch>
                            <Route exact path="/Profiles" component={Profiles}/>
                            <Route path="/ProfileSingle/:profileId" component={ProfileSingle}/>
                            <Route path="/AddProfile" component={AddProfile}/>
                        </Switch>

                        <Switch>
                            <Route exact path="/Buckets" component={Buckets}/>
                            <Route path="/bucket/:bucketId" component={BucketSingle}/>
                            <Route path="/AddBucket" component={AddBucket}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </ApolloProvider>
        );
    }
}

export default App;
