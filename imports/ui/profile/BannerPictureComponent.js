import React, {Component} from 'react';

import '../css/BannerPicSheet.css';

// import ImageModel from './ImageModel.js';

export default class BannerPic extends Component {
    constructor(props) {
        super(props);
        this.bannerImage = props.imageSource;

        sectionStyle = {
            backgroundImage: `url(${this.bannerImage})`
        };
    }

    handlePicChange(event) {
        let file = event.target.files[0];

        if (file == undefined) {
            return;
        }

        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            this.bannerImage = e.target.result;
            sectionStyle = { backgroundImage: `url(${this.bannerImage})` };
            $('#banner').attr("style",sectionStyle)
            // $('#bannerPic').attr("src",e.target.result);
        };

        fileReader.readAsDataURL(file);
    }

    // When the image is clicked, this function is called to handle file input
    handleClick() {
        let input = document.querySelector('#uploadBannerPic');
        input.click();
    }

    render() {
        return (
            <section id= 'banner' className='section-area' style={sectionStyle} onClick={this.handleClick}>
                <input id='uploadBannerPic' type='file' accept='image/*' onChange={this.handlePicChange}/>
                { this.props.children }
            </section>
        );
    }
}