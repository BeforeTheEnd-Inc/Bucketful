import React, {Component} from 'react';
import {ApolloClient, ApolloProvider, createNetworkInterface, toIdValue} from 'react-apollo';
import {SubscriptionClient, addGraphQLSubscriptions} from 'subscriptions-transport-ws';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Profiles from './profile/Profiles';
import AddProfile from './profile/AddProfile';
import ProfileSingle from './profile/ProfileSingle';
import Buckets from './bucket/Buckets';
import AddBucket from './bucket/AddBucket';
import BucketSingle from './bucket/BucketSingle';

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
)

const dataIdFromObject = (result) => {
    if (result.__typename) {
        if (result.id !== undefined) {
            return `${result.__typename}:${result.id}`
        }
    }
    return null;
}

const client = new ApolloClient({
    networkInterface: networkInterfaceWithSubscriptions,
    customResolvers: {
        Query: {
            profile: (__, args) => {
                return toIdValue(dataIdFromObject({__typename: 'Profile', id: args['id']}))
            },
        },
    },
    dataIdFromObject,
})

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <div>
                        <div className="navbar-fixed">
                            <nav className="purple darken-1">
                                <div className="nav-wrapper">
                                    <Link to="/" className="brand-logo center">Bucketful Database</Link>
                                </div>
                            </nav>
                        </div>
                        <AddProfile/>
                        <Switch>
                            <Route exact path="/" component={Profiles}/>
                            <Route path="/profile/:profileId" component={ProfileSingle}/>
                        </Switch>
                        <AddBucket/>
                        <Switch>
                            <Route exact path="/" component={Buckets}/>
                            <Route path="/bucket/:bucketId" component={BucketSingle}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </ApolloProvider>
        );
    }
}

export default App;
