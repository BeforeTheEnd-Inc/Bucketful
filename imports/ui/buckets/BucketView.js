import React, {Component} from 'react';

import '../css/BucketSheet.css';

import CheckBox from "../../components/CheckBoxComponent";
import Label from "../../components/LabelComponent";

export default class BucketView extends Component {
    constructor(props) {
        super(props);
        //Test data
        this.bucketItems = props.bucketItems = [
            {id: 'one', name: 'Camping', isActive: true},
            {id: 'two', name: 'Skydiving', isActive: false},
            {id: 'three', name: 'Safari', isActive: false},
            {id: 'four', name: 'Liverpool v. Man U', isActive: false},
            {id: 'five', name: 'Packers v. Bears', isActive: true},
            {id: 'six', name: 'Go Glamping', isActive: false},
            {id: 'seven', name: 'Retire Early', isActive: true},
            {id: 'eight', name: 'Own a Farm', isActive: true},
            {id: 'nine', name: 'Become a parent', isActive: false}
        ];

    }

    //TODO: Every item bucket item that's parsed in the bucket list has a grid coordinate.
    //TODO: i.e. grid-column: 2/2 grid-row: 1; This coordinate corresponds to new-bucket-grid-item-1
    //TODO: The css defines the variables and the css class the corresponds to it
    //TODO: The issue here is that style is null, I've tried several different methods to get it to work but this is the more logical approach.
    //TODO: There is no need to use any additional frameworks, just need to get the css class
    //NOTE: Obviously, this will need to go after the class has been defined.
    //     let style = document.getElementsByClassName('button.new-bucket-grid-item');
    //     let colNum = parseInt(htmlStyles.getPropertyValue("--col-num"));
    //     console.log(colNum);
    //     let colPos = parseInt(htmlStyles.getPropertyValue("--col-pos"));
    //     console.log(colPos);
    //     let rowNum = parseInt(htmlStyles.getPropertyValue("--row-num"));
    //     console.log(rowNum);
    //
    //     if (rowNum === 1) {
    //         rowNum += 1;
    //         document.documentElement.style.setProperty("--row-num", rowNum);
    //     } else if(rowNum === 2) {
    //         rowNum += 1;
    //         document.documentElement.style.setProperty("--row-num", rowNum);
    //     } else if (rowNum === 3) {
    //         rowNum = 1;
    //         document.documentElement.style.setProperty("--row-num", rowNum);
    //     }
    //
    //     if (colNum === 2 && colPos === 2) {
    //         colNum += 1;
    //         colPos += 1;
    //         document.documentElement.style.setProperty("--col-num", colNum);
    //         document.documentElement.style.setProperty("--col-pos", colPos);
    //     } else if (colNum === 3 && colPos === 3) {
    //         colNum += 1;
    //         colPos += 1;
    //         document.documentElement.style.setProperty("--col-num", colNum);
    //         document.documentElement.style.setProperty("--col-pos", colPos);
    //     } else if (colNum === 4 && colPos === 4) {
    //         colNum = 2;
    //         colPos = 2;
    //         document.documentElement.style.setProperty("--col-num", colNum);
    //         document.documentElement.style.setProperty("--col-pos", colPos);
    //     }

    //TODO: Nothing needs to happen to the code here.  Just uncomment.
    // renderBucketItem = () => {
    //     this.bucketItems.map(val => {
    //         if (val.isActive) {
    //             const active = (
    //                 <button key={val.id} className='new-bucket-grid-item'>
    //                     <p>{val.name}</p>
    //                 </button>
    //
    //             );
    //     return (active);
    // } else {
    //     const notActive = (
    //         <button key={val.id} className='new-bucket-grid-item'>
    //             <p>{val.name}</p>
    //         </button>
    //     );
    //
    //    return (notActive);
    //         }
    //     });
    // };

    render() {
        return(
            <section>
                <section className='new-bucket-grid-container'>

                    <section className='new-bucket-grid-box-area'>
                        <Label
                            className='profile-bucket-label'
                            type='5'
                            label='Toggle Bucket items...'
                        />
                        <CheckBox
                            label='Completed'
                            className='checkbox'
                        />
                        <CheckBox
                            label='In Progress'
                            className='checkbox'
                        />
                    </section>


                    {/*OnClick go to the bucket item*/}
                    <button className='new-bucket-grid-item-1'>
                        {/*The bucket name*/}
                        <p>hi</p>
                    </button>
                    <button className='new-bucket-grid-item-2'>
                        <p>hi</p>
                    </button>
                    <button className='new-bucket-grid-item-3'>
                        <p>hi</p>
                    </button>
                    <button className='new-bucket-grid-item-4'>
                        <p>hi</p>
                    </button>
                    <button className='new-bucket-grid-item-5'>
                        <p>hi</p>
                    </button>
                    <button className='new-bucket-grid-item-6'>
                        <p>hi</p>
                    </button>
                    <button className='new-bucket-grid-item-7'>
                        <p>hi</p>
                    </button>
                    <button className='new-bucket-grid-item-8'>
                        <p>hi</p>
                    </button>
                    <button className='new-bucket-grid-item-9'>
                        <p>hi</p>
                    </button>

                </section>
                {/*Uncomment to render the buckets*/}
                {/*<section>{this.renderBucketItem()}</section>*/}
            </section>
        );
    }
}