import React, {Component} from 'react';

import '../css/ProfilePicSheet.css';

// import ImageModel from './ImageModel.js';

export default class ProfilePic extends Component {
    constructor(props) {
        super(props);
        // Will pull data file from Mongo via ImageModel
        this.imgSrc = 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg';
    }

    handlePicChange(event) {
        let file = event.target.files[0];

        // Temporarily store image
        this.imgSrc = file.result;

        let image = document.getElementById('profilePic');
        let new_image = new Image();

        // Create the new image and add in parameters
        new_image.src = URL.createObjectURL(file);
        new_image.id = 'profilePic';
        new_image.className = 'image-holder';
        new_image.onclick = this.handleClick;

        // Replace old profile pic with new profile pic
        image.parentNode.insertBefore(new_image,image);
        image.parentNode.removeChild(image);
    }

    handleClick() {
        let input = document.getElementById('upload');
        input.click();
    }

    render() {
        return (
            <div>
                <input id='upload' type='file' accept='image/*' onChange={this.handlePicChange}/>
                <img src={this.imgSrc} id='profilePic' className='image-holder' onClick={this.handleClick}/>
            </div>
        );
    }
}