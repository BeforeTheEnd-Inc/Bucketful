import React, {Component} from 'react';
import {Alert, Button, ControlLabel, Form, FormControl, FormGroup, ListGroup, Radio, Table} from 'react-bootstrap';
import {BucketCollection} from '../../api/buckets';

class BucketsRow extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         filter: ''
    //     }
    // }

    // updateFilter(event) {
    //     this.setState({filter: event.target.value.substr(0,20)});
    // }

    handleClick = () =>  {

    };

    // handleClick() {
    //     const file = BucketCollection.find().fetch();
    //     file;
    // }

    // getCollection() {
    //     this.setState({collection: BucketCollection.find().fetch()});
    //     if (typeof this.state.collection === !undefined) {
    //         this.setState({ready: true});
    //     }
    // }

    render() {
        const collection = BucketCollection.find().fetch();

        // let filteredBuckets = this.props.buckets.filter(
        //     (bucket) => {
        //         return bucket.bucketName.indexOf(this.state.filter) !== -1;
        //     }
        // );

        if (typeof collection === undefined) {
            return (
                <tr>
                    <td>
                        Loading...
                        <Button onClick={this.handleClick}>Click</Button>
                    </td>
                </tr>
            );
        }
        // return (<input type={text} value={this.state.filter} onChange={this.updateFilter.bind(this)} />);
        return (
            collection.map(
                (bucket) => (
                    <tr>
                        <td key={bucket._id}>{bucket._id}</td>
                        <td className='sorted-by'>{bucket.bucketName}</td>
                        <td>{bucket.category}</td>
                        <td>{bucket.status}</td>
                        {/*<td><Button type={submit} onClick={this.handleClick}>Edit</Button></td>*/}
                    </tr>
                )
            )
        );
    }
}

export default BucketsRow;
