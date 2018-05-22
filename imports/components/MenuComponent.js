import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignInModal from "../ui/signIn/SignInModal";

export default class MenuComponent extends Component {

    constructor() {
        super();

        this.handleSignInClick = this.handleSignInClick.bind(this);
    }

    handleSignInClick() {
        return (
            <SignInModal/>
        )
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavDropdown title="Buckets" id="basic-nav-dropdown">
                        <NavItem href='/viewbuckets'>Buckets</NavItem>
                        <NavItem href='/addbucket'>Add Bucket</NavItem>
                        <NavItem href='/detail'>Bucket Detail</NavItem>
                    </NavDropdown>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <SignInModal/>
                        <NavItem href='/signup'>Sign Up</NavItem>
                        <NavItem href="#">Sign Out</NavItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    };
};