import React, {Component} from 'react';
import Label from "../../components/LabelComponent";

import '../css/ProfileBucket.css';
import '../css/ImageAnimation.css';
import Link from "../../components/LinkComponent";

export default class ProfileBucket extends Component {
    constructor(props) {
        super(props);

        this.props.className = props.className;
    }

    render() {
        return (
            <section id='section-bucket'>
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
    }
}