import React, {Component} from 'react';
import '../css/ProfileSheet.css';
import Label from '../../components/LabelComponent';

import ProfilePic from './ProfilePictureComponent';
import BannerPic from './BannerPictureComponent';

export default class Banner extends Component {

    constructor(props) {
        super(props);
        this.profileImage = props.profileImage;
        this.bannerImage = props.bannerImage;
        this.profileName = props.profileName;
        this.profileQuote = props.profileQuote;
    }


    render() {
        return (
                <BannerPic imageSource={this.bannerImage}>
                    <section className='section-area-left'>
                        <div>
                            <ProfilePic imageSource={this.profileImage}/>
                            {/*some sort of image repo accessor or something like that*/}
                            <Label
                                className='image-holder-label'
                                type='4'
                                label={this.profileName}
                            />
                        </div>
                    </section>

                    <section className='section-area-right'>
                        <div className='image-quote-container'>
                            <Label
                                className='image-holder-quote-label'
                                type='2'
                                label={this.profileQuote}
                            />
                        </div>
                    </section>
                </BannerPic>
        );
    }
}