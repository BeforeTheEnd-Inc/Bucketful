import React, {Component} from 'react';

import '../css/ProfilePicSheet.css';
import Image from "../image/ImageComponent";

export default class ProfilePic extends Component {
    constructor(props) {
        super(props);
        this.profileImage = props.imageSource;
    }

    render() {
        return (
            <section>
                <Image
                    inputId='uploadProfilePic'
                    className='image-holder'
                    imageId='profilePic'
                    imageSource={this.profileImage}
                />
            </section>
        );
    }
}