import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import TaskViewTableRow from './TaskViewTableRow';


class TaskViewTable extends Component {
    render() {
        return (
            <Table responsive striped bordered condensed hover style={{width: '100%'}}>
                <thead>
                <tr>
                    <th>#</th>
                    <th className='sorted-by'>Task</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Created By</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <TaskViewTableRow />
                </tbody>
            </Table>
        );
    }
}

export default TaskViewTable;
