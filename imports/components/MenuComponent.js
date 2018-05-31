import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class MenuComponent extends Component {
    render() {
        return (
            <Navbar style={{width: '1080px'}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/' style={{height: 'auto', fontSize: '18px'}}>Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav style={{flexDirection: 'row', fontSize: '12px'}}>
                    <NavItem href='/viewbuckets'>Buckets</NavItem>
                    <NavItem href='/addbucket'>Add Buckets</NavItem>
                    <NavItem href='/signup'>Sign Up</NavItem>
                </Nav>
            </Navbar>
        );
    }
}
