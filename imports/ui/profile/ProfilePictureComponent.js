import React, {Component} from 'react';

import '../css/ProfilePicSheet.css';
import Image from "../image/ImageComponent";
import {profilePicUrl} from "../../../utils/ApplicationConstants";

// import ImageModel from './ImageModel.js';

export default class ProfilePic extends Component {
    constructor(props) {
        super(props);
        this.profileImage = props.imageSource;
    }

    handlePicChange(event) {
        let file = event.target.files[0];

        if (file === undefined) {
            return;
        }

        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            this.profileImage = e.target.result;
            // Submit a profile image change schema
            $('#profilePic').attr("src",e.target.result);
        };

        fileReader.readAsDataURL(file);
    }

    // When the image is clicked, this function is called to handle file input
    handleClick() {
        let input = document.querySelector('#uploadProfilePic');
        input.click();
    }

    render() {
        return (
            <section>
                <input id='uploadProfilePic' type='file' accept='image/*' onChange={this.handlePicChange}/>
                <img src={this.profileImage} id='profilePic' className='image-holder' onClick={this.handleClick}/>
                {/*<Image*/}
                    {/*inputId='uploadProfilePic'*/}
                    {/*className='image-holder'*/}
                    {/*imageId='profilePic'*/}
                    {/*imageSource={this.profileImage}*/}
                {/*/>*/}
            </section>
        );
    }
}