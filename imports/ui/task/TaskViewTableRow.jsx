import React, {Component} from 'react';
import {Tasks} from '../../api/tasks';
import {Button} from 'react-bootstrap';


class TaskViewTableRow extends Component {
    handleClick() {
    }

    render() {
        const collection = Tasks.find().fetch();

        return (
            collection.map(function (task) {
                return (
                    <tr>
                        <td>{task._id}</td>
                        <td>{task.name}</td>
                        <td>{task.status}</td>
                        <td>{task.createdAt.toString()}</td>
                        <td>{task.createdBy}</td>
                        <td><Button name='edit' type='button' onClick={this.handleClick}>Edit</Button></td>
                        <td><Button name='delete' type='button' onClick={this.handleClick}>Delete</Button></td>
                    </tr>
                )
            })
        );
    }
}

export default TaskViewTableRow;
