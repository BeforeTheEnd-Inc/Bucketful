import React, {Component} from 'react';
import Menu from "../../components/MenuComponent";
import CheckBox from "../../components/CheckBoxComponent";
import Buckets from '../../api/buckets';
import {Nav, NavItem} from 'react-bootstrap';

import '../css/BucketSheet.css';
import {Link} from "react-router-dom";

export default class BucketView extends Component {
    constructor(props) {
        super(props);

        //Test data
        this.bucketItems = props.bucketItems = [
            {id: 'one', name: 'Camping', img: '', isActive: true},
            {id: 'two', name: 'Skydiving', img: '', isActive: false},
            {id: 'three', name: 'Safari', img: '', isActive: false},
            {id: 'four', name: 'Liverpool v. Man U', img: '', isActive: false},
            {id: 'five', name: 'Packers v. Bears', img: '', isActive: true},
            {id: 'six', name: 'Go Glamping', img: '', isActive: false},
            {id: 'seven', name: 'Retire Early', img: '', isActive: true},
            {id: 'eight', name: 'Own a Farm', img: '', isActive: true},
            {id: 'nine', name: 'Become a parent', img: '', isActive: false},
            {id: 'ten', name: 'Become Scrooge McDuck Rich', img: '', isActive: true}
        ];

        this.setActive = this.setActive.bind(this);
        this.setComplete = this.setComplete.bind(this);
    }

    allBucketItems = Buckets.find({}, {}).fetch();
    active = [];
    complete = [];
    gridItems = [];
    setActive(event) {
        console.log(this.active.values().isActive);
        return window.alert("Setting completed items disabled");
    }

    setComplete(event) {
        console.log(this.active.values().isActive);
        return window.alert("Setting active items disabled");
    }

    render() {
        let gridItem = null;
        let gridItemCopy = null;
        this.bucketItems.map((val) => {
            gridItem = (
                <button type='submit' key={val.id} className='new-bucket-grid-item' onClick={
                    () => window.alert("Redirecting to view bucket item")
                }>
                    <p>{val.name}</p>
                </button>
            );
            if (val.isActive) {
                this.active.push(gridItem);
            } else {
                this.complete.push(gridItem);
            }
            this.gridItems.push(gridItem);
        });
        return(
            <div>
                <Menu/>
                <h3>All your activity in one place!</h3>
                <br/>
                <div id='new-bucket-container'>
                    <div className='bucket-grid-controls'>
                        <button type='submit' className='grid-control' onClick={this.setActive}>Active</button>
                        <br/>
                        <button type='submit' className='grid-control' onClick={this.setComplete}>Completed</button>
                        <br/>
                        <button type='submit' className='grid-control' onClick={
                            () => window.alert("AddBucketModal goes here")
                        }>+</button>
                    </div>
                    <div id='new-bucket-grid-container'>
                        {this.gridItems}
                    </div>
                </div>
            </div>
        );
    };
}