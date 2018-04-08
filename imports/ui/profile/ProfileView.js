import React, {Component} from 'react';

import Label from '../../components/LabelComponent';
import ProfileBucket from "./ProfileBucketComponent";
import ProfilePic from './ProfilePictureComponent';

import '../css/ProfileSheet.css';

export default class ProfileComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id='section'>

                <section className='section-area'>

                    <section className='section-area-left'>
                        <div className='image-container'>
                            <ProfilePic/>
                            {/*some sort of image repo accessor or something like that*/}

                            <Label
                                className='image-holder-label'
                                type='4'
                                label='something else interesting'
                            />
                        </div>
                    </section>

                    <section className='section-area-right'>
                        <div className='image-quote-container'>
                            <Label
                                className='image-holder-quote-label'
                                type='2'
                                label='something more interesting than what the name is'
                            />
                        </div>
                    </section>
                </section>


                {/*<!--lower part of the page -->*/}

                <section className='section-area-lower'>
                    {/*<!--lower left-->*/}
                    <section className='section-area-lower-left'>
                        <section className='mini-bio-section'>
                            <div>
                                <Label
                                    className='profile-title'
                                    type='3'
                                    label='Mini Bio'
                                />
                            </div>
                            {/*
                                Will need to fetch the below items as well and create a
                                new bucket for each.
                            */}
                            <section className="bio-container">
                                <Label
                                    className='profile-title'
                                    type='5'
                                    label='somewhere somewhere somewhere'
                                />
                                <Label
                                    className='profile-title'
                                    type='5'
                                    label="Birthday: some-date"
                                />
                                <Label
                                    className='profile-title'
                                    type='5'
                                    label='Hometown: somewhere usa'
                                />
                                <Label
                                    className='profile-title'
                                    type='5'
                                    label='Gender: other'
                                />
                            </section>
                        </section>
                        <section className='section-area-fin-item'>
                            <ProfileBucket className='bucket-container-finished'/>
                        </section>
                    </section>

                    {/*// <!-- lower right  -->*/}
                    <section className='section-area-lower-right'>
                        <section>
                            <section>
                                <Label
                                    className='profile-title'
                                    type='3'
                                    label='Current Goals'
                                />
                            </section>
                            {/*
                                Will need to fetch active items and create a
                                new bucket for each.
                            */}

                            <ProfileBucket className='bucket-container-current'/>
                            <ProfileBucket className='bucket-container-current'/>
                            <ProfileBucket className='bucket-container-current'/>
                            <ProfileBucket className='bucket-container-current'/>
                        </section>
                    </section>

                </section>

            </section>
        );
    }
}