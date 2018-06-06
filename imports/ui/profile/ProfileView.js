import React, {Component} from 'react';
import { Profiles } from '../../api/profiles';

import '../css/ProfileSheet.css';

import Label from '../../components/LabelComponent';
import ProfileBucket from "./ProfileBucketComponent";
import ProfilePic from './ProfilePictureComponent';
import BannerPic from "./BannerPictureComponent";
import MiniBio from "./BiographyComponent";
import Menu from "../../components/MenuComponent";

export default class ProfileComponent extends Component {
    constructor(props) {
        super(props);

        const userId = Meteor.userId();
        if (userId !== undefined && userId !== null) {

            // TODO: To delete
            const user = Profiles.find().fetch();

            // const collection = Profiles.find({'_id': userId});

            const key = '_id';
            const value = userId;
            const selector = {[key]: value};
            const collection = Profiles.find(selector);

            console.log(collection);

            collection.map(function (profile) {
                this.profileImage = profile.profileImage;
                this.bannerImage = profile.bannerImage;
                this.profileName = profile.firstname;
                this.profileQuote = profile.quote;
            });

        } else {

            this.profileImage = 'https://s3-eu-west-1.amazonaws.com/pcs01.photocase.com/c/cllutcux/ecnb16ej/photocaseecnb16ej3.jpg?1509355680';
            this.bannerImage = "http://www.nasa.gov/sites/default/files/thumbnails/image/14797031062_4cbe0f218f_o.jpg";
            this.profileName = 'Tom Norton';
            this.profileQuote = '"The best preparation for tomorrow is doing your best today" - H. Jackson Brown, Jr.';
        }
    }

    render() {
        return (
            <div>
                <Menu/>
                <section id='section'>
                    <BannerPic imageSource={this.bannerImage}>
                        <section className='section-area-upper-left'>
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

                        <section className='section-area-upper-right'>
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
                            <section>
                                <Label
                                    className='profile-title'
                                    type='3'
                                    label='Mini Bio'
                                />
                            </section>
                            <MiniBio />

                        </section>

                        {/* <!-- lower right  --> */}
                        <section className='section-area-lower-right'>
                            <section className='section-area-fin-item'>
                                <section>
                                    <Label
                                        className='profile-title'
                                        type='3'
                                        label='Completed Goals'
                                    />
                                </section>
                                <ProfileBucket
                                    numItems='6'
                                    isActive={false}
                                />
                            </section>
                        </section>

                    </section>

                </section>
            </div>
        );
    }
}