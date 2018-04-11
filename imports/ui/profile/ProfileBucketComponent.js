import React, {Component, Fragment} from 'react';
import Label from "../../components/LabelComponent";

import '../css/ProfileBucket.css';
import '../css/ImageAnimation.css';
import Link from "../../components/LinkComponent";
import Iterator from "../../../utils/Iterator";

export default class ProfileBucket extends Component {

    constructor(props) {
        super(props);

        this.numItems = props.numItems;
        this.isActive = props.isActive;

        this.num = parseInt(this.numItems);
        this.flagPic = 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Louisville%2C_Kentucky_%281934%E2%80%932003%29.svg';

    }

    getActiveItem() {
        return (

            <section id='section-bucket-current'>
                <section className='bucket-container-current'>
                    <div className='bucket-image'>
                        {/*<div id='home' className='grid'>*/}
                        <div className='flip-container' onTouchStart={() => {
                            this.classList.toggle('hover');
                        }}>
                            <div className='flipper'>
                                <div className='front'>
                                    <img src={this.flagPic} style={{height: 140, width: 386}}/>
                                </div>
                                <div className='back'>
                                    <Link
                                        className='profile-title'
                                        type='2'
                                        label='a label'
                                    />
                                </div>
                            </div>
                        </div>
                        {/*</div>*/}
                    </div>
                    <Label
                        className='bucket-label'
                        type='1'
                        label='label name'
                    />
                </section>
            </section>

        );
    };

    getFinishedItem() {
        return (

            <section id='section-bucket-finished'>
                <section className='bucket-container-finished'>
                    <div className='bucket-image'>
                        <div
                            className='flip-container'
                            onTouchStart={() => {
                                this.classList.toggle('hover');
                        }}>
                            <div className='flipper'>
                                <div className='front'>
                                    <img src={this.flagPic} style={{height: 140, width: 330}}/>
                                </div>
                                <div className='back'>
                                    <Link
                                        className='profile-title'
                                        type='2'
                                        label='a label'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Label
                        className='bucket-label'
                        type='1'
                        label='label name'
                    />
                </section>
            </section>

        );
    };


    render() {
        if (this.isActive) {
            return(this.getActiveItem());
        } else if (!this.isActive) {
            return(this.getFinishedItem());
        }
    }
}