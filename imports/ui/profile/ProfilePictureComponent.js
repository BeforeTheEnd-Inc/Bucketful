import React, {Component} from 'react';
import {Profiles} from '../../api/profiles';

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

        let fileReader = new FileReader();
        fileReader.onload = function (e) {
            this.profileImage = e.target.result;
            // Submit a profile image change schema
            $('#profilePic').attr("src",e.target.result);

            let image = {};
            image["image"] = e.target.result;
            Profiles.update({
                    _id: Meteor.userId() },
                {
                    $set: image
                }
            );
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
            </section>
        );
    }
}

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
}