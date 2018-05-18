import React, {Component} from 'react';
import '../css/ProfileBioSheet.css';
import Label from "../../components/LabelComponent";
import ModalLauncher from '../../components/ModalLauncher';
import TextArea from "../../components/TextAreaComponent";
import RadioButton from "../../components/RadioButtonComponent";

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

                    <ModalLauncher buttonLabel='Edit'>
                        <form>
                            <br/><br/>
                            <Label
                                type='5'
                                label='Write something about yourself!'
                            />
                            <TextArea
                                cols='300'
                            />
                            <Label
                                type='5'
                                label='Birth date'
                            />
                            <input
                                type='date'
                                style={{
                                    width: '316px'
                                }}
                            />
                            <Label
                                type='5'
                                label='Hometown'
                            />
                            <input
                                type='text'
                                style={{
                                    width: '316px'
                                }}
                            />
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
                            <button style={{ float: 'right' }}>Save</button>
                        </form>
                    </ModalLauncher>
                </section>
            </section>
        );
    }
}