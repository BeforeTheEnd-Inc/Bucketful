import React, {Component} from 'react';
import {Profiles} from '../../api/profiles';
import ProfileBucket from './ProfileBucketComponent';
import ProfilePic from './ProfilePictureComponent';
import BannerPic from './BannerPictureComponent';
import MiniBio from './BiographyComponent';
import Label from '../../components/LabelComponent';
import Menu from '../../components/MenuComponent';

import '../css/ProfileSheet.css';


export default class ProfileComponent extends Component {
    constructor(props) {
        super(props);
    }

    // displayProfileFor = (id) => {
    //     if (id !== undefined) {
    //         const currentSession = Session.get(id);
    //         const collection = Meteor.connection._stores['profiles'];
    //         const miniBio = {
    //             miniBioSummary: ''
    //         }
    //     }
    // };

    render() {
        const userId = Meteor.userId();
        let profileName = '';
        let profileImage = '';
        let bannerImage = '';
        let profileQuote = '';

        if (userId) {
            const key = '_id';
            const selector = {[key]: userId};
            const collection = Profiles.find(selector);
            collection.map(function (profile) {
                profileName = profile.firstname + ' ' + profile.lastname;
                profileImage = profile.image;
                bannerImage = profile.bannerImage;
                profileQuote = profile.quote;
            })

        } else {
            // this.displayProfileFor(Meteor.default_connection._lastSessionId);

            profileName = 'Tom Norton';
            profileImage = 'https://s3-eu-west-1.amazonaws.com/pcs01.photocase.com/c/cllutcux/ecnb16ej/photocaseecnb16ej3.jpg?1509355680';
            bannerImage = 'http://www.nasa.gov/sites/default/files/thumbnails/image/14797031062_4cbe0f218f_o.jpg';
            profileQuote = '"The best preparation for tomorrow is doing your best today" - H. Jackson Brown, Jr.';
        }

        return (
            <div>
                <Menu/>
                <section id='section'>
                    <BannerPic id='bannerPic' imageSource={bannerImage}>
                        <section className='section-area-upper-left'>
                            <div>
                                <ProfilePic imageSource={profileImage}/>
                                {/*some sort of image repo accessor or something like that*/}
                                <Label
                                    className='image-holder-label'
                                    type='2'
                                    label={profileName}
                                />
                            </div>
                        </section>
                        <section className='section-area-upper-right'>
                            <Label
                                className='image-holder-quote-label'
                                type='2'
                                label={profileQuote}
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
                            <MiniBio/>
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
