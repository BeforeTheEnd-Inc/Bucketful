import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class MenuComponent extends Component {
    render () {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <Link to='/viewbuckets'>Bucket</Link>
                    <Link to='/addbucket'>Add Buckets</Link>
                    <Link to='/signup'>Sign Up</Link>
                </Nav>
            </Navbar>
        );
    };
};