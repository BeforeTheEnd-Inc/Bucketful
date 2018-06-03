import React, {Component} from 'react';
import Menu from "../../components/MenuComponent";
import Buckets from '../../api/buckets';

import "../css/AddItemSheet.css";
import '../css/BucketSheet.css';
import AddItemModal from "./AddItemModal";

import Label from "../../components/LabelComponent";

import {Button, ButtonToolbar, OverlayTrigger, Popover} from "react-bootstrap";

export default class BucketView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            show: false
        };

        props.disabledButton = this.state.disabled ? 'disabled' : '';

        // Test data
        // if an activity is in the active state then it can't be complete
        // if an activity is not in the active state and the activity isn't complete, then it's considered inactive
        // otherwise the activity is complete
        this.bucketItems = props.bucketItems = [
            {id: 'one', name: 'Camping', description: '2 week survival training', img: '', isActive: true, complete: false},
            {id: 'two', name: 'Skydiving', description: 'Tandem or solo', img: '', isActive: false, complete: true},
            {id: 'three', name: 'Safari', description: 'Africa with friends', img: '', isActive: false, complete: false},
            {id: 'four', name: 'Liverpool v. Man U', description: 'U.K. baby U.K.', img: '', isActive: false, complete: true},
            {id: 'five', name: 'Packers v. Bears', description: 'Beeeeaaaarrrrsssss.....', img: '', isActive: true, complete: false},
            {id: 'six', name: 'Go Glamping', description: 'Rent a Camper and take every thing I can with me', img: '', isActive: false, complete: false},
            {id: 'seven', name: 'Retire Early', description: 'By 45 at the latest', img: '', isActive: true, complete: false},
            {id: 'eight', name: 'Own a Farm', description: 'Organic only.  Grass-fed everything!',img: '', isActive: true, complete: false},
            {id: 'nine', name: 'Become a parent', description: 'Biological clock is running out....', img: '', isActive: false, complete: true},
            {id: 'ten', name: 'Become Scrooge McDuck Rich', description: 'Stupid rich', img: '', isActive: true, complete: false}
        ];

        props.name = this.bucketItems.name;
        props.description = this.bucketItems.description;

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
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick = (e) => {
        this.setState({ target: e.target, show: !this.state.show });
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

    popoverBottom = (

        <Popover id="popover-positioned-scrolling-bottom" title="Item Tracker">
            <section>
                <Label
                    className='profile-title'
                    type='5'
                    label='Item name:'
                />
                <p>{this.props.name}</p>
                <Label
                    className='profile-title'
                    type='5'
                    label='Item description:'
                />
                <p>{this.props.description}</p>
            </section>
        </Popover>
    );

    buildBucketItems = () => {
        let gridItem = null;
        let { disabled } = this.state;
        this.bucketItems.map((val) => {
            gridItem = (
                <ButtonToolbar key={val.id} style={{"marginLeft":5}}>
                    <OverlayTrigger
                        trigger="click"
                        rootClose
                        placement="right"
                        overlay={this.popoverBottom}
                        container={this}
                    >
                        <Button
                            disabled={disabled}
                            type='submit'
                            key={val.id}
                            className='new-bucket-grid-item'
                            onClick={this.handleClick}
                        >
                            <p>{val.name}</p>
                        </Button>
                    </OverlayTrigger>
                </ButtonToolbar>
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