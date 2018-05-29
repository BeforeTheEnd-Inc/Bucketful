import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import TaskViewTable from './TaskViewTable'
import Menu from '../../components/MenuComponent';
import Footer from '../../components/FooterComponent';


class TaskView extends Component {
    render() {
        return (
            <div className='buckets' style={{width: '800px'}}>
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
