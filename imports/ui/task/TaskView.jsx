import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import {Tasks} from '../../api/tasks';
import Menu from '../../components/MenuComponent';
import Footer from '../../components/FooterComponent';


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

class TaskView extends Component {
    render() {
        return (
            <div className='buckets' style={{width: '1080px'}}>
                <Menu/>
                <h3 className='text-primary'>View tasks list</h3>
                <Button href='task-create'>Create</Button>
                <TaskViewTable />
                <Footer/>
            </div>
        );
    }
}

export default TaskView;
