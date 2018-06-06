import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignInModal from "../ui/signIn/SignInModal.jsx";

export default class MenuComponent extends Component {

    constructor() {
        super();

        this.handleSignInClick = this.handleSignInClick.bind(this);
    }

    handleSignInClick = () => {
        return (
            <SignInModal/>
        );
    };

    handleSignOutClick(event) {
        event.preventDefault();

        Meteor.logout((err) => {
            if (err) {
                this.setState({
                    error: err.reason
                });
                alert("Error signing out");
            } else {
                // this.props.history.push('/');
                window.location.reload();
            }
        });
    };

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem href='/profile'>Profile</NavItem>
                    <NavItem href='/viewbucketitems'>View Your Items</NavItem>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <SignInModal/>
                        <NavItem href='/signup'>Sign Up</NavItem>
                        <NavItem onClick={this.handleSignOutClick}>Sign Out</NavItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    };
};