import React, {Component} from 'react';
import Menu from "../../components/MenuComponent";

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menu/>
                HOME
                {/* TODO - Complete home view / landing page */}
            </div>
        );
    }
}