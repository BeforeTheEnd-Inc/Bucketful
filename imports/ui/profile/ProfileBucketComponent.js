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

        let num = parseInt(this.numItems);

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
                                    {/*<div className='module'>*/}
                                    {/*<div className='one'/>*/}
                                    {/*</div>*/}
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
                                    {/*<div className='module'>*/}
                                    {/*<div className='one'/>*/}
                                    {/*</div>*/}
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