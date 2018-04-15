import React, {Component} from 'react';
import Label from "../../components/LabelComponent";
import Link from "../../components/LinkComponent";

export default class CurrentBucket extends Component {
    constructor(props) {
        super(props);

        this.flagPic = props.flagPic;
    }


    render() {
        return (
            <section id='section-bucket'>
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
                                    <Label
                                        className='bucket-label'
                                        type='4'
                                        label='Item name'
                                    />
                                    <Label
                                        className='bucket-label'
                                        type='4'
                                        label='Item description'
                                    />
                                    <Link
                                        className='profile-title'
                                        type='3'
                                        label='Click to edit current item!'
                                        msg='Redirecting to edit the current item...'
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
    }
}