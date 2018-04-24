// The display class of any bucket.  Must have render capabilities for a current bucket, completed bucket, and a reserve bucket
// The rendering is basically the same but is driven by each bucket object.

import React, {Component} from 'react';
import Menu from "../../components/MenuComponent";

export default class AddBucket extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menu/>
                <p>This is the add bucket page</p>
            </div>
        );
    }
}