import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import {Costs} from '../../api/costs';
import Menu from '../../components/MenuComponent';
import Footer from '../../components/FooterComponent';


class CostRow extends Component {
    handleClick() {
    }

    render() {
        const collection = Costs.find().fetch();
        return (
            collection.map(function (cost) {
                    return (
                        <tr>
                            <td>{cost._id}</td>
                            <td>{cost.name}</td>
                            <td>{cost.amount}</td>
                            <td>{cost.status}</td>
                            <td>{cost.createdAt.toString()}</td>
                            <td>{cost.createdBy}</td>
                            <td><Button name='Edit' type='button' onClick={this.handleClick}>Edit</Button></td>
                            <td><Button name='Delete' type='button' onClick={this.handleClick}>Delete</Button></td>
                        </tr>
                    )
                }
            )
        );
    }
}

class CostTable extends Component {
    render() {
        return (
            <Table responsive striped bordered condensed hover style={{width: '100%'}}>
                <thead>
                <tr>
                    <th>#</th>
                    <th className='sorted-by'>Cost</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Created By</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <CostRow/>
                </tbody>
            </Table>
        );
    }
}

export default class CostView extends Component {
    render() {
        return (
            <div className='buckets' style={{width: '1080px'}}>
                <Menu/>
                <h3 className='text-primary'>View costs list</h3>
                <Button href='cost-create'>Create</Button>
                <CostTable/>
                <Footer/>
            </div>
        );
    }
}
