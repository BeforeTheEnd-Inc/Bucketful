import React, {Component} from 'react';
import '../css/ProfileBioSheet.css';
import Label from "../../components/LabelComponent";
import ModalLauncher from '../../components/ModalLauncher';
import TextArea from "../../components/TextAreaComponent";
import RadioButton from "../../components/RadioButtonComponent";

export default class MiniBio extends Component {
    constructor(props) {
        super(props);

        // User profile information
        this.bio = "This is where the biography will be. There shall " +
            "be an 'Edit' button in the bottom right hand of this component " +
            "that will allow the user to update and change her/his biography " +
            "at any time."; //props.bio;
        this.birthdate = props.birthdate;
        this.hometown = props.hometown;
        this.gender = props.gender;

        this.clickedGender = null;
    }

    handleSelect(e) {
        let buttons = ['male', 'female', 'preferNo'];
        for(let x = 0; x < buttons.length; x++) {
            const b = buttons[x];
            let button = document.getElementById(b);
            if (buttons[x] !== e.target.id) {
                button.checked = false;
            } else {
                this.clickedGender = b;
            }
        }
    };

    handleSave() {
        let bio = $("#minibio")[0].value;
        let birthdate = $("#birthdate")[0].value;
        let hometown = $("#hometown")[0].value;

        if (bio !== "") {
            this.bio = bio;
            $('#bioText').text(bio);
        }

        if (birthdate !== "") {
            this.birthdate = birthdate;
        }

        if (hometown !== "") {
            this.hometown = hometown;
        }

        if (this.clickedGender !== undefined
            && this.clickedGender !== null) {
            this.gender = this.clickedGender;
        }
    };

    render() {

        return (
            <section className='mini-bio-section'>
                <section className="bio-container">
                    <p id='bioText'>{this.bio}</p>
                    {/*<Label*/}
                    {/*className='profile-title'*/}
                    {/*type='5'*/}
                    {/*label='somewhere somewhere somewhere'*/}
                    {/*/>*/}
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

                    {/*Edit the mini bio*/}
                    <ModalLauncher
                        buttonLabel='Edit'>
                        <form>
                            <br/><br/>

                            {/*Bio section*/}
                            <Label
                                type='5'
                                label='Write something about yourself!'
                            />
                            <TextArea
                                id={'minibio'}
                                cols='300'
                            />

                            {/*Birthday section*/}
                            <Label
                                type='5'
                                label='Birth date'
                            />
                            <input
                                id={'birthdate'}
                                type='date'
                                style={{
                                    width: '316px'
                                }}
                            />

                            {/*Hometown section*/}
                            <Label
                                type='5'
                                label='Hometown'
                            />
                            <input
                                id='hometown'
                                type='text'
                                style={{
                                    width: '316px'
                                }}
                            />

                            {/*Gender section*/}
                            <Label
                                type='5'
                                label='Gender'
                            />
                            <RadioButton
                                type='radio'
                                id='male'
                                value='male'
                                label='Male'
                                onChange={this.handleSelect}
                            />
                            <RadioButton
                                type='radio'
                                id='female'
                                value='female'
                                label='Female'
                                onChange={this.handleSelect}
                            />
                            <RadioButton
                                type='radio'
                                id='preferNo'
                                value='preferNo'
                                label='Prefer not to disclose'
                                onChange={this.handleSelect}
                            />

                            <br/>
                            {/*Save edited bio*/}
                            <button
                                style={{
                                    float: 'right'
                                }}
                                onClick={this.handleSave}
                            >
                                {/*Button text*/}
                                Save
                            </button>

                        </form>
                    </ModalLauncher>
                </section>
            </section>
        );
    }
}