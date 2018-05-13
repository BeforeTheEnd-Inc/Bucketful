import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class MenuComponent extends Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem href='/viewbuckets'>Buckets</NavItem>
                    <NavItem href='/addbucket'>Add Buckets</NavItem>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavItem href='#'>Sign In</NavItem>
                        <NavItem href='/signup'>Sign Up</NavItem>
                        <NavItem href="#">Sign Out</NavItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    };
};