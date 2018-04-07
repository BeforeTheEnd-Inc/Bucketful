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

        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            this.imgSrc = e.target.result;
            $('#profilePic').attr("src",e.target.result);
        };

        fileReader.readAsDataURL(file);
    }

    handleClick() {
        let input = document.querySelector('#upload');
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