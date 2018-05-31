import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import BucketsRow from './BucketRow';

class BucketsTable extends Component {
    render() {
        return (
            <Table responsive striped bordered condensed hover style={{width: '100%'}}>
                <thead>
                <tr>
                    <th>#</th>
                    <th className='sorted-by'>Bucket Name</th>
                    <th>Category</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <BucketsRow/>
                </tbody>
            </Table>
        );
    }
}

export default BucketsTable;
