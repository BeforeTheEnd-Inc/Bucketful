import React, {Component} from 'react';
import Label from "../../components/LabelComponent";
import Link from "../../components/LinkComponent";

export default class FinishedBucket extends Component {
    constructor(props) {
        super(props);

        this.flagPic = props.flagPic;
    }

    render() {
        return (
            <section id='section-bucket'>
                <section className='profile-bucket-container-current'>
                    <div className='profile-bucket-image'>
                        <div
                            className='flip-container'
                            onTouchStart={() => {
                                this.classList.toggle('hover');
                            }}>
                            <div className='flipper'>
                                <div className='front'>
                                    <img src={this.flagPic} style={{height: 138, width: "inherit"}}/>
                                </div>
                                <div className='back'>
                                    <Link
                                        className='profile-bucket-link-finished'
                                        type='3'
                                        label='Relive this experience!!!'
                                        msg='Redirecting to your time-line...'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Label
                        className='profile-bucket-label'
                        type='4'
                        label='label name'
                    />
                </section>
            </section>

        );
    }
}