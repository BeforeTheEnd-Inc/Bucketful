import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import {Profiles} from '../../api/profiles';
import Menu from '../../components/MenuComponent';
import Footer from '../../components/FooterComponent';


class UserRow extends Component {
    handleClick() {
    }

    render() {
        const collection = Profiles.find().fetch();
        return (
            collection.map(function (profile) {
                    return (
                        <tr>
                            <td>{profile._id}</td>
                            <td>{profile.email}</td>
                            <td>{profile.firstName}</td>
                            <td>{profile.lastName}</td>
                            <td>{profile.status}</td>
                            <td>{profile.createdAt.toString()}</td>
                            <td>{profile.createdBy}</td>
                            <td><Button name='Edit' type='button' onClick={this.handleClick}>Edit</Button></td>
                            <td><Button name='Delete' type='button' onClick={this.handleClick}>Delete</Button></td>
                        </tr>
                    )
                }
            )
        );
    }
}

class UserTable extends Component {
    render() {
        return (
            <Table responsive striped bordered condensed hover style={{width: '100%'}}>
                <thead>
                <tr>
                    <th>#</th>
                    <th className='sorted-by'>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Created By</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <UserRow/>
                </tbody>
            </Table>
        );
    }
}

export default class UserView extends Component {
    render() {
        return (
            <div className='users' style={{width: '1080px'}}>
                <Menu/>
                <h3 className='text-primary'>View users list</h3>
                <Button href='user-create'>Create</Button>
                <UserTable/>
                <Footer/>
            </div>
        );
    }
}
