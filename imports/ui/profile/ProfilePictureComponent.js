import React, {Component} from 'react';

import '../css/ProfilePicSheet.css';
import Image from "../image/ImageComponent";
import {profilePicUrl} from "../../../utils/ApplicationConstants";

// import ImageModel from './ImageModel.js';

export default class ProfilePic extends Component {
    constructor(props) {
        super(props);
        // Will pull data file from Mongo via ImageModel
        this.props.imgSrc = 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg';
    }

    render() {
        return (
            <div>
                <Image
                    inputId='upload'
                    className='image-holder'
                    imageId='profilePic'
                    imageSoutce={this.props.imgSrc}
                />
            </div>
        );
    }
}