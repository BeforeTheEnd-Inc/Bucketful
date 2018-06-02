import React, {Component} from 'react';
import Menu from "../../components/MenuComponent";
import Buckets from '../../api/buckets';

import "../css/AddItemSheet.css";
import '../css/BucketSheet.css';
import AddItemModal from "./AddItemModal";
import {NavItem} from "react-bootstrap";

export default class BucketView extends Component {
    constructor(props) {
        super(props);

        // Test data
        // if an activity is in the active state then it can't be complete
        // if an activity is not in the active state and the activity isn't complete, then it's considered inactive
        // otherwise the activity is complete
        this.bucketItems = props.bucketItems = [
            {id: 'one', name: 'Camping', img: '', isActive: true, complete: false},
            {id: 'two', name: 'Skydiving', img: '', isActive: false, complete: true},
            {id: 'three', name: 'Safari', img: '', isActive: false, complete: false},
            {id: 'four', name: 'Liverpool v. Man U', img: '', isActive: false, complete: true},
            {id: 'five', name: 'Packers v. Bears', img: '', isActive: true, complete: false},
            {id: 'six', name: 'Go Glamping', img: '', isActive: false, complete: false},
            {id: 'seven', name: 'Retire Early', img: '', isActive: true, complete: false},
            {id: 'eight', name: 'Own a Farm', img: '', isActive: true, complete: false},
            {id: 'nine', name: 'Become a parent', img: '', isActive: false, complete: true},
            {id: 'ten', name: 'Become Scrooge McDuck Rich', img: '', isActive: true, complete: false}
        ];

        this.methodBinder();
    }

    isActiveList = [];
    notActiveList =[];
    completedList = [];

    methodBinder = () => {
        this.setActive = this.setActive.bind(this);
        this.setComplete = this.setComplete.bind(this);
        this.setInactive = this.setInactive.bind(this);
        this.buildBucketItems = this.buildBucketItems.bind(this);
    };

    handleViewItem = (e) => {
        return (
            <NavItem to={"/" + e.target.value}>Hi</NavItem>
        );
    };

    onChange = (e) => {
        this.setState({value: e.target.value});
    };

    setActive = () => {
        console.log(this.completedList);
        return window.alert("Setting completed items disabled");
    };

    setComplete = () => {
        console.log(this.isActiveList);
        return window.alert("Setting active items disabled");
    };

    setInactive = () => {
        console.log(this.notActiveList);
        return window.alert("Setting active and completed items disabled");
    };

    buildBucketItems = () => {
        let gridItem = null;
        this.bucketItems.map((val) => {
            gridItem = (
                <button type='submit' key={val.id} className='new-bucket-grid-item' onClick={
                    () => window.alert("Redirecting to view bucket item")
                }>
                    <p>{val.name}</p>
                </button>
            );
            if (val.isActive && !val.complete) {
                this.isActiveList.push(gridItem);
            } else if (!val.isActive  && !val.complete){
                this.notActiveList.push(gridItem);
            } else {
                this.completedList.push(gridItem);
            }
        });
    };

    render() {

        this.buildBucketItems();

        return(
            <div>
                <Menu/>
                <h3>All your activity in one place!</h3>
                <br/>
                <div id='new-bucket-container'>
                    <div className='bucket-grid-controls'>
                        <button type='submit' className='grid-control' onClick={this.setActive}>Active</button>
                        <br/>
                        <button type='submit' className='grid-control' onClick={this.setInactive}>Inactive</button>
                        <br/>
                        <button type='submit' className='grid-control' onClick={this.setComplete}>Completed</button>
                        <br/>
                        <AddItemModal/>
                    </div>
                    <div id='new-bucket-grid-container'>
                        {this.isActiveList}
                        {this.notActiveList}
                        {this.completedList}
                    </div>
                </div>
            </div>
        );
    };
}