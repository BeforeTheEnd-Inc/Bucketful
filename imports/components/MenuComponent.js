import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class MenuComponent extends Component {

    navbarStyle = {
        width: "770px"
    };

    navStyle = {
        flexDirection: "row"
    };

    linkStyle = {
        height: "auto",
        fontSize: "16px"
    };

    render() {
        return (
            <Navbar style={this.navbarStyle}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/' style={this.linkStyle}>Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav style={this.navStyle}>
                    <NavItem href='/viewbuckets'>Buckets</NavItem>
                    <NavItem href='/addbucket'>Add Buckets</NavItem>
                    <NavItem href='/signup'>Sign Up</NavItem>
                </Nav>
            </Navbar>
        );
    };
};