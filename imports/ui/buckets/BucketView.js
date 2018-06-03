import React, {Component} from 'react';
import Menu from "../../components/MenuComponent";
import Buckets from '../../api/buckets';

import "../css/AddItemSheet.css";
import '../css/BucketSheet.css';
import AddItemModal from "./AddItemModal";

import Label from "../../components/LabelComponent";

export default class BucketView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false
        };

        props.disabledButton = this.state.disabled ? 'disabled' : '';

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
    notActiveList = [];
    completedList = [];

    methodBinder = () => {
        this.setActive = this.setActive.bind(this);
        this.setComplete = this.setComplete.bind(this);
        this.setInactive = this.setInactive.bind(this);
        this.setDisabled = this.setDisabled.bind(this);
        this.buildBucketItems = this.buildBucketItems.bind(this);
    };

    handleViewItem = () => {
        window.alert("Adding pop over");
    };

    setDisabled = (e) => {

        if (e.target.id === 'active') {
            console.log("Active button clicked");
            this.setComplete(true);
            this.setInactive(true);
            this.setActive(false);
            console.log("Setting completed and inactive buttons disabled");
        } else if (e.target.id === 'inactive') {
            console.log("InActive button clicked");
            this.setActive(true);
            this.setComplete(true);
            this.setInactive(false);
            console.log("Setting completed and active buttons disabled");
        } else if (e.target.id === 'completed') {
            console.log("Completed button clicked");
            this.setActive(true);
            this.setInactive(true);
            this.setComplete(false);
            console.log("Setting active and inactive buttons disabled");
        }
    };

    setActive = (e) => {
        this.setState(prevState => (
            {disabled: !prevState.disabled}
        ));
        console.log("isActive " + !e.valueOf());
    };

    setComplete = (e) => {
        this.setState(prevState => (
            {disabled: !prevState.disabled}
        ));
        console.log( "isComplete " + !e.valueOf());
    };

    setInactive = (e) => {
        this.setState(prevState => (
            {disabled: !prevState.disabled}
        ));
        console.log("isInActive " + !e.valueOf());
    };

    buildBucketItems = () => {
        let gridItem = null;
        this.bucketItems.map((val) => {
            gridItem = (
                <button
                    disabled={!this.state.disabled}
                    type='submit'
                    key={val.id}
                    className='new-bucket-grid-item'
                    onClick={() => this.handleViewItem}
                >
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
                <Label type='3' label='Fill those Buckets!'/>
                <br/>
                <div id='new-bucket-container'>
                    <div className='bucket-grid-controls'>
                        <button id='active' type='submit' className='grid-control'
                                onClick={this.setDisabled}>Active</button>
                        <br/>
                        <button id='inactive' type='submit' className='grid-control'
                                onClick={this.setDisabled}>Inactive</button>
                        <br/>
                        <button id='completed' type='submit' className='grid-control'
                                onClick={this.setDisabled}>Completed</button>
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