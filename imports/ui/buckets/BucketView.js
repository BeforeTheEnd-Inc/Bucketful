import React, {Component} from 'react';
import Menu from "../../components/MenuComponent";
import CheckBox from "../../components/CheckBoxComponent";

import '../css/BucketSheet.css';

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
    }

    render() {
        let gridItem = null;
        let gridItems = [];
        this.bucketItems.map((val) => {
            gridItem = (
                <button key={val.id} className='new-bucket-grid-item'>
                    <p>{val.name}</p>
                </button>
            );
            gridItems.push(gridItem);
        });
        return(
            <div>
                <Menu/>
                <div className='new-bucket-container'>
                    <div className='new-bucket-grid-box-area'>
                        <CheckBox
                            label='Completed'
                            className='checkbox'
                        />
                        <CheckBox
                            label='In Progress'
                            className='checkbox'
                        />
                    </div>
                    <div className='new-bucket-grid-container'>
                        {gridItems}
                    </div>
                </div>
            </div>
        );
    };
}