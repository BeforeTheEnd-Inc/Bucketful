import React, {Component} from 'react';
import '../css/ProfileSheet.css';
import Label from '../../components/LabelComponent';

import ProfilePic from './ProfilePictureComponent';

export default class ProfileComponent extends Component {

    constructor(props) {
        super(props);
        this.imgSrc = 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg';
    }


    render() {
        return (
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

                {/*
                    //This should contain a user imageHolder
                    //This should contain a user label
        `           //This should contain a user text area label
                */}
            </section>
        );
    }
}