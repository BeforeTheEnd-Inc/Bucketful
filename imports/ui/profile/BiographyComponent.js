import React, {Component} from 'react';
import '../css/ProfileBioSheet.css';
import Label from "../../components/LabelComponent";
import EditProfile from "./EditProfileModal";

export default class MiniBio extends Component {
    constructor(props) {
        super(props);

        this.className = props.className;

        this.gender = null;
    }

    handleSelect(e) {
        let buttons = ['male', 'female', 'preferNo'];
        for(let x = 0; x < buttons.length; x++) {
            const b = buttons[x];
            let button = document.getElementById(b);
            if (buttons[x] !== e.target.id) {
                button.checked = false;
            } else {
                this.gender = b;
            }
        }
    };

    render() {

        return (
            <section className='mini-bio-section'>
                <section className="bio-container">
                    <p>
                        This is where the biography will be. There shall
                        be an 'Edit' button in the bottom right hand of
                        this component that will allow the user to
                        update and change her/his biography at any time.
                    </p>
                    <Label
                        className='profile-title'
                        type='5'
                        label="Birthday: some-date"
                    />
                    <Label
                        className='profile-title'
                        type='5'
                        label='Hometown: somewhere usa'
                    />
                    <Label
                        className='profile-title'
                        type='5'
                        label='Gender: other'
                    />

                    <EditProfile/>
                </section>
            </section>
        );
    }
}