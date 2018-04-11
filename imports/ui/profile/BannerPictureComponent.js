import React, {Component} from 'react';

import '../css/BannerPicSheet.css';
import Link from '../../components/LinkComponent'

export default class BannerPic extends Component {
    constructor(props) {
        super(props);
        this.bannerImage = props.imageSource;
    }

    handlePicChange(event) {
        let file = event.target.files[0];

        if (file === undefined) {
            return;
        }

        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            this.bannerImage = e.target.result;
            $('#bannerPic').attr("src",e.target.result);
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
            <section id= 'banner' className='section-area'>
                <input id='uploadBannerPic' type='file' accept='image/*' onChange={this.handlePicChange}/>
                <img src={this.bannerImage} id='bannerPic' onClick={this.handleClick}/>
                <button className='editButton' onClick={this.handleClick}>Edit</button>
                { this.props.children }
            </section>
        );
    }
}