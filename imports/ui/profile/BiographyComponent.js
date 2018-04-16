import React, {Component} from 'react';
import '../css/ProfileBioSheet.css';
import Label from "../../components/LabelComponent";
import ModalLauncher from '../../components/ModalLauncher';
import TextArea from "../../components/TextAreaComponent";

export default class MiniBio extends Component {
    constructor(props) {
        super(props);

        this.className = props.className;
    }

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

                            {/*<input type='radio' id='choice1' className='gender' value='male'/>*/}
                            {/*<label htmlFor='choice1'>Male</label>*/}
                            {/*<input type='radio' id='choice2' className='gender' value='female'/>*/}
                            {/*<label htmlFor='choice2'>Female</label>*/}
                            {/*<input type='radio' id='choice3' className='gender' value='preferNo'/>*/}
                            {/*<label htmlFor='choice3'>Prefer not to disclose</label>*/}

                            <br/>
                            <button style={{ float: 'right' }}>Save</button>
                        </form>
                    </ModalLauncher>
                </section>
            </section>
        );
    }
}
