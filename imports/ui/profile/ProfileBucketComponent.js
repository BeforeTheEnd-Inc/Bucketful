import React, {Component} from 'react';
import Label from "../../components/LabelComponent";

import '../css/ProfileBucket.css';
import '../css/ImageAnimation.css';
import Link from "../../components/LinkComponent";

export default class ProfileBucket extends Component {

    constructor(props) {
        super(props);

        this.numItems = props.numItems;
        this.isActive = props.isActive;

        this.flagPic = 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Chicago%2C_Illinois.svg'
    }

    getActiveItem() {
        return (
            <section id='section-bucket-current'>
                <section className='bucket-container-current'>
                    <div className='bucket-image'>
                        <div className='flip-container' onTouchStart={() => {
                            this.classList.toggle('hover');
                        }}>
                            <div className='flipper'>
                                <div className='front'>
                                    <img src={this.flagPic} style={{height: 138, width: 386}}/>
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
                                    <img src={this.flagPic} style={{height: 138, width: 330}}/>
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
            this.num = parseInt(this.numItems);
            let items = [];
            for (let i = 0; i < this.num; i++) {
                items.push(this.getActiveItem());
            }
            return <div>{items}</div>;

        } else if (!this.isActive) {
            this.num = parseInt(this.numItems);
            let items = [];
            for (let i = 0; i < this.num; i++) {
                items.push(this.getFinishedItem());
            }
            return <div>{items}</div>;
        }
    }
}