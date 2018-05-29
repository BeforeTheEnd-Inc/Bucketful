import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar fixedBottom style={{width: '100%'}}>
                <Nav style={{flexDirection: 'row', fontSize: '8px'}}>
                    <NavItem href='/costs'>Cost List</NavItem>
                    <NavItem href='/tasks'>Task List</NavItem>
                    <NavItem href='/users'>User List</NavItem>
                    <NavItem href='/register-simple'>Register (Simple)</NavItem>
                    <NavItem href='/register'>Register</NavItem>
                    <NavItem href='/register-extended'>Register (Extended)</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Footer;
