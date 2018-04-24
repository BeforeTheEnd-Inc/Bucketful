// The display class of any bucket.  Must have render capabilities for a current bucket, completed bucket, and a reserve bucket
// The rendering is basically the same but is driven by each bucket object.

import React, {Component} from 'react';
import Menu from "../../components/MenuComponent";

export default class Bucket extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menu/>
                <p>This is the bucket view page</p>
            </div>
        );
    }
}