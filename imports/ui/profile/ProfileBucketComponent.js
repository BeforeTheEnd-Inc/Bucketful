import React, {Component} from 'react';
import Label from "../../components/LabelComponent";

import '../css/ProfileBucket.css';
import '../css/ImageAnimation.css';
import Link from "../../components/LinkComponent";
import CurrentBucket from "./CurrentBucketComponent";
import FinishedBucket from "./FinishedBucketIComponent";

export default class ProfileBucket extends Component {

    constructor(props) {
        super(props);

        this.numItems = props.numItems;
        this.isActive = props.isActive;

        this.flagPic = 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Chicago%2C_Illinois.svg'
    }

    render() {

        if (this.isActive) {
            this.num = parseInt(this.numItems);
            let items = [];
            for (let i = 0; i < this.num; i++) {
                items.push(
                    <CurrentBucket flagPic={this.flagPic} />
                );
            }
            return <div id='section-bucket-scroll'>{items}</div>;

        } else if (!this.isActive) {
            this.num = parseInt(this.numItems);
            let items = [];
            for (let i = 0; i < this.num; i++) {
                items.push(
                    <FinishedBucket flagPic={this.flagPic} />
                );
            }
            return <div id='section-bucket-scroll'>{items}</div>;
        }
    }
}