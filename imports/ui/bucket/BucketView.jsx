import React, {Component} from 'react';
import BucketsTable from './BucketsTable';
import Menu from '../../components/MenuComponent';

class BucketView extends Component {
    render() {
        return (
            <div className='buckets' style={{width: '800px'}}>
                <Menu/>
                <h3 className='text-primary'>View buckets list</h3>
                <BucketsTable/>
            </div>
        );
    }
}

export default BucketView;
