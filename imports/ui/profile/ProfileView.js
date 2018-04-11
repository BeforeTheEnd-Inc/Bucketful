import React, {Component} from 'react';

import '../css/ProfileSheet.css';

import Label from '../../components/LabelComponent';
import ProfileBucket from "./ProfileBucketComponent";
import ProfilePic from './ProfilePictureComponent';

import '../css/ProfileSheet.css';
import BannerPic from "./BannerPictureComponent";

import ProfileBanner from "./ProfileBannerComponent";

export default class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.profileImage = 'https://s3-eu-west-1.amazonaws.com/pcs01.photocase.com/c/cllutcux/ecnb16ej/photocaseecnb16ej3.jpg?1509355680';
        this.bannerImage = 'https://cdn.pixabay.com/photo/2016/01/15/23/54/iowa-1142688_1280.jpg';
        this.profileName = 'Tom Norton';
        this.profileQuote = '"The best preparation for tomorrow is doing your best today" - H. Jackson Brown, Jr.';
    }

    render() {
        return (
            <section id='section'>

                {/*<ProfileBanner*/}
                    {/*profileImage={this.profileImage}*/}
                    {/*bannerImage={this.bannerImage}*/}
                    {/*profileName={this.profileName}*/}
                    {/*profileQuote={this.profileQuote}*/}
                {/*/>*/}
                <BannerPic imageSource={this.bannerImage}>
                    <section className='section-area-left'>
                        <div>
                            <ProfilePic imageSource={this.profileImage}/>
                            {/*some sort of image repo accessor or something like that*/}
                            <Label
                                className='image-holder-label'
                                type='2'
                                label={this.profileName}
                            />
                        </div>
                    </section>

                    <section className='section-area-right'>
                        <Label
                            className='image-holder-quote-label'
                            type='2'
                            label={this.profileQuote}
                        />
                    </section>
                </BannerPic>

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
                            <ProfileBucket
                                numItems='4'
                                isActive={false}
                            />
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

                            <ProfileBucket
                                numActiveItems='4'
                                isActive={true}
                            />

                        </section>
                    </section>

                </section>

            </section>
        );
    }
}