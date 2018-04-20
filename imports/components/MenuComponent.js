import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default class MenuComponent extends Component {
    render () {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>Logo</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} onClick={this.clicked()}>
                        Buckets
                    </NavItem>
                    <NavItem eventKey={2} onClick={this.clicked('/addbucket')}>
                        Add Bucket
                    </NavItem>
                </Nav>
            </Navbar>
        );
    };

    clicked = () => {
        this.props.history.push('/viewbuckets')
    };
};